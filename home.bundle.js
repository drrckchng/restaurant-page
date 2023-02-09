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
/* harmony import */ var _topbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topbar.js */ "./src/topbar.js");
/* harmony import */ var _baemin_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baemin.png */ "./src/baemin.png");
/* harmony import */ var _coupang_eats_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupang-eats.png */ "./src/coupang-eats.png");
/* harmony import */ var _quesadilla_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quesadilla.jpg */ "./src/quesadilla.jpg");
/* harmony import */ var _tacos_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tacos.jpg */ "./src/tacos.jpg");
/* harmony import */ var _burrito_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./burrito.jpg */ "./src/burrito.jpg");







function loadHomePage() {

  // Load top bar
  (0,_topbar_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
  baeminIcon.src = _baemin_png__WEBPACK_IMPORTED_MODULE_1__;
  coupangIcon.src = _coupang_eats_png__WEBPACK_IMPORTED_MODULE_2__;

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

  burrito.src = _burrito_jpg__WEBPACK_IMPORTED_MODULE_5__;
  quesadillas.src = _quesadilla_jpg__WEBPACK_IMPORTED_MODULE_3__;
  tacos.src = _tacos_jpg__WEBPACK_IMPORTED_MODULE_4__;

  burrito.classList.add("menu-food");
  quesadillas.classList.add("menu-food");
  tacos.classList.add("menu-food");

  foodMenu.appendChild(burrito);
  foodMenu.appendChild(quesadillas);
  foodMenu.appendChild(tacos);

  content.appendChild(foodMenu);
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
function loadTopBar() {
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


/***/ }),

/***/ "./src/baemin.png":
/*!************************!*\
  !*** ./src/baemin.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d957349483ee90e72d7.png";

/***/ }),

/***/ "./src/burrito.jpg":
/*!*************************!*\
  !*** ./src/burrito.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97af7eab734a53c8fbc2.jpg";

/***/ }),

/***/ "./src/coupang-eats.png":
/*!******************************!*\
  !*** ./src/coupang-eats.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27eb3fae6bca6163d16d.png";

/***/ }),

/***/ "./src/quesadilla.jpg":
/*!****************************!*\
  !*** ./src/quesadilla.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bf6f8e69a0f4ec95f0f.jpg";

/***/ }),

