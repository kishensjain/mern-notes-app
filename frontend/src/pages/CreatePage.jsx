import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router";
import NoteForm from "../components/NoteForm";
import { ArrowLeftIcon, Moon, Sun } from "lucide-react";
import api from "../lib/axios";
import { useTheme } from "../context/ThemeContext";

const CreatePage = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleCreate = async ({ title, content }) => {
    try {
      await api.post("/notes", {
        title,
        content,
      });
      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
      toast.error("Failed to create note");
    }
  };

  return (
    <div className="bg-violet-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 max-w-2xl mx-auto p-4 rounded shadow transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ArrowLeftIcon className="size-5" />
          <span className="hidden sm:inline">Back to Home</span>
        </Link>
        <h3 className="text-2xl font-bold text-blue-700">Create Note</h3>
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
      <NoteForm onSubmit={handleCreate} buttonLabel="Create Note" />
    </div>
  );
};

export default CreatePage;
