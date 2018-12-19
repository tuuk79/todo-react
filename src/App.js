import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
			counter: 0
		}

		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.updateCounter = this.updateCounter.bind(this);
	}

	addTodo(name) {
		let updated = this.state.todos.slice()
		const updatedCounter = this.updateCounter()
		updated.push({ id: updatedCounter, name: name })
		this.setState({ todos: updated, counter: updatedCounter })
	}

	updateCounter() {
		return this.state.counter + 1
	}

	deleteTodo(index) {
		const filteredTodos = this.state.todos.filter(todo => todo.id !== index)
		this.setState({ todos: filteredTodos })
	}

	render() {
		return (
			<div className="App">
				<AddTodo addTodo={this.addTodo} />
				<TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
			</div>
		);
	}
}

export default App;
