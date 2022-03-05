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
                 if(userInput[0].value.charAt(i) === ans[n].toString() && i === n) {
                     bullcount++;
                 } else if(userInput[0].value.charAt(i) === ans[n].toString()) {
                     cowcount++;
                 }
             }
         }
         attempt++;
         if(bullcount === 4) {
             console.log("Congratulations!");
         } else {
             console.log(bullcount, cowcount);
             document.getElementsByClassName("bulls")[attempt].innerHTML = bullcount;
             document.getElementsByClassName("cows")[attempt].innerHTML = cowcount;
             if(attempt === 7) {
                 document.getElementById("lost").innerHTML = "You Lost! Computer had chosen the number"
                 document.getElementById("reveal-answer").innerHTML = ans;
             } else {
                 var table = document.getElementById("user-guess");
                 var row = table.insertRow(attempt + 2);
                 var cell1 = row.insertCell(0);
                 var cell2 = row.insertCell(1);
                 var cell3 = row.insertCell(2);
                 var cell4 = row.insertCell(3);
                 var cell5 = row.insertCell(4);
                 cell1.innerHTML = attempt + 1 +".";
                 var input = document.createElement("input");
                 input.setAttribute("type","number")
                 input.setAttribute("min",0);
                 input.setAttribute("max",9);
                 input.setAttribute("class","user-input");
                 cell2.appendChild(input);
                 var ok= document.createElement("button");
                 ok.setAttribute("type","button");
                 ok.setAttribute("Class","ok");
                 cell3.appendChild(ok);
             }
         }
     }

 }