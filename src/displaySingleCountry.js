import { hideLoading } from "./toggleLoading.js";
import fetchCountries from "./fetchCountries.js";

let single_country = document.querySelector(".single_country_container");

let border_url = "https://restcountries.com/v3.1/alpha/";

const displaySingleCountry = async (data) => {
  //hideLoading();
  const [main_data] = data;
  const [
    {
      borders = undefined,
      name: { common: title_name, nativeName },
      capital,
      region,
      subregion,
      population,
      flags: { png: flag_img },
      currencies,
      tld: [top_level_domain],
      languages,
    },
  ] = data;
  let border_countries_display_element;
  if (borders == undefined) {
    border_countries_display_element = "";
  } else {
    let border_countries_names = await Promise.all(
      borders.map(async (border) => {
        let search_url = `${border_url}${border}`;
        let data = await fetchCountries(search_url);
        const [
          {
            name: { common },
          },
        ] = data;
        return common;
      })
    );
    border_countries_display_element = border_countries_names
      .map((single_border_country) => {
        return `<p class="border_country">${single_border_country}</p>`;
      })
      .join("");
  }
  const native_name = nativeName[Object.keys(nativeName)[0]].official;
  const currency = currencies[Object.keys(currencies)[0]].name;
  const language = languages[Object.keys(languages)[0]];
  hideLoading();
  single_country.innerHTML = `<div class="flag_image">
                                <img src="${flag_img}" alt="" />
                              </div>
                              <div class="single_country_details">
                                <h1 class="country_title">${title_name}</h1>
                                <div class="details">
                                  <div class="primary_details">
                                    <p class="native">
                                      <span>Native Name: </span>${native_name}
                                    </p>
                                    <p class="population">
                                      <span>Population: </span>${population}
                                    </p>
                                    <p class="region">
                                      <span>Region: </span>${region}
                                    </p>
                                    <p class="sub_region">
                                      <span>Sub Region: </span>${subregion}
                                    </p>
                                    <p class="capital">
                                      <span>Capital: </span>${capital}
                                    </p>
                                  </div>
                                  <div class="secondary_details">
                                    <p class="domain">
                                      <span>Top Level Domain: </span>${top_level_domain}
                                    </p>
                                    <p class="currencies">
                                      <span>Currencies: </span>${currency}
                                    </p>
                                    <p class="languages">
                                      <span>Languages: </span>${language}
                                    </p>
                                  </div>
                                </div>
                                <div class="border_countries">
                                  <h1>Border Countries</h1>
                                  ${border_countries_display_element}
                                </div>
                              </div>`;
};

export default displaySingleCountry;
