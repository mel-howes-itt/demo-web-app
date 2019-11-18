const http = require('http');
var header = '<!doctype html><html>' +
			 '<head>';
var body =  '</head><body><div id="container">' +
 '<div id="title"><h1>Hello World</h1></div>' +
 '<p>Test one pager for security testing. </p>';
var endBody = '</div></body></html>';

const server = http.createServer((req, res) => {
  res.write(header);
  res.write(body);
  res.end(endBody);
});

server.listen(global.gConfig.exposedPort);
