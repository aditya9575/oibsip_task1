// Add event listeners to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Get the value of the clicked button
        var value = this.textContent;

        // Call the appropriate function based on the button value
        if (value === 'C') {
            clearScreen();
        } else if (value === '⌫') {
            clearOneCharacter();
        } else if (value === '=') {
            calculate();
        } else {
            display(value);
        }
    });
});

// Add event listener for keydown event
document.addEventListener('keydown', function(event) {
    // Get the key pressed
    var key = event.key;

    // Define the keys that correspond to calculator inputs
    var validKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.', '=', 'Enter', 'Backspace' , 'c' , 'C', '(', ')' ];

    // Check if the pressed key is valid for the calculator
    if (validKeys.includes(key)) {
        // If it's a number or operator key, call display function with the key value
        if (key !== 'Enter' && key !== 'Backspace' && key !== '=' && key !== 'c' && key !== 'C' ) {
            display(key);
        }
        // If it's the Enter key, call calculate function
        else if (key === 'Enter') {
            calculate();
        }
        else if (key === '='){
            calculate();
        }
        // If it's the Backspace key, clear one character from the display
        else if (key === 'Backspace') {
            clearOneCharacter();
        }
        else if (key === 'c') {
            clearScreen();
        }
        else if (key === 'C') {
            clearScreen();
        }
    }
});

// This function clears one character from the display
function clearOneCharacter() {
    var currentValue = document.querySelector(".screen-input").value;
    // Remove the last character from the display
    document.querySelector(".screen-input").value = currentValue.slice(0, -1);
}
 
// This function clears all the values
function clearScreen() {
    document.querySelector(".screen-input").value = "";
}
 
// This function displays the values
function display(value) {
    document.querySelector(".screen-input").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    var p = document.querySelector(".screen-input").value;
    var q = eval(p);
    document.querySelector(".screen-input").value = q;
}
