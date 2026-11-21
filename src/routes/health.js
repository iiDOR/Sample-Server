export default async function health(app) {
  app.get('/', async () => ({ status: 'ok', uptime: process.uptime() }));
}
