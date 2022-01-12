const http = require("http");
const path = require("path");
const { stringify } = require("querystring");
const server = http.createServer((req, res) => {
    let file = "./public/css/style.css";
    console.log(__filename);
    console.log(__dirname);

    let rootPath = "/";
    let dirPath = "public/js";
    let basePath = "myscript.js";
    let lastPortion = path.basename(file);
    let directory = path.dirname(file);
    let extension = path.extname(file);
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.end(
    //     `<h1>Last Portion is:${lastPortion}.<br/> the The directory is${directory}.<br/> The extension of path is: ${extension}.</h1>`
    //   );

    let info = path.parse(file);
    console.log(info);
    res.writeHead(200, { "Content-Type": "text/plain" });
    //   res.end(path.join(__filename,"\n", __dirname));

    //   let result = path.join(__dirname, "public", req.url);
    //   res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(info.name);
});
server.listen(8000);