import fetchCountries from "./src/fetchCountries.js";
import displaySingleCountry from "./src/displaySingleCountry.js";
import { HeaderandBackgroundToggleOn } from "./src/commonTogglerColor.js";
import { HeaderandBackgroundToggleOff } from "./src/commonTogglerColor.js";


const presentSingleCountry = async () => {
  const id = localStorage.getItem("country");
  if (!id) {
    window.location.replace("index.html");
  } else {
    const data = await fetchCountries(
      `https://restcountries.com/v3.1/name/${id}?fullText=true`
    );
    displaySingleCountry(data);
  }
};

window.addEventListener("DOMContentLoaded", presentSingleCountry);

let header = document.querySelector(".header");
let color_button = document.querySelector(".color_changer button");
let back_button = document.querySelector(".back_button");

color_button.addEventListener("click", (e) => {
  if (header.style.backgroundColor === "rgb(43, 57, 69)") {
    HeaderandBackgroundToggleOff();
    back_button.style.color = "black";
    localStorage.setItem("toggleState", "off");
  } else {
    HeaderandBackgroundToggleOn();
    back_button.style.color = "hsl(0, 0%, 100%)";
    localStorage.setItem("toggleState", "on");
  }
});

const isDarkMode = localStorage.getItem("toggleState") === "on";

if (isDarkMode) {
  //console.log("toggle on");
  HeaderandBackgroundToggleOn();
  back_button.style.color = "hsl(0, 0%, 100%)";
}
