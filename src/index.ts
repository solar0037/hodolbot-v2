const Discord = require("discord.js");
require("dotenv").config();

import { LINE, DEV_BOT_CALL } from "./constants";

const main = () => {
  const client = new Discord.Client();

  client.on('ready', () => {
    console.log(
      `${LINE}\nLogged in as:\n${client.user.username}\n${client.user.id}\n${LINE}`
    );
  });

  client.on('message', msg => {
    if (msg.content.startsWith(DEV_BOT_CALL)) {
      const content = msg.content.replace(DEV_BOT_CALL, '');
      console.log(`message: ${content}`);

      if (content === '안녕') {
        msg.reply('어흥~');
      } else if (content === '잘가') {
        msg.reply("ㅃ2");
      }
    }
  });

  client.login(process.env.TOKEN);
}

main();
