// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import logger from "./logger/logger";
import client from "./discord-client/client";

const main = async () => {
  logger.info('⌛ Connecting Discord client');
  client.login(process.env.DISCORD_TOKEN);
}

main().catch(err => {
  logger.error(err);
});
