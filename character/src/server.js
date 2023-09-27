const express = require("express");
const morgan = require("morgan");
const { handlerError } = require("./utils");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes"));

server.use(handlerError);

module.exports = server;