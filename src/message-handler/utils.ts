import { Message } from "discord.js";

export default function shouldHandleMessage(message: Message): boolean {
  return !messageSentByBot(message);
}

function messageSentByBot(message: Message) {
  return message.author.bot;
}
