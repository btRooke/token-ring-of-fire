let room = {};

const socket = io();

var username = null;

socket.on("userConnect", (response) => {
    room = response;
    console.log(room);
});

socket.on("roomCreated", (roomResponse) => {
    console.log(roomResponse.roomID);
    room = roomResponse;
    showMainPage();
    setAlertBox(roomResponse.roomID);
    addOption("Start Game",);
});

socket.on("usrMsg", (response) => {
    const {userName, message} = response;
    console.log(`${userName}: ${message}`);
    addMessage(`${userName}: ${msg}`);
});

socket.on("joinedRoom", (roomResponse) => {
    showEnterGameCodeScreen();
    room = roomResponse;
    console.log("Joined the Game");
    showMainPage();
    setAlertBox(roomResponse.roomID);
});

socket.on("gameStarted", (randomUser) => {

});

socket.on("failedJoin", () => console.log("Room does not exist!"));
socket.on("userAlreadyExists", () => console.log("The user already exists"));

function joinGame() {
    let roomID = document.getElementById("room").value;
    socket.emit("joinRequest", {username, roomID});
}

function createRoom() {
    socket.emit("createRoom", username);
}

function setUsername(value) {
    username = value;
}

function startGame() {
    socket.emit("startGame", room.roomID);
}





