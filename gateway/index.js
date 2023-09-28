const server = require("./src/server");

const port = process.env.PORT ?? 8000;

server.listen(port, () => {
  console.log("Gateway listening on port "+port);
});