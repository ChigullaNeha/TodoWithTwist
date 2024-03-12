import {useState} from 'react'
import {GoPencil} from 'react-icons/go'
import {RxCross2} from 'react-icons/rx'
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo, toggleIsUpdated} = props
  const {todo, id, isUpdated} = todoDetails
  const [count, setCount] = useState(0)
  const deleteTodoItem = () => {
    onDeleteTodo(id)
  }
  const updateTodo = () => {
    toggleIsUpdated(id)
    setCount(prevState => prevState + 1)
  }

  return (
    <div className="todo-item">
      <p className="todo">
        {todo} (Updated {count} times)
      </p>
      <div>
        {/* eslint-disable-next-line */}
        <button type="button" className="update-btn" onClick={updateTodo}>
          <GoPencil className="update-icon" />
        </button>
        {/* eslint-disable-next-line */}
        <button type="button" onClick={deleteTodoItem} className="delete-btn">
          <RxCross2 className="delete-icon" />
        </button>
      </div>
    </div>
  )
}
export default TodoItem
