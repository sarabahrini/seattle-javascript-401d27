'use strict';


module.exports = (bmp)=> {
console.log('Transforming bitmap into orange', bmp);

if(bmp.type !== 'BM'){
  throw new Error('It needs to be BMP file!');
}
if(bmp.type !== 8){
  throw new Error('It need to be an 8-bit image!');
}
let start = 14 +bmp.dibheadersize;
let end = bmp.pizelarraystart;
for (let i= start; i<end; i+=4){
let avg = (bmp.buffer[i] + bmp.buffer[i+1] + bmp.buffer[i+2])/3;
bmp.buffer[i] = 0;
bmp.buffer[i+1] = avg/2;
bmp.buffer[i+2] = avg;
}
};

