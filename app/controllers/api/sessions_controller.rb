class Api::SessionsController < ApplicationController
  def create

    @user = User.find_by(username: params[:user][:username])
    if @user
      if @user.verify_password(params[:user][:password] )
        login(@user)
        render :show
      else
        render json: ["Invalid login information"], status: 404
      end
    else
      @user = User.new(user_params)
      if @user.save
        login(@user)
        render :show
      else
        render json: ["Password too short! (6 mininum)"], status: 422
      end
    end
  end

  def destroy
    if current_user
      @user = current_user
      logout(@user)
      render json: {}
    else
      render json: ["no user to log out"], status: 404
    end
  end

  def user_params
    params.require(:user).permit(:firstname, :lastname, :gender, :birthday, :username, :password)
  end
end
