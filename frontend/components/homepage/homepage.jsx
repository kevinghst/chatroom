import React from 'react';
import { Link, withRouter } from 'react-router';

class HomePage extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    };
    this.logout = this.logout.bind(this);
  }

  logout(){
    this.props.logout().then(() => {
      this.props.router.push("/login");
    });
  }

  render(){
    return(
      <div>
        <button className="logout-button" onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}

export default HomePage;
