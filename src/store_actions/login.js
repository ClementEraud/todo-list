import { post } from "axios";
import { USER_URL, LOGIN } from "../constants";

export const query = `
query Login($username: String, $password: String){
  login(username: $username, password: $password) {
    _id
    username
    password
    todos {
      _id
      title
      description
    }
  }
}`;

export const login = async ({ commit }, login) => {
  try {
    const res = await post(USER_URL, {
      query,
      variables: {
        username: login.username,
        password: login.password
      }
    });

    const user = res.data.data.login;
    commit(LOGIN, user);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
