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
/* harmony import */ var _baemin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baemin.png */ "./src/baemin.png");
/* harmony import */ var _coupang_eats_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coupang-eats.png */ "./src/coupang-eats.png");



function loadHomePage() {
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
  baeminIcon.src = _baemin_png__WEBPACK_IMPORTED_MODULE_0__;
  coupangIcon.src = _coupang_eats_png__WEBPACK_IMPORTED_MODULE_1__;

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
}


/***/ }),

/***/ "./src/baemin.png":
/*!************************!*\
  !*** ./src/baemin.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d957349483ee90e72d7.png";

/***/ }),

/***/ "./src/coupang-eats.png":
/*!******************************!*\
  !*** ./src/coupang-eats.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27eb3fae6bca6163d16d.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ087O0FBRTFCO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0NBQU07QUFDekIsb0JBQW9CLDhDQUFPOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFlbWluIGZyb20gJy4vYmFlbWluLnBuZyc7XG5pbXBvcnQgQ291cGFuZyBmcm9tICcuL2NvdXBhbmctZWF0cy5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy8gQWRkIHNwbGFzaCBiYW5uZXJcbiAgY29uc3Qgc3BsYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3BsYXNoLmNsYXNzTGlzdC5hZGQoXCJzcGxhc2hcIik7XG5cbiAgLy8gQWRkIHJlc3R1cmFudCBuYW1lXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJBbG1hbWlnb1wiO1xuICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHNwbGFzaC5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG5cbiAgLy8gQWRkIHJlc3RhdXJhbnQgbW90dG9cbiAgY29uc3QgbW90dG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbW90dG8udGV4dENvbnRlbnQgPSBcIkxBIFNvdWwgaW4gU2VvdWxcIjtcbiAgbW90dG8uY2xhc3NMaXN0LmFkZChcIm1vdHRvXCIpO1xuICBzcGxhc2guYXBwZW5kQ2hpbGQobW90dG8pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3BsYXNoKTtcblxuICAvLyBBZGQgZGVsaXZlcnkgYmFubmVyXG4gIGNvbnN0IGRlbGl2ZXJ5QmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVsaXZlcnlCYW5uZXIuY2xhc3NMaXN0LmFkZChcImRlbGl2ZXJ5XCIpO1xuICBkZWxpdmVyeUJhbm5lci50ZXh0Q29udGVudCA9IFwiV2UgRGVsaXZlciFcIjtcblxuICAvLyBBZGQgZGVsaXZlcnkgYXBwIGljb25zXG4gIGNvbnN0IGJhZW1pbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY291cGFuZ0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgYmFlbWluSWNvbi5zcmMgPSBCYWVtaW47XG4gIGNvdXBhbmdJY29uLnNyYyA9IENvdXBhbmc7XG5cbiAgYmFlbWluSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsaXZlcnktaWNvblwiKTtcbiAgY291cGFuZ0ljb24uY2xhc3NMaXN0LmFkZChcImRlbGl2ZXJ5LWljb25cIik7XG5cbiAgZGVsaXZlcnlCYW5uZXIuYXBwZW5kQ2hpbGQoYmFlbWluSWNvbik7XG4gIGRlbGl2ZXJ5QmFubmVyLmFwcGVuZENoaWxkKGNvdXBhbmdJY29uKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGRlbGl2ZXJ5QmFubmVyKTtcblxuICAvLyBBZGQgYWRkcmVzc1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIlNlb3VsIFNpbnNhLWRvbmcgNjYzLTIzXCJcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgLy8gQWRkIG1lbnUgKFRhY28vYnVycml0by9xdWVzYWRpbGxhcylcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==