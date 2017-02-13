class Api::MessagesController < ApplicationController
  def create
    body = params[:message][:body]
    author_id = params[:message][:author_id]

    @message = Message.new(body: body, author_id: author_id)
    @message.save
  end

  def index
    @messages = Message.all
    current_user.messages.destroy_all
    current_user.messages << @messages
    render :index
  end

  def show
    seen_messages = current_user.messages
    @unseen_messages = Message.all - seen_messages
    render :show
    current_user.messages << @unseen_messages
  end

end
