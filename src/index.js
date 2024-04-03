import "./style.css";
import init from "./initializePage";
import menuClick from "./menuClick";
import contactUs from "./contactUs";

const content = document.querySelector("#content");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

document.addEventListener("DOMContentLoaded", () => {
  init();
});

home.addEventListener("click", () => {
  content.textContent = "";
  init();
});

menu.addEventListener("click", () => {
  content.textContent = "";
  menuClick();
});

contact.addEventListener("click", () => {
  content.textContent = "";
  contactUs();
});
