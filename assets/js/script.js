// Event listeners for buttons

let buttons = document.getElementsByTagName("button");

for(let button of buttons) {
    button.addEventListener("click", function() {
        if(this.getAttribute("class") === "ok") {
            checkAnswer();
        } 
        if(this.getAttribute("id") === "quit") {
            //placeholder for call show answer function
        } else {
            generateNumber();
        }
    })
}


/**
 * Generate a random digit between 0-9
 */

function randomDigit() {

    var num = Math.floor(Math.random()*10);
    return num;
}

/**
 * function to generate a 4 digit number
 * having distinct digits
 */

function generateNumber() {

    var num1= randomDigit();

    for(let i; i=1; i++) {
        var num2 = randomDigit();
        var num3 = randomDigit();
        var num4 = randomDigit();
        if(num3 != num4 && num2 != num4 && num1 != num4 && num2 != num3 && num1 != num2 && num1 != num3) {
            break;
        }
    }
    var ans = [num1, num2, num3, num4];
    return ans;
}

/**
 * function to check number of bulls and cows
 */

 function checkAnswer() {

 }