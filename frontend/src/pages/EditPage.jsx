import { useParams, useNavigate, Link } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import NoteForm from "../components/NoteForm";
import { ArrowLeftIcon, Moon, Sun } from "lucide-react";
import api from "../lib/axios";
import { useTheme } from "../context/ThemeContext";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    api
      .get(`/notes/${id}`)
      .then((res) => setNoteToEdit(res.data))
      .catch(() => {
        toast.error("Note not found!");
        navigate("/");
      });
  }, [id, navigate]);

  const handleUpdate = ({ title, content }) => {
    api
      .put(`/notes/${id}`, { title, content })
      .then(() => {
        toast.success("Note updated successfully!");
        navigate("/");
      })
      .catch(() => toast.error("Failed to update note."));
  };

  return (
    <div className="bg-violet-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 max-w-2xl mx-auto p-4 rounded shadow transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-300 hover:underline transition-colors"
        >
          <ArrowLeftIcon className="size-5" />
          <span className="hidden sm:inline">Back to Home</span>
        </Link>
        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">
          Edit Note
        </h3>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-violet-400 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <Moon className="size-5 text-gray-800" />
          ) : (
            <Sun className="size-5 text-yellow-300" />
          )}
        </button>
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
