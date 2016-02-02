var http = require('http'), url = require('url');
var fs = require('fs');
var PORT = 8080;

var handleRequest = function (req, res) {
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/home':
      display_home(req, res);
      break;
    case '/favorite_food':
      display_favorite_food(req, res);
      break;
    case '/favorite_movies':
      display_favorite_movies(req, res);
      break;      
    case '/favorite_frameworks':
      display_favorite_frameworks(req, res);
      break;
    default:
      display_404(req, res);
      break;
  }
}

var display_home = function(req, res) {
  fs.readFile("home.html", "UTF8", function(err, data) {
    if (err) { throw err }
    else {
    var readFile = data;
    console.log(readFile);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(readFile);
    };
  });
};
var display_favorite_food = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(myHTML);
}
var display_favorite_movies = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(myHTML);
}
var display_favorite_frameworks = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(myHTML);
}

// Creating the server
var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});