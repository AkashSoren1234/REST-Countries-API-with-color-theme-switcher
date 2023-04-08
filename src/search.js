import fetchCountries from "./fetchCountries.js";
import displayCountries from "./displayCountries.js";

let menu_title = document.querySelector(".title");
let search_input = document.getElementById("query");
let search_form = document.getElementById("search_form");

const baseURL = "https://restcountries.com/v3.1/name/";
const fullURL = "https://restcountries.com/v3.1/all";
const regionURL = "https://restcountries.com/v3.1/region/";

const debounce = (fn, delay) => {
  let timeOutID;
  return function (...args) {
    if (timeOutID) {
      clearTimeout(timeOutID);
    }
    timeOutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};


search_form.addEventListener(
  "keyup",
  debounce(async (e) => {
    const search_input_value = search_input.value.trim().toLowerCase();
    let region_selected = menu_title.textContent.trim();
    if (region_selected != "Filter By Region") {
      if (search_input_value.length === 0) {
        let search_url = `${regionURL}${region_selected}`;
        const data = await fetchCountries(search_url);
        displayCountries(data);
      } else {
        let search_url = `${baseURL}${search_input_value}`;
        const data = await fetchCountries(search_url);
        let filtered_list = data.filter(({ region }) => {
          return region == region_selected;
        });
        displayCountries(filtered_list);
      }
    } else {
      if (search_input_value.length === 0) {
        const data = await fetchCountries(fullURL);
        displayCountries(data);
      } else {
        let search_url = `${baseURL}${search_input_value}`;
        const data = await fetchCountries(search_url);
        displayCountries(data);
      }
    }
    search_form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }, 2000)
);
