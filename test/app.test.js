const request = require('supertest');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));

test('GET / должен вернуть страницу', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});