import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import store from "../redux/store";

function AddTodo() {
  const [input, setInput] = useState("");
  const handleAddTodo = () => {
    store.dispatch(addTodo(input));
  };

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default connect(null, { addTodo })(AddTodo);
