const http = require("http");
// console.log(http.STATUS_CODES['200']) ok
// console.log(http.STATUS_CODES['500']) internal server error
// console.log(http.STATUS_CODES['404']) not found
// console.log(http.STATUS_CODES['400']) bad request


const serve = http.createServer((request,response)=>{
    response.end("hello there")
});
serve.listen(9000)
