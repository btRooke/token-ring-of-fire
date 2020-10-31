let room = {};

const socket = io();

var username = null;

socket.on("userConnect", (response) => {
    room = response;
    console.log(room);
    refreshPlayerRow();
});

socket.on("roomCreated", (roomResponse) => {
    console.log(roomResponse.roomID);
    room = roomResponse;
    showMainPage();
    setAlertBox(roomResponse.roomID);
    addOption("Start Game", `startGame()`);
});

socket.on("usrMsg", (response) => {
    console.log(response);
    const {userName, message, gameID} = response;
    console.log(`${userName}: ${message}`);
    addMessage(`${userName}: ${message}`);
});

socket.on("joinedRoom", (roomResponse) => {
    showEnterGameCodeScreen();
    room = roomResponse;
    console.log("Joined the Game");
    showMainPage();
    setAlertBox(roomResponse.roomID);
    addOption("Start Game", `startGame()`);
});

socket.on("gameStarted", (randomUser) => {
    addOption("Pick Card", `pickCard()`);
});

socket.on("userPickedCard", ({username, card}) => {
    showCard(card.url);
    setAlertBox(`${card.name}: ${card.meaning}`);
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

function pickCard() {
    socket.emit("userPickCard", {username, gameID: room.roomID});
}






