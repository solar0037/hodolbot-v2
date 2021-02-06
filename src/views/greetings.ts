import { TextChannel, User } from "discord.js";
import { helloTemplate, goodByeTemplate } from "../templates";
import { render } from "../functions";

const respondToGreetings = (async (
    channel: TextChannel,
    content: string,
    author: User
  ) => {

  switch (content) {
    case "안녕":
      await channel.send(render(helloTemplate, {id: author.id}));
      break;

    case "잘가":
      await channel.send(render(goodByeTemplate, {id: author.id}));
      break;
  }
});

export default respondToGreetings;
