const argv = require('yargs').argv;
const dotenv = require('dotenv');
const path = require('path');
const faces = require('./faces');
const storageFaces = require('museria-global/faces');
dotenv.config({ path: path.join(__dirname, '.env') });
const loggerLevel = argv.loggerLevel || process.env.MUSIPHONE_LOGGER_LEVEL;
const split = loggerLevel.split(',');
const loggerLevelConsole = split[0];
const loggerLevelFile = split[1] || loggerLevelConsole;

module.exports = {
  face: argv.face || process.env.MUSIPHONE_FACE,
  port: argv.port || process.env.MUSIPHONE_PORT,
  initialNetworkAddress: argv.initialNetworkAddress || process.env.MUSIPHONE_INITIAL_NETWORK_ADDRESS || faces,
  musicStorageAddress: argv.musicStorageAddress || process.env.MUSIPHONE_MUSIC_STORAGE_ADDRESS || storageFaces,
  publicPort: argv.publicPort || process.env.MUSIPHONE_PUBLIC_PORT,
  hostname: argv.hostname || process.env.MUSIPHONE_HOSTNAME,
  logger: {
    transports: [
      { transport: 'LoggerConsole', options: { level: loggerLevelConsole } },
      { transport: 'LoggerFile', options: { level: loggerLevelFile } }
    ]
  },
  playlist: {
    maxSize: argv.playlistMaxSize || process.env.MUSIPHONE_PLAYLIST_MAX_SIZE,
    collection: {
      maxSize: argv.collectionMaxSize || process.env.MUSIPHONE_COLLECTION_MAX_SIZE
    }
  },
  storage: {
    path: argv.storagePath || process.env.MUSIPHONE_STORAGE_PATH
  },  
}