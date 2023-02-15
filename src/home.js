import Baemin from './pictures/baemin.png';
import Coupang from './pictures/coupang-eats.png';
import Tacos from './pictures/tacos.jpg';
import Burrito from './pictures/burrito.jpg';
import Quesadillas from './pictures/quesadilla.jpg';

// Grab content div
const content = document.getElementById("content");

function addSplashBanner() {
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
  motto.textContent = "Seoul Mate";
  motto.classList.add("motto");
  splash.appendChild(motto);

  // Add address
  const address = document.createElement("p");
  address.textContent = "Seoul Sinsa-dong 663-23"
  splash.appendChild(address);

  content.appendChild(splash);
}

function addDeliveryBanner() {
  // Add delivery banner
  const deliveryBanner = document.createElement("div");
  deliveryBanner.classList.add("delivery");

  const deliveryText = document.createElement("h1");
  deliveryText.textContent = "Delivery";

  deliveryBanner.appendChild(deliveryText);

  // Add delivery app icons
  const baeminIcon = new Image();
  const coupangIcon = new Image();
  baeminIcon.src = Baemin;
  coupangIcon.src = Coupang;

  baeminIcon.classList.add("delivery-icon");
  coupangIcon.classList.add("delivery-icon");

  const deliveryIconDiv = document.createElement("div");
  deliveryIconDiv.classList.add("delivery-icons");

  deliveryIconDiv.appendChild(baeminIcon);
  deliveryIconDiv.appendChild(coupangIcon);

  deliveryBanner.appendChild(deliveryIconDiv);

  content.appendChild(deliveryBanner);
}

function addFoodMenu() {
  // Add menu (Taco/burrito/quesadillas)
  const foodMenu = document.createElement("div");
  foodMenu.classList.add("food-preview");

  const tacos = new Image();
  const burrito = new Image();
  const quesadillas = new Image();

  tacos.src = Tacos;
  burrito.src = Burrito;
  quesadillas.src = Quesadillas;

  tacos.classList.add("menu-food");
  burrito.classList.add("menu-food");
  quesadillas.classList.add("menu-food");

  foodMenu.appendChild(tacos);
  foodMenu.appendChild(burrito);
  foodMenu.appendChild(quesadillas);

  content.appendChild(foodMenu);
}

export default function loadHomePage() {
  addSplashBanner();
  addFoodMenu();
  addDeliveryBanner();
}
