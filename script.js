var operatorNumberArray = [];
var result = [];

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
var displayHistory = document.getElementById("displayHistory");

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
// equalBtn.addEventListener("click", () => changeDisplay("="));
acBtn.addEventListener("click", () => clearDisplay());
plusMinusBtn.addEventListener("click", () => convertPositiveNegative(result));

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

function convertPositiveNegative(num) {
  strNum = num.toString();
  if (num < 0) {
    result = Math.abs(strNum); //negative to positive
    displayText.textContent = Math.abs(strNum);
  } else {
    result = -Math.abs(strNum); //positive to negative
    displayText.textContent = -Math.abs(strNum);
  }
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

function changeDisplay(text) {
  if (displayHistory.textContent.length <= "24") {
    var lastValue = operatorNumberArray[operatorNumberArray.length - 1];
    if (areBothNumeric(text, lastValue) == true && lastValue != undefined) {
      var combinedValues = 0;
      lastValue = lastValue.toString();
      text = text.toString();
      combinedValues = Number(lastValue + text);
      operatorNumberArray[operatorNumberArray.length - 1] = combinedValues;
      displayHistory.textContent += text;
    } else if (
      areBothOperatorOrDecimal(text, lastValue) == true &&
      lastValue != undefined
    ) {
      //do nothing
    } else {
      //if its mixed with numeric and other stuff
      displayHistory.textContent += text;
      operatorNumberArray.push(text);
    }
  }
}

function isNumeric(text) {
  if (
    text == "+" ||
    text == "-" ||
    text == "x" ||
    text == "/" ||
    text == "%" ||
    text == "."
  ) {
    return false;
  } else {
    return true;
  }
}

function areBothOperatorOrDecimal(text1, text2) {
  return isNumeric(text1) == false && isNumeric(text2) == false;
}

function areBothNumeric(text1, text2) {
  if (isNumeric(text1) == true && isNumeric(text2) == true) {
    return true;
  }
}

function clearDisplay() {
  displayText.textContent = "";
  displayHistory.textContent = "";
  operatorNumberArray = [];
}

function computeAnswer() {
  result = operatorNumberArray[0];

  for (i = 1; i < operatorNumberArray.length; i += 2) {
    operator = operatorNumberArray[i];
    number = operatorNumberArray[i + 1];
    result = handleOperate(operator, result, number);
  }

  displayText.textContent = roundAnswer(result);
  operatorNumberArray = [roundAnswer(result)];
  displayHistory.textContent += "=";
}

function roundAnswer(result) {
  if (result % 1 != 0) {
    //if answer has decimals
    return result.toFixed(9);
  } else {
    return result;
  }
}
