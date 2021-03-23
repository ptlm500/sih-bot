import Discord, { Message } from "discord.js";
import shouldHandleMessage from "../message-handler/utils";
import logger from "../logger/logger";
import MessageAnalyzerService from "../services/MessageAnalyzerService";
import getReply from "../replies/getReply";

const client = new Discord.Client();

const messageAnalyzerService = new MessageAnalyzerService();

client.on("ready", () => {
  if (client.user) {
    logger.info(`🚀 Logged in as ${client.user.tag}`);
  } else {
    logger.warning('🚀 Logged in as unknown user', { client });
  }
  logger.info(`🌍 Online and serving ${client.guilds.cache.size} servers`);
  client.user?.setActivity('Here to help!');
});

client.on("message", (message: Message) => {
  if (shouldHandleMessage(message)) {
    const sentiment = messageAnalyzerService.getSentiment(message);
    const questions = messageAnalyzerService.getQuestions(message);
    const reply = getReply(sentiment, questions);

    if (reply.length > 0) {
      message.reply(reply);
    }
  }
});

export default client;
