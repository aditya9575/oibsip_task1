document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        var value = this.textContent;

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

document.addEventListener('keydown', function(event) {
    var key = event.key;

    var validKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.', '=', 'Enter', 'Backspace' , 'c' , 'C', '(', ')' ];

    if (validKeys.includes(key)) {
        if (key !== 'Enter' && key !== 'Backspace' && key !== '=' && key !== 'c' && key !== 'C' ) {
            display(key);
        }
        else if (key === 'Enter') {
            calculate();
        }
        else if (key === '='){
            calculate();
        }
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

function clearOneCharacter() {
    var currentValue = document.querySelector(".screen-input").value;
    document.querySelector(".screen-input").value = currentValue.slice(0, -1);
}
 
function clearScreen() {
    document.querySelector(".screen-input").value = "";
}
 
function display(value) {
    document.querySelector(".screen-input").value += value;
}
 
function calculate() {
    var p = document.querySelector(".screen-input").value;
    var q = eval(p);
    document.querySelector(".screen-input").value = q;
}
