import Tacos from './pictures/tacos.jpg';
import Burrito from './pictures/burrito.jpg';
import Quesadillas from './pictures/quesadilla.jpg';
import Jarritos from './pictures/jarritos.jpg';
import Horchata from './pictures/horchata.jpg';

// Grab content div
const content = document.getElementById("content");

function createSection(headerName, className) {
  const div = document.createElement("div");
  div.classList.add("menu-section", className);
  const header = document.createElement("h1");
  header.textContent = headerName;
  div.appendChild(header);
  content.appendChild(div);
}

function createFoodAndDrink(parent, img, description, className) {
  const div = document.createElement("div");
  div.classList.add("item-entry", className);
  div.appendChild(img);
  const itemDescription = document.createElement("p");
  itemDescription.textContent = description;
  div.appendChild(itemDescription);
  parent.appendChild(div);
}

function addFoods() {
  createSection("Food", "food-section");
  const foodSection = document.getElementsByClassName("food-section")[0];

  const tacoPicture = new Image();
  const burritoPicture = new Image();
  const quesadillasPicture = new Image();
  
  tacoPicture.src = Tacos;
  burritoPicture.src = Burrito;
  quesadillasPicture.src = Quesadillas;

  const foodDiv = document.createElement("div");
  foodDiv.classList.add("items");

  createFoodAndDrink(foodDiv, tacoPicture, "Pollo, Carnitas, Barbacoa, Tripas", "tacos");
  createFoodAndDrink(foodDiv, burritoPicture, "Pollo, Carnitas, Barbacoa", "burritos");
  createFoodAndDrink(foodDiv, quesadillasPicture, "Pollo, Carnitas, Barbacoa", "quesadillas");

  foodSection.appendChild(foodDiv);
}

function addDrinks() {
  createSection("Drink", "drink-section");
  const drinkSection = document.getElementsByClassName("drink-section")[0];

  const jarritosPicture = new Image();
  const horchataPicture = new Image();

  jarritosPicture.src = Jarritos;
  horchataPicture.src = Horchata;
  
  const drinkDiv = document.createElement("div");
  drinkDiv.classList.add("items");

  createFoodAndDrink(drinkDiv, jarritosPicture, "Traditional Mexican soda");
  createFoodAndDrink(drinkDiv, horchataPicture, "Traditional Mexican drink");

  drinkSection.appendChild(drinkDiv);
}

export default function loadMenuPage() {
  addFoods();
  addDrinks();
}
