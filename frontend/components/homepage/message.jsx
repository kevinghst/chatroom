import React from 'react';
import {Link} from 'react-router';

class Message extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { currentUser, message, lastmessage, idx} = this.props;
    const fromMe = currentUser.id === message.author_id ? 'from-me' : '';
    let diffFromLast = (lastmessage && lastmessage.author_id !== message.author_id) ? 'diffLast' : 'sameLast';
    if (idx === 0) {diffFromLast = 'diffLast';}
    return(
      <li className={`message ${fromMe} ${diffFromLast}`}>
          <div className={`message-author ${fromMe} ${diffFromLast}`}>{message.author_name} :</div>
          <div className={`message-content ${fromMe}`}>{message.body}</div>
      </li>
    );
  }
}

export default Message;
