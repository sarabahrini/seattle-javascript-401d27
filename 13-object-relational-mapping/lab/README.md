# Mongoose Middleware

## Overview
This application allows server to receive http request and pass it to the database and respond with received response from Mongo database.

## How to run the application
- Clone the repository 
- Ensure Node.js is installed on your system
- Ensure Mongo is running on your system
- Navigate to the lab in your cloned repository and install the dependencies (in Terminal write npm i):
  - In Terminal in Lab folder copy paste this:
    curl -O https://raw.githubusercontent.com/codefellows/seattle-javascript-401d27/master/configs/express-apps/.eslintignore && curl -O https://raw.githubusercontent.com/codefellows/seattle-javascript-401d27/master/configs/express-apps/.eslintrc.json && curl -O https://raw.githubusercontent.com/codefellows/seattle-javascript-401d27/master/configs/express-apps/.gitignore && curl -O https://raw.githubusercontent.com/codefellows/seattle-javascript-401d27/master/configs/express-apps/.gitattributes
  - type these commands in Terminal to get the files set up:
    - npm i bable-register 
    - npm i bable-parser 
    - npm i bable-eslint 
    - npm i express uuid dotenv jest
    - npm i -D jest eslint
  - Make sure script has:
    - "test": "jest --verbose",
    - "lint": "eslint **/*.js"
    - "start": "node index.js"

- Create .env file and set:
   - PORT=3000 
   - MONGODB_URI=mongodb://localhost:27017/albums

- Open a Terminal tab in your lab type npm start or node index.js or nodemon. Which I prefer nodemon so you keep server running and you don't need to refresh it. 


## Testing instructions


   


