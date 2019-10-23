import React from 'react';
import todos from '../../container/TodoList/data';
import { Card, List, Button } from '@material-ui/core';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import CheckSharpIcon from '@material-ui/icons/CheckSharp';
class App extends React.Component {
  state = {
    todos: todos,
    createTodoText: '',
    isUpdate: false,
    updateTodoText: '',
    updateTodo: {}
  };
  _createTodoText = e => {
    this.setState({
      createTodoText: e.target.value
    });
  };
  _createTodo = () => {
    let todo = {
      id: Date.now(),
      text: this.state.createTodoText,
      completion: false
    };
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
      createTodoText: ''
    });
  };
  _showTodoText = todo => {
    if (todo.completion) {
      return <span onClick={() => this._toggleTodo(todo)}>{todo.text}</span>;
    }
    return <span onClick={() => this._toggleTodo(todo)}>{todo.text}</span>;
  };
  _toggleTodo = td => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === td.id) {
        return {
          id: todo.id,
          text: todo.text,
          completion: !todo.completion
        };
      } else {
        return todo;
      }
    });

    this.setState({
      todos
    });
  };
  _updateTodoText = e => {
    this.setState({
      updateTodoText: e.target.value
    });
  };
  _updateTodo = td => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === td.id) {
        return {
          id: todo.id,
          completion: todo.completion,
          text: this.state.updateTodoText
        };
      } else {
        return todo;
      }
    });
    this.setState({ todos, isUpdate: false });
  };
  _deleteTodo = td => {
    var todos = this.state.todos.filter(todo => todo.id !== td.id);
    this.setState({ todos });
  };
  _createBlock = () => {
    return (
      <div>
        <div>
          <h2>Create a todo</h2>
        </div>
        <div>
          <input
            type="text"
            value={this.state.createTodoText}
            onChange={this._createTodoText}
          />
          <Button onClick={this._createTodo}>
            <CheckSharpIcon />
          </Button>
        </div>
      </div>
    );
  };
  _updateBlock = todo => {
    return (
      <div>
        <div>
          <h2>Update your todo</h2>
        </div>
        <div>
          <input
            type="text"
            value={this.state.updateTodoText}
            onChange={this._updateTodoText}
          />
          <Button onClick={() => this._updateTodo(todo)}>
            <CheckSharpIcon />
          </Button>
        </div>
      </div>
    );
  };
  _updateStart = todo => {
    this.setState({
      isUpdate: true,
      updateTodo: todo,
      updateTodoText: todo.text
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.Card}>
        <List className={classes.ListCard}>
          {this.state.todos.map(todo => {
            return (
              <li key={todo.id}>
                {this._showTodoText(todo)}
                <div>
                  <Button onClick={() => this._updateStart(todo)}>
                    <EditRoundedIcon />
                  </Button>
                  <Button onClick={() => this._deleteTodo(todo)}>
                    <ClearRoundedIcon />
                  </Button>
                </div>
              </li>
            );
          })}

          {this.state.isUpdate
            ? this._updateBlock(this.state.updateTodo)
            : null}
          {this._createBlock()}
        </List>
      </Card>
    );
  }
}

export default App;
