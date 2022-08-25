const http = require('http');
const port = 3000;
const hostname = "127.0.0.1";
const {
  renderContent
} = require("./service/renderContent");
const {
  renderStatus
} = require("./service/renderStatus");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/favicon.ico") return
  const myUrl = new URL(req.url, `http://${hostname}:${port}/`).pathname;
  res.writeHead(renderStatus(myUrl), {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  res.end(renderContent(myUrl));

})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})