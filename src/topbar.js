import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadContactPage from './contact.js';
import clearPage from './clear.js'

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

  // Add event listener
  homeButton.addEventListener("click", function() {
    clearPage()
    loadHomePage();
  });

  menuButton.addEventListener("click", function() {
    clearPage()
    loadMenuPage();
  });

  contactButton.addEventListener("click", function() {
    clearPage()
    loadContactPage();
  });

  topBar.appendChild(homeButton);
  topBar.appendChild(menuButton);
  topBar.appendChild(contactButton);

  topBar.setAttribute("id", "top-bar");

  content.appendChild(topBar);
}
