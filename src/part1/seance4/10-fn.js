function sayHello(user, sendMessage) {
  const message = `Hello ${user}`;
  sendMessage(message);
}

module.exports = { sayHello };
