// Esercizio 1
const sum = (num1, num2, num3) => num1 + num2 + num3;
const sub = (num1, num2, num3) => num1 - num2 - num3;
const mult = (num1, num2, num3) => num1 * num2 * num3;
const div = (num1, num2, num3) => num1 / num2 / num3;

/* const calculator2 = (operator, num1, num2, num3) => {
  if (operator === sum) {
    return num1 + num2 + num3;
  } else if (operator === sub) {
    return num1 - num2 - num3;
  } else if (operator === mult) {
    return num1 * num2 * num3;
  } else if (operator === div) {
    return num1 / num2 / num3;
  } else {
    return "Operator not recognized";
  }
};
console.log(sum(3, 4, 5)); */

// opzione 1
const calculator = (fn) => fn;

console.log(calculator(sum(2, 3, 4)));
console.log(calculator(sub(2, 3, 4)));
console.log(calculator(mult(2, 3, 4)));
console.log(calculator(div(2, 3, 4)));

// opzione 2
const calculator1 = (fn, num1, num2, num3) => fn(num1, num2, num3);
console.log(calculator1(sum, 1, 2, 3));

// Esercizio 2
let cart = [
  {
    name: "iphone case",
    id: 9987234,
    image: "https://m.media-amazon.com/images/I/41ornJjD+bL._AC_.jpg",
    description: "plain black phone-case for iphone15",
  },
  {
    name: "candle",
    id: 8798658,
    image: "https://m.media-amazon.com/images/I/81ZnoX8X9VL._AC_SL1500_.jpg",
    description: "lemon-scented candle by Yankee Candle",
  },
  {
    name: "notebook",
    id: 8899776,
    image: "https://m.media-amazon.com/images/I/71pjfAKi4iL._AC_SL1500_.jpg",
    description:
      "10 squared notebook, various-colored cover, Monocromo by Pigna",
  },
  {
    name: "Dizionario Analogico della lingua italiana",
    id: 1256789,
    image: "https://m.media-amazon.com/images/I/81rlJub55wL._SL1500_.jpg",
    description: "Italian analogic dictionary",
  },
];
cart.forEach((item) => {
  console.log(item);
});
// ForEach  permette di seguire una funzione su ogni singolo elemento di un array senza creare un nuovo array.
// Non ritorna niente, se richiamato darà "undefined".

const mapCart = cart.map((item) => item);
console.log(mapCart);
// Map crea un nuovo array invocando la funzione voluta su ogni elemento.
// La differenza principale tra i due è che forEach produce i cambi richiesti nell'array, ma non ritorna niente.
// Map ritorna un nuovo array con gli elementi risultanti dall'applicazione della funzione su ogni elemento.

// Esercizio 3
let arrNum = [4, 5, 6, 7];
let arrNum2 = [8, 9, 10, 11];

// 1.
/*
const transformedArr1 = arrNum.map((n) => n * 2);
console.log(transformedArr1);

const transformedArr2 = arrNum2.map((n) => n + 5);
console.log(transformedArr2);

// 2.
const transformedAndFiltered1 = transformedArr1.filter((n) => n > 10);
console.log(doubledArrNumFilter);

const transformedAndFilteredArr2 = transformedArr2.filter((n) => n % 2 === 0);
console.log(transformedAndFilteredArr2);
 */

const transformAndFilter = (arr1, arr2) => {
  const transformedArr1 = arr1.map((n) => n * 2);
  const transformedArr2 = arr2.map((n) => n + 5);
  const transformedAndFilteredArr1 = transformedArr1.filter((n) => n > 10);
  const transformedAndFilteredArr2 = transformedArr2.filter((n) => n % 2 === 0);

  return [transformedAndFilteredArr1, transformedAndFilteredArr2];
};

console.log(transformAndFilter(arrNum, arrNum2));
