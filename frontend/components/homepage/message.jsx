import React from 'react';
import {Link} from 'react-router';

class Message extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { currentUser, message} = this.props;
    const fromMe = currentUser.id === message.author_id ? 'from-me' : '';
    return(
      <li className={`message ${fromMe}`}>
          <div className={`message-author ${fromMe}`}>{message.author_name} :</div>
          <div className={`message-content ${fromMe}`}>{message.body}</div>
      </li>
    );
  }
}

export default Message;
