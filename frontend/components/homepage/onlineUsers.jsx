import React from 'react';
import {Link} from 'react-router';

class OnlineUsers extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let users = this.props.users || [];
    return(
      <div className = "onlineUsers">
        <ul>
          {
            users.map((user, idx) =>
              <li className= "onlineUser" key={idx}>
                <div className="circle"></div>
                <div>{user.username}</div>
              </li>
            )
          }
        </ul>
      </div>

    );
  }
}

export default OnlineUsers;
