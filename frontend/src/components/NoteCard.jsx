import React from "react";
import { Trash2Icon, PencilIcon } from "lucide-react";
import { useNavigate } from "react-router";

const NoteCard = ({ note, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${note._id || note.id}`); // depending on your backend ID
  };

  const handleDelete = () => {
    onDelete(note._id || note.id);
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded p-4 flex flex-col justify-between transition-colors duration-300">
      <div>
        <h3 className="text-xl font-bold text-violet-600 dark:text-violet-400 mb-2">{note.title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{note.content}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-4 text-blue-500">
          <PencilIcon
            className="cursor-pointer hover:text-blue-700"
            onClick={handleEdit}
          />
          <Trash2Icon
            className="cursor-pointer hover:text-red-600"
            onClick={handleDelete}
          />
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {note.updatedAt && note.updatedAt !== note.createdAt
            ? `Edited: ${new Date(note.updatedAt).toLocaleDateString()}`
            : `Created: ${new Date(
                note.createdAt || note.id
              ).toLocaleDateString()}`}
        </span>
      </div>
    </div>
  );
};

export default NoteCard;
