/**
 * Created by Vk on 21/3/2017.
 */
/**
 * Created by hmspl.
 */
// Import Common Component
var express = require('express');
var http = require('http');
var app = express();
var path = require('path');
//Create and setup environments our expitemDesress application
app.set('port', process.env.PORT || 1121);


app.use(express.static(path.join(__dirname, '')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './', 'index.html'));
});
//   will RemoveHappy Mornings(F) node_modules in static routes .
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
