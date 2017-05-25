const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api', function(req,res){
  res.send('Hello from API');
});

app.use('/:id', function(req,res){
  res.statusCode(404);
  res.statusMessage("404 Not Found");
});

app.listen(3000, function(){
  console.log("Listening on Port 3000");
});
