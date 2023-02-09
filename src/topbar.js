export default function loadTopBar() {
  // Grab initial content div
  const content = document.getElementById("content");

  // Create top bar that is static
  const topBar = document.createElement("div");

  // Create logo
  const logo = document.createElement("p");
  logo.textContent = "Almamigo";
  topBar.appendChild(logo);
  
  // Create menu bars
  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";

  topBar.appendChild(homeButton);
  topBar.appendChild(menuButton);
  topBar.appendChild(contactButton);

  content.appendChild(topBar);
}
