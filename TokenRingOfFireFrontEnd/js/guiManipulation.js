
const cardPath = "/cards";


function showStartPage() {

    showClearTitlePage();
    let mainGrid = document.getElementById("highest-grid");
    mainGrid.innerHTML += `<div class="join-create-container"><input type="text" placeholder="Username"><button onclick="showEnterGameCodeScreen()"> Join Game </button><button> Create Game </button></div>;`

}

function showEnterGameCodeScreen() {
    showClearTitlePage();
    let mainGrid = document.getElementById("highest-grid");
    mainGrid.innerHTML += `<div class="join-create-container"><input type="text" placeholder="Enter Game Code"><button> Submit</button></div>`
}

function showMainPage() {

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


function showCard(cardPath) {
    let mainElement = document.getElementById("main");
    mainElement.innerHTML = "";
    let cardElement = document.createElement("img");
    cardElement.setAttribute("src", `assets/card_images/${cardPath}`);
    mainElement.appendChild(cardElement);
}