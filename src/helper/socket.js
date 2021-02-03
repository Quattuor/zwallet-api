const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const socketConnect  = (io) => {
  io.on("connection", (socket) => {
    const id = socket.handshake.query.id;
    console.log("New User Has Connected ", id, socket.id);
    socket.join(id);
  });
}

module.exports = {io, server, app, express, socketConnect}