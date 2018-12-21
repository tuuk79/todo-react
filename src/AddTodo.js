import React, { Component } from 'react';
import './TodoList.css';

class AddTodo extends Component {
	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this)
		this.handleKeyPress = this.handleKeyPress.bind(this)
	}

	handleClick() {
		this.addTodo()
	}

	addTodo() {
		const name = document.getElementsByName('addTodoInput')[0].value;
		this.props.addTodo(name)
	}

	handleKeyPress(event) {
		if(event.keyCode === 13) {
			this.addTodo()
		}
	}

	render() {
		return (
			<span>
				<input type="text" name="addTodoInput" onKeyDown={this.handleKeyPress}></input>
				<button onClick={this.handleClick}>Add</button>
			</span>
		);
	}
}

export default AddTodo;
