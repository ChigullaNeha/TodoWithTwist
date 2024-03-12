import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

class Todos extends Component {
  state = {todosList: [], userInput: '', updateCount: 0}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddTodo = event => {
    const {userInput} = this.state
    event.preventDefault()
    const newTodo = {
      id: uuidv4(),
      todo: userInput,
      isUpdated: false,
    }
    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTodo],
      userInput: '',
    }))
  }

  toggleIsUpdated = id => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(eachTodo => {
        if (id === eachTodo.id) {
          return {...eachTodo, isUpdated: !eachTodo.isFavorite}
        }
        return eachTodo
      }),
    }))
  }

  onDeleteTodo = id => {
    const {todosList} = this.state
    this.setState({todosList: todosList.filter(eachTodo => eachTodo.id !== id)})
  }

  render() {
    const {userInput, todosList} = this.state
    return (
      <div className="container">
        <h1 className="heading">Day Goals</h1>
        <form onSubmit={this.onAddTodo}>
          <input
            type="text"
            value={userInput}
            onChange={this.onChangeUserInput}
            className="input-el"
          />
          <br />
          <button type="submit" className="btn">
            Add Todo
          </button>
        </form>
        <ul>
          {todosList.map(eachTodo => (
            <TodoItem
              todoDetails={eachTodo}
              key={eachTodo.id}
              onDeleteTodo={this.onDeleteTodo}
              toggleIsUpdated={this.toggleIsUpdated}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Todos
