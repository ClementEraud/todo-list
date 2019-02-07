import { post } from "axios";
import { USER_URL, UPDATE_TODOS, REMOVE_TODO_FROM_EDITION } from "../constants";

export const query = `
  mutation UpdateTodo($userID: ID, $todoID: ID, $newTodo: TodoInput) {
    updateTodo(userID: $userID, todoID: $todoID, newTodo: $newTodo) {
      todos {
        _id
        title
        description
      }
    }
  }
`;

export const editTodo = async ({ commit, state }, todoEdited) => {
  try {
    const res = await post(USER_URL, {
      query,
      variables: {
        userID: state.user._id,
        todoID: todoEdited._id,
        newTodo: {
          title: todoEdited.title,
          description: todoEdited.description
        }
      }
    });

    commit(UPDATE_TODOS, res.data.data.updateTodo.todos);
    commit(REMOVE_TODO_FROM_EDITION, todoEdited._id);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
