import { ADD_TODO } from "../actionTypes";

function rootReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return [...state, { id, content }];
    }
    default:
      return state;
  }
}

export default rootReducer;
