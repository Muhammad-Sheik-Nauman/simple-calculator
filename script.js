function appendValue(value) {
    const display = document.getElementById('display');
    if (display.value === '0') {
        display.value = value;
    } else  {
        display.value += value;
    }
}

function calculate() {
    const display = document.getElementById('display');
    display.value = eval(display.value);
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '0';
}