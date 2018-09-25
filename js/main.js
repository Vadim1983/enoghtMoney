const body = document.body;
let howMuchMoney = +prompt('Сколько у Вас с собой денег?');
let howMuchApples = +prompt('Сколько Вы купили яблок?');
let howMuchBreed = +prompt('Сколько Вы купили батонов хлеба??');
let appleCost = +prompt('Сколько стоит одно яблоко?');
let breadCost = +prompt('Сколько стоит один батон?');

let haveEnough = (howMuchMoney, howMuchApples, howMuchBreed, appleCost, breadCost) => {
  let totalAppleCost = howMuchApples * appleCost;
  let totalBreadCost = howMuchBreed * breadCost;
  let total = totalAppleCost + totalBreadCost;
  if (howMuchMoney >= total) {
    body.innerHTML = `Вам хватает денег на покупки`;
  } else if (howMuchMoney < total) {
    body.innerHTML = `Вам не хватает денег`;
  }
};

haveEnough(howMuchMoney, howMuchApples, howMuchBreed, appleCost, breadCost);