

const {rooms} = require("./socket");

const {io} = require("./server");


function pickCard(socket) {
    socket.on("userPickCard", ({username, gameID, index}) => {
        let cards = rooms.get(gameID).cards;

        io.sockets.to(gameID).emit("userPickedCard", {username, card: cards[index]});

        // Remove the card from the cards list.
        rooms.get(gameID).cards.splice(index, 0);
    });
}


function endTurn(socket) {
    socket.on("endTurn", (gameID, user) => {
        let room = this.rooms.get(gameID);

        let users = room.users.keys();

        let userIndex = ++room.userTurn % users.length;

        room.userTurn = userIndex;

        io.sockets.in(gameID).emit("userTurn", {user: users[userIndex]});
    });
}



exports.pickCard = pickCard;
exports.endTurn = endTurn;