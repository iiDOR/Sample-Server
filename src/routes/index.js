import health from './health.js';
import items from './items.js';

export default async function routes(app) {
  app.register(health, { prefix: '/health' });
  app.register(items, { prefix: '/items' });
}
