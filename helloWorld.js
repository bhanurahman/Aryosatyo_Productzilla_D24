const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const reqUrl = req.url;
    const method = req.method;
    const { pathname, query } = url.parse(reqUrl, true)
    res.writeHead(200, { 'Content-Type' : 'application/json'});
    res.end(
        JSON.stringify({ 
            message: 'hello world',
            url: pathname,
            method,
            query,
        })
     );
});
const PORT = 4000
server.listen(PORT);

console.log(`server running on port ${PORT} `);