import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router";
import NoteForm from "../components/NoteForm";
import { ArrowLeftIcon } from "lucide-react";

const CreatePage = () => {
  const navigate = useNavigate();

  const handleCreate = ({ title, content }) => {
    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: Date.now(),
      updatedAt: null,
    };

    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));

    toast.success("Note created successfully!");
    navigate("/");
  };

  return (
    <div className="bg-violet-300 max-w-2xl mx-auto p-4 rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <Link to="/" className="flex items-center gap-2 text-blue-600 hover:underline">
          <ArrowLeftIcon className="size-5" />
          <span className="hidden sm:inline">Back to Home</span>
        </Link>
        <h3 className="text-2xl font-bold text-blue-700">Create Note</h3>
      </div>
      <NoteForm onSubmit={handleCreate} buttonLabel="Create Note" />
    </div>
  );
};

export default CreatePage;
