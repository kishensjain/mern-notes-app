import React, { useState, useEffect, useRef } from "react";

const NoteForm = ({ initialNote, onSubmit, buttonLabel = "Save Note" }) => {
  const [title, setTitle] = useState(initialNote?.title || "");
  const [content, setContent] = useState(initialNote?.content || "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus(); // 2. Focus on mount
  }, []);

  useEffect(() => {
    if (initialNote) {
      setTitle(initialNote.title || "");
      setContent(initialNote.content || "");
    }
  }, [initialNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
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
        {buttonLabel}
      </button>
    </form>
  );
};

export default NoteForm;
