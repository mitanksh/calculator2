let display = document.getElementById("display");
let currentValue = "";

// Append value to the display and screen
function appendvalue(value) {
    if (value === '+/-') {
        if (currentValue) {
            currentValue = (parseFloat(currentValue) * -1).toString();
        }
    } else if (value === '%') {
        if (currentValue) {
            currentValue = (parseFloat(currentValue) / 100).toString();
        }
    } else {
        currentValue += value;
    }
    display.value = currentValue;
}

// Clear the display
function clearDisplay() {
    currentValue = "";
    display.value = currentValue;
}

// Calculate and display the result
function calculateresult() {
    try {
        currentValue = eval(currentValue).toString();
        display.value = currentValue;
    } catch (e) {
        display.value = "Error";
        currentValue = "";
    }
}
