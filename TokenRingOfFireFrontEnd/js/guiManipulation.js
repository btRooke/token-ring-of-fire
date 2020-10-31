
function showCard(cardPath) {
    let mainElement = document.getElementById("main");
    mainElement.innerHTML = "";
    let cardElement = document.createElement("img");
    cardElement.setAttribute("src", `assets/card_images/${cardPath}`);
    mainElement.appendChild(cardElement);
}