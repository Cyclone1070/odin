import { pageLoad } from "./page-init.js";
import { menuClick } from "./menu.js";
import { contactClick } from "./contact.js";

pageLoad();
menuClick();

let tabs = document.querySelector(".tabs");
let menu = Tab(menuClick);
let contacts = Tab(contactClick);
menu.textContent = "Menu";
menu.classList.add("tab-highlight");
contacts.textContent = "Contacts";
menu.addEventListener("click", (e) => {
    document
        .querySelector(".info")
        .setAttribute("style", "border-radius: 30px");
});
contacts.addEventListener("click", (e) => {
    document
        .querySelector(".info")
        .setAttribute("style", "border-radius: 30px 0 30px 30px");
});

tabs.append(menu, contacts);

function Tab(infoContent) {
    let tab = document.createElement("div");
    tab.classList.add("tab");
    tab.addEventListener("click", (e) => {
        let info = document.querySelector(".info");
        info.textContent = "";
        infoContent();
        let toRemove = document.querySelector(".tab-highlight");
        toRemove.classList.remove("tab-highlight");
        e.target.classList.add("tab-highlight");
    });
    return tab;
}
