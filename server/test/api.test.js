const request = require('supertest');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = require('../testApp');

beforeAll(async () => {
  // Ensure DB is clean
  await prisma.item.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

test('GET /api/hello', async () => {
  const res = await request(app).get('/api/hello');
  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty('message');
});

test('GET /api/items initially empty', async () => {
  const res = await request(app).get('/api/items');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test('POST /api/items creates item', async () => {
  const res = await request(app)
    .post('/api/items')
    .send({ name: 'test item' })
    .set('Accept', 'application/json');
  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty('id');
  expect(res.body.name).toBe('test item');
});
