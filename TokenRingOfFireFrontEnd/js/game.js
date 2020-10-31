
const socket = io();

let room = {};

let username = null;

socket.on("userConnect", (response) => {
    room = response;
    console.log(room);
});

socket.on("roomCreated", (roomResponse) => {
    console.log(roomResponse.roomID);
    room = roomResponse;
});

socket.on("usrMsg", (response) => {
    const {userName, message} = response;
    console.log(`${userName}: ${message}`);
});

socket.on("failedJoin", () => console.log("Room does not exist!"));
socket.on("userAlreadyExists", () => console.log("The user already exists"));

function joinGame() {
    username = document.getElementById("username").value;
    let roomID = document.getElementById("room").value;

    socket.emit("joinRequest", {username, roomID});
}

function createRoom() {
    username = document.getElementById("username").value;
    socket.emit("createRoom", username);
}

function sendMessage() {
    let msg = document.getElementById("message").value;
    document.getElementById("message").value = "";

    socket.emit("usrMsg", {username, message: msg, gameID: room.roomID})
}






