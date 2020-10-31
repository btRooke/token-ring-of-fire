let socket = io();

console.log("bruh");

function setUsername() {
    socket.emit("setUsername", 
                document.getElementById("username").value);

    socket.on("userExists", (data) => console.log(`${data}`);
    socket.on("userAdded", (data) => console.log(`${data}`));
}