"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["topbar"],{

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearPage)
/* harmony export */ });
function clearPage() {
  const content = document.getElementById("content");
  while(content.firstChild) {
    content.removeChild(content.lastChild);
  }
}


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContactPage)
/* harmony export */ });
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

function loadContactPage() {
  addPhoneNumber();
  addSocialMedia();
  addLocation();
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHomePage)
/* harmony export */ });
/* harmony import */ var _pictures_baemin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pictures/baemin.png */ "./src/pictures/baemin.png");
/* harmony import */ var _pictures_coupang_eats_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pictures/coupang-eats.png */ "./src/pictures/coupang-eats.png");
/* harmony import */ var _pictures_tacos_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pictures/tacos.jpg */ "./src/pictures/tacos.jpg");
/* harmony import */ var _pictures_burrito_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pictures/burrito.jpg */ "./src/pictures/burrito.jpg");
/* harmony import */ var _pictures_quesadilla_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pictures/quesadilla.jpg */ "./src/pictures/quesadilla.jpg");






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

  // Add restaurant hours
  const hours = document.createElement("p");
  hours.textContent = "Mon-Sat 6pm-2am";
  hours.classList.add("hours");
  splash.appendChild(hours);

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
  baeminIcon.src = _pictures_baemin_png__WEBPACK_IMPORTED_MODULE_0__;
  coupangIcon.src = _pictures_coupang_eats_png__WEBPACK_IMPORTED_MODULE_1__;

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

  tacos.src = _pictures_tacos_jpg__WEBPACK_IMPORTED_MODULE_2__;
  burrito.src = _pictures_burrito_jpg__WEBPACK_IMPORTED_MODULE_3__;
  quesadillas.src = _pictures_quesadilla_jpg__WEBPACK_IMPORTED_MODULE_4__;

  tacos.classList.add("menu-food");
  burrito.classList.add("menu-food");
  quesadillas.classList.add("menu-food");

  foodMenu.appendChild(tacos);
  foodMenu.appendChild(burrito);
  foodMenu.appendChild(quesadillas);

  content.appendChild(foodMenu);
}

function loadHomePage() {
  addSplashBanner();
  addFoodMenu();
  addDeliveryBanner();
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenuPage)
/* harmony export */ });
/* harmony import */ var _pictures_tacos_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pictures/tacos.jpg */ "./src/pictures/tacos.jpg");
/* harmony import */ var _pictures_burrito_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pictures/burrito.jpg */ "./src/pictures/burrito.jpg");
/* harmony import */ var _pictures_quesadilla_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pictures/quesadilla.jpg */ "./src/pictures/quesadilla.jpg");
/* harmony import */ var _pictures_jarritos_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pictures/jarritos.jpg */ "./src/pictures/jarritos.jpg");
/* harmony import */ var _pictures_horchata_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pictures/horchata.jpg */ "./src/pictures/horchata.jpg");






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
  
  tacoPicture.src = _pictures_tacos_jpg__WEBPACK_IMPORTED_MODULE_0__;
  burritoPicture.src = _pictures_burrito_jpg__WEBPACK_IMPORTED_MODULE_1__;
  quesadillasPicture.src = _pictures_quesadilla_jpg__WEBPACK_IMPORTED_MODULE_2__;

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

  jarritosPicture.src = _pictures_jarritos_jpg__WEBPACK_IMPORTED_MODULE_3__;
  horchataPicture.src = _pictures_horchata_jpg__WEBPACK_IMPORTED_MODULE_4__;
  
  const drinkDiv = document.createElement("div");
  drinkDiv.classList.add("items");

  createFoodAndDrink(drinkDiv, jarritosPicture, "Traditional Mexican soda");
  createFoodAndDrink(drinkDiv, horchataPicture, "Traditional Mexican drink");

  drinkSection.appendChild(drinkDiv);
}

function loadMenuPage() {
  addFoods();
  addDrinks();
}


/***/ }),

/***/ "./src/topbar.js":
/*!***********************!*\
  !*** ./src/topbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadTopBar)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _clear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clear.js */ "./src/clear.js");





