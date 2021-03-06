class Api::MessagesController < ApplicationController
  def create
    body = params[:message][:body]
    author_id = params[:message][:author_id]

    @message = Message.new(body: body)
    @message.author_id = current_user.id
    @message.save
    Pusher.trigger('chat_room', 'message_sent', {id: @message.id, author_id: @message.author_id, body: @message.body, author_name: @message.author.username})
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
      current_user.messages << @message
    else
      seen_messages = current_user.messages
      @messages = Message.all - seen_messages
      render :index
      current_user.messages << @messages
    end
  end

end
