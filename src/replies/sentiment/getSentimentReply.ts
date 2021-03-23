import Sentiment from '../../entities/Sentiment';
import logger from '../../logger/logger';
import { getRandomReply } from './replies';

function getSentimentReply(sentiment: Sentiment): string {
  if (sentiment.isNegative()) {
    logger.debug(`😢 Detected negative sentiment ${sentiment.value}`);
    return getRandomReply();
  }

  logger.debug(`🤐 Detected positive or neutral sentiment ${sentiment.value}`);
  return "";
}

export default getSentimentReply;
