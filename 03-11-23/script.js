//esercizio 1
//let temp = prompt("Che temperatura c'è? (Introdurre solo il numero)");

function isItHotorCold(temp) {
  if (temp >= 25) {
    return "Fa caldo";
  } else if (temp < 25 && temp >= 15) {
    return "Temperatura perfetta!";
  } else if (temp < 15) {
    return "Fa freddo";
  } else {
    return "Non sono in grado di darti una risposta";
  }
}
// console.log(isItHotorCold(temp));

//esercizio 2
const myNameIsOlga = {
  firstName: "Olga",
  lastName: "Barbato",
  age: 31,
  city: "Palermo",
  introduction: function () {
    return (
      "Hello, my name is " +
      this.firstName +
      " " +
      this.lastName +
      ", I am" +
      " " +
      this.age +
      " " +
      "years old and I live in" +
      " " +
      this.city +
      "."
    );
  },
};
//console.log(myNameIsOlga.introduction());

// esercizio 3
// 1.
const favouriteFood = [];

// 2.
function addToFav(sth) {
  favouriteFood.push(sth);
  return favouriteFood;
}
addToFav("dark chocolate");
addToFav("curry di ceci");
addToFav("parmigiano");
//console.log(favouriteFood);

//console.log(addToFav("pizza margherita"));

// 3.
function showFav() {
  if (favouriteFood.length === 0) {
    console.log("favouriteFood is empty");
  } else {
    for (let i = 0; i < favouriteFood.length; i++) {
      console.log(favouriteFood[i]);
    }
  }
}
showFav();

// 4. Non so eliminare direttamente la stringa.
function takeOffLastFromFav(sth) {
  favouriteFood.pop(sth);
  return favouriteFood;
}

takeOffLastFromFav();
console.log(favouriteFood);

function takeOffFirstFromFav(sth) {
  favouriteFood.shift(sth);
  return favouriteFood;
}
console.log(takeOffFirstFromFav());

function deleteFromFav(num1, num2) {
  favouriteFood.splice(num1, num2);
  return favouriteFood;
}
console.log(favouriteFood);
console.log(deleteFromFav(0, 1));
