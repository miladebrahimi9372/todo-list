import React from 'react'

const TodoListItem = (props) => {
 const {
  item: { id, title, isComplete },
  todoList,
  setTodoList
 } = props

 const deleteTodo = (todoId) => {
  const filteredTodoList = todoList.filter(({ id }) => id !== todoId)
  setTodoList(filteredTodoList)
 }

 const toggleChecked = (todoId) => {
  const todo = todoList.find((todo) => todo.id === todoId)
  if (todo) {
   todo.isComplete = !todo.isComplete
   setTodoList([...todoList])
  }
 }
 return (
  <div
   key={id}
   className="border border-gray-400 bg-gray-100 rounded-md p-2 flex justify-between items-center"
  >
   <button
    className="text-red-500"
    onClick={() => {
     deleteTodo(id)
    }}
   >
    Delete
   </button>
   <div className="flex items-center">
    <span className={`${isComplete ? 'line-through' : ''}`}>{title}</span>
    <input
     type="checkbox"
     name=""
     id={id}
     className="ml-1"
     checked={isComplete ? true : false}
     onChange={() => {
      toggleChecked(id)
     }}
    />
   </div>
  </div>
 )
}

export default TodoListItem
