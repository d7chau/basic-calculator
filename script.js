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
var powerBtn = document.getElementById("powerBtn");
var remainderBtn = document.getElementById("remainderBtn");
var addBtn = document.getElementById("addBtn");
var subtractBtn = document.getElementById("subtractBtn");
var multiplyBtn = document.getElementById("multiplyBtn");
var divideBtn = document.getElementById("divideBtn");
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
powerBtn.addEventListener("click", () => changeDisplay("^"));
equalBtn.addEventListener("click", () => computeAnswer());
acBtn.addEventListener("click", () => clearDisplay());

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

function handlePower(num1, num2) {
  return Math.pow(num1, num2);
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
  } else if (operator === "%") {
    return handleRemainder(num1, num2);
  } else {
    return handlePower(num1, num2);
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
      updateHistory(text);
    } else if (
      areBothOperatorOrDecimal(text, lastValue) == true &&
      lastValue != undefined
    ) {
      //do nothing
    } else {
      //if its mixed with numeric and other stuff
      updateHistory(text);
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
    text == "." ||
    text == "^"
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
  updateHistory("=");
  updateHistory(result);
}

function roundAnswer(result) {
  result = result.toString();
  result = result.substr(0, 11);
  result = Number(result);
  return result;
}

function updateHistory(text) {
  if (displayHistory.textContent.length + text.toString().length > 24) {
    var newTextContent = displayHistory.textContent + text;
    displayHistory.textContent = newTextContent.slice(
      newTextContent.length - 24,
      newTextContent.length
    );
  } else {
    displayHistory.textContent += text;
  }
}
