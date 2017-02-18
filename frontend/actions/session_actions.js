import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";
export const RECEIVE_LOGIN_USER = "RECEIVE_LOGIN_USER";
export const RECEIVE_LOGIN_USERS = "RECEIVE_LOGIN_USERS";

export const receiveLoginUser = loginUser => {
  return {
    type: RECEIVE_LOGIN_USER,
    loginUser
  };
};

export const receiveLoginUsers = loginUsers => {
  return {
    type: RECEIVE_LOGIN_USERS,
    loginUsers
  }
}

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveLoginErrors = loginErrors => {
  return {
    type: RECEIVE_LOGIN_ERRORS,
    loginErrors
  };
};

export const receiveSignupErrors = signupErrors => {
  return {
    type: RECEIVE_SIGNUP_ERRORS,
    signupErrors
  };
};

export function fetchLoginUser(){
  return (dispatch) => {
    return APIUtil.fetchLoginUser().then(
      (loginUser) => dispatch(receiveLoginUser(loginUser))
    );
  };
}

export function fetchLoginUsers(){
  return (dispatch) => {
    return APIUtil.fetchLoginUsers().then(
      (loginUsers) => dispatch(receiveLoginUsers(loginUsers))
    );
  };
}

export function signup(user){
  return (dispatch) => {
    return APIUtil.signup(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (err) => dispatch(receiveSignupErrors(err.responseJSON))
    );
  };
}

export function login(user){
  return (dispatch) => {
    return APIUtil.login(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (err) => dispatch(receiveLoginErrors(err.responseJSON))
    );
  };
}

export function logout(){
  return (dispatch) => {
    return APIUtil.logout().then(
      (currentUser) => dispatch(receiveCurrentUser(null))
    );
  };
}
