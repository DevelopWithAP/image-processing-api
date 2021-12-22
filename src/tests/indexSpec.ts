/** Contains test for index.ts */
import app from '../index';
import request from 'supertest';

describe('Loading express server', () => {
  it('should respond with status 200 OK', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((error) => (error ? done.fail(error) : done()));
  });
});
