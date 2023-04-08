import presentCountries from "./src/presentCountries.js";
import "./src/search.js";
import "./src/dropdown.js";
import { HeaderandBackgroundToggleOn } from "./src/commonTogglerColor.js";
import { HeaderandBackgroundToggleOff } from "./src/commonTogglerColor.js";
import { MainContentToggleOn } from "./src/mainContentColorToggler.js";
import { MainContentToggleOff } from "./src/mainContentColorToggler.js";
import "./src/toggleToken.js"
const URL = "https://restcountries.com/v3.1/all";

window.addEventListener("DOMContentLoaded", () => {
  presentCountries(URL);
});

let header = document.querySelector(".header");
let color_button = document.querySelector(".color_changer button");

color_button.addEventListener("click", (e) => {
  if (header.style.backgroundColor === "rgb(43, 57, 69)") {
    HeaderandBackgroundToggleOff();
    MainContentToggleOff();
    localStorage.setItem("toggleState", "off");
  } else {
    HeaderandBackgroundToggleOn();
    MainContentToggleOn();
    localStorage.setItem("toggleState", "on");
  }
});

