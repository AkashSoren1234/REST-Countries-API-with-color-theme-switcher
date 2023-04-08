let dropdown_title = document.querySelector(".dropdown2 .title");
let search_form = document.querySelector("#search_form");
let search_form_button = document.querySelector("#search_form button");
let search_input = document.querySelector("#query");
let dropdown_menu = document.querySelector(".menu");



export const MainContentToggleOn = () => {
  dropdown_title.style.backgroundColor = "hsl(209, 23%, 22%)";
  search_form.style.backgroundColor = "hsl(209, 23%, 22%)";
  search_input.style.cssText = "color: red !important;";
  search_form_button.style.backgroundColor = "hsl(209, 23%, 22%)";
  dropdown_menu.style.backgroundColor = "hsl(209, 23%, 22%)";
  dropdown_menu.style.color = "hsl(0, 0%, 100%)";
};

export const MainContentToggleOff = () => {
  dropdown_title.style.backgroundColor = "hsl(0, 0%, 100%)";
  search_form.style.backgroundColor = "hsl(0, 0%, 100%)";
  search_input.style.cssText = "color: black !important;";
  search_form_button.style.backgroundColor = "hsl(0, 0%, 100%)";
  dropdown_menu.style.backgroundColor = "hsl(0, 0%, 100%)";
  dropdown_menu.style.color = "black";
};