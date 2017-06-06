let buttons = document.querySelectorAll("button"),
    zero = <HTMLButtonElement>document.querySelector("#zero"),
    one = <HTMLButtonElement>document.querySelector("#one"),
    two = <HTMLButtonElement>document.querySelector("#two"),
    three = <HTMLButtonElement>document.querySelector("#three"),
    four = <HTMLButtonElement>document.querySelector("#four"),
    five = <HTMLButtonElement>document.querySelector("#five"),
    six = <HTMLButtonElement>document.querySelector("#six"),
    seven = <HTMLButtonElement>document.querySelector("#seven"),
    eight = <HTMLButtonElement>document.querySelector("#eight"),
    nine = <HTMLButtonElement>document.querySelector("#nine"),
    division = <HTMLButtonElement>document.querySelector("#division"),
    multiplication = <HTMLButtonElement>document.querySelector("#multiplication"),
    subtraction = <HTMLButtonElement>document.querySelector("#subtraction"),
    addition = <HTMLButtonElement>document.querySelector("#addition"),
    del = <HTMLButtonElement>document.querySelector("#del"),
    equal = <HTMLButtonElement>document.querySelector("#equal"),
    comma = <HTMLButtonElement>document.querySelector("#comma"),
    result = <HTMLOutputElement>document.querySelector("output"),
    first: string = '',
    second: string = '',
    sign: string = null,
    finish: number = 0;
let digits: HTMLButtonElement[] = [zero, one, two, three, four, five, six, seven, eight, nine, comma],
    signs: HTMLButtonElement[] = [division, multiplication, subtraction, addition];

function setOutputValue() {
    result.value += this.value;
}

function getFirstNumber(): number {
    first += this.value;
    // console.log("first:" + first);
    return parseFloat(first);
}

function getSign(): string {
    sign = this.value;
    // console.log("sign:" + this.value);
    return sign;
}

function getSecondNumber(): number {
    second += this.value;
    // console.log("second:" + second);
    return parseFloat(second);
}

function removeFirstListener() {
    for (let i = 0; i < digits.length; i++) {
        digits[i].removeEventListener("click", getFirstNumber, false);
    }
    second = '';
}

function addFirstListener() {
    for (let i = 0; i < digits.length; i++) {
        digits[i].addEventListener("click", getFirstNumber, false);
    }
}

function init() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", setOutputValue, false);
    }

    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener("click", getSign, false);
    }
}

function readFirst() {
    for (let i = 0; i < digits.length; i++) {
        digits[i].addEventListener("click", getFirstNumber, false);
    }
}

function readSecond() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].onclick = removeFirstListener;
    }
    for (let i = 0; i < digits.length; i++) {
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


