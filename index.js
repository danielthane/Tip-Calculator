"use strict";
//Selecting Variables
let billCostEl = document.querySelector("#bill");
let peopleEl = document.querySelector("#number-people");
let customTipEl = document.querySelector("#custom-tip");
let resetButtonEl = document.querySelector(".reset");
let billStartingVal = billCostEl.value;
let people = peopleEl.value;
let tipPercentage = 0;
let tip;
let finalBill;

//Function Definitions

// DOM MANIPULATION
// Dynamically Change the Bill Value without tip
billCostEl.addEventListener("input", () => {
  billStartingVal = parseFloat(billCostEl.value);
});

//Dynamically Change the people value
peopleEl.addEventListener("input", () => {
  people = parseFloat(peopleEl.value);
  if (people > 0) {
    tip = billStartingVal * (tipPercentage / 100);
    updateResults();
  }
});

//Custom Tip stuff
customTipEl.addEventListener("input", () => {
  tipPercentage = customTipEl.value;
  updateResults();
});

//Add event listeners to each tip button
document.querySelectorAll(".tip").forEach((item) => {
  item.addEventListener("click", () => {
    tipPercentage = item.innerHTML.split("%")[0];
    updateResults();
  });
});

//Reset Button
resetButtonEl.addEventListener("click", () => {
  billCostEl.value = 0;
  peopleEl.value = 0;
  customTipEl.value = 0;
  tipPercentage = 0;
  billStartingVal = 0;
  people = 0;
  finalBill = 0;
  tip = 0;
  document.getElementById("tip-per-person").textContent = 0;
  document.getElementById("total-per-person").textContent = 0;
});

function updateResults() {
  if (people > 0) {
    tip = billStartingVal * (tipPercentage / 100);
    document.getElementById("tip-per-person").textContent = calcTip();
    document.getElementById("total-per-person").textContent = calcBill();
  }
}

function calcTip() {
  return Math.round((tip / people) * 100) / 100;
}

function calcBill() {
  return Math.round(((billStartingVal + tip) / people) * 100) / 100;
}
