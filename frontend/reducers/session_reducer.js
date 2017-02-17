import {RECEIVE_CURRENT_USER, RECEIVE_LOGIN_USER, RECEIVE_LOGIN_ERRORS, RECEIVE_SIGNUP_ERRORS} from '../actions/session_actions';
import {merge} from 'lodash';

const initState = {
  currentUser: null,
  signupErrors: [],
  loginErrors: [],
  onlineUsers: [],
};

const SessionReducer = (state = initState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser, errors: [], onlineUsers: state.onlineUsers};
    case RECEIVE_LOGIN_ERRORS:
      return {currentUser: null, loginErrors: action.loginErrors, onlineUsers: state.onlineUsers};
    case RECEIVE_SIGNUP_ERRORS:
      return {currentUser: null, signupErrors: action.signupErrors, onlineUsers: state.onlineUsers};
    case RECEIVE_LOGIN_USER:
      let clone = merge({}, state);
      clone.onlineUsers.push(action.loginUser);
      return clone;
    default:
      return state;
  }
};

export default SessionReducer;
