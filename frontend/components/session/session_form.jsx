import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.updateForm = this.updateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateForm(e){
    const stateType = e.currentTarget.className;
    const stateValue = e.currentTarget.value;
    this.setState({ [stateType]: stateValue });
  }

  handleSubmit(e){
    e.preventDefault();
    var loginState = {
      username: this.state.username,
      password: this.state.password
    };

    this.setState({
      username: "",
      password: ""
    });

    this.props.login(loginState).then((currentUser) => {
      this.props.router.push("/home");
    });
  }

  render(){
    return(
      <div className="login-main">

        <div className="logo">ChattaBox</div>

        <form className="login group" onSubmit={this.handleSubmit}>
          <div className="username field">
            <input type="text"
                placeholder="Username"
                className = "username"
                value={this.state.username}
                onChange = {this.updateForm}>
            </input>
          </div>

          <div className="password field">
            <input type="password"
                placeholder="Password"
                className = "password"
                value={this.state.password}
                onChange = {this.updateForm}>
            </input>
          </div>

          <ul className="loginErrors">
            {
              this.props.loginErrors.map((error, i) => {
                return <li key={i}>{error}</li>;
              })
            }
          </ul>

          <input className="submit-button" type="submit" value="LOGIN" />
        </form>
      </div>
    );
  }
}

export default SessionForm;
