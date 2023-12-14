const buttons = document.getElementsByTagName('button');
let firstButtonContent = "";
let firstButtonClicked = false;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if (!firstButtonClicked) {
            buttons[i].style.background = "yellow";
            firstButtonContent = buttons[i].textContent;
            firstButtonClicked = true;
        } else {
            if (buttons[i].textContent == firstButtonContent) {
                buttons[i].style.background = "green";
                for (let j = 0; j < buttons.length; j++) {
                    if (buttons[j].textContent == firstButtonContent) {
                        buttons[j].style.background = "green";
                    }
                }
            }
        }
    });
}