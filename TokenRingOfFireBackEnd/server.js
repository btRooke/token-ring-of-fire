const express = require("express");


const app = express();


const http = require("http").Server(app);

const io = require("socket.io")(http);

app.use("/cards/", express.static("../TokenRingOfFireFrontEnd/assets/card_images/"));

app.use("/", express.static("../TokenRingOfFireFrontEnd/"));

app.get("/", function(req, res) {
    res.sendFile("index.html", {root: "../TokenRingOfFireFrontEnd/"});
});


const PORT_NUM = 21906;


http.listen(PORT_NUM, function() {
    console.log(`listening on ${PORT_NUM}`);
});


exports.io = io;