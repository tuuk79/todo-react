import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo, i) => 
                        <li className="no-bullet" key={i}>{todo.name}</li>
                    )
                }
            </ul>
        );
    }
}

export default TodoList;
