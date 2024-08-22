import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  return (
    <>
      <h1 className='text-4xl font-bold mb-6 font-roboto'>Todo App</h1>
      <TodoList />
    </>
  )
}

export default App
