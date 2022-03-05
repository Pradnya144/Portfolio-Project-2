//global objects
var attempt = 0;

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

ans = generateNumber();
/**
 * function to check number of bulls and cows
 */

 function checkAnswer() {

     var bullcount = 0;
     var cowcount = 0;
     var userInput = document.getElementsByClassName("user-input");
     //check empty input
     if(userInput[0].value.length < 4) {
         alert("Please enter a 4 digit number");
     } 
     //check repeated digits
     if((/([0-9]).*?\1/).test(userInput[0].value)) {
         alert("The digits in the number should not repeat!");
     } else {
         for(var n=0; n < 4; n++){
             for(var i=0; i < 4; i++) {
                 if(userInput[0].value.charAt(i) === ans[n] && i === n) {
                     bullcount++;
                 } else if(userInput[0].value.charAt(i) === ans[n]) {
                     cowcount++;
                 }
             }
         }
         attempt++;
         if(bullcount === 4) {
             console.log("Congratulations!");
         } else {
             document.getElementsByClassName("bulls")[1].innerHTML = bullcount;
             document.getElementsByClassName("cows")[1].innerHTML = cowcount;
         }
     }

 }