// Get the output element
var output = document.getElementById("output");

// Add the specified text to the output
function addToOutput(text) {
    output.value += text;
}

// Add brackets to the output
function addBrackets(open, close) {
    addToOutput(open + close);
}

// Clear the output
function clearOutput() {
    output.value = "";
}

// Calculate the result of the expression in the output
function calculate() {
    try {
        output.value = eval(output.value);
    } catch (e) {
        output.value = "Error";
    }
}
