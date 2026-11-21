import Fastify from 'fastify';
import cors from '@fastify/cors';
import sensible from '@fastify/sensible';
import config from './config.js';
import routes from './routes/index.js';

export function buildApp() {
  const app = Fastify({
    logger: {
      level: config.logLevel,
      ...(config.nodeEnv === 'development' && {
        transport: { target: 'pino-pretty', options: { colorize: true } },
      }),
    },
  });

  app.register(cors);
  app.register(sensible);
  app.register(routes);

  return app;
}
