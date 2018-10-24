'use strict';

const http = require('http');
const parser = require('./lib/parser');
const cowsay = require('cowsay');

const requestHandler = (req, res) => {
  console.log(`${req.method} ${req.url}`);
  parser(req)

    .then(req => {
      console.log(req.method, req.parsed.pathname);
      if (req.method === 'GET' && req.parsed.pathname === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.write(`<!DOCTYPE html>
      <html>
             <head>
               <title> cowsay </title>  
             </head>
             <body>
                <header>
                <nav>
                  <ul> 
                    <li><a href="/cowsay?text=hello">cowsay</a></li>
                  </ul>
             </nav>
               <header>
              <main>
                <!-- project description -->
              </main>
     </body>
           </html>`);
        res.end();
        return;
      }
      if ((req.method === 'GET' && req.parsed.pathname === '/cowsay')) {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.write(`<!DOCTYPE html>
        <html>
          <head>
            <title> cowsay </title>  
          </head>
          <body>
            <h1> cowsay </h1>
            <pre>
              ${cowsay.say({ text: req.query.text })} 
            </pre>
          </body>
        </html>`);

        res.end();
        return;
      }
      else if (req.method === 'POST' && req.parsed.pathname === '/api.cowsay') {
        console.log('HEAR IS THE POST');
        
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.write(JSON.stringify(req.body));

        res.end();
        return;
      }
      else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.write('Resource Not Found');

        res.end();


      }
    })
    .catch(err => {
      let errObj = { error: err };
      console.error(err);
      res.writeHead(500);
      res.statusMessage = `SERVER ERROR`;
      res.write(JSON.stringify(errObj, res.statusMessage));
      res.end();
      return
    });
  };

  const app = http.createServer(requestHandler);
  module.exports = {
    start: (port, callback) => app.listen(port, callback),
    stop: (callback) => app.close(callback),
  };

