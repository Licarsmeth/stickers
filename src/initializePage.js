import momo from "./momo.avif";

export default function initializePage() {
  // necessary elements
  const content = document.getElementById("content");
  const headline = document.createElement("h1");
  const pic = document.createElement("img");
  const description = document.createElement("div");

  // add contents and classes
  headline.textContent = "Welcome to Momomania!";
  pic.setAttribute("src", momo);
  pic.classList.add("pic");
  description.textContent = "The best momo in town";
  description.classList.add("description");

  // append all to content
  content.appendChild(headline);
  content.appendChild(pic);
  content.appendChild(description);
}