function loadTopBar() {
  // Grab initial content div
  // const content = document.getElementById("content");
  
  // Grab body
  const body = document.body;

  // Create top bar that is static
  const topBar = document.createElement("div");

  // Create logo
  const logo = document.createElement("p");
  logo.textContent = "Almamigo";
  topBar.appendChild(logo);

  // Create button div
  const buttonDiv = document.createElement("div");
  
  // Create buttons
  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";

  // Add event listener
  homeButton.addEventListener("click", function() {
    (0,_clear_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  menuButton.addEventListener("click", function() {
    (0,_clear_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
    ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  contactButton.addEventListener("click", function() {
    (0,_clear_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
    ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });

  buttonDiv.appendChild(homeButton);
  buttonDiv.appendChild(menuButton);
  buttonDiv.appendChild(contactButton);

  topBar.appendChild(buttonDiv);

  topBar.setAttribute("id", "top-bar");

  body.prepend(topBar);
}


/***/ }),

/***/ "./src/pictures/baemin.png":
/*!*********************************!*\
  !*** ./src/pictures/baemin.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d957349483ee90e72d7.png";

/***/ }),

/***/ "./src/pictures/burrito.jpg":
/*!**********************************!*\
  !*** ./src/pictures/burrito.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97af7eab734a53c8fbc2.jpg";

/***/ }),

/***/ "./src/pictures/coupang-eats.png":
/*!***************************************!*\
  !*** ./src/pictures/coupang-eats.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27eb3fae6bca6163d16d.png";

/***/ }),

/***/ "./src/pictures/horchata.jpg":
/*!***********************************!*\
  !*** ./src/pictures/horchata.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45b277c191d98ffc573a.jpg";

/***/ }),

/***/ "./src/pictures/jarritos.jpg":
/*!***********************************!*\
  !*** ./src/pictures/jarritos.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42163244ec4800327fd4.jpg";

/***/ }),

/***/ "./src/pictures/quesadilla.jpg":
/*!*************************************!*\
  !*** ./src/pictures/quesadilla.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bf6f8e69a0f4ec95f0f.jpg";

/***/ }),

