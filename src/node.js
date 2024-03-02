import node from 'musiphone/src/node.js';
import loggerAdapter from 'spreadable/src/logger/transports/adapter/index.js';

const Node = node();
const LoggerAdapter = loggerAdapter();

export default (Parent) => {  
  return class NodeMuseriaPlayer extends (Parent || Node) {
    static get LoggerTransport () { return LoggerAdapter }

    /**
     * @see Node.prototype.checkDocumentAvailability
     */
    async checkDocumentAvailability(info) {
      if(this.options.face && info.collection == 'playlist') {
        return false;
      }
      
      return super.checkDocumentAvailability.apply(this, arguments);
    }
  }  
}