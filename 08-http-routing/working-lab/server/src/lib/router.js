'use strict';

const parser = require('./parser.js');

const router = module.exports = {};


router.routes = {};


const methods = ['GET','PUT','PATCH','POST','DELETE'];

methods.forEach( (method) => {
  router.routes[method] = {};
  router[method.toLowerCase()] = function(path, callback) {
    router.routes[method][path] = callback;
  };

});

router.route = (req,res) => {
  console.log(`${req.method} ${req.url}`);

  return parser(req)
    .then(req => {
      console.log(router.routes);
   
      let handler = router.routes[req.method][req.parsed.pathname];
      if (handler) {
        return handler(req,res);
      }
      else {
        console.error('NOT_FOUND', req.parsed.pathname);
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.end(`Resource Not Found (${req.parsed.pathname})`);

      }
    })

    // POST 400 should respond with 'Bad Request'
    .catch(err => {
      console.error('NOT_FOUND', req.parsed.pathname);
      res.status = 400;
      res.statusMessage = 'Bad Request';
      res.write(`Resource Not Found (${req.parsed.pathname})`);
      res.end();
    });

};
