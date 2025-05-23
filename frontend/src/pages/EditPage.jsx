import { useParams, useNavigate, Link } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import NoteForm from "../components/NoteForm";
import { ArrowLeftIcon } from "lucide-react";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const foundNote = notes.find((note) => note.id === Number(id));
    if (!foundNote) {
      toast.error("Note not found!");
      navigate("/");
    } else {
      setNoteToEdit(foundNote);
    }
  }, [id, navigate]);

  const handleUpdate = ({ title, content }) => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = notes.map((note) =>
      note.id === Number(id)
        ? { ...note, title, content, updatedAt: Date.now() }
        : note
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
      {noteToEdit && (
        <NoteForm
          initialNote={noteToEdit}
          onSubmit={handleUpdate}
          buttonLabel="Update Note"
        />
      )}
    </div>
  );
};

export default EditPage;
