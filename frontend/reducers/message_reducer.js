import {RECEIVE_MESSAGE, RECEIVE_MESSAGES, RECEIVE_NEW_MESSAGES} from '../actions/message_actions';

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
    case RECEIVE_MESSAGE:
      let clone_all = [].concat(state.all);
      clone_all.push(action.message);
      return { all: clone_all, new: state.new };
    default:
      return state;
  }
};


export default MessageReducer;
