import SplashImage from './splash.png';

export default function loadHomePage() {
  const content = document.getElementById("content");

  // Add splash banner
  const splash = document.createElement("div");
  splash.classList.add("splash");

  // Add resturant name
  const restaurantName = document.createElement("p");
  restaurantName.textContent = "Almamigo";
  restaurantName.classList.add("title");
  splash.appendChild(restaurantName);

  // Add restaurant motto
  const motto = document.createElement("p");
  motto.textContent = "LA Soul in Seoul";
  motto.classList.add("motto");
  splash.appendChild(motto);

  content.appendChild(splash);

  // div.classList.add("splash-image");
  // Title/Banner with motto/saying
  // We deliver!
  // Location
}
