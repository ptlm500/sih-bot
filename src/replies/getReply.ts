import Sentiment from "../entities/Sentiment";
import getLmgtfyLinks from "./lmgtfy/getLmgtfyLinks";
import getLmgtfyReply from "./lmgtfy/getLmgtfyReply";
import getSentimentReply from "./sentiment/getSentimentReply";

const CONNECTOR_MESSAGE = "But don't worry";

function getReply(sentiment: Sentiment, questions: string[]): string {
  let reply = "";

  reply = getSentimentReply(sentiment);

  const links = getLmgtfyLinks(questions);
  const lmgtfyReply = getLmgtfyReply(links);

  if (reply && lmgtfyReply) {
    reply += ` ${CONNECTOR_MESSAGE}, ${lmgtfyReply}`
  } else if (lmgtfyReply) {
    reply += lmgtfyReply;
  }

  return reply;
}

export default getReply;
