export default function initializePage() {
  // necessary elements
  const content = document.getElementById("content");
  const headline = document.createElement("h1");
  const pic = document.createElement("img");
  const description = document.createElement("div");

  // add contents and classes
  headline.textContent = "Welcome to Only Stickers!";
  pic.classList.add("pic");
  description.textContent = "The best stickers in town";
  description.classList.add("description");

  // append all to content
  content.appendChild(headline);
  content.appendChild(description);
}
