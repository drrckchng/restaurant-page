import loadTopBar from './topbar.js';

// Grab content div
const content = document.getElementById("content");

function addPhoneNumber() {
  const phoneNumbers = document.createElement("div");
  phoneNumbers.classList.add("contact", "phone");
  const header = document.createElement("h1");
  header.textContent = "Phone";
  phoneNumbers.appendChild(header);
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "+82-02-213-206"
  phoneNumbers.appendChild(phoneNumber);
  content.appendChild(phoneNumbers);
}

function addSocialMedia() {
  const socials = document.createElement("div");
  socials.classList.add("contact", "social");
  const header = document.createElement("h1");
  header.textContent = "Social Media";
  socials.appendChild(header);
  const instagram = document.createElement("p");
  instagram.textContent = "Instagram: @almamigo_official";
  socials.appendChild(instagram);
  content.appendChild(socials);
}

function addLocation() {
  const location = document.createElement("div");
  location.classList.add("contact", "location");
  const header = document.createElement("h1");
  header.textContent = "Location";
  location.appendChild(header);
  const address = document.createElement("p");
  address.textContent = "Seoul Sinsa-dong 663-23"
  location.appendChild(address);
  content.appendChild(location);
}

export default function loadContactPage() {
  loadTopBar();
  addPhoneNumber();
  addSocialMedia();
  addLocation();
}
