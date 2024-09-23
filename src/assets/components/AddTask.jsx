import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogPortal,
  DialogOverlay,
} from "@radix-ui/react-dialog";
import { Plus, X } from "lucide-react";
import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (!title.trim() || !description.trim()) {
      return alert("Preencha o título e a descrição da tarefa.");
    }
    onAddTaskSubmit(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-600">
          <Plus />
          Adicionar Tarefa
        </button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className="inset-0 fixed bg-black/50">
          <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6 bg-slate-200 rounded-md shadow">
            <DialogTitle className="text-xl font-bold mb-4">
              Adicionar Nova Tarefa
            </DialogTitle>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Digite o título da tarefa"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <hr className="my-2 border-gray-300" />
              <textarea
                placeholder="Escreva sua tarefa..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none h-32"
                rows="4"
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={handleAddTask}
                className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-600"
              >
                Adicionar
              </button>
              <DialogClose asChild>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                  <X />
                  Fechar
                </button>
              </DialogClose>
            </div>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
}

export default AddTask;
