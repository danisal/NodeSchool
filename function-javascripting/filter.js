function getShortMessages(messages) {

  return messages.filter(function (obj) {
    return obj.message.length < 50;
  }).map(function (msg) {
    return msg.message;
  });
}

module.exports = getShortMessages;
