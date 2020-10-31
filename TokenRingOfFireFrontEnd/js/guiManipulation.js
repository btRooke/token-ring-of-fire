
const cardPath = "/cards";

function showCard(card) {

    let mainElement = document.getElementById("main");
    mainElement.innerHTML = "";

    let cardElement = document.createElement("img");
    cardElement.setAttribute("class", "card");
    cardElement.setAttribute("src", `${cardPath}/${card}`);
    mainElement.appendChild(cardElement);
}

function addMessage(message) {
    let messageBox = document.getElementById("message-box");
    let messageElement = document.createElement("div");
    messageElement.setAttribute("class", "message");
    messageElement.innerHTML = message;
    messageBox.appendChild(messageElement);
}

function addButton(message, onclick) {
    let buttonBox = document.getElementById("options-box");
}

function addPlayer(name) {

    let playerBox = document.getElementById("players-box");

    let player = document.createElement("div");
    player.setAttribute("class", "player-box");
    player.setAttribute("id", name);

    let playerName = document.createElement("div");
    playerName.setAttribute("class", "player-name")
    playerName.innerHTML = name;

    player.appendChild(playerName);

    playerBox.appendChild(player);
}

function setAlertBox(message) {

    let alertBoxElement = document.getElementById("alert-box");
    alertBoxElement.innerHTML = message;

}

// ========================== DYNAMIC PAGE GENERATION STUFF BELOW HERE ============================================

function showStartPage() {
    showClearTitlePage();
    let mainGrid = document.getElementById("highest-grid");
    mainGrid.innerHTML += `<div class="join-create-container"><input type="text" id="username" onchange="setUsername(this.value)" placeholder="Username"><button onclick="showEnterGameCodeScreen()"> Join Game </button><button onclick="createRoom()"> Create Game </button></div>;`
}

function showEnterGameCodeScreen() {

    showClearTitlePage();
    let mainGrid = document.getElementById("highest-grid");
    mainGrid.innerHTML += `<div class="join-create-container"><input type="text" id="room" placeholder="Enter Game Code"><button onclick="joinGame()"> Submit</button></div>`
}

function showMainPage() {
    showClearTitlePage();
    let mainGrid = document.getElementById("highest-grid");
    mainGrid.innerHTML += `            <div id="options-box" class="options-grid-element">
    <div class="grid-element-title"> Options </div>
</div>

<div class="main-grid-element"> 
    <div id="main" class="subgrid-main"></div>
    <div id="alert-box" class="subgrid-messagebox alert-box"></div>
</div>

<div class="chat-grid-element">
     <div class="grid-element-title"> Chat </div>
     <div class="chat-box"> 
        <div id="message-box" class="chat-box-messages"></div>
        <form class="chat-input-container"> <!-- Is a form s.t. button will be activated on enter press. -->
            <input type="text" class="chat-text-input">
            <button class="chat-send-button"> Send </button>
        </form>
    </div>
</div>

<div id="players-box" class="players-grid-element"></div>
</div>`;
}

function showClearTitlePage() {
    let mainGrid = document.getElementById("highest-grid");
    mainGrid.innerHTML = "";
    mainGrid.appendChild(generateTitleElement());
}

function generateTitleElement() {
    
    let titleElement = document.createElement("div");
    titleElement.setAttribute("class", "title-grid-element");

    let titleTitle = document.createElement("div");
    titleTitle.setAttribute("class", "main-title");
    titleTitle.innerHTML = "Token Ring of Fire";
    titleElement.appendChild(titleTitle);

    return titleElement;
}


