// E2E Test
const request = require('supertest');
const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for Books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });
  afterAll(async () => {
    await server.close();
    await database.collection('books').drop();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list of books', async () => {
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book1',
          year: 1995,
          author: 'pam',
        },
        {
          name: 'Book2',
          year: 1996,
          author: 'jim',
        },
      ]);
      request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
        // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
