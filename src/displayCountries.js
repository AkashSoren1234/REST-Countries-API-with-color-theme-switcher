import { hideLoading } from "./toggleLoading.js";
let country_list = document.querySelector(".countries_list");

function displayCountries(arraylist) {
  if (arraylist.length) {
    if (country_list.classList.contains("countries_list_not_found")) {
      country_list.classList.remove("countries_list_not_found");
    }
    let x = arraylist
      .map(
        ({
          name: { official: main_name },
          population,
          region,
          capital,
          flags: { png: flag_img },
        }) => {
          let output = `<section class="country">
                          <div class="flag">
                            <img src="${flag_img}" alt="flag" />
                          </div>
                          <div class="country_details">
                            <a href="country.html" data-id="${main_name}">
                              <h2 class="country_title">${main_name}</h2>
                            </a>
                            <div class="extra_details">
                            <p class="population"><span>Population:</span>  ${population}</p>
                            <p class="region"><span>Region:</span> ${region}</p>
                            <p class="capital"><span>Capital:</span> ${capital}</p>
                            </div>
                          </div>
                        </section>`;
          return output;
        }
      )
      .join("");
    hideLoading();
    country_list.innerHTML = x;
    return country_list;
  } else {
    hideLoading();
    country_list.innerHTML = "Not Found";
    country_list.classList.add("countries_list_not_found");
    return country_list;
  }
}

export default displayCountries;
