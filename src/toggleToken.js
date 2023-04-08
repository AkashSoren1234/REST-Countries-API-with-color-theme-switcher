import { HeaderandBackgroundToggleOn } from "./commonTogglerColor.js";
import { MainContentToggleOn } from "./mainContentColorToggler.js";

const isDarkMode = localStorage.getItem("toggleState") === "on";

if (isDarkMode) {
  //console.log("toggle on");
  HeaderandBackgroundToggleOn();
  MainContentToggleOn();
}
