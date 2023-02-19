"use strict";
//Selecting Variables
let billCostEl = document.querySelector("#bill");
let peopleEl = document.querySelector("#number-people");
let billStartingVal = billCostEl.value;
let people = peopleEl.value;
let tipPercentage = 0;
let tip;
let finalBill;

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

//Add event listeners to each tip button
document.querySelectorAll(".tip").forEach((item) => {
  item.addEventListener("click", () => {
    tipPercentage = item.innerHTML.split("%")[0];
    updateResults();
  });
});

function updateResults() {
  if (people > 0) {
    console.log("updating...");
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
