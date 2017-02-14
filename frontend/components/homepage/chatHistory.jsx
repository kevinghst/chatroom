import React from 'react';
import {Link} from 'react-router';
import Message from './message';

class ChatHistory extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newMessage: ""
    };
    this.updateMessage = this.updateMessage.bind(this);
    this.createMessage = this.createMessage.bind(this);
  }

  createMessage(e){
    e.preventDefault();
    this.setState({ newMessage: "" });
    this.props.createMessage({ author_id: this.props.currentUser.id, body: this.state.newMessage });
  }

  updateMessage(e){
    e.preventDefault();
    let msg = e.currentTarget.value;
    this.setState({ newMessage: msg });
  }

  render(){
    const { messages, currentUser, fetchLastMessage } = this.props;

    return(
      <div className="message-section">
        <ul className = "chat-history">
          {
            messages.map((message, idx) =>
              <Message currentUser={currentUser} message={message} key={idx} />
            )
          }
        </ul>

        <form onSubmit={this.createMessage} className="messageForm">
          <input
            type = "text"
            className="chatInput"
            value={this.state.newMessage}
            onChange={this.updateMessage}
            placeholder="Type a message..."
          ></input>
        </form>
      </div>

    );
  }
}

export default ChatHistory;
