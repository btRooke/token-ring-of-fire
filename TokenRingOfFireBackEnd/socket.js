const {io} = require("./server.js");
const uuid = require("uuid");


const rooms = new Map();


/**
 * This class represents a single user.
 * We need the unique name of the client
 * and the unique server ID of the room.
 */
class User {
    constructor(name, room) {
        this.name = name;
        this.server = room;
    }
}

/**
 * This class represents a single Room
 * Maps all of the users.
 */
class Room {
    constructor(id) {
        this.id = id;
        this.users = new Map(); // Map<String, User>
        this.userTurn = null;
        this.gameStarted = false; 
    }

    addUser = (user) => {
        this.users.set(user.name, user);
    }

    containsUser = (username) => {
        return this.users.has(username);
    }

}


function createRoom(socket) {
    socket.on("createRoom", (username) => {       
        let room = new Room(uuid.v4());

        room.addUser(new User(username, room));

        rooms.set(room.id, room);
        socket.join(room.id);
        socket.emit("roomCreated", {roomID: room.id, users: [username]});
    });
}

function joinRoom(socket) {
    socket.on("joinRequest", ({username, roomID}) => {
        if (rooms.has(roomID)) {
            let room = rooms.get(roomID);

            if (room.containsUser(username)) {
                socket.emit("userAlreadyExists");
                return;
            }

            socket.join(roomID);
            socket.emit("joinedRoom");
            room.addUser(new User(username, roomID));  
            
            
            io.to(roomID).emit("userConnect", {roomID, users: getUsers(roomID)});
        } else {
            socket.emit("failedJoin");
        }
    });
}


function startGame(socket) {
    socket.on("startGame", (gameID) => {
        if (rooms.has(gameID)) {
            io.to(gameID).emit("startGame");
            
            let room = rooms.get(gameID);

            let users = users.keys();
            
            let randomUser = users[Math.floor(Math.random() * users.length)];

            room.userTurn = room.users.get(randomUser);

            io.to(roomID).emit("gameStarted", randomUser);
        }
    });
}


function getUsers(roomID) {
    if (!rooms.has(roomID))
        return null;

    let users = rooms.get(roomID).users.keys();
    
    let usernames = [];

    for (let user of users) {
        usernames.push(user);
    }

    return usernames;
}

function onChat(socket) {
    socket.on("usrMsg", (userObject) => {
        const {userName, message, gameID} = userObject;
        socket.to(gameID).emit("usrMsg", {userName, message});
    });
}


function pickCard() {
    
}


const events = [createRoom, joinRoom, startGame, onChat];


users = new Set();

// When the client connects.
io.on("connection", (socket) => {
    events.forEach(event => event(socket));
});



