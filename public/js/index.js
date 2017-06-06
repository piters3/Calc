var buttons = document.querySelectorAll("button"), zero = document.querySelector("#zero"), one = document.querySelector("#one"), two = document.querySelector("#two"), three = document.querySelector("#three"), four = document.querySelector("#four"), five = document.querySelector("#five"), six = document.querySelector("#six"), seven = document.querySelector("#seven"), eight = document.querySelector("#eight"), nine = document.querySelector("#nine"), division = document.querySelector("#division"), multiplication = document.querySelector("#multiplication"), subtraction = document.querySelector("#subtraction"), addition = document.querySelector("#addition"), del = document.querySelector("#del"), equal = document.querySelector("#equal"), comma = document.querySelector("#comma"), result = document.querySelector("output"), first = '', second = '', sign = null, finish = 0;
var digits = [zero, one, two, three, four, five, six, seven, eight, nine, comma], signs = [division, multiplication, subtraction, addition];
function setOutputValue() {
    result.value += this.value;
}
function getFirstNumber() {
    first += this.value;
    // console.log("first:" + first);
    return parseFloat(first);
}
function getSign() {
    sign = this.value;
    // console.log("sign:" + this.value);
    return sign;
}
function getSecondNumber() {
    second += this.value;
    // console.log("second:" + second);
    return parseFloat(second);
}
function removeFirstListener() {
    for (var i = 0; i < digits.length; i++) {
        digits[i].removeEventListener("click", getFirstNumber, false);
    }
    second = '';
}
function addFirstListener() {
    for (var i = 0; i < digits.length; i++) {
        digits[i].addEventListener("click", getFirstNumber, false);
    }
}
function init() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", setOutputValue, false);
    }
    for (var i = 0; i < signs.length; i++) {
        signs[i].addEventListener("click", getSign, false);
    }
}
function readFirst() {
    for (var i = 0; i < digits.length; i++) {
        digits[i].addEventListener("click", getFirstNumber, false);
    }
}
function readSecond() {
    for (var i = 0; i < signs.length; i++) {
        signs[i].onclick = removeFirstListener;
    }
    for (var i = 0; i < digits.length; i++) {
        digits[i].addEventListener("click", getSecondNumber, false);
    }
}
function calculate() {
    switch (sign) {
        case "+":
            finish = parseFloat(first) + parseFloat(second);
            break;
        case "-":
            finish = parseFloat(first) - parseFloat(second);
            break;
        case "*":
            finish = parseFloat(first) * parseFloat(second);
            break;
        case "/":
            finish = parseFloat(first) / parseFloat(second);
            break;
    }
    result.value += finish;
    first = '' + finish;
}
function reset() {
    first = '';
    second = '';
    result.value = '';
    addFirstListener();
}
init();
readFirst();
readSecond();
del.onclick = reset;
equal.onclick = calculate;
