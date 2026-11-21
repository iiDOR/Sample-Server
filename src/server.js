import { buildApp } from './app.js';
import config from './config.js';

const app = buildApp();

const start = async () => {
  await app.listen({ port: config.port, host: config.host });
};

const stop = async (signal) => {
  app.log.info({ signal }, 'shutting down');
  await app.close();
  process.exit(0);
};

process.on('SIGTERM', () => stop('SIGTERM'));
process.on('SIGINT', () => stop('SIGINT'));

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
