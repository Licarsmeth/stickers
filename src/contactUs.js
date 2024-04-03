export default function contactUs() {
  const content = document.getElementById("content");

  // Create and display contact information
  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  // Add contact details
  const email = document.createElement("p");
  email.textContent = "Email: licarsmeth@email.com";

  const phone = document.createElement("p");
  phone.textContent = "Phone: +1 (123) 456-7890";

  // Append contact details to the contact information container
  contactInfo.appendChild(email);
  contactInfo.appendChild(phone);

  // Append the contact information to the content
  content.appendChild(contactInfo);
}
