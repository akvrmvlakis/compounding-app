"use strict";

const calculateCompound = () => {
  const getValue = (id) => Number(document.getElementById(id).value);
  const value1 = getValue("value1");
  const value2Percentage = getValue("value2") / 100;
  const value3 = getValue("value3");
  const result = (value1 * (1 + value2Percentage) ** value3).toFixed(2);
  const resultElement = document.querySelector(".result");
  resultElement.innerText = result;
  resultElement.classList.remove("hidden"); // Ensure the result is visible
  return result;
};

const resetCalculator = () => {
  const resultElement = document.querySelector(".result");
  resultElement.classList.add("hidden");
  document.getElementById("value1").value = "0";
  document.getElementById("value2").value = "0";
  document.getElementById("value3").value = "0";
  calculateCompound(); // Recalculate after resetting
};

document
  .querySelector(".calculate")
  .addEventListener("click", calculateCompound);
document.querySelector(".reset").addEventListener("click", resetCalculator);

// get copyright year
new Date().getFullYear();
document.getElementById("year").innerHTML = new Date().getFullYear();
