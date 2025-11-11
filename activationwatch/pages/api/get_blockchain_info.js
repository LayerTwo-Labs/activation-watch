import { exec } from 'child_process';
import util from 'util';

const execAsync = util.promisify(exec);


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const myBips = req.body.myBips;
    const rpcUrl = "http://localhost:8332/";
    try {
      const command = "/home/watcher/bitcoin-activation/build/bin/bitcoin-cli --datadir=/mnt/fullnode-volume/Blockchain/ getblockchaininfo";
      const { stdout } = await execAsync(command);
      const json_data = JSON.parse(stdout);
      const softforks = [];
      
      for (const bip of myBips) {

        const bip_info = {};
        const bip9_data = json_data["softforks"][bip]["bip9"];

        bip_info["Bip"] = bip;
        bip_info["Status"] = bip9_data["status"];
        bip_info["Bit"] = bip9_data["bit"];
        bip_info["Count"] = bip9_data["statistics"]["count"];
        bip_info["Elapsed"] = bip9_data["statistics"]["elapsed"];
        bip_info["Period"] = bip9_data["statistics"]["period"];
        bip_info["Threshold"] = bip9_data["statistics"]["threshold"];
        bip_info["Possible"] = bip9_data["statistics"]["possible"];
        bip_info["signalling"] = bip9_data["signalling"];
    
        softforks.push(bip_info);
      }
      
      res.status(200).json(softforks);
    } catch (error) {
      console.error(error);
      
      res.status(500).json({ error: 'Failed to fetch blockchain info.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
