import React from 'react';
import {Link} from 'react-router';

class OnlineUsers extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let users = this.props.users || [];
    return(
      <ul className = "onlineUsers">
        {
          users.map((user, idx) =>
            <li className= "onlineUser" key={idx}>{user.username}</li>
          )
        }
      </ul>
    );
  }
}

export default OnlineUsers;
