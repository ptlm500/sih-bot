import Discord, { Message } from "discord.js";
import shouldHandleMessage from "../message-handler/utils";
import logger from "../logger/logger";
import getLmgtfyReply from "../replies/getLmgtfyReply";
import MessageAnalyzerService from "../services/MessageAnalyzerService";

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
    const links = questions.map(getLmgtfyLink);

    let reply = "";
    if (sentimentIsNegative(sentiment)) {
      reply = "That wasn't very nice!";
    }

    const lmgtfyReply = getLmgtfyReply(links);

    if (reply && lmgtfyReply) {
      reply += ` But don't worry, ${lmgtfyReply}`
    } else if (lmgtfyReply) {
      reply += lmgtfyReply;
    }

    if (reply.length > 0) {
      message.reply(reply);
    }
  }
});

export default client;

function sentimentIsNegative(sentiment: number) {
  return sentiment < 0;
}

function getLmgtfyLink(question: string) {
  const trimmedQuestion = question.slice(0, -1);
  const encodedQuestion = encodeURIComponent(trimmedQuestion);
  return `https://lmgtfy.app/?q=${encodedQuestion}`;
}
