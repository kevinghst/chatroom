export const fetchMessages = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/messages`
  });
};

export const fetchUnseenMessages = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/messages/0`
  });
};

export const createMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: { message }
  });
};

export const fetchLastMessage = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/messages/1`
  });
};
