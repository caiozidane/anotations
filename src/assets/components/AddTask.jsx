import { Plus } from "lucide-react";
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
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col overflow-hidden">
      <div className="p-2">
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
      <div className="p-2 text-end">
        <button
          onClick={handleAddTask}
          className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-600"
        >
          <Plus />
        </button>
      </div>
    </div>
  );
}

export default AddTask;
