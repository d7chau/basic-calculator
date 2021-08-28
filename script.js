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
var cBtn = document.getElementById("cBtn");
var remainderBtn = document.getElementById("remainderBtn");
var addBtn = document.getElementById("addBtn");
var subtractBtn = document.getElementById("subtractBtn");
var multiplyBtn = document.getElementById("multiplyBtn");
var divideBtn = document.getElementById("divideBtn");
var decimalBtn = document.getElementById("decimalBtn");
var equalBtn = document.getElementById("equalBtn");
var displayText = document.getElementById("displayText");

zeroBtn.addEventListener("click", () => handleDisplay(0));
oneBtn.addEventListener("click", () => handleDisplay(1));
twoBtn.addEventListener("click", () => handleDisplay(2));
threeBtn.addEventListener("click", () => handleDisplay(3));
fourBtn.addEventListener("click", () => handleDisplay(4));
fiveBtn.addEventListener("click", () => handleDisplay(5));
sixBtn.addEventListener("click", () => handleDisplay(6));
sevenBtn.addEventListener("click", () => handleDisplay(7));
eightBtn.addEventListener("click", () => handleDisplay(8));
nineBtn.addEventListener("click", () => handleDisplay(9));
remainderBtn.addEventListener("click", () => handleDisplay("%"));
addBtn.addEventListener("click", () => handleDisplay("+"));
subtractBtn.addEventListener("click", () => handleDisplay("-"));
multiplyBtn.addEventListener("click", () => handleDisplay("*"));
divideBtn.addEventListener("click", () => handleDisplay("/"));
decimalBtn.addEventListener("click", () => handleDisplay("."));
equalBtn.addEventListener("click", () => handleDisplay("="));

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
    add(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2);
  } else if (operator === "*") {
    multiply(num1, num2);
  } else {
    divide(num1, num2);
  }
}

function handleDisplay(text) {
  displayText.textContent = text;
}

// operate("+", 1, 4);
