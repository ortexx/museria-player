# [Museria global player](https://github.com/ortexx/museria-global/) [alpha] [![npm version](https://badge.fury.io/js/museria-player.svg)](https://badge.fury.io/js/spreadable) [![alt text](https://img.shields.io/badge/Community-Chat-blueChat?style=flat-square&amp;logo=telegram)](https://t.me/museria)

This is a network configuration of the global decentralized player based on [musiphone](https://github.com/ortexx/musiphone/).

## Running on machine

```bash
git clone https://github.com/ortexx/museria-player.git
```

```bash
npm i && npm start
```

## Running in docker

```bash
docker-compose up
```

You can also pass environment variables before the command.

## What are the requirements
Look at [the musiphone requirements](https://github.com/ortexx/musiphone/#what-are-the-requirements).

## What is the idea
We have [a global music storage](https://github.com/ortexx/museria-global/). But why do you need it in the first place? Of course, to store and listen to music. This player allows you to create playlists with storage songs, share links to them and listen to music in a convenient player. Just visit [player.museria.com](http://player.museria.com) to see how it works. Or install the android application to you phone from [musiphone.debug.apk](https://github.com/ortexx/museria-player/blob/master/musiphone.debug.apk)

## How it works
At the very beginning, please check out [the musiphone library](https://github.com/ortexx/musiphone/).
So, anyone can start their own node and share some place for playlists storing. 
The main network address is __player.museria.com:80__. But you can use another entry point if it is necessary. Look at the configuration file __musiphone.config.js__. There are all parameters you may configure by passing arguments or environment variables. Don't change anything else.

## Face mode
If you don't want to provide the disk space you can run the node in face mode as **npm run face**. Start your server under a domain name, push it into the list in [./faces.json](https://github.com/ortexx/museria-player/blob/master/faces.json) and create a pull request. This will allow other people to have more options to enter the network for better stability. Everyone can install this package via npm and require the faces list as **address** option in the client side for connecting.

## How to get involved in this

### 1. Start your own node increasing the total size of available space on the network
You need just about 200mb free space to start. You can run it on any server that is open to external requests.

### 2. Join to museria storage project
This project depends on [museria-global](https://github.com/ortexx/museria-global/). So you can participate in it, thus influencing this one as well.

### 3. Use it for yourself
You can create and share playlists, listening to music, expand the song database.

### 4. Tell your friends about the project
The more people participating, the more music is on the network and more often their updating.

## Donations
The more servers we have, the more and longer we can store playlists in the cloud, making old links to your playlists available in the future. 

* BTC: __38dyvCmUadqS2HVFEuDBVC3k1a7h6J5gqU__
* ETH: __0x4e5Ef1b362271523f5c6eDe7a54BDcA9750D81E8__


