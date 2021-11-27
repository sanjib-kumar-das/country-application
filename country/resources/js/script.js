let countryResult = document.querySelector(".countryResult");
let searchBar = document.querySelector(".countrySearch input");

let searchForCountry = (countryName) => {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);

  request.send();

  request.addEventListener("load", function () {
    // Converting JSON to OBJECT using JSON.PARSE
    const data = JSON.parse(this.responseText)[0];

    const html = `
    <div class="countryResult_card">
    <div class="cardImage">
      <img
        src=${data.flags.png}
        alt="country flag"
      />
    </div>
    <div class="cardDetails">
      <ul>
        <li>${data.name.common}</li>
        <li>Capital : ${data.capital[0]}</li>
        <li>Population : ${data.population}</li>
      </ul>
    </div>
  </div>
    `;

    countryResult.insertAdjacentHTML("afterbegin", html);
  });
};

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && searchBar.value.trim().length > 0) {
    searchForCountry(searchBar.value.trim());
  }
});
