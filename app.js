const express = require('express');
const app = express();
const User = require('./User');  

const PORT = 8080;

app.get('/', function(req,res){
  res.send("Hi Thexe");
});

app.get('/users', User.readAll);

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});


