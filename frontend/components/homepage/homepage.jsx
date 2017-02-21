import React from 'react';
import { Link, withRouter } from 'react-router';
import ChatHistory from './chatHistory';
import OnlineUsers from './onlineUsers';

class HomePage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      display_new: false
    };
    this.logout = this.logout.bind(this);
    this.switchAll = this.switchAll.bind(this);
    this.switchNew = this.switchNew.bind(this);
    this.pusher = new Pusher('e56dbe4cab96698be82b', {
      encrypted: true
    });
  }

  componentDidMount(){
    this.props.fetchUnseenMessages();
    this.props.fetchMessages();
    this.props.fetchLoginUsers();

    let that = this;

    var channel = this.pusher.subscribe('user_logs');

    channel.bind('login', function(data) {
      that.props.fetchLoginUser(data.username);
    });

    channel.bind('logout', function(data) {
      that.props.fetchLogoutUser(data.username);
    });
  }

  logout(){
    this.props.logout().then(() => {
      this.props.router.push("/login");
    });
  }

  switchAll(){
    if (this.state.display_new) {
      this.props.cleanNewMessages();
    }
    this.setState({display_new: false});
  }

  switchNew(){
    this.setState({display_new: true});
  }

  render(){
    let messages = this.props.all_messages;
    if (this.state.display_new) { messages = this.props.new_messages; }

    let currentUser = this.props.currentUser || {};

    let allMessageStatus = this.state.display_new === false ? 'activated' : 'inactivated';
    let newMessageStatus = this.state.display_new === true ? 'activated' : 'inactivated';

    let newMessageNumber = this.props.new_messages.length;
    let notification;
    if (newMessageNumber > 0) {
      notification = (
        <div className="notification">{newMessageNumber}</div>
      );
    }

    return(
      <div className="chat-container">
        <div className="chat-main">
          <section className="left-pane">
            <div className="currentUser">{currentUser.username}</div>
            <OnlineUsers users = {this.props.onlineUsers}/>
            <div className="logout-button">
              <button onClick={this.logout}>Log Out</button>
            </div>
          </section>

          <section className="middle-pane">
            <div className="buttons">
              <button className={`all-button ${allMessageStatus}`} onClick={this.switchAll}>All Messages</button>
              <button className={`new-button ${newMessageStatus}`} onClick={this.switchNew}>New Messages</button>
              {notification}
            </div>

            <ChatHistory
              messages = {messages}
              currentUser = {currentUser}
              createMessage = {this.props.createMessage}
              fetchLastMessage = {this.props.fetchLastMessage}
              fetchMyLastMessage = {this.props.fetchMyLastMessage}
              pusher = {this.pusher}
            />

          </section>



        </div>
      </div>

    );
  }
}

export default HomePage;
