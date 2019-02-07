import { post } from "axios";
import { USER_URL, UPDATE_TODOS } from "../constants";

export const query = `
  mutation DeleteTodo($userID: ID, $todoID: ID) {
    deleteTodo(userID: $userID, todoID: $todoID) {
      todos {
        _id
        title
        description
      }
    }
  }
`;

export const removeTodo = async ({ commit, state }, todoToRemove) => {
  try {
    const res = await post(USER_URL, {
      query,
      variables: {
        userID: state.user._id,
        todoID: todoToRemove._id
      }
    });

    commit(UPDATE_TODOS, res.data.data.deleteTodo.todos);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
