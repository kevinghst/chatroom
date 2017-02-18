import {RECEIVE_MESSAGE, RECEIVE_MESSAGES, RECEIVE_NEW_MESSAGES, ERASE_MESSAGES} from '../actions/message_actions';
import {merge} from 'lodash';

const initState = {
  all: [],
  new: [],
};

const MessageReducer = (state = initState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_MESSAGES:
      return { all: action.messages, new: state.new };
    case RECEIVE_NEW_MESSAGES:
      return { all: state.all, new: action.messages };
    case ERASE_MESSAGES:
      return {all: state.all, new: []};
    case RECEIVE_MESSAGE:
      let clone = merge({}, state);
      clone.all.push(action.message);
      clone.new.push(action.message);
      return clone;
    default:
      return state;
  }
};


export default MessageReducer;
