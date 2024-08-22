import React, { useState, useEffect } from "react";
import TodoCard from "./TodoCard";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
    const [error, setError] = useState('')

    // Get from local storage
    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            try {
                const parsedTodos = JSON.parse(storedTodos);
                if (Array.isArray(parsedTodos)) {
                    // Filter out any null or invalid entries
                    setTodos(parsedTodos.filter(todo => todo && todo.id));
                }
            } catch (error) {
                console.error("Error parsing todos from local storage:", error);
            }
        }
    }, []);

    // Save to local storage
    useEffect(() => {
        if (todos.length > 0) {
        console.log('Saving todos to local storage:', todos)
        localStorage.setItem('todos', JSON.stringify(todos))
        }else {
            localStorage.setItem('todos', [])
        }
    }, [todos])

    const handleComplete = (id) => {
        setTodos(prevTodos => {
            const updatedTodos = prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
    
            const incompleteTodos = updatedTodos.filter(todo => !todo.completed);
            const completedTodos = updatedTodos.filter(todo => todo.completed);
    
            return [...incompleteTodos, ...completedTodos];
        });
    
        console.log(`Todo #${id} completed!`);
    };

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    const addTodo = (inputText) => {
        const newTodo = {
            id: Date.now(),
            description: inputText,
            completed: false
        };
        if (inputText) {
        setTodos([newTodo, ...todos]);
        setInputText('')
        setError('')
        } else {
            setError('Must enter a todo.')
        }
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => {
            return todo.id !== id
    }))
    }

    const handleEdit = (id, newDescription) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, description: newDescription } : todo
            )
        );
    };

    const handleOnDragEnd = (e) => {
        if(!e.destination) return;

        const items = Array.from(todos);
        const [reorderedItem] = items.splice(e.source.index, 1);
        items.splice(e.destination.index, 0, reorderedItem)

        setTodos(items)
    }

    
    return (
        <div>
            <div className="mb-6">
                <input
                    value={inputText}
                    type="text"
                    onChange={handleChange}
                    className="bg-gray-50 border border-blue-500 mr-2 rounded-lg px-5 py-1.5"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addTodo(inputText);
                        }
                    }}
                />
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg font-medium text-sm px-5 py-2.5" onClick={() => addTodo(inputText)}>
                    Add Todo
                </button>
                <br />
                {error && (
                    <div className="text-red-500 mt-2 font-bold">{error}</div>
                )}
            </div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                {todos.length > 0 ? (
                <Droppable droppableId="droppable-todos">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {todos.map((todo, index) => (
                                <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <TodoCard
                                                todo={todo}
                                                onComplete={() => handleComplete(todo.id)}
                                                onDelete={() => removeTodo(todo.id)}
                                                onEdit={(id, newDescription) => handleEdit(id, newDescription)}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                ) : (
                    <div className="text-center text-gray-500 mt-4">
                        No todos to display. Add a todo to get started!
                    </div>
                )}
            </DragDropContext>
        </div>
    );
}