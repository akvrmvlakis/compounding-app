"use strict";

const compound = function () {
  const value1 = document.getElementById("value1").value;
  const value2 = document.getElementById("value2").value;
  const value3 = document.getElementById("value3").value;
  const compResult = (value1 * value2 ** value3).toFixed(2);
  document.querySelector(".result").innerText = compResult;
  return compResult;
};

const result = document.querySelector(".result");
const calcButton = document.querySelector(".calculate");
calcButton.addEventListener("click", () => {
  compound();
});
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  result.classList.add("hidden");
});
const resetFields = document.querySelector(".reset");
resetFields.addEventListener("click", () => {
  location.reload();
});

document.getElementById("year").innerHTML = new Date().getFullYear();
