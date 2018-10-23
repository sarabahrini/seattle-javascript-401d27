![cf](https://i.imgur.com/7v5ASc8.png) Lab 07: Vanilla HTTP Server
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Create a PR to your master from your working branch.
* Submit on canvas:
  * a question and observation
  * how long you spent
  * link to your pull request
 
## Configuration 
Configure the root of your lab directory with the necessary files and directories. Thoughtfully name and organize any aditional configuration or module files. E.g.
* **README.md** - contains documentation
* **.env** - contains env variables (should be git ignored)
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **.travis.yml** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `lint` script for running eslint (eslint **/*.js)
  * create a `test` script for running tests
  * create a `start` script for running your server
* **index.js** - the entry point for your application
* **src/** - contains your core application files and folders
* **src/app.js** - (or main.js) contains your core application bootstrap
* **src/lib/** - contains module definitions
* **\_\_test\_\_/** - contains unit tests

## Feature Tasks  
For this assignment you will be building a HTTP server. 

## Modularize your code by area of responsibility
### E.g.
#### Body Parser Module
#### URL Parser Module
#### Server Module 
The server module is responsible for creating an http server defining all route behavior and exporting an interface for starting and stoping the server. It should export an object with `start` and `stop` methods. The start and stop methods should each return a promise that resolves on success and rejects on error. 
###### GET /
When a client makes a GET request to / the server should send back html with a project description and an anchor to /cowsay.
``` html
<!DOCTYPE html>
<html>
  <head>
    <title> cowsay </title>  
  </head>
  <body>
   <header>
     <nav>
       <ul> 
         <li><a href="/cowsay">cowsay</a></li>
       </ul>
     </nav>
   <header>
   <main>
     <!-- project description -->
   </main>
  </body>
</html>
```

###### GET /cowsay?text={message}
When a client makes a GET request to /cowsay?text={message} the server should parse the querystring for a text key. It should then send a rendered HTML page with a cowsay cow speaking the value of the text query. If their is no text query the cow message should say `'I need something good to say!'`. 
``` html
<!DOCTYPE html>
<html>
  <head>
    <title> cowsay </title>  
  </head>
  <body>
    <h1> cowsay </h1>
    <pre>
      <!-- cowsay.say({text: req.query.text}) -->
    </pre>
  </body>
</html>
```

###### GET /api/cowsay?text={message}
When a client makes a POST request to /api/cowsay it should send JSON that includes `{"text": "<message>"}`. The server should respond with a JSON body `{"content": "<cowsay cow>"}`.  

A response for a valid Requests should have a status code of 200 and the JSON body   
``` json 
{
  "content": "<cowsay cow text>" 
}
```

A response for a invalid Requests should have a status code of 400 and the JSON body...
```
{
  "error": "invalid request: text query required"
}
```

###### POST /api/cowsay 
When a client makes a POST request to /api/cowsay it should send JSON that includes `{"text": "<message>"}`. The server should respond with a JSON body `{"content": "<cowsay cow>"}`.

| Request | Response Status Code | Response Type | Response Body |
| -- | -- | -- | -- |
| With out a body | 400 | JSON | `{"error": "invalid request: body required"}` |
| With out text property on the body | 400 | JSON | `{"error": "invalid request: text query required"}` |
| With text query | 200 | JSON | `{"content": "<cowsay cow text>"}` |


## Stretch Goals
- Add the ability to change the cowfile on GET /cowsay, GET /api/cowsay, and POST
/api/cowsay - **ex: dragon, sheep, etc**
- Use fs module to read html stored in separate file(s)
