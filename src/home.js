import loadTopBar from './topbar.js';
import Baemin from './baemin.png';
import Coupang from './coupang-eats.png';
import Quesadillas from './quesadilla.jpg';
import Tacos from './tacos.jpg';
import Burrito from './burrito.jpg';

export default function loadHomePage() {

  // Load top bar
  loadTopBar();

  // Grab content div
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

  // Add delivery banner
  const deliveryBanner = document.createElement("div");
  deliveryBanner.classList.add("delivery");
  deliveryBanner.textContent = "We Deliver!";

  // Add delivery app icons
  const baeminIcon = new Image();
  const coupangIcon = new Image();
  baeminIcon.src = Baemin;
  coupangIcon.src = Coupang;

  baeminIcon.classList.add("delivery-icon");
  coupangIcon.classList.add("delivery-icon");

  deliveryBanner.appendChild(baeminIcon);
  deliveryBanner.appendChild(coupangIcon);

  content.appendChild(deliveryBanner);

  // Add address
  const location = document.createElement("div");
  content.appendChild(location);
  const address = document.createElement("p");
  address.textContent = "Seoul Sinsa-dong 663-23"
  location.appendChild(address);

  // Add menu (Taco/burrito/quesadillas)
  const foodMenu = document.createElement("div");

  const burrito = new Image();
  const quesadillas = new Image();
  const tacos = new Image();

  burrito.src = Burrito;
  quesadillas.src = Quesadillas;
  tacos.src = Tacos;

  burrito.classList.add("menu-food");
  quesadillas.classList.add("menu-food");
  tacos.classList.add("menu-food");

  foodMenu.appendChild(burrito);
  foodMenu.appendChild(quesadillas);
  foodMenu.appendChild(tacos);

  content.appendChild(foodMenu);
}
