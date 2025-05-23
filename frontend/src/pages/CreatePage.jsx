import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import toast from "react-hot-toast";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Note created:", { title, content });
    const newNote = { title, content, id: Date.now() };

    // Fetch existing notes from localStorage
    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    // Add new note to the list
    const updatedNotes = [newNote, ...existingNotes];
    // Save back to localStorage
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    setTitle("");
    setContent("");

    toast.success("Note created successfully!");
    navigate("/");
  };

  return (
    <div className="bg-violet-300 max-w-2xl mx-auto p-4 rounded shadow">
      <div className=" flex items-center justify-between mb-4">
        <Link
          to={"/"}
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ArrowLeftIcon className="size-5" />
          <span className="hidden sm:inline">Back to Home Page</span>
        </Link>
        <h3 className="text-2xl font-bold  text-blue-700">Create New Note</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded h-40"
          required
        />
        <button
          type="submit"
          className="bg-violet-500 text-white py-2 px-4 rounded hover:bg-violet-600"
        >
          Save Note
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
