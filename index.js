let screen = document.getElementById('screen');
buttons = document.getElementsByClassName('calbutton');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(`Button text is ${buttonText}`)

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue
        }

        else if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue
        }

        else if (buttonText == 'Clr') {
            screenValue = "";
            screen.value = screenValue
        }

        else if (buttonText == "=") {
            screen.value = eval(screenValue);
            screenValue = "";
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue
        }
    })
}