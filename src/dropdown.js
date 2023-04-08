import fetchCountries from "./fetchCountries.js";
import displayCountries from "./displayCountries.js";

let menu_title = document.querySelector(".title");
let menu = document.querySelector(".menu");
let search_input = document.getElementById("query");

const regionURL = "https://restcountries.com/v3.1/region/";

menu_title.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
});

menu.addEventListener("click", async (e) => {
  let region_selected = e.target.textContent;
  menu_title.textContent = region_selected;
  let search_input_value = search_input.value.toLowerCase();
  if (search_input_value.length === 0) {
    let search_url = `${regionURL}${region_selected}`;
    const data = await fetchCountries(search_url);
    displayCountries(data);
  } else {
    let search_url = `${regionURL}${region_selected}`;
    const data = await fetchCountries(search_url);
    let filtered_list = data.filter(({ name }) => {
      return name.official.toLowerCase().includes(search_input_value);
    });
    displayCountries(filtered_list);
  }

  menu.classList.remove("active");
});

