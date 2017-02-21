import {RECEIVE_MESSAGE, RECEIVE_MY_MESSAGE, RECEIVE_MESSAGES, RECEIVE_NEW_MESSAGES, ERASE_MESSAGES} from '../actions/message_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';

const initState = {
  all: [],
  new: [],
};

const MessageReducer = (state = initState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {all: state.all, new: state.new};
    case RECEIVE_MESSAGES:
      return { all: action.messages, new: state.new};
    case RECEIVE_NEW_MESSAGES:
      return { all: state.all, new: action.messages};
    case ERASE_MESSAGES:
      return {all: state.all, new: []};
    case RECEIVE_MESSAGE:
      let clone = merge({}, state);
      clone.all.push(action.message);
      clone.new.push(action.message);
      return clone;
    case RECEIVE_MY_MESSAGE:
      let clone_two = merge({}, state);
      clone_two.all.push(action.message);
      return clone_two;
    default:
      return state;
  }
};


export default MessageReducer;
