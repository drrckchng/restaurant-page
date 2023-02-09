"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["topbar"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/topbar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RvcGJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVG9wQmFyKCkge1xuICAvLyBHcmFiIGluaXRpYWwgY29udGVudCBkaXZcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAvLyBDcmVhdGUgdG9wIGJhciB0aGF0IGlzIHN0YXRpY1xuICBjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIENyZWF0ZSBsb2dvXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiQWxtYW1pZ29cIjtcbiAgdG9wQmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuICBcbiAgLy8gQ3JlYXRlIG1lbnUgYmFyc1xuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gIHRvcEJhci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgdG9wQmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICB0b3BCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZCh0b3BCYXIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9