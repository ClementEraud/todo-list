import { post } from "axios";
import { USER_URL, UPDATE_TODOS, DISPLAY_ADD_FORM_TODO } from "../constants";

export const query = `
  mutation CreateTodo($userID: ID, $newTodo: TodoInput) {
    createTodo(userID: $userID, newTodo: $newTodo) {
      todos {
        _id
        title
        description
      }
    }
  }
`;

export const addTodo = async ({ commit, state }, todoToAdd) => {
  try {
    const res = await post(USER_URL, {
      query,
      variables: {
        userID: state.user._id,
        newTodo: todoToAdd
      }
    });
    commit(UPDATE_TODOS, res.data.data.createTodo.todos);
    commit(DISPLAY_ADD_FORM_TODO, false);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
