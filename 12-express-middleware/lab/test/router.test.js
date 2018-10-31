// 'use strict';
// ///all the lines are from code review oct30th


// const superagent = require('superagent');
// const url = 'http://localhost:3000/api/v1/albums';
// const { start, stop } = require('../.../../src/app.js');

// beforeAll(() => start(3000));
// afterAll(() => stop());
// const sample = { title: 'test note', location: 'note' };


// const sample = {title: 'Test note', location:'Note created...'}
// describe('', () => {

//   describe('Test', () => {

//     it('should create anew album', (done) => {
//       superagent
//         .send(sample)
//         .then(respond => {
//           expect(response.body.title).toEqual(sample.title)
//           expect(response.body.location).toEqual(sample.location)
//           expect(response.status).toBe(200);
//           done();
//         });
//     });

//   });
//   describe('Test GET rout', () => {
//     it('should retrieve an album', (done) => {
//     .get(`${url}/${responseID}`)
//     .then(response => {

//       expect(response.body.location).toEqual(sample.location)
//     });
//     done();
//     });
//   });
   
//   it('should retrieve non of the notes before any notes have been created ', (done)=> {
//   superagent
//   .get(url);  
//   .then(response => {
//     expect(response.body).toEqual({});
//     done();
//   });
  
//   });
// });