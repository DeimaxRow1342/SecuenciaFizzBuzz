import SecuenciaFizzBuzz from "./secuenciafizzbuzz.js";

const number = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero = Number.parseInt(number.value);

  div.innerHTML = "<p>" + SecuenciaFizzBuzz(numero) + "</p>";
});
