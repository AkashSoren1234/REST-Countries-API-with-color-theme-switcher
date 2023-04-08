import fetchCountries from "./fetchCountries.js";
import displayCountries from "./displayCountries.js";
import setCountryStorage from "./setCountryStorage.js";


const presentCountries = async (url) => {
  // fetch drinks
  const data = await fetchCountries(url);

  // display drinks
  const section = displayCountries(data);
  if (section) {
    setCountryStorage(section);
  }
};

export default presentCountries;
