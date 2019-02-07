import { post } from "axios";
import { LOGIN, USER_URL } from "../constants";

export const query = `
  mutation CreateUser($newUser: UserInput) {
    createUser(newUser: $newUser) {
      _id
      username
      password
      todos {
        _id
        title
        description
      }
    }
  }
`;

export const createAccount = async ({ commit }, newUser) => {
  try {
    const res = await post(USER_URL, {
      query,
      variables: {
        newUser: newUser
      }
    });
    commit(LOGIN, res.data.data.createUser);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
