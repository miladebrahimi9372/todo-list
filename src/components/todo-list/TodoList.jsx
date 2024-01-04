import React, { useState } from 'react'
import TodoListItem from './todo-list-item/TodoListItem'

let todoId = 0
const TodoList = () => {
 const [todoList, setTodoList] = useState([])
 const [todoTitle, setTodoTitle] = useState('')

 const addTodo = () => {
  todoTitle &&
   setTodoList((preState) => [
    ...preState,
    {
     id: ++todoId,
     title: todoTitle,
     isComplete: false
    }
   ])
  setTodoTitle('')
 }

 const onChangeInputHandler = (e) => {
  setTodoTitle(e.target.value)
 }

 return (
  <div className="p-5 flex flex-col items-center">
   <div className="flex justify-center gap-2">
    <input
     value={todoTitle}
     type="text"
     onChange={onChangeInputHandler}
     placeholder="Enter todo"
     className="bg-gray-50 rounded-md border border-gray-300 p-1"
     onKeyDown={(e) => {
      e.which === 13 && addTodo()
     }}
    />

    <button
     className="bg-blue-500 text-white py-1 px-2 rounded-md border"
     onClick={addTodo}
    >
     Add ToDo
    </button>
   </div>
   <div className="border border-b-gray-300 my-3 " />

   <div className=" w-96 flex flex-col gap-1">
    {todoList.map((todo) => (
     <TodoListItem item={todo} todoList={todoList} setTodoList={setTodoList} />
    ))}
   </div>
  </div>
 )
}

export default TodoList
