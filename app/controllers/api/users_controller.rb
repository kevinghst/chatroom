class Api::UsersController < ApplicationController
  def index
    @users = User.where('log = 1')
    render :index
  end

  def user_params
    params.require(:user).permit(:firstname, :lastname, :gender, :birthday, :username, :password)
  end
end
