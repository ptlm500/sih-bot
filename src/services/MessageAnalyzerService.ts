import { Message } from "discord.js";
import natural, { PorterStemmer } from "natural";
import logger from "../logger/logger";

class MessageAnalyzerService {
  private _sentenceTokenizer: natural.SentenceTokenizer;
  private _tokenizer: natural.WordTokenizer;
  private _sentimentAnalyzer: natural.SentimentAnalyzer;

  constructor() {
    this._sentenceTokenizer = new natural.SentenceTokenizer();
    this._tokenizer = new natural.WordTokenizer();
    this._sentimentAnalyzer = new natural.SentimentAnalyzer("English", PorterStemmer, "afinn");
  }

  getSentiment(message: Message): number {
    const tokens = this._tokenizer.tokenize(message.content);
    const sentiment = this._sentimentAnalyzer.getSentiment(tokens);
    logger.debug(`[MessageAnalyzerService.getSentiment] detected sentiment: ${sentiment}`, message);
    return sentiment;
  }

  getQuestions(message: Message): string[] {
    const sentences = this._sentenceTokenizer.tokenize(message.content);

    return sentences.filter(isQuestion);
  }
}
function isQuestion(sentence: string) {
  return sentence.substr(sentence.length - 1) === '?';
}

export default MessageAnalyzerService;
