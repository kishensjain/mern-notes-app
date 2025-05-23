import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this note?");
    if (!confirmed) return;

    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  if (notes.length === 0) {
    return <p className="text-center text-gray-600 mt-4">No notes yet. Create your first one!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default NotesList;