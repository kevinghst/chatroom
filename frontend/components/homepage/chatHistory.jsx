import React from 'react';
import {Link} from 'react-router';

class ChatHistory extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    const { messages, currentUser, createMessage, fetchLastMessage } = this.props;

    return(
      <ul className = "chat-history">
        {
          messages.map((message, idx) =>
            <li key={idx} className={'message'}>
              <div className="message-author">{message.author_name}</div>
              <div className="message-content">{message.body}</div>
            </li>
          )
        }
      </ul>
    );
  }
}

export default ChatHistory;
