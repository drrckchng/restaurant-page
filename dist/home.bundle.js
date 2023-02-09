"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xxQzs7QUFFdEI7O0FBRWY7QUFDQSxFQUFFLHNEQUFVOztBQUVaO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JxQztBQUNIO0FBQ087QUFDRTtBQUNYO0FBQ0k7O0FBRXJCOztBQUVmO0FBQ0EsRUFBRSxzREFBVTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdDQUFNO0FBQ3pCLG9CQUFvQiw4Q0FBTzs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IseUNBQU87QUFDdkIsb0JBQW9CLDRDQUFXO0FBQy9CLGNBQWMsdUNBQUs7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9FcUM7O0FBRXRCOztBQUVmO0FBQ0EsRUFBRSxzREFBVTs7QUFFWjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnFDO0FBQ0E7QUFDTTtBQUNUOztBQUVuQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkscURBQVM7QUFDYixJQUFJLHFEQUFZO0FBQ2hCLEdBQUc7O0FBRUg7QUFDQSxJQUFJLHFEQUFTO0FBQ2IsSUFBSSxxREFBWTtBQUNoQixHQUFHOztBQUVIO0FBQ0EsSUFBSSxxREFBUztBQUNiLElBQUksd0RBQWU7QUFDbkIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jbGVhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdG9wYmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgd2hpbGUoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gIH1cbn1cbiIsImltcG9ydCBsb2FkVG9wQmFyIGZyb20gJy4vdG9wYmFyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3RQYWdlKCkge1xuXG4gIC8vIExvYWQgdG9wIGJhclxuICBsb2FkVG9wQmFyKCk7XG5cbiAgY29uc29sZS5sb2coXCJjb250YWN0IHBhZ2VcIik7XG59XG4iLCJpbXBvcnQgbG9hZFRvcEJhciBmcm9tICcuL3RvcGJhci5qcyc7XG5pbXBvcnQgQmFlbWluIGZyb20gJy4vYmFlbWluLnBuZyc7XG5pbXBvcnQgQ291cGFuZyBmcm9tICcuL2NvdXBhbmctZWF0cy5wbmcnO1xuaW1wb3J0IFF1ZXNhZGlsbGFzIGZyb20gJy4vcXVlc2FkaWxsYS5qcGcnO1xuaW1wb3J0IFRhY29zIGZyb20gJy4vdGFjb3MuanBnJztcbmltcG9ydCBCdXJyaXRvIGZyb20gJy4vYnVycml0by5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG5cbiAgLy8gTG9hZCB0b3AgYmFyXG4gIGxvYWRUb3BCYXIoKTtcblxuICAvLyBHcmFiIGNvbnRlbnQgZGl2XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy8gQWRkIHNwbGFzaCBiYW5uZXJcbiAgY29uc3Qgc3BsYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3BsYXNoLmNsYXNzTGlzdC5hZGQoXCJzcGxhc2hcIik7XG5cbiAgLy8gQWRkIHJlc3R1cmFudCBuYW1lXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJBbG1hbWlnb1wiO1xuICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHNwbGFzaC5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG5cbiAgLy8gQWRkIHJlc3RhdXJhbnQgbW90dG9cbiAgY29uc3QgbW90dG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbW90dG8udGV4dENvbnRlbnQgPSBcIkxBIFNvdWwgaW4gU2VvdWxcIjtcbiAgbW90dG8uY2xhc3NMaXN0LmFkZChcIm1vdHRvXCIpO1xuICBzcGxhc2guYXBwZW5kQ2hpbGQobW90dG8pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3BsYXNoKTtcblxuICAvLyBBZGQgZGVsaXZlcnkgYmFubmVyXG4gIGNvbnN0IGRlbGl2ZXJ5QmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVsaXZlcnlCYW5uZXIuY2xhc3NMaXN0LmFkZChcImRlbGl2ZXJ5XCIpO1xuICBkZWxpdmVyeUJhbm5lci50ZXh0Q29udGVudCA9IFwiV2UgRGVsaXZlciFcIjtcblxuICAvLyBBZGQgZGVsaXZlcnkgYXBwIGljb25zXG4gIGNvbnN0IGJhZW1pbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY291cGFuZ0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgYmFlbWluSWNvbi5zcmMgPSBCYWVtaW47XG4gIGNvdXBhbmdJY29uLnNyYyA9IENvdXBhbmc7XG5cbiAgYmFlbWluSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsaXZlcnktaWNvblwiKTtcbiAgY291cGFuZ0ljb24uY2xhc3NMaXN0LmFkZChcImRlbGl2ZXJ5LWljb25cIik7XG5cbiAgZGVsaXZlcnlCYW5uZXIuYXBwZW5kQ2hpbGQoYmFlbWluSWNvbik7XG4gIGRlbGl2ZXJ5QmFubmVyLmFwcGVuZENoaWxkKGNvdXBhbmdJY29uKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGRlbGl2ZXJ5QmFubmVyKTtcblxuICAvLyBBZGQgYWRkcmVzc1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIlNlb3VsIFNpbnNhLWRvbmcgNjYzLTIzXCJcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgLy8gQWRkIG1lbnUgKFRhY28vYnVycml0by9xdWVzYWRpbGxhcylcbiAgY29uc3QgZm9vZE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IGJ1cnJpdG8gPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgcXVlc2FkaWxsYXMgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgdGFjb3MgPSBuZXcgSW1hZ2UoKTtcblxuICBidXJyaXRvLnNyYyA9IEJ1cnJpdG87XG4gIHF1ZXNhZGlsbGFzLnNyYyA9IFF1ZXNhZGlsbGFzO1xuICB0YWNvcy5zcmMgPSBUYWNvcztcblxuICBidXJyaXRvLmNsYXNzTGlzdC5hZGQoXCJtZW51LWZvb2RcIik7XG4gIHF1ZXNhZGlsbGFzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWZvb2RcIik7XG4gIHRhY29zLmNsYXNzTGlzdC5hZGQoXCJtZW51LWZvb2RcIik7XG5cbiAgZm9vZE1lbnUuYXBwZW5kQ2hpbGQoYnVycml0byk7XG4gIGZvb2RNZW51LmFwcGVuZENoaWxkKHF1ZXNhZGlsbGFzKTtcbiAgZm9vZE1lbnUuYXBwZW5kQ2hpbGQodGFjb3MpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZE1lbnUpO1xufVxuIiwiaW1wb3J0IGxvYWRUb3BCYXIgZnJvbSAnLi90b3BiYXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudVBhZ2UoKSB7XG5cbiAgLy8gTG9hZCB0b3AgYmFyXG4gIGxvYWRUb3BCYXIoKTtcblxuICBjb25zb2xlLmxvZyhcIm1lbnUgcGFnZVwiKTtcbn1cbiIsImltcG9ydCBsb2FkSG9tZVBhZ2UgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBsb2FkTWVudVBhZ2UgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBsb2FkQ29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBjbGVhclBhZ2UgZnJvbSAnLi9jbGVhci5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFRvcEJhcigpIHtcbiAgLy8gR3JhYiBpbml0aWFsIGNvbnRlbnQgZGl2XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy8gQ3JlYXRlIHRvcCBiYXIgdGhhdCBpcyBzdGF0aWNcbiAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAvLyBDcmVhdGUgbG9nb1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIkFsbWFtaWdvXCI7XG4gIHRvcEJhci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgXG4gIC8vIENyZWF0ZSBtZW51IGJhcnNcbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJcbiAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgY2xlYXJQYWdlKClcbiAgICBsb2FkSG9tZVBhZ2UoKTtcbiAgfSk7XG5cbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgY2xlYXJQYWdlKClcbiAgICBsb2FkTWVudVBhZ2UoKTtcbiAgfSk7XG5cbiAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgY2xlYXJQYWdlKClcbiAgICBsb2FkQ29udGFjdFBhZ2UoKTtcbiAgfSk7XG5cbiAgdG9wQmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICB0b3BCYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIHRvcEJhci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICB0b3BCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b3AtYmFyXCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9wQmFyKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==