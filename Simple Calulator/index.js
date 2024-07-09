// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    // display.value = eval(display.value);
    for(let i = 0; i < 10; i++) {
        display.value = i;
    }
}