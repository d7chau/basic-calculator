var operatorNumberArray = [];

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
// plusMinusBtn.addEventListener("click", () => changeDisplay(""));

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else {
    return divide(num1, num2);
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

    result = operate(operator, result, number);
  }
  displayText.textContent = result;
  operatorNumberArray = [];
}

// operate("+", 1, 4);
