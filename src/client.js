const Client = require('musiphone/src/client')();

module.exports = (Parent) => {
  return class ClientMuseriaPlayer extends (Parent || Client) {}
};