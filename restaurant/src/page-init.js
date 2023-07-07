export { pageLoad };
import Cyclone from "./cyclone.jpg";

let content = document.querySelector("#content");
function pageLoad() {
    let img = new Image();
    let title = document.createElement("h1");
    let description = document.createElement("p");
    let tabs = document.createElement("div");
    let info = document.createElement("div");
    img.src = Cyclone;
    img.classList.add("logo");
    title.textContent = "The windy restaurant";
    tabs.classList.add("tabs");
    info.classList.add("info");
    content.append(img, title, tabs, info);
}
