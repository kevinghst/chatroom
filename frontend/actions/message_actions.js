import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_NEW_MESSAGES = "RECEIVE_NEW_MESSAGES";

export const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

export const receiveMessages = messages => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  };
};

export const receiveNewMessages = messages => {
  return {
    type: RECEIVE_NEW_MESSAGES,
    messages
  };
};

export function fetchLastMessage(){
  return(dispatch) => {
    return APIUtil.fetchLastMessage().then(
      (message) => dispatch(receiveMessage(message))
    );
  };
}

export function fetchMessages(){
  return(dispatch) => {
    return APIUtil.fetchMessages().then(
      (messages) => dispatch(receiveMessages(messages))
    );
  };
}

export function fetchUnseenMessages(){
  return(dispatch) => {
    return APIUtil.fetchUnseenMessages().then(
      (messages) => dispatch(receiveNewMessages(messages))
    );
  };
}

export function createMessage(message){
  return(dispatch) => {
    return APIUtil.createMessage(message);
  };
}