/***/ "./src/pictures/tacos.jpg":
/*!********************************!*\
  !*** ./src/pictures/tacos.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f904c9dd34ea70c7bc61.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/topbar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0MyQztBQUNPO0FBQ1Q7QUFDSTtBQUNPOztBQUVwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFNO0FBQ3pCLG9CQUFvQix1REFBTzs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxnREFBSztBQUNuQixnQkFBZ0Isa0RBQU87QUFDdkIsb0JBQW9CLHFEQUFXOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RnlDO0FBQ0k7QUFDTztBQUNMO0FBQ0E7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdEQUFLO0FBQ3pCLHVCQUF1QixrREFBTztBQUM5QiwyQkFBMkIscURBQVc7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCLG1EQUFRO0FBQ2hDLHdCQUF3QixtREFBUTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVxQztBQUNBO0FBQ007QUFDVDs7QUFFbkI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkscURBQVM7QUFDYixJQUFJLHFEQUFZO0FBQ2hCLEdBQUc7O0FBRUg7QUFDQSxJQUFJLHFEQUFTO0FBQ2IsSUFBSSxxREFBWTtBQUNoQixHQUFHOztBQUVIO0FBQ0EsSUFBSSxxREFBUztBQUNiLElBQUksd0RBQWU7QUFDbkIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jbGVhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdG9wYmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgd2hpbGUoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gIH1cbn1cbiIsIi8vIEdyYWIgY29udGVudCBkaXZcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGFkZFBob25lTnVtYmVyKCkge1xuICBjb25zdCBwaG9uZU51bWJlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwaG9uZU51bWJlcnMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIiwgXCJwaG9uZVwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlBob25lXCI7XG4gIHBob25lTnVtYmVycy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9IFwiKzgyLTAyLTIxMy0yMDZcIlxuICBwaG9uZU51bWJlcnMuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHBob25lTnVtYmVycyk7XG59XG5cbmZ1bmN0aW9uIGFkZFNvY2lhbE1lZGlhKCkge1xuICBjb25zdCBzb2NpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc29jaWFscy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiLCBcInNvY2lhbFwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlNvY2lhbCBNZWRpYVwiO1xuICBzb2NpYWxzLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IGluc3RhZ3JhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbnN0YWdyYW0udGV4dENvbnRlbnQgPSBcIkluc3RhZ3JhbTogQGFsbWFtaWdvX29mZmljaWFsXCI7XG4gIHNvY2lhbHMuYXBwZW5kQ2hpbGQoaW5zdGFncmFtKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzb2NpYWxzKTtcbn1cblxuZnVuY3Rpb24gYWRkTG9jYXRpb24oKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIiwgXCJsb2NhdGlvblwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiU2VvdWwgU2luc2EtZG9uZyA2NjMtMjNcIlxuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZSgpIHtcbiAgYWRkUGhvbmVOdW1iZXIoKTtcbiAgYWRkU29jaWFsTWVkaWEoKTtcbiAgYWRkTG9jYXRpb24oKTtcbn1cbiIsImltcG9ydCBCYWVtaW4gZnJvbSAnLi9waWN0dXJlcy9iYWVtaW4ucG5nJztcbmltcG9ydCBDb3VwYW5nIGZyb20gJy4vcGljdHVyZXMvY291cGFuZy1lYXRzLnBuZyc7XG5pbXBvcnQgVGFjb3MgZnJvbSAnLi9waWN0dXJlcy90YWNvcy5qcGcnO1xuaW1wb3J0IEJ1cnJpdG8gZnJvbSAnLi9waWN0dXJlcy9idXJyaXRvLmpwZyc7XG5pbXBvcnQgUXVlc2FkaWxsYXMgZnJvbSAnLi9waWN0dXJlcy9xdWVzYWRpbGxhLmpwZyc7XG5cbi8vIEdyYWIgY29udGVudCBkaXZcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGFkZFNwbGFzaEJhbm5lcigpIHtcbiAgLy8gQWRkIHNwbGFzaCBiYW5uZXJcbiAgY29uc3Qgc3BsYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3BsYXNoLmNsYXNzTGlzdC5hZGQoXCJzcGxhc2hcIik7XG5cbiAgLy8gQWRkIHJlc3R1cmFudCBuYW1lXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJBbG1hbWlnb1wiO1xuICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHNwbGFzaC5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG5cbiAgLy8gQWRkIHJlc3RhdXJhbnQgaG91cnNcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaG91cnMudGV4dENvbnRlbnQgPSBcIk1vbi1TYXQgNnBtLTJhbVwiO1xuICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiaG91cnNcIik7XG4gIHNwbGFzaC5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgLy8gQWRkIGFkZHJlc3NcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCJTZW91bCBTaW5zYS1kb25nIDY2My0yM1wiXG4gIHNwbGFzaC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHNwbGFzaCk7XG59XG5cbmZ1bmN0aW9uIGFkZERlbGl2ZXJ5QmFubmVyKCkge1xuICAvLyBBZGQgZGVsaXZlcnkgYmFubmVyXG4gIGNvbnN0IGRlbGl2ZXJ5QmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVsaXZlcnlCYW5uZXIuY2xhc3NMaXN0LmFkZChcImRlbGl2ZXJ5XCIpO1xuXG4gIGNvbnN0IGRlbGl2ZXJ5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgZGVsaXZlcnlUZXh0LnRleHRDb250ZW50ID0gXCJEZWxpdmVyeVwiO1xuXG4gIGRlbGl2ZXJ5QmFubmVyLmFwcGVuZENoaWxkKGRlbGl2ZXJ5VGV4dCk7XG5cbiAgLy8gQWRkIGRlbGl2ZXJ5IGFwcCBpY29uc1xuICBjb25zdCBiYWVtaW5JY29uID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGNvdXBhbmdJY29uID0gbmV3IEltYWdlKCk7XG4gIGJhZW1pbkljb24uc3JjID0gQmFlbWluO1xuICBjb3VwYW5nSWNvbi5zcmMgPSBDb3VwYW5nO1xuXG4gIGJhZW1pbkljb24uY2xhc3NMaXN0LmFkZChcImRlbGl2ZXJ5LWljb25cIik7XG4gIGNvdXBhbmdJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxpdmVyeS1pY29uXCIpO1xuXG4gIGNvbnN0IGRlbGl2ZXJ5SWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlbGl2ZXJ5SWNvbkRpdi5jbGFzc0xpc3QuYWRkKFwiZGVsaXZlcnktaWNvbnNcIik7XG5cbiAgZGVsaXZlcnlJY29uRGl2LmFwcGVuZENoaWxkKGJhZW1pbkljb24pO1xuICBkZWxpdmVyeUljb25EaXYuYXBwZW5kQ2hpbGQoY291cGFuZ0ljb24pO1xuXG4gIGRlbGl2ZXJ5QmFubmVyLmFwcGVuZENoaWxkKGRlbGl2ZXJ5SWNvbkRpdik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChkZWxpdmVyeUJhbm5lcik7XG59XG5cbmZ1bmN0aW9uIGFkZEZvb2RNZW51KCkge1xuICAvLyBBZGQgbWVudSAoVGFjby9idXJyaXRvL3F1ZXNhZGlsbGFzKVxuICBjb25zdCBmb29kTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb2RNZW51LmNsYXNzTGlzdC5hZGQoXCJmb29kLXByZXZpZXdcIik7XG5cbiAgY29uc3QgdGFjb3MgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgYnVycml0byA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBxdWVzYWRpbGxhcyA9IG5ldyBJbWFnZSgpO1xuXG4gIHRhY29zLnNyYyA9IFRhY29zO1xuICBidXJyaXRvLnNyYyA9IEJ1cnJpdG87XG4gIHF1ZXNhZGlsbGFzLnNyYyA9IFF1ZXNhZGlsbGFzO1xuXG4gIHRhY29zLmNsYXNzTGlzdC5hZGQoXCJtZW51LWZvb2RcIik7XG4gIGJ1cnJpdG8uY2xhc3NMaXN0LmFkZChcIm1lbnUtZm9vZFwiKTtcbiAgcXVlc2FkaWxsYXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtZm9vZFwiKTtcblxuICBmb29kTWVudS5hcHBlbmRDaGlsZCh0YWNvcyk7XG4gIGZvb2RNZW51LmFwcGVuZENoaWxkKGJ1cnJpdG8pO1xuICBmb29kTWVudS5hcHBlbmRDaGlsZChxdWVzYWRpbGxhcyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmb29kTWVudSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcbiAgYWRkU3BsYXNoQmFubmVyKCk7XG4gIGFkZEZvb2RNZW51KCk7XG4gIGFkZERlbGl2ZXJ5QmFubmVyKCk7XG59XG4iLCJpbXBvcnQgVGFjb3MgZnJvbSAnLi9waWN0dXJlcy90YWNvcy5qcGcnO1xuaW1wb3J0IEJ1cnJpdG8gZnJvbSAnLi9waWN0dXJlcy9idXJyaXRvLmpwZyc7XG5pbXBvcnQgUXVlc2FkaWxsYXMgZnJvbSAnLi9waWN0dXJlcy9xdWVzYWRpbGxhLmpwZyc7XG5pbXBvcnQgSmFycml0b3MgZnJvbSAnLi9waWN0dXJlcy9qYXJyaXRvcy5qcGcnO1xuaW1wb3J0IEhvcmNoYXRhIGZyb20gJy4vcGljdHVyZXMvaG9yY2hhdGEuanBnJztcblxuLy8gR3JhYiBjb250ZW50IGRpdlxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuZnVuY3Rpb24gY3JlYXRlU2VjdGlvbihoZWFkZXJOYW1lLCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LXNlY3Rpb25cIiwgY2xhc3NOYW1lKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBoZWFkZXJOYW1lO1xuICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb29kQW5kRHJpbmsocGFyZW50LCBpbWcsIGRlc2NyaXB0aW9uLCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJpdGVtLWVudHJ5XCIsIGNsYXNzTmFtZSk7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIGRpdi5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cblxuZnVuY3Rpb24gYWRkRm9vZHMoKSB7XG4gIGNyZWF0ZVNlY3Rpb24oXCJGb29kXCIsIFwiZm9vZC1zZWN0aW9uXCIpO1xuICBjb25zdCBmb29kU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb29kLXNlY3Rpb25cIilbMF07XG5cbiAgY29uc3QgdGFjb1BpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgYnVycml0b1BpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgcXVlc2FkaWxsYXNQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gIFxuICB0YWNvUGljdHVyZS5zcmMgPSBUYWNvcztcbiAgYnVycml0b1BpY3R1cmUuc3JjID0gQnVycml0bztcbiAgcXVlc2FkaWxsYXNQaWN0dXJlLnNyYyA9IFF1ZXNhZGlsbGFzO1xuXG4gIGNvbnN0IGZvb2REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb29kRGl2LmNsYXNzTGlzdC5hZGQoXCJpdGVtc1wiKTtcblxuICBjcmVhdGVGb29kQW5kRHJpbmsoZm9vZERpdiwgdGFjb1BpY3R1cmUsIFwiUG9sbG8sIENhcm5pdGFzLCBCYXJiYWNvYSwgVHJpcGFzXCIsIFwidGFjb3NcIik7XG4gIGNyZWF0ZUZvb2RBbmREcmluayhmb29kRGl2LCBidXJyaXRvUGljdHVyZSwgXCJQb2xsbywgQ2Fybml0YXMsIEJhcmJhY29hXCIsIFwiYnVycml0b3NcIik7XG4gIGNyZWF0ZUZvb2RBbmREcmluayhmb29kRGl2LCBxdWVzYWRpbGxhc1BpY3R1cmUsIFwiUG9sbG8sIENhcm5pdGFzLCBCYXJiYWNvYVwiLCBcInF1ZXNhZGlsbGFzXCIpO1xuXG4gIGZvb2RTZWN0aW9uLmFwcGVuZENoaWxkKGZvb2REaXYpO1xufVxuXG5mdW5jdGlvbiBhZGREcmlua3MoKSB7XG4gIGNyZWF0ZVNlY3Rpb24oXCJEcmlua1wiLCBcImRyaW5rLXNlY3Rpb25cIik7XG4gIGNvbnN0IGRyaW5rU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcmluay1zZWN0aW9uXCIpWzBdO1xuXG4gIGNvbnN0IGphcnJpdG9zUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBob3JjaGF0YVBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcblxuICBqYXJyaXRvc1BpY3R1cmUuc3JjID0gSmFycml0b3M7XG4gIGhvcmNoYXRhUGljdHVyZS5zcmMgPSBIb3JjaGF0YTtcbiAgXG4gIGNvbnN0IGRyaW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHJpbmtEaXYuY2xhc3NMaXN0LmFkZChcIml0ZW1zXCIpO1xuXG4gIGNyZWF0ZUZvb2RBbmREcmluayhkcmlua0RpdiwgamFycml0b3NQaWN0dXJlLCBcIlRyYWRpdGlvbmFsIE1leGljYW4gc29kYVwiKTtcbiAgY3JlYXRlRm9vZEFuZERyaW5rKGRyaW5rRGl2LCBob3JjaGF0YVBpY3R1cmUsIFwiVHJhZGl0aW9uYWwgTWV4aWNhbiBkcmlua1wiKTtcblxuICBkcmlua1NlY3Rpb24uYXBwZW5kQ2hpbGQoZHJpbmtEaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudVBhZ2UoKSB7XG4gIGFkZEZvb2RzKCk7XG4gIGFkZERyaW5rcygpO1xufVxuIiwiaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGxvYWRNZW51UGFnZSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0IGNsZWFyUGFnZSBmcm9tICcuL2NsZWFyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVG9wQmFyKCkge1xuICAvLyBHcmFiIGluaXRpYWwgY29udGVudCBkaXZcbiAgLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgXG4gIC8vIEdyYWIgYm9keVxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICAvLyBDcmVhdGUgdG9wIGJhciB0aGF0IGlzIHN0YXRpY1xuICBjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIENyZWF0ZSBsb2dvXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiQWxtYW1pZ29cIjtcbiAgdG9wQmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gIC8vIENyZWF0ZSBidXR0b24gZGl2XG4gIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFxuICAvLyBDcmVhdGUgYnV0dG9uc1xuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lclxuICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBjbGVhclBhZ2UoKVxuICAgIGxvYWRIb21lUGFnZSgpO1xuICB9KTtcblxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBjbGVhclBhZ2UoKVxuICAgIGxvYWRNZW51UGFnZSgpO1xuICB9KTtcblxuICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBjbGVhclBhZ2UoKVxuICAgIGxvYWRDb250YWN0UGFnZSgpO1xuICB9KTtcblxuICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gIHRvcEJhci5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xuXG4gIHRvcEJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvcC1iYXJcIik7XG5cbiAgYm9keS5wcmVwZW5kKHRvcEJhcik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=