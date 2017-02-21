import {connect} from 'react-redux';
import HomePage from './homepage';
import {logout, fetchLoginUser, fetchLoginUsers, fetchLogoutUser} from '../../actions/session_actions';
import {fetchLastMessage, fetchMyLastMessage, fetchMessages, fetchUnseenMessages, createMessage, cleanNewMessages} from '../../actions/message_actions';

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
      fetchLastMessage: (message) => dispatch(fetchLastMessage(message)),
      fetchMyLastMessage: (message) => dispatch(fetchMyLastMessage(message)),
      fetchMessages: () => dispatch(fetchMessages()),
      fetchUnseenMessages: () => dispatch(fetchUnseenMessages()),
      createMessage: (message) => dispatch(createMessage(message)),
      cleanNewMessages: () => dispatch(cleanNewMessages()),
      fetchLoginUser: (username) => dispatch(fetchLoginUser(username)),
      fetchLogoutUser: (username) => dispatch(fetchLogoutUser(username)),
      fetchLoginUsers: () => dispatch(fetchLoginUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
