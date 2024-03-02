import client from 'musiphone/src/client.js';

const Client = client();

export default (Parent) => {
  return class ClientMuseriaPlayer extends (Parent || Client) {}
};