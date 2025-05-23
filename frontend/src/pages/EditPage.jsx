import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import { toast } from "react-hot-toast";

const EditPage = () => {
  const { id } = useParams(); // note ID from URL
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const noteToEdit = notes.find((note) => note.id === Number(id));

    if (!noteToEdit) {
      toast.error("Note not found!");
      return navigate("/");
    }

    setTitle(noteToEdit.title);
    setContent(noteToEdit.content);
  }, [id, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedNote = { id: Number(id), title, content };
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = notes.map((note) =>
      note.id === Number(id) ? updatedNote : note
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    toast.success("Note updated successfully!");
    navigate("/");
  };

  return (
    <div className="bg-violet-300 max-w-2xl mx-auto p-4 rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <Link to="/" className="flex items-center gap-2 text-blue-600 hover:underline">
          <ArrowLeftIcon className="size-5" />
          <span className="hidden sm:inline">Back to Home</span>
        </Link>
        <h3 className="text-2xl font-bold text-blue-700">Edit Note</h3>
      </div>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-4"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded h-40 mb-4"
          required
        />
        <button
          type="submit"
          className="bg-violet-500 text-white py-2 px-4 rounded hover:bg-violet-600"
        >
          Update Note
        </button>
      </form>
    </div>
  );
};

export default EditPage;
