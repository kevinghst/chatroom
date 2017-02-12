import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup, login} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  const log = !!state.session.currentUser;

  var errors = state.session.loginErrors || [];

  return {
    loggedIn: log,
    loginErrors: errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
