const Node = require('musiphone/src/node')();
const LoggerAdapter = require('spreadable/src/logger/transports/adapter')();

module.exports = (Parent) => {  
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