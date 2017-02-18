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

  componentDidMount(){
    let that = this;
    const objDiv = document.getElementById('chat-history');
    objDiv.scrollTop = objDiv.scrollHeight;

    var channel = this.props.pusher.subscribe('chat_room');
    channel.bind('message_sent', function(data) {
      that.props.fetchLastMessage();
    });
  }

  componentWillUnmount(){
    this.props.pusher.disconnect();
  }

  componentDidUpdate(){
    const objDiv = document.getElementById('chat-history');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  createMessage(e){
    e.preventDefault();
    this.setState({ newMessage: "" });
    this.props.createMessage({ body: this.state.newMessage });
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
        <ul id="chat-history" className = "chat-history">
          {
            messages.map((message, idx) =>
              <Message currentUser={currentUser} lastmessage={messages[idx-1]} message={message} idx={idx} key={idx} />
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
