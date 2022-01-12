//1-readFile  2-createReadStream
//we will use stream for big files
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  //   fs.readFile(
  //     path.join(__dirname, "myfiles", "file.txt"),
  //     "utf-8",
  //     (err, content) => {
  //       if (err) throw err;
  //       res.end(content);
  //     }
  //   );
//   "text/javascript"
  const stream = fs.createReadStream(
    path.join(__dirname, "myfiles", "style.css"),
    "UTF-8"
  );
  res.writeHead(200, { "Content-Type": "text/css" });
  stream.pipe(res);
});
server.listen(9000);

// req.url.match("\.css$") :($) file end with .css
