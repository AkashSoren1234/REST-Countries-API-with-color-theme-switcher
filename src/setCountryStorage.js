const setCountryStorage = (section) => {
  section.addEventListener("click", function (e) {
    //e.preventDefault();
    // JSON.stringify JSON.parse
    if (e.target.className === "country_title") {
      //console.log(e.target);
      //console.log(e.target.className);
      //console.log(e.target.parentElement);
      const official_name = e.target.parentElement.dataset.id;
      localStorage.setItem("country", official_name);
    }
  });
};

export default setCountryStorage;
