# Todo List App

## Overview

This is a simple and interactive Todo List application that allows users to manage their daily tasks. The app provides functionality to add, edit, delete, and mark tasks as complete. Additionally, users can reorder tasks using drag-and-drop functionality. The application saves the task list in the browser's local storage, ensuring that the tasks persist even after the browser is closed or refreshed.

## Features

- **Add New Tasks:** Users can add new tasks to their todo list.
- **Edit Tasks:** Users can edit the description of existing tasks.
- **Mark Tasks as Complete:** Users can toggle the completion status of tasks.
- **Delete Tasks:** Users can remove tasks from the list.
- **Reorder Tasks:** Users can drag and drop tasks to reorder them.
- **Persistent Storage:** The application uses local storage to save tasks, ensuring data persistence across browser sessions.

## Technologies Used

- **React:** The entire application is built using React, a popular JavaScript library for building user interfaces.
- **React Hooks:** The app leverages React's useState and useEffect hooks to manage state and lifecycle events.
- **Drag and Drop:** The drag-and-drop functionality is implemented using the `@hello-pangea/dnd` library, allowing users to reorder tasks.
- **Local Storage:** The app uses the browser's local storage to persist tasks across sessions.
- **Tailwind CSS:** Basic styling is done using Tailwind CSS to create a clean and user-friendly interface.

## Usage

- Add a new task by typing into the input field and pressing "Enter" or clicking the "Add Todo" button.
- Edit an existing task by clicking the "Edit" button next to it, modifying the text, and then clicking "Save."
- Mark a task as complete by clicking the "Complete" button.
- Delete a task by clicking the "Remove" button.
- Drag and drop tasks to reorder them as you prefer.

## Project Structure

- `src/components/TodoList.jsx`: The main component that manages the todo list.
- `src/components/TodoCard.jsx`: A reusable component that represents an individual todo item.

## Future Enhancements

- Add a filtering option to view all, completed, or incomplete tasks.
- Implement user authentication to allow multiple users to manage their own todo lists.

## License

This project is open-source and available under the [MIT License](LICENSE).
# todo
