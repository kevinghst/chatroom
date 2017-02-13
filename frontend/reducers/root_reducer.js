import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import MessageReducer from './message_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  messages: MessageReducer
});

export default rootReducer;
