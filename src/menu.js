import loadTopBar from './topbar.js';
import Tacos from './pictures/tacos.jpg';
import Burrito from './pictures/burrito.jpg';
import Quesadillas from './pictures/quesadilla.jpg';

// Grab content div
const content = document.getElementById("content");

function addFoods() {
  const foodSection = document.createElement("div");
  const foods = document.createElement("p");
  foods.textContent = "Food";
  foodSection.appendChild(foods);

  const tacoPicture = new Image();
  const burritoPicture = new Image();
  const quesadillasPicture = new Image();

  // Food
    // Tacos
    // Burritos
    // Quesadillas
  content.appendChild(foodSection);
}


function addDrinks() {
  // Drinks
    // Jarritos
    // Horchatas
}
export default function loadMenuPage() {
  loadTopBar();
  addFoods();
  addDrinks();
}
