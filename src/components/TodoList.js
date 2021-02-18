import React from "react";
import { connect } from "react-redux";
import { getTodos } from "../redux/selectors";

const TodoList = (store) => (
  <ul className="todo-list">
    {store.todos && store.todos.length
      ? store.todos.map((todo) => {
          return <div>{todo.content}</div>;
        })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = (store) => {
  const todos = getTodos(store);
  return todos;
};

export default connect(mapStateToProps)(TodoList);
