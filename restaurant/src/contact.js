export { contactClick };
function contactClick() {
    let info = document.querySelector(".info");
    let chef = Card(
        "Chef",
        "Cupidatat non dolore sit elit aliquip eiusmod non velit ad ullamco elit irure ut. Qui laborum reprehenderit voluptate est ullamco et ipsum laborum laboris esse. Culpa tempor excepteur velit pariatur ea laboris. Nostrud qui nulla aliqua minim non sunt et tempor officia. Eiusmod pariatur occaecat ex amet enim occaecat aliqua excepteur ea. Occaecat nostrud duis fugiat sunt.",
        "Phone Number: 091 2038 40002"
    );
    let owner = Card(
        "Owner",
        "Consequat deserunt irure anim veniam sint aute qui ea velit nisi enim. Excepteur est ut velit nostrud. Ut officia duis minim ad duis magna excepteur in dolor minim esse quis cupidatat. Officia sint qui nisi labore incididunt adipisicing do elit incididunt culpa aliqua. Irure ea aliquip officia proident deserunt labore mollit duis excepteur eu nostrud. Mollit non ipsum labore ut adipisicing pariatur incididunt sit aliqua occaecat et duis sint laboris. Sit ea magna dolore proident.",
        "Phone Number: 029 1032 0233"
    );
    info.append(chef, owner);
}
function Card(header, content, number) {
    let card = document.createElement("div");
    let title = document.createElement("h3");
    let text = document.createElement("p");
    let phone = document.createElement("p");
    card.classList.add("card");
    title.textContent = header;
    text.textContent = content;
    phone.textContent = number;
    card.append(title, text, phone);
    return card;
}
