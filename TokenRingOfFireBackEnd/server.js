import app from "express";
const http = require("http").Server(app);

const io = require("socket.io")(http);

users = new Map();

io.on("connection", (socket) => {

    socket.on("setUsername", function(data) {
        if (users.get(data) !== undefined) {
            socket.emit("userExists", `${data} username is taken!`);
        } else {

        }
    });

});
