import { Message } from "discord.js";
import { helloTemplate, goodByeTemplate } from "../templates";
import { render } from "../functions";

export const helloView = (msg: Message) => render(helloTemplate, {id: msg.author.id});
export const goodByeView = (msg: Message) => render(goodByeTemplate, {id: msg.author.id});