/***/ "./src/tacos.jpg":
/*!***********************!*\
  !*** ./src/tacos.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f904c9dd34ea70c7bc61.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNIO0FBQ087QUFDRTtBQUNYO0FBQ0k7O0FBRXJCOztBQUVmO0FBQ0EsRUFBRSxzREFBVTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdDQUFNO0FBQ3pCLG9CQUFvQiw4Q0FBTzs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IseUNBQU87QUFDdkIsb0JBQW9CLDRDQUFXO0FBQy9CLGNBQWMsdUNBQUs7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0VlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90b3BiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvYWRUb3BCYXIgZnJvbSAnLi90b3BiYXIuanMnO1xuaW1wb3J0IEJhZW1pbiBmcm9tICcuL2JhZW1pbi5wbmcnO1xuaW1wb3J0IENvdXBhbmcgZnJvbSAnLi9jb3VwYW5nLWVhdHMucG5nJztcbmltcG9ydCBRdWVzYWRpbGxhcyBmcm9tICcuL3F1ZXNhZGlsbGEuanBnJztcbmltcG9ydCBUYWNvcyBmcm9tICcuL3RhY29zLmpwZyc7XG5pbXBvcnQgQnVycml0byBmcm9tICcuL2J1cnJpdG8uanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuXG4gIC8vIExvYWQgdG9wIGJhclxuICBsb2FkVG9wQmFyKCk7XG5cbiAgLy8gR3JhYiBjb250ZW50IGRpdlxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIC8vIEFkZCBzcGxhc2ggYmFubmVyXG4gIGNvbnN0IHNwbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNwbGFzaC5jbGFzc0xpc3QuYWRkKFwic3BsYXNoXCIpO1xuXG4gIC8vIEFkZCByZXN0dXJhbnQgbmFtZVxuICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiQWxtYW1pZ29cIjtcbiAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICBzcGxhc2guYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuXG4gIC8vIEFkZCByZXN0YXVyYW50IG1vdHRvXG4gIGNvbnN0IG1vdHRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG1vdHRvLnRleHRDb250ZW50ID0gXCJMQSBTb3VsIGluIFNlb3VsXCI7XG4gIG1vdHRvLmNsYXNzTGlzdC5hZGQoXCJtb3R0b1wiKTtcbiAgc3BsYXNoLmFwcGVuZENoaWxkKG1vdHRvKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHNwbGFzaCk7XG5cbiAgLy8gQWRkIGRlbGl2ZXJ5IGJhbm5lclxuICBjb25zdCBkZWxpdmVyeUJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlbGl2ZXJ5QmFubmVyLmNsYXNzTGlzdC5hZGQoXCJkZWxpdmVyeVwiKTtcbiAgZGVsaXZlcnlCYW5uZXIudGV4dENvbnRlbnQgPSBcIldlIERlbGl2ZXIhXCI7XG5cbiAgLy8gQWRkIGRlbGl2ZXJ5IGFwcCBpY29uc1xuICBjb25zdCBiYWVtaW5JY29uID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGNvdXBhbmdJY29uID0gbmV3IEltYWdlKCk7XG4gIGJhZW1pbkljb24uc3JjID0gQmFlbWluO1xuICBjb3VwYW5nSWNvbi5zcmMgPSBDb3VwYW5nO1xuXG4gIGJhZW1pbkljb24uY2xhc3NMaXN0LmFkZChcImRlbGl2ZXJ5LWljb25cIik7XG4gIGNvdXBhbmdJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxpdmVyeS1pY29uXCIpO1xuXG4gIGRlbGl2ZXJ5QmFubmVyLmFwcGVuZENoaWxkKGJhZW1pbkljb24pO1xuICBkZWxpdmVyeUJhbm5lci5hcHBlbmRDaGlsZChjb3VwYW5nSWNvbik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChkZWxpdmVyeUJhbm5lcik7XG5cbiAgLy8gQWRkIGFkZHJlc3NcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCJTZW91bCBTaW5zYS1kb25nIDY2My0yM1wiXG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIC8vIEFkZCBtZW51IChUYWNvL2J1cnJpdG8vcXVlc2FkaWxsYXMpXG4gIGNvbnN0IGZvb2RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBidXJyaXRvID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHF1ZXNhZGlsbGFzID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHRhY29zID0gbmV3IEltYWdlKCk7XG5cbiAgYnVycml0by5zcmMgPSBCdXJyaXRvO1xuICBxdWVzYWRpbGxhcy5zcmMgPSBRdWVzYWRpbGxhcztcbiAgdGFjb3Muc3JjID0gVGFjb3M7XG5cbiAgYnVycml0by5jbGFzc0xpc3QuYWRkKFwibWVudS1mb29kXCIpO1xuICBxdWVzYWRpbGxhcy5jbGFzc0xpc3QuYWRkKFwibWVudS1mb29kXCIpO1xuICB0YWNvcy5jbGFzc0xpc3QuYWRkKFwibWVudS1mb29kXCIpO1xuXG4gIGZvb2RNZW51LmFwcGVuZENoaWxkKGJ1cnJpdG8pO1xuICBmb29kTWVudS5hcHBlbmRDaGlsZChxdWVzYWRpbGxhcyk7XG4gIGZvb2RNZW51LmFwcGVuZENoaWxkKHRhY29zKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2RNZW51KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRUb3BCYXIoKSB7XG4gIC8vIEdyYWIgaW5pdGlhbCBjb250ZW50IGRpdlxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIC8vIENyZWF0ZSB0b3AgYmFyIHRoYXQgaXMgc3RhdGljXG4gIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gQ3JlYXRlIGxvZ29cbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsb2dvLnRleHRDb250ZW50ID0gXCJBbG1hbWlnb1wiO1xuICB0b3BCYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIFxuICAvLyBDcmVhdGUgbWVudSBiYXJzXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgdG9wQmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICB0b3BCYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIHRvcEJhci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHRvcEJhcik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=