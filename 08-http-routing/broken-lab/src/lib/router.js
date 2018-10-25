'use strict';

const parser = require('./parser.js');

const router = module.export = {};

router.routes = {};

const methods = ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'];

methods.forEach( (method) => {

// read class lab comments

  router.routes[method] = {};

  // Read lab comments
  router[method.toLowerCase()] = function(path, callback) {
    router.routes[method][path] = callback;
  };

});
  router.routes = (req,res) => {
    console.log(`${req.method} ${req.url}`);

    return parser(req)
    .then(req => {
      // see lab code

      let handler = router.routers[req.method][req.parsed.pathname];
      if(handler) {
        return handler(req,res);
      }

    })
    .catch(err => {
      console.error ('NOT_FOUND', req.parsed.pathname);
      res.status = 404;
      res.statusMessage = 'Not Found';
      res.write(`Resource Not Found (${req.parsed.pathname})`);
      res.end();
    });
  };
