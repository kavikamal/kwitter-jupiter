// Action Types
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_ERROR = 'LOGIN_ERROR';


// Action Creators
export const loginUser  = (username, password) => {

    return {
      type: LOGIN_USER,
      username: username,
      password: password,
      isLoggedIn: true
    }
  }