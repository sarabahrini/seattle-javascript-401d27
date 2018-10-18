
//////single path example that JB gave us in the middle of the lab:

const reader = require('./reader.js');

// describe('Single Reader Module', () => {
// it ('should het hola at conent of single file', (done) => {
//   reader(path1, (err,contents) => {
//     expect(contents).toBe('hola');
//     done();
//   })
// });
// });

// describe('single Reader Module', () => {
//   it('should get hola as contents of single file', (done) => {

//     const jobDon = (err,contents) => {
//       expect(contents).toBe('hola');
//     done();
//     };


//   reader('./hi.txt', jobDon);
// });
// });

/////


describe('Test the reader for bad input', () => {

  it('should return an error if the path is invalid.', () => {

    const actual = reader('../data/invalidPath');
    const expected = `Error: EISDIR: illegal operation on a directory, read '../data/invalidPath'`;

    expect(actual).toBe(expected);

  });

  it('should return an error if the array is empty.', () => {

    const actual = reader('');
    const expected = `Error: EISDIR: illegal operation on a directory, read undefined`;

    expect(actual).toBe(expected);

  });

});

xdescribe('Test the reader for proper return order', () => {

  it('should verify that the return order is eeine, meenie, moe', () => { });


});