// const http = require("http");
// const server = http.createServer((request, response) => {
//     console.log(request.method);
//     console.log(request.url);
//     if (request.url === "/") {
//         response.end(
//             "<h1 style='color:#aaaaaa'>I'm running on port 5000, YEAH!</h1>"
//         );
//     } else if (request.url === "/about") {
//         response.end("<h1 style='color:green'>About Page!</h1>");
//     } else {
//         response.end("<h1 style='color:red'>page not found!</h1>");
//     }
// });
// server.listen(8000);


// const http = require("http");
// const server = http.createServer((request, response) => {
//     if (request.url === "/") {
//         response.writeHead(200, { "Content-Type": "text/html" });
//         response.end(
//             "<h1 style='color:#666'>You have reached the root URL</h1>"
//         );
//     } else if (request.url === "/admin") {
//         response.writeHead(200, { "Content-Type": "text/plain" });
//         response.end("You have reached the admin area");
//     } else {
//         response.writeHead(404, { "Content-Type": "text/plain" });
//         response.end("Not Found");
//     }
// });
// server.listen(8000);

const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Hey welcome here!</h1>");
        // res.end(req.url);
    } else if (req.url === "/restrictive") {
        res.writeHead(403, { "Content-Type": "text/html" });
        res.end("<h2>You can't get into here</h2>");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});
server.listen(8000);