const request = require('supertest');
const server = require('../index');

describe('index', () => {
  describe('[GET] / endpoint', () => {})
  test('the db env is development', () => {
    expect(process.env.DB_ENV).toBe('development');
  });

  test(' GET should return 200', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
  });

  test('test server content json ', () => {
    return request(server)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  test('welcome message displayed ', () => {
    return request(server)
      .get('/')
      .expect(200)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body.message).toBe('Welcome to the Dev Coach API');
        expect(res.body).toHaveProperty('message');
  });
})
  
});