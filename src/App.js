import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }

        this.addTodo = this.addTodo.bind(this)
    }

    addTodo(event) {
        let updated = this.state.todos.slice()
        updated.push({ name: event })
        this.setState({ todos: updated })
    }

    render() {
        return (
            <div className="App">
                <AddTodo addTodo={this.addTodo} />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
