import yargs from 'yargs';
import dotenv from 'dotenv';
import path from 'path';
import faces from "./faces.json" with { type: "json" };
import storageFaces from 'museria-global/faces.json' with { type: "json" };
const __dirname = new URL('.', import.meta.url).pathname;
dotenv.config({ path: path.join(__dirname, '.env') });
const argv = yargs(process.argv).argv;
const loggerLevel = argv.loggerLevel || process.env.MUSIPHONE_LOGGER_LEVEL;
const split = loggerLevel.split(',');
const loggerLevelConsole = split[0];
const loggerLevelFile = split[1] || loggerLevelConsole;

export {
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
  }  
}