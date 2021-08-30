var operatorNumberArray = [];
var result = operatorNumberArray;

var oneBtn = document.getElementById("oneBtn");
var twoBtn = document.getElementById("twoBtn");
var threeBtn = document.getElementById("threeBtn");
var fourBtn = document.getElementById("fourBtn");
var fiveBtn = document.getElementById("fiveBtn");
var sixBtn = document.getElementById("sixBtn");
var sevenBtn = document.getElementById("sevenBtn");
var eightBtn = document.getElementById("eightBtn");
var nineBtn = document.getElementById("nineBtn");
var acBtn = document.getElementById("acBtn");
var plusminusBtn = document.getElementById("plusMinusBtn");
var remainderBtn = document.getElementById("remainderBtn");
var addBtn = document.getElementById("addBtn");
var subtractBtn = document.getElementById("subtractBtn");
var multiplyBtn = document.getElementById("multiplyBtn");
var divideBtn = document.getElementById("divideBtn");
var decimalBtn = document.getElementById("decimalBtn");
var equalBtn = document.getElementById("equalBtn");
var displayText = document.getElementById("displayText");

zeroBtn.addEventListener("click", () => changeDisplay(0));
oneBtn.addEventListener("click", () => changeDisplay(1));
twoBtn.addEventListener("click", () => changeDisplay(2));
threeBtn.addEventListener("click", () => changeDisplay(3));
fourBtn.addEventListener("click", () => changeDisplay(4));
fiveBtn.addEventListener("click", () => changeDisplay(5));
sixBtn.addEventListener("click", () => changeDisplay(6));
sevenBtn.addEventListener("click", () => changeDisplay(7));
eightBtn.addEventListener("click", () => changeDisplay(8));
nineBtn.addEventListener("click", () => changeDisplay(9));
remainderBtn.addEventListener("click", () => changeDisplay("%"));
addBtn.addEventListener("click", () => changeDisplay("+"));
subtractBtn.addEventListener("click", () => changeDisplay("-"));
multiplyBtn.addEventListener("click", () => changeDisplay("x"));
divideBtn.addEventListener("click", () => changeDisplay("/"));
decimalBtn.addEventListener("click", () => changeDisplay("."));
equalBtn.addEventListener("click", () => computeAnswer());
acBtn.addEventListener("click", () => changeDisplay(""));
plusMinusBtn.addEventListener("click", () => convertPosNeg(result));

function handleAdd(num1, num2) {
  return num1 + num2;
}

function handleSubtract(num1, num2) {
  return num1 - num2;
}

function handleMultiply(num1, num2) {
  return num1 * num2;
}

function handleDivide(num1, num2) {
  return num1 / num2;
}

function handleRemainder(num1, num2) {
  return ((num1 % num2) + num2) % num2; //needed b/c just % in JS is not a true modulus operator
}

function handleOperate(operator, num1, num2) {
  if (operator === "+") {
    return handleAdd(num1, num2);
  } else if (operator === "-") {
    return handleSubtract(num1, num2);
  } else if (operator === "x") {
    return handleMultiply(num1, num2);
  } else if (operator === "/") {
    return handleDivide(num1, num2);
  } else {
    return handleRemainder(num1, num2);
  }
}

function convertPosNeg(num) {
  if (num >= 0) {
    return -Math.abs(num); //positive to negative
  } else {
    return Math.abs(num); //negative to positive
  }
}

function changeDisplay(text) {
  displayText.textContent = text;
  operatorNumberArray.push(text);
}

function computeAnswer() {
  var result = operatorNumberArray[0];

  for (i = 1; i < operatorNumberArray.length; i += 2) {
    operator = operatorNumberArray[i];
    number = operatorNumberArray[i + 1];

    result = handleOperate(operator, result, number);
  }
  displayText.textContent = result;
  operatorNumberArray = [];
}
