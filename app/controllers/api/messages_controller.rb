class Api::MessagesController < ApplicationController
  def create
    body = params[:message][:body]
    author_id = params[:message][:author_id]

    @message = Message.new(body: body, author_id: author_id)
    @message.save

    Pusher.trigger('chat_room', 'message_sent', {})

  end

  def index
    @messages = Message.all
    current_user.messages.destroy_all
    current_user.messages << @messages
    render :index
  end

  def show
    if params[:id] == "1"
      @message = Message.last
      render :show
      current_user.messages << @message
    else
      seen_messages = current_user.messages
      @messages = Message.all - seen_messages
      render :index
      current_user.messages << @messages
    end
  end

end
