const items = new Map();
let nextId = 1;

export default async function itemsRoute(app) {
  app.get('/', async () => Array.from(items.values()));

  app.get('/:id', async (req, reply) => {
    const item = items.get(Number(req.params.id));
    if (!item) return reply.notFound();
    return item;
  });

  app.post('/', {
    schema: { body: { type: 'object', required: ['name'], properties: { name: { type: 'string' } } } },
  }, async (req, reply) => {
    const item = { id: nextId++, name: req.body.name };
    items.set(item.id, item);
    return reply.code(201).send(item);
  });

  app.put('/:id', {
    schema: { body: { type: 'object', required: ['name'], properties: { name: { type: 'string' } } } },
  }, async (req, reply) => {
    const item = items.get(Number(req.params.id));
    if (!item) return reply.notFound();
    item.name = req.body.name;
    return item;
  });

  app.delete('/:id', async (req, reply) => {
    if (!items.delete(Number(req.params.id))) return reply.notFound();
    return reply.code(204).send();
  });
}
