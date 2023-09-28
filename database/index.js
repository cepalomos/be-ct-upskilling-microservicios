const server = require("./src/server");

const port = process.env.PORT ?? 8004;

server.listen(port, () => {
  console.log("Server listening on port " + port);
});