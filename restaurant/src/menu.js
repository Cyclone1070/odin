export { menuClick };
function menuClick() {
    let info = document.querySelector(".info");
    let salad = Card(
        "Salad",
        "Qui aliqua mollit nostrud excepteur. Elit duis ullamco sit amet labore ad. Consectetur veniam cupidatat aliqua elit Lorem laborum voluptate. Qui voluptate labore laboris ut exercitation qui ut. Quis nulla voluptate culpa pariatur anim est fugiat non cillum. Consequat culpa anim velit culpa deserunt do sit laborum ea amet. Velit qui anim qui et mollit minim veniam qui labore cillum velit minim."
    );
    let mashedPotato = Card(
        "Mashed Potato",
        "Sunt est pariatur velit consectetur fugiat nostrud duis eiusmod. In cillum quis ipsum nulla elit consequat in exercitation cillum. Laborum exercitation nulla anim deserunt elit deserunt labore adipisicing exercitation pariatur anim. Officia incididunt consequat labore eu excepteur elit deserunt mollit duis sunt sit. Deserunt elit quis fugiat esse deserunt."
    );
    info.append(salad, mashedPotato);
}
function Card(header, content) {
    let card = document.createElement("div");
    let title = document.createElement("h3");
    let text = document.createElement("p");
    card.classList.add("card");
    title.textContent = header;
    text.textContent = content;
    card.append(title, text);
    return card;
}
