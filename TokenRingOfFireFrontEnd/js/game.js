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
});

socket.on("usrMsg", (response) => {
    console.log(response);
    const {username, message} = response;
    console.log(`${username}: ${message}`);
    addMessage(`${username}: ${message}`);
});

socket.on("joinedRoom", (roomResponse) => {
    showEnterGameCodeScreen();
    room = roomResponse;
    console.log("Joined the Game");
    showMainPage();
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

function parseCookie() {
    let pairs = document.cookie.split(";");

    let obj = {};

    for (let pair of pairs) {
        let keyVal = pair.split("=");
        obj[keyVal[0]] = keyVal[1];
    }

    return obj;
}






