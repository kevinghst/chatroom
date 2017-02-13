import {connect} from 'react-redux';
import HomePage from './homepage';
import {logout} from '../../actions/session_actions';
import {fetchLastMessage, fetchMessages, fetchUnseenMessages, createMessage} from '../../actions/message_actions';

const mapStateToProps = (state) => {
  const log = !!state.session.currentUser;
  return {
    loggedIn: log,
    currentUser: state.session.currentUser,
    all_messages: state.messages.all,
    new_messages: state.messages.new,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      logout: () => dispatch(logout()),
      fetchLastMessage: () => dispatch(fetchLastMessage()),
      fetchMessages: () => dispatch(fetchMessages()),
      fetchUnseenMessages: () => dispatch(fetchUnseenMessages()),
      createMessage: () => dispatch(createMessage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
