import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import api from "../lib/axios";
import { toast } from "react-hot-toast";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
      } catch (error) {
        console.log("Error fetching notes", error.response);
        toast.error("Failed to load notes");
      }
    };
    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this note?");
    if (!confirmed) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes(prev => prev.filter(note => note._id !== id));
      toast.success("Note deleted");
    } catch (error) {
      console.error("Delete failed", error);
      toast.error("Failed to delete note");
    }
  };

  if (notes.length === 0) {
    return <p className="text-center text-gray-600 mt-4">No notes yet. Create your first one!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default NotesList;
