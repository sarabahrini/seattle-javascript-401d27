# 03: Asyncronus Callbacks

## Travis Badge
N/A

## reader.js 

In the lib/ directory create a reader.js module that exports a single function. The reader module should take an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback. The string data should be in the same order as the file path data (mapped). If an error occurs, it should immediately reject the error using the callback and stop execution.

The file reader module should have the function signature (paths, callback) => undefined
On failure, the file reader module should invoke the callback with an error callback(error)
On success, the file reader module should invoke the callback with null as the first parameter and the result as the second parameter - callback(null, result)

### reader() fucntion export
* Airty of 2 - receives a path and a callback called doneReadingFiles
* defines a callback called gotTheFile that receives err and filedate


