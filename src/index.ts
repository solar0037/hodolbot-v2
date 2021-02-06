import { Client, TextChannel, User } from "discord.js";
require("dotenv").config();

import { respondToGreetings } from "./views";
import { LINE, DEV_BOT_CALL } from "./constants";

const main = () => {
  const client = new Client();
  const BOT_CALL = process.env.PRODUCTION ?? DEV_BOT_CALL;

  client.on('ready', () => {
    console.log(
      `${LINE}\nLogged in as:\n${client.user.username}\n${client.user.id}\n${LINE}`
    );
  });

  client.on('message', async msg => {
    if (msg.content.startsWith(BOT_CALL) && msg.channel instanceof TextChannel) {
      const channel: TextChannel = msg.channel;
      const content: string = msg.content.replace(DEV_BOT_CALL, '');
      const author: User = msg.author;
      console.log(
        `message: ${content} from ${channel.name}@${channel.guild.name} by ${author.username}`
      );

      await respondToGreetings(channel, content, author);
    }
  });

  client.login(process.env.TOKEN);
}

main();
