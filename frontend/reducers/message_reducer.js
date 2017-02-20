import {RECEIVE_MESSAGE, RECEIVE_MESSAGES, RECEIVE_NEW_MESSAGES, ERASE_MESSAGES} from '../actions/message_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';

const initState = {
  all: [],
  new: [],
  currentUser: null,
};

const MessageReducer = (state = initState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {all: state.all, new: state.new, currentUser: action.currentUser};
    case RECEIVE_MESSAGES:
      return { all: action.messages, new: state.new, currentUser: state.currentUser };
    case RECEIVE_NEW_MESSAGES:
      return { all: state.all, new: action.messages, currentUser: state.currentUser };
    case ERASE_MESSAGES:
      return {all: state.all, new: [], currentUser: state.currentUser};
    case RECEIVE_MESSAGE:
      let clone = merge({}, state);
      clone.all.push(action.message);
      if(action.message.author_id !== state.currentUser.id){
        clone.new.push(action.message);
      }
      return clone;
    default:
      return state;
  }
};


export default MessageReducer;
