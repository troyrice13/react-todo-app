import React, { useState } from "react";

export default function TodoCard({ todo, onComplete, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.description)


    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleSave = () => {
        if (editText.trim()) {
            onEdit(todo.id, editText);
            setIsEditing(false);
        } else {
            alert('Todo description cannot be empty.');
        }
    }

    return (
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 justify-center sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <div className="text-center space-y-2">
                {isEditing ? (
                    <input
                    value={editText}
                    onChange={(e) => 
                        setEditText(e.target.value)
                    }
                    className="bg-gray-50 border border-blue-500 mr-2 rounded-lg px-5 py-1.5"
                    />
                ) : (
                    <p className={`text-lg font-semibold ${todo.completed ? "text-gray-400 line-through" : "text-black"}`}>
                    {todo.description}
                    </p>
                )}
                
                <span className="flex justify-between">
                    <button
                        className={`px-4 py-1 text-sm font-semibold rounded-full border mr-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                            todo.completed
                                ? "text-gray-600 border-gray-200 hover:bg-gray-600 hover:text-white focus:ring-gray-600"
                                : "text-green-600 border-green-200 hover:bg-green-600 hover:text-white focus:ring-green-600"
                        }`}
                        onClick={onComplete}
                    >
                        {todo.completed ? "Completed" : "Complete"}
                    </button>
                    <button
                        className="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                        onClick={onDelete}
                    >
                        Remove
                    </button>
                    {isEditing ? (
                        <button
                            className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ml-2"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            className="px-4 py-1 text-sm text-yellow-600 font-semibold rounded-full border border-yellow-200 hover:text-white hover:bg-yellow-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 ml-2"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                    )}
                </span>
            </div>
        </div>
    );
}
