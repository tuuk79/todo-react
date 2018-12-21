import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
	constructor(props) {
		super(props);

		this.handleDelete = this.handleDelete.bind(this);
		this.getClassName = this.getClassName.bind(this);
	}

	handleDelete(i) {
		this.props.deleteTodo(i)
	}

	getClassName(i) {
		console.log(i)
		if (i % 2 === 0) {
			return 'even'
		} else {
			return 'odd'
		}
	}

	render() {
		return (
			<div>
				<li className={this.getClassName(this.props.num)}>
					{this.props.todo.name}
					<span className="float-right" onClick={() => this.handleDelete(this.props.todo.id)}>X</span>
				</li>

			</div>
		);
	}
}

export default Todo;
