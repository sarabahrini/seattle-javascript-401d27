const express = require ('express');

const app = express();



app.get('/ping', (req,res) =>{
  res.send("pong");
})


app.listen(3000, function(){
console.log("Let me know what to do on PORT 3000")
})

