json.array! @unseen_messages do |message|
  json.partial! "api/messages/message", locals: {message: message}
end
