import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router";
import NoteForm from "../components/NoteForm";
import { ArrowLeftIcon } from "lucide-react";
import api from "../lib/axios";

const CreatePage = () => {
  const navigate = useNavigate();

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
    <div className="bg-violet-300 max-w-2xl mx-auto p-4 rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
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
