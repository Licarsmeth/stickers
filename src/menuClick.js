export default function menuClick() {
  const content = document.getElementById("content");

  // Create and display the food menu
  const menu = document.createElement("div");
  menu.classList.add("menu");

  // Create menu items (e.g., different types of momos)
  const momoTypes = [
    "Chicken Momo",
    "Veg Momo",
    "Buff Momo",
    "Kothe Momo",
    "C-Momo",
  ];
  const prices = ["Rs. 150", "Rs. 100", "Rs. 120", "Rs. 150", "Rs. 180"];

  for (let i = 0; i < momoTypes.length; i++) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `<span>${momoTypes[i]}</span><span>${prices[i]}</span>`;
    menu.appendChild(menuItem);
  }

  // Append the menu to the content
  content.appendChild(menu);
}
