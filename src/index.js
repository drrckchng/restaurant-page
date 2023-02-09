import './style.css';
import loadHomePage from './home.js';

// Grab initial content div
const content = document.getElementById("content");

const topBar = document.createElement("div");

content.appendChild(topBar);


loadHomePage();
