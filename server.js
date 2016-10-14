var express = require('express'); //String name of module

//Create the app
var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Express sever is up on Port 3000')
});