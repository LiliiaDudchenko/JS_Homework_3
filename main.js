"use strict";

//1

function sum(a, b) {
  console.log(a + b);
}
sum(45, 6);

function multiply(number) {
  alert(number * number);
}
multiply(20);

function subtract(num1, num2) {
  alert(num1 - num2);
}
subtract(23, 4);

function divide(nuM1, nuM2) {
  return nuM1 / nuM2;
}
console.log(divide(120, 40));

//2

function getName() {
  console.log("Ivan");
}
getName();

function getName() {
  alert("Ivan");
}
getName();

function getName() {
  alert("Ivan");
  console.log("Ivan");
}
getName();

//3

function sumOdd(number3, sum3) {
  while (number3 > 0) {
    if (number3 % 2 != 0) {
      sum3 = sum3 + number3;
    }
    number3--;
  }
  console.log(sum3);
}

sumOdd(7, 0);

//3.2
function getMaxEven(nUmber) {
  let z;

  for (let i = 0; i <= nUmber; i++) {
    if (i % 2 == 0) {
      z = i;
    }
  }
  return z;
}
alert(getMaxEven(49));

//3.3

function getLastOdd(nUmber) {
  let z;

  for (let i = 0; i <= nUmber; i++) {
    if (i % 2 != 0) {
      z = i;
    }
  }
  return z;
}
alert(getLastOdd(490));

//3.4

function getMaxNumber(nuMber1, nuMber2, nuMber3) {
  let tempArray = [nuMber1, nuMber2, nuMber3];
  let max = tempArray[0];

  for (let i = 1; i < 3; i++) {
    if (tempArray[i - 1] < tempArray[i]) {
      max = tempArray[i];
    }
  }
  return max;
}
alert(getMaxNumber(6, 9, 10));

//3.5

function getMinNumber(numBer1, numBer2, numBer3, numBer4, numBer5) {
  let tempArray = [numBer1, numBer2, numBer3, numBer4, numBer5];
  let min = tempArray[0];

  for (let i = 1; i < 5; i++) {
    if (tempArray[i - 1] > tempArray[i]) {
      min = tempArray[i];
    }
  }
  return min;
}
alert(getMinNumber(6, 5, 1, 3, 37));

//3.6
function getTypeOf(parameter) {
  alert(typeof parameter);
}
getTypeOf(true);

//3.7

function getDayOfWeek(day) {
  switch (day) {
    case 1:
      alert("Понедельник");
      break;
    case 2:
      alert("Вторник");
      break;
    case 3:
      alert("Среда");
      break;
    case 4:
      alert("Четверг");
      break;
    case 5:
      alert("Пятница");
      break;
    case 6:
      alert("Суббота");
      break;
    case 7:
      alert("Воскресение");
      break;
  }
}
getDayOfWeek(5);
