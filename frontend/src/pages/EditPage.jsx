import { useParams, useNavigate, Link } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import NoteForm from "../components/NoteForm";
import { ArrowLeftIcon } from "lucide-react";
import api from "../lib/axios.js";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
    <div className="bg-violet-300 max-w-2xl mx-auto p-4 rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
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
