import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
	constructor(props) {
		super(props);

		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(i) {
		this.props.deleteTodo(i)
	}

	render() {
		return (
			<div>
				<li className="no-bullet">
					{this.props.todo.id}
					{this.props.todo.name}
					<span className="float-right" onClick={() => this.handleDelete(this.props.todo.id)}>X</span>
				</li>

			</div>
		);
	}
}

export default Todo;
