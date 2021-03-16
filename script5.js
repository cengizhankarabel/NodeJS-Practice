var http = require('http'); //http is a module
var server = http.createServer(engine);

server.listen(1337, function(){
  console.log('server was hit by a request');
})

// server.createServer(engine).listen(1337); //leets

function engine(request, response){
  //console.log(response);
    response.writeHead(200, {'Content-Type': 'text/plain', 'blablabla': 'from Cengizhan.com'});

    response.end('Hey there, from the server! :D. Reqest from page: '+ request.url);
}
