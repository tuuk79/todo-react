import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo, i) => 
						<Todo key={i} className="no-bullet" todo={todo} deleteTodo={this.props.deleteTodo} />
                    )
                }
            </ul>
        );
    }
}

export default TodoList;
