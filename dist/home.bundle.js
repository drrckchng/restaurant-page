"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ087QUFDVDtBQUNJO0FBQ087O0FBRXBEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQU07QUFDekIsb0JBQW9CLHVEQUFPOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLGdEQUFLO0FBQ25CLGdCQUFnQixrREFBTztBQUN2QixvQkFBb0IscURBQVc7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhZW1pbiBmcm9tICcuL3BpY3R1cmVzL2JhZW1pbi5wbmcnO1xuaW1wb3J0IENvdXBhbmcgZnJvbSAnLi9waWN0dXJlcy9jb3VwYW5nLWVhdHMucG5nJztcbmltcG9ydCBUYWNvcyBmcm9tICcuL3BpY3R1cmVzL3RhY29zLmpwZyc7XG5pbXBvcnQgQnVycml0byBmcm9tICcuL3BpY3R1cmVzL2J1cnJpdG8uanBnJztcbmltcG9ydCBRdWVzYWRpbGxhcyBmcm9tICcuL3BpY3R1cmVzL3F1ZXNhZGlsbGEuanBnJztcblxuLy8gR3JhYiBjb250ZW50IGRpdlxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuZnVuY3Rpb24gYWRkU3BsYXNoQmFubmVyKCkge1xuICAvLyBBZGQgc3BsYXNoIGJhbm5lclxuICBjb25zdCBzcGxhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzcGxhc2guY2xhc3NMaXN0LmFkZChcInNwbGFzaFwiKTtcblxuICAvLyBBZGQgcmVzdHVyYW50IG5hbWVcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIkFsbWFtaWdvXCI7XG4gIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgc3BsYXNoLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcblxuICAvLyBBZGQgcmVzdGF1cmFudCBob3Vyc1xuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBob3Vycy50ZXh0Q29udGVudCA9IFwiTW9uLVNhdCA2cG0tMmFtXCI7XG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcbiAgc3BsYXNoLmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAvLyBBZGQgYWRkcmVzc1xuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIlNlb3VsIFNpbnNhLWRvbmcgNjYzLTIzXCJcbiAgc3BsYXNoLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3BsYXNoKTtcbn1cblxuZnVuY3Rpb24gYWRkRGVsaXZlcnlCYW5uZXIoKSB7XG4gIC8vIEFkZCBkZWxpdmVyeSBiYW5uZXJcbiAgY29uc3QgZGVsaXZlcnlCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWxpdmVyeUJhbm5lci5jbGFzc0xpc3QuYWRkKFwiZGVsaXZlcnlcIik7XG5cbiAgY29uc3QgZGVsaXZlcnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBkZWxpdmVyeVRleHQudGV4dENvbnRlbnQgPSBcIkRlbGl2ZXJ5XCI7XG5cbiAgZGVsaXZlcnlCYW5uZXIuYXBwZW5kQ2hpbGQoZGVsaXZlcnlUZXh0KTtcblxuICAvLyBBZGQgZGVsaXZlcnkgYXBwIGljb25zXG4gIGNvbnN0IGJhZW1pbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY291cGFuZ0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgYmFlbWluSWNvbi5zcmMgPSBCYWVtaW47XG4gIGNvdXBhbmdJY29uLnNyYyA9IENvdXBhbmc7XG5cbiAgYmFlbWluSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsaXZlcnktaWNvblwiKTtcbiAgY291cGFuZ0ljb24uY2xhc3NMaXN0LmFkZChcImRlbGl2ZXJ5LWljb25cIik7XG5cbiAgY29uc3QgZGVsaXZlcnlJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVsaXZlcnlJY29uRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxpdmVyeS1pY29uc1wiKTtcblxuICBkZWxpdmVyeUljb25EaXYuYXBwZW5kQ2hpbGQoYmFlbWluSWNvbik7XG4gIGRlbGl2ZXJ5SWNvbkRpdi5hcHBlbmRDaGlsZChjb3VwYW5nSWNvbik7XG5cbiAgZGVsaXZlcnlCYW5uZXIuYXBwZW5kQ2hpbGQoZGVsaXZlcnlJY29uRGl2KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGRlbGl2ZXJ5QmFubmVyKTtcbn1cblxuZnVuY3Rpb24gYWRkRm9vZE1lbnUoKSB7XG4gIC8vIEFkZCBtZW51IChUYWNvL2J1cnJpdG8vcXVlc2FkaWxsYXMpXG4gIGNvbnN0IGZvb2RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vZE1lbnUuY2xhc3NMaXN0LmFkZChcImZvb2QtcHJldmlld1wiKTtcblxuICBjb25zdCB0YWNvcyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBidXJyaXRvID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHF1ZXNhZGlsbGFzID0gbmV3IEltYWdlKCk7XG5cbiAgdGFjb3Muc3JjID0gVGFjb3M7XG4gIGJ1cnJpdG8uc3JjID0gQnVycml0bztcbiAgcXVlc2FkaWxsYXMuc3JjID0gUXVlc2FkaWxsYXM7XG5cbiAgdGFjb3MuY2xhc3NMaXN0LmFkZChcIm1lbnUtZm9vZFwiKTtcbiAgYnVycml0by5jbGFzc0xpc3QuYWRkKFwibWVudS1mb29kXCIpO1xuICBxdWVzYWRpbGxhcy5jbGFzc0xpc3QuYWRkKFwibWVudS1mb29kXCIpO1xuXG4gIGZvb2RNZW51LmFwcGVuZENoaWxkKHRhY29zKTtcbiAgZm9vZE1lbnUuYXBwZW5kQ2hpbGQoYnVycml0byk7XG4gIGZvb2RNZW51LmFwcGVuZENoaWxkKHF1ZXNhZGlsbGFzKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2RNZW51KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuICBhZGRTcGxhc2hCYW5uZXIoKTtcbiAgYWRkRm9vZE1lbnUoKTtcbiAgYWRkRGVsaXZlcnlCYW5uZXIoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==