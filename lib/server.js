const http = require ('http');

const server = {};

server.db = null;

server.httpServer = http.createServer((request, response) => {
    console.log(request.method, ':', request.url);

    request.on('data', () => {
        console.log('Dalinis uzklausos gavimas');
    })
    
    request.on('end', () => {
        console.log('Serveris gavo visa uzklausa');
        response.end('Sveiki atvyke i musu Countries API page');
    })
});

server.routes = {};

server.api = {};

server.init = () => {
    console.log('Server is starting...');
    const port = 3000;
    server.httpServer.listen(port, () => {
        console.log(`Your server is working on http://localhost:${port}`);
    })
}

module.exports = server;