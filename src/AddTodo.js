import React, { Component } from 'react';
import './TodoList.css';

class AddTodo extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const value = document.getElementsByName('addTodoInput')[0].value;
        this.props.addTodo(value)
    }

    render() {
        return (
            <div>
                <input type="text" name="addTodoInput"></input>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default AddTodo;
