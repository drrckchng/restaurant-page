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
/* harmony import */ var _topbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topbar.js */ "./src/topbar.js");


function loadContactPage() {

  // Load top bar
  (0,_topbar_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

  console.log("contact page");
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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenuPage)
/* harmony export */ });
/* harmony import */ var _topbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topbar.js */ "./src/topbar.js");


function loadMenuPage() {

  // Load top bar
  (0,_topbar_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

  console.log("menu page");
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

  topBar.appendChild(homeButton);
  topBar.appendChild(menuButton);
  topBar.appendChild(contactButton);

  topBar.setAttribute("id", "top-bar");

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/topbar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTHFDOztBQUV0Qjs7QUFFZjtBQUNBLEVBQUUsc0RBQVU7O0FBRVo7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnFDO0FBQ0g7QUFDTztBQUNFO0FBQ1g7QUFDSTs7QUFFckI7O0FBRWY7QUFDQSxFQUFFLHNEQUFVOztBQUVaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0NBQU07QUFDekIsb0JBQW9CLDhDQUFPOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQix5Q0FBTztBQUN2QixvQkFBb0IsNENBQVc7QUFDL0IsY0FBYyx1Q0FBSzs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0VxQzs7QUFFdEI7O0FBRWY7QUFDQSxFQUFFLHNEQUFVOztBQUVaO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNScUM7QUFDQTtBQUNNO0FBQ1Q7O0FBRW5CO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxxREFBUztBQUNiLElBQUkscURBQVk7QUFDaEIsR0FBRzs7QUFFSDtBQUNBLElBQUkscURBQVM7QUFDYixJQUFJLHFEQUFZO0FBQ2hCLEdBQUc7O0FBRUg7QUFDQSxJQUFJLHFEQUFTO0FBQ2IsSUFBSSx3REFBZTtBQUNuQixHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NsZWFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90b3BiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICB3aGlsZShjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgfVxufVxuIiwiaW1wb3J0IGxvYWRUb3BCYXIgZnJvbSAnLi90b3BiYXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdFBhZ2UoKSB7XG5cbiAgLy8gTG9hZCB0b3AgYmFyXG4gIGxvYWRUb3BCYXIoKTtcblxuICBjb25zb2xlLmxvZyhcImNvbnRhY3QgcGFnZVwiKTtcbn1cbiIsImltcG9ydCBsb2FkVG9wQmFyIGZyb20gJy4vdG9wYmFyLmpzJztcbmltcG9ydCBCYWVtaW4gZnJvbSAnLi9iYWVtaW4ucG5nJztcbmltcG9ydCBDb3VwYW5nIGZyb20gJy4vY291cGFuZy1lYXRzLnBuZyc7XG5pbXBvcnQgUXVlc2FkaWxsYXMgZnJvbSAnLi9xdWVzYWRpbGxhLmpwZyc7XG5pbXBvcnQgVGFjb3MgZnJvbSAnLi90YWNvcy5qcGcnO1xuaW1wb3J0IEJ1cnJpdG8gZnJvbSAnLi9idXJyaXRvLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcblxuICAvLyBMb2FkIHRvcCBiYXJcbiAgbG9hZFRvcEJhcigpO1xuXG4gIC8vIEdyYWIgY29udGVudCBkaXZcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAvLyBBZGQgc3BsYXNoIGJhbm5lclxuICBjb25zdCBzcGxhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzcGxhc2guY2xhc3NMaXN0LmFkZChcInNwbGFzaFwiKTtcblxuICAvLyBBZGQgcmVzdHVyYW50IG5hbWVcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIkFsbWFtaWdvXCI7XG4gIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgc3BsYXNoLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcblxuICAvLyBBZGQgcmVzdGF1cmFudCBtb3R0b1xuICBjb25zdCBtb3R0byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtb3R0by50ZXh0Q29udGVudCA9IFwiTEEgU291bCBpbiBTZW91bFwiO1xuICBtb3R0by5jbGFzc0xpc3QuYWRkKFwibW90dG9cIik7XG4gIHNwbGFzaC5hcHBlbmRDaGlsZChtb3R0byk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChzcGxhc2gpO1xuXG4gIC8vIEFkZCBkZWxpdmVyeSBiYW5uZXJcbiAgY29uc3QgZGVsaXZlcnlCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWxpdmVyeUJhbm5lci5jbGFzc0xpc3QuYWRkKFwiZGVsaXZlcnlcIik7XG4gIGRlbGl2ZXJ5QmFubmVyLnRleHRDb250ZW50ID0gXCJXZSBEZWxpdmVyIVwiO1xuXG4gIC8vIEFkZCBkZWxpdmVyeSBhcHAgaWNvbnNcbiAgY29uc3QgYmFlbWluSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBjb3VwYW5nSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBiYWVtaW5JY29uLnNyYyA9IEJhZW1pbjtcbiAgY291cGFuZ0ljb24uc3JjID0gQ291cGFuZztcblxuICBiYWVtaW5JY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxpdmVyeS1pY29uXCIpO1xuICBjb3VwYW5nSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsaXZlcnktaWNvblwiKTtcblxuICBkZWxpdmVyeUJhbm5lci5hcHBlbmRDaGlsZChiYWVtaW5JY29uKTtcbiAgZGVsaXZlcnlCYW5uZXIuYXBwZW5kQ2hpbGQoY291cGFuZ0ljb24pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVsaXZlcnlCYW5uZXIpO1xuXG4gIC8vIEFkZCBhZGRyZXNzXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiU2VvdWwgU2luc2EtZG9uZyA2NjMtMjNcIlxuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAvLyBBZGQgbWVudSAoVGFjby9idXJyaXRvL3F1ZXNhZGlsbGFzKVxuICBjb25zdCBmb29kTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgYnVycml0byA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBxdWVzYWRpbGxhcyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCB0YWNvcyA9IG5ldyBJbWFnZSgpO1xuXG4gIGJ1cnJpdG8uc3JjID0gQnVycml0bztcbiAgcXVlc2FkaWxsYXMuc3JjID0gUXVlc2FkaWxsYXM7XG4gIHRhY29zLnNyYyA9IFRhY29zO1xuXG4gIGJ1cnJpdG8uY2xhc3NMaXN0LmFkZChcIm1lbnUtZm9vZFwiKTtcbiAgcXVlc2FkaWxsYXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtZm9vZFwiKTtcbiAgdGFjb3MuY2xhc3NMaXN0LmFkZChcIm1lbnUtZm9vZFwiKTtcblxuICBmb29kTWVudS5hcHBlbmRDaGlsZChidXJyaXRvKTtcbiAgZm9vZE1lbnUuYXBwZW5kQ2hpbGQocXVlc2FkaWxsYXMpO1xuICBmb29kTWVudS5hcHBlbmRDaGlsZCh0YWNvcyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmb29kTWVudSk7XG59XG4iLCJpbXBvcnQgbG9hZFRvcEJhciBmcm9tICcuL3RvcGJhci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpIHtcblxuICAvLyBMb2FkIHRvcCBiYXJcbiAgbG9hZFRvcEJhcigpO1xuXG4gIGNvbnNvbGUubG9nKFwibWVudSBwYWdlXCIpO1xufVxuIiwiaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGxvYWRNZW51UGFnZSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0IGNsZWFyUGFnZSBmcm9tICcuL2NsZWFyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVG9wQmFyKCkge1xuICAvLyBHcmFiIGluaXRpYWwgY29udGVudCBkaXZcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAvLyBDcmVhdGUgdG9wIGJhciB0aGF0IGlzIHN0YXRpY1xuICBjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIENyZWF0ZSBsb2dvXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiQWxtYW1pZ29cIjtcbiAgdG9wQmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuICBcbiAgLy8gQ3JlYXRlIG1lbnUgYmFyc1xuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lclxuICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBjbGVhclBhZ2UoKVxuICAgIGxvYWRIb21lUGFnZSgpO1xuICB9KTtcblxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBjbGVhclBhZ2UoKVxuICAgIGxvYWRNZW51UGFnZSgpO1xuICB9KTtcblxuICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBjbGVhclBhZ2UoKVxuICAgIGxvYWRDb250YWN0UGFnZSgpO1xuICB9KTtcblxuICB0b3BCYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIHRvcEJhci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgdG9wQmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gIHRvcEJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvcC1iYXJcIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZCh0b3BCYXIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9