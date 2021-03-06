class ApplicationController < ActionController::Base
  helper_method :current_user

  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def login(user)
    user.reset_session_token!
    session[:session_token]  = user.session_token
    user.log = 1
    user.save
    Pusher.trigger('user_logs', 'login', {username: user.username, id: user.id})
  end

  def logout(user)
    user.reset_session_token!
    session[:session_token] = nil
    user.log = 0
    user.save
    Pusher.trigger('user_logs', 'logout', {username: user.username, id: user.id})
  end

end
