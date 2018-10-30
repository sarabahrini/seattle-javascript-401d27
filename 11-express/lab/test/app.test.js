import request from 'supertest';
const { app } = require('../src/app.js');

describe('App Tests', () => {

  it('should create an album', (done) => {

    request(app)
      .post('/api/v1/albums')
      .send({ foo: 'boar'})
      .then((response => {
        expect(response.body).toEqual({ nada: 'nada' });
        done();

  }));
});
});
describe('Test api', () => {
  it('should return a status code 404 for routs that have not been registered', () => {

    request(app)
      .post('/unregistered')
      .send({ title: "graduation", location: "mexico" })
      .then((response => {
        expect(response.status).toEqual(404);
        done();

      }));
  });
});
  describe('Test GET', () => {
    xit('should respond with "not found" message and status code of 404 for valid requests made with an id that was not found', (done) => {
      request(app)
        .get('/api/v1/albums')
        .send({ id: 'ping' })
        .then((response => {
          expect(response.status).toEqual(404)
          expect(response.message).toBe("not found");
          done();
        }));
    });

    xit('should respond with "bad request" when no id was provided in the request for TEST 400', (done) => {});
    xit('should contain a response body for a request made with a valid id TEST 200', (done) => {});
  });
  describe('Test POST', () => {
    xit('should respond with "bad request" if no request body was provided or the body was invalid TEST 400', (done) => { });
    xit('should respond with the body content for for a post request with a valid body TEST 200', (done) => { });
  });