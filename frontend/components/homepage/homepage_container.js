import {connect} from 'react-redux';
import HomePage from './homepage';
import {logout, fetchLoginUser, fetchLoginUsers, fetchLogoutUser} from '../../actions/session_actions';
import {fetchLastMessage, fetchMessages, fetchUnseenMessages, createMessage, cleanNewMessages} from '../../actions/message_actions';

const mapStateToProps = (state) => {
  const log = !!state.session.currentUser;
  return {
    loggedIn: log,
    currentUser: state.session.currentUser,
    all_messages: state.messages.all,
    new_messages: state.messages.new,
    onlineUsers: state.session.onlineUsers,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      logout: () => dispatch(logout()),
      fetchLastMessage: () => dispatch(fetchLastMessage()),
      fetchMessages: () => dispatch(fetchMessages()),
      fetchUnseenMessages: () => dispatch(fetchUnseenMessages()),
      createMessage: (message) => dispatch(createMessage(message)),
      cleanNewMessages: () => dispatch(cleanNewMessages()),
      fetchLoginUser: () => dispatch(fetchLoginUser()),
      fetchLogoutUser: () => dispatch(fetchLogoutUser()),
      fetchLoginUsers: () => dispatch(fetchLoginUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
