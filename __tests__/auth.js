const supertest = require('supertest');
const server = require('../server');
const db = require('../data/dbConfig');

const OwnerRegCreds = {
  username: 'newUser',
  password: 'password',
  email: 'mail@gmail.com'
};

const OwnerLoginCreds = {
  username: 'newUser',
  password: 'password'
};

afterAll(async () => {
  // Clean up mess by running seeds
  await db.seed.run();
  // Close database after tests to prevent warning
  await db.destroy();
});

describe('auth integration tests', () => {
  it('POST /api/auth/register', async () => {
    const res = await supertest(server)
      .post('/api/auth/register')
      .send(OwnerRegCreds);
    expect(res.statusCode).toBe(201);
    expect(res.type).toBe('application/json');
    expect(res.body.username).toBe('newUser');
  });

  it('POST /api/auth/register (user already exists)', async () => {
    const res = await supertest(server)
      .post('/api/auth/register')
      .send(OwnerRegCreds);
    expect(res.statusCode).toBe(409);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toBe('Username already taken');
  });

  it('POST /api/auth/register (missing fields)', async () => {
    const res = await supertest(server)
      .post('/api/auth/register')
      .send({ username: 'newUser' });
    expect(res.statusCode).toBe(400);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toBe('Missing required fields');
  });

  it('POST /api/auth/login', async () => {
    const res = await supertest(server)
      .post('/api/auth/login')
      .send(OwnerLoginCreds);
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toBe('Welcome newUser!');
  });

  it('POST /api/auth/login (missing fields)', async () => {
    const res = await supertest(server).post('/api/auth/login').send({
      username: 'CoolDude'
    });
    expect(res.statusCode).toBe(400);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toBe('Username & password fields are required');
  });

  it('POST /api/auth/login (user not found)', async () => {
    const res = await supertest(server).post('/api/auth/login').send({
      username: 'CoolDude',
      password: 'password'
    });
    expect(res.statusCode).toBe(401);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toBe('User not found');
  });
});
