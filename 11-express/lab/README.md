# 05 - Buffers-Bitmap Transformer

This is a Command Line Interface (CLI) that allows a user to enter a filename and a transformation option.  The system will then return a transformed image based on the users inputed parameters.

## Challenge
The solution requires the ability to receive two arguments entered from the CLI.  The arguments will be interpreted by the code and return the requested results.  The code should be modularized and follow single responsibility principles (SRP).  The solution will require access to the file system for basic file I/O.

## index.js
This is the primary js file and is the one that will receive the users arguments from the CLI. The following is the basic flow of the code:

1. Receive the arguments from the CLI.  
2. Create an instance of the ```Bitmap(arity 1)``` class using the [bmp-parse.js](libs/bmp-parse.js)
3. Starts the process of transformation by invoking ```transformWithCallback (arity 1)```.  This function receives the bitmap instance as it's only argument.
4. The app exists after the completion of ```transformWithCallback```.

## index.js functions

### transformWithCallback (arity 1)
* receives a bitmap instance.
* reads the requested file from the filesystem using the [readFile](libs/read-file.js) module.
* passes the results of the callback into the ```parseBitmap``` method of the instance and verifies the file is actually a bitmap.  If not, it notifies the user and exists the app.
* After the bitmap is confirmed, the ```transform``` function is invoked to begin the requested transformation.
* The newly transformed instance is returned and passed into the [writeFile](libs/write-file.js) module.
* After the module returns it's results, the user is notified that the file has been transformed and what the new file name is.

### transform (arity 3)
* receives the instance of the bitmap, the requested operation, and a callback)
* uses an object called ```transforms``` as a dictionary to look up the name of the requested method in the form of ```transforms[operation](bitmap)```.  There are three available transformation at this time:
  1. [green](libs/green.js): Transform the color blue to green.
  2. [negative](libs/negative.js): Makes an image negative.
  3. [visor](libs/makeVisor.js): Places a "visor" of the eyes (i.e., [Geordi LaForge](https://www.writeups.org/star-trek-levar-burton-geordi-laforge/) from STNG) - its a work in progress and is not scalable.

* upon completion of the requested method, a modified instance of the bitmap is returned and the extension of the filename is updated to reflect the requested change. E.g., when the negative transformation is requested, ```filename.bmp``` becomes ```filename .negative.bmp```.
* the callback then returns the transformed instance.

## Export Modules

### bmp-parse.js
This module creates an instance of the file using a class called ```Bitmap```. The constructor receives the user provided file name as it's only argument.  It then creates an instance of Bitmap that contains the following:

* Property: ```file``` - which is assigned the value of the passed fileName argument.
* Property: ```newFile``` - which receives the initial value of null and will later
* Method: ```parseBitmap (arity 2)``` - this method receives a file buffer and a callback It's purpose is to return the instance with the following parsed information about the passed file buffer:
  * Type - used to confirm a valid bitmap file
  * fileSize - informational at this point
  * bitsPerPixel - useful in understanding the color chart. necessary to understand when scaling to 24bit bitmap images.
  * height - dimensional height of the file.
  * width - dimensional width.
  * sizeOfTheDIBHeader - length of the DIB header and is critical in calculating the start of the color chart.
  * ColorChart - provides the offset for the color chart and is equal to the length of the header (14) + sizeOfTheDIBHeader + optional headers (12)
  * pixels - the starting offset of the actual image pixels.

![cf](https://i.imgur.com/7v5ASc8.png) 11: Express and Babel
======

### Submission Instructions
 * Work in a fork of this repository
 * Work in a branch on your fork
 * Create a PR to your master from your working branch.
  * Submit on canvas:
   * a question and observation
   * how long you spent
   * link to your pull request
   
 
 ## Configuration 
 Configure the root of your repository with the following files and directories. Thoughfully name and organize any aditional configuration or module files.
 * **README.md** - contains documentation
 * **.env** - contains env variables (should be git ignored)
 * **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
 * **.eslintrc** - contains the course linter configuratoin
 * **.eslintignore** - contains the course linter ignore configuration
 * **package.json** - contains npm package config
   * create a `lint` script for running eslint (eslint **/*.js)
   * create a `test` script for running tests
   * create a `start` script for running your server
 * **index.js** - the entry point for your application
 * **src/** - contains your core application files and folders
 * **src/app.js** - (or main.js) contains your core application bootstrap
 * **src/lib/** - contains module definitions
 * **\_\_test\_\_/** - contains unit tests

## Learning Objectives  
* students will be able to create a single resource API using the express framework

## Requirements

#### Feature Tasks
* implement all code using ES6 Modules (import/export) using Babel
* create an HTTP server using `express`
* create a object constructor that creates a _simple resource_ with at least 3 properties
  * it can **not** have the same properties as the in-class sample code (other than the `id`)
  * a unique `id` property should be included *(node-uuid)*
  * include two additional properties of your choice
* use the JSON parser included with the `body-parser` module as a middleware component to parse the request body on `POST` and `PUT` routes
* persist your API data using the storage module and file system persistence

#### Server Endpoints
* **`/api/vi/resource-name`**
* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request to create a new resource
* `GET` request
 * pass `/:id` as a route parameter to **GET** a specific resource (as JSON)
* `DELETE` request
 * pass `/:id` as a route parameter to **DELETE** a specific resource (as JSON)
 * this should return a 204 status code with no content in the body

## Testing
All modules (passed?)  with ```? coverage```.  The following tests were performed:

* write a test to ensure that your api returns a status code of 404 for routes that have not been registered
* write tests to ensure the `/api/simple-resource-name` endpoint responds as described for each condition below:
 * `GET`: test 404, it should respond with 'not found' for valid requests made with an id that was not found
 * `GET`: test 400, it should respond with 'bad request' if no id was provided in the request
 * `GET`: test 200, it should contain a response body for a request made with a valid id
 * `POST`: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
 * `POST`: test 200, it should respond with the body content for a post request with a valid body
