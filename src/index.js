import "./style.css";
import init from "./initializePage";
import contactUs from "./contactUs";

const content = document.querySelector("#content");
const collection = document.querySelector("#collection");
const contact = document.querySelector("#contact");

document.addEventListener("DOMContentLoaded", () => {
  init();
});

collection.addEventListener("click", () => {
  content.textContent = "";
  init();
});

contact.addEventListener("click", () => {
  content.textContent = "";
  contactUs();
});
