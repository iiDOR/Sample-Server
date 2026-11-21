import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildApp } from './app.js';

test('GET /health returns ok', async () => {
  const app = buildApp();
  const res = await app.inject({ method: 'GET', url: '/health' });
  assert.equal(res.statusCode, 200);
  assert.equal(JSON.parse(res.body).status, 'ok');
  await app.close();
});
