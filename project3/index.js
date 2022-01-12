//1-readFile 2-mkdir 3-rmdir 4-writeFile 5-unlink
//fs = file system
// const fs = require("fs")
// let fileToRead = path.join(__dirname, "myfiles");

// fs.readFile(fileToRead, "utf-8", function(err, content) {
//     if (err) throw err;
//     console.log(content);
// });



// // 1 - public
// fs.mkdir(path.join(__dirname, "public"), (err) => {
//     if (err) throw err;
//     console.log("folder public is created");
// });
// // 2 - public / css
// fs.mkdir(path.join(__dirname, "public", "css"), (err) => {
//     if (err) throw err;
//     console.log("folder css of public  is created");
// });
// // 2.1 - public / css: file
// fs.writeFile(
//     path.join(__dirname, "public", "css", "style.css"),
//     "content is here", { encoding: "utf-8" },
//     (err) => {
//         if (err) throw err;
//         console.log("file of  css is created");
//     }
// );
// // 3 - public / scripts
// fs.mkdir(path.join(__dirname, "public", "scripts"), (err) => {
//     if (err) throw err;
//     console.log("folder script of public is created");
// });
// // 3.1 - public / scripts: file
// fs.writeFile(
//     path.join(__dirname, "public", "scripts", "script.js"),
//     "", { encoding: "utf-8" },
//     (err) => {
//         if (err) throw err;
//         console.log("file of script  is created");
//     }
// );

// // 4 - public: file
// fs.writeFile(
//     path.join(__dirname, "index.html"),
//     `
//   <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>my website</title>
// </head>
// <body>
//     <h1>welcome to my website</h1>
// </body>
// </html>
//   `, { encoding: "utf-8" },
//     (err) => {
//         if (err) throw err;
//         console.log("file of public  is created");
//     }
// );

const http = require("http");
const path = require("path");
const fs = require("fs");
const server = http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content)
    })
})
server.listen(9000)
