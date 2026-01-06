# activation-watch
https://activation.watch/

Bitcoin core setup:
```
Config file: You need rpcuser & rpcpassword and no other configuration
Clone bitcoin core 30.x + activation watch patches here: https://github.com/LayerTwo-Labs/activation-watch/tree/bitcoin-activation
Build bitcoind
Complete IBD
```

Server setup:
```
bitcoind running after following setup instructions.

An Apache server to display the nextjs activation.watch software. 
So the requirements for your server should be:
apache nodejs npm

activation-watch setup:
Move the activation-watch directory into your apache documents root
(for example /var/www/html/)
 
Build and start the nextjs software:
npm install
npm run build
npm start
```
