const server = require("./src/server");

const { character } = require('./src/database');

character.list().then(res => console.log(res));

const port = process.env.PORT ?? 8004;

server.listen(port, () => {
  console.log("Server listening on port " + port);
});