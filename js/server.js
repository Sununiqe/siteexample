const http = require("http");

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    metod: 'GET'
}

const host = "localhost";

const port = "8000"


// http://localhost:8000

const requestListener = function (req, res)
{
res.writehead(200);
res.end('OK');


};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
console.log(`сервер запущен на http://${host}:${port}`)
});
