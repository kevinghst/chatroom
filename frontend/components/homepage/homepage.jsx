import React from 'react';
import { Link, withRouter } from 'react-router';
import ChatHistory from './chatHistory';

class HomePage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      display_new: false
    };
    this.logout = this.logout.bind(this);
    this.switchAll = this.switchAll.bind(this);
    this.switchNew = this.switchNew.bind(this);
  }

  componentDidMount(){
    this.props.fetchUnseenMessages();
    this.props.fetchMessages();
  }

  logout(){
    this.props.logout().then(() => {
      this.props.router.push("/login");
    });
  }

  switchAll(){
    this.setState({display_new: false});
  }

  switchNew(){
    this.setState({display_new: true});
  }

  render(){

    let messages = this.props.all_messages;
    if (this.state.display_new) { messages = this.props.new_messages; }

    let currentUser = this.props.currentUser || {};

    return(
      <div className="chat-main">
        <section className="left-pane">
          <div className="currentUser">{currentUser.username}</div>
          <div className="logout-button">
            <button onClick={this.logout}>Log Out</button>
          </div>
        </section>

        <section className="middle-pane">
          <div className="buttons">
            <button className="all-button" onClick={this.switchAll}>All Messages</button>
            <button className="new-button" onClick={this.switchNew}>New Messages</button>
          </div>

          <ChatHistory
            messages = {messages}
            currentUser = {currentUser}
            createMessage = {this.props.createMessage}
            fetchLastMessage = {this.props.fetchLastMessage}
          />

        </section>



      </div>
    );
  }
}

export default HomePage;
