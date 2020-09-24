const supertest = require('supertest');
const server = require('../server');
const db = require('../data/dbConfig');

afterAll(async () => {
  // Clean up mess by running seeds
  await db.seed.run();
  // Close database after tests to prevent warning
  await db.destroy();
});

describe('owner integration tests', () => {
  // Initialize token
  let token;

  beforeAll(async () => {
    // Get token before tests
    token = await getAccessToken();
  });

  it('GET /api/owner', async () => {
    const res = await supertest(server)
      .get('/api/owner')
      .set('Authorization', token);
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe('application/json');
    expect(res.body.fullName).toBe('John Doe');
  });
});

const loginCreds = {
  username: 'coolguy123',
  password: 'password'
};

// Return token from response after logging in
async function getAccessToken() {
  const res = await supertest(server).post('/api/auth/login').send(loginCreds);
  return res.body.token;
}
