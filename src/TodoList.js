import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        return (
            <ul className="TodoList">
                {
                    this.props.todos.map((todo, i) => 
						<Todo key={i} num={i} className="no-bullet" todo={todo} deleteTodo={this.props.deleteTodo} />
                    )
                }
            </ul>
        );
    }
}

export default TodoList;
