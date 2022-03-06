//global objects
var attempt = 0;
// Event listeners for buttons
document.addEventListener("DOMContentLoaded", function () {
let buttons = document.getElementsByTagName("button");

for(let button of buttons) {
    button.addEventListener("click", function() {
        if(this.getAttribute("class") === "validate") {
            checkAnswer();
        } 
        if(this.getAttribute("id") === "quit") {
            playerQuits();
        }
        if(this.getAttribute("id" === "new-game")) {
            newGame();
        }else {
            generateNumber();
        }
    })
}
timer();
}
)

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
    document.getElementById("lost").innerHTML = "Computer has selected a number"
    document.getElementById("reveal-answer").innerHTML = ' ';
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
     if(userInput[attempt].value.length < 4) {
         alert("Please enter a 4 digit number");
     } 
     //check repeated digits
     if((/([0-9]).*?\1/).test(userInput[attempt].value)) {
         alert("The digits in the number should not repeat!");
     } else {
         for(var n=0; n < 4; n++){
             for(var i=0; i < 4; i++) {
                 if(userInput[attempt].value.charAt(i) === ans[n].toString() && i === n) {
                     bullcount++;
                 } else if(userInput[attempt].value.charAt(i) === ans[n].toString()) {
                     cowcount++;
                 }
             }
         }
         attempt++;
         if(bullcount === 4) {
             let winnerMessage = `You took ${minutes.textContent}:${seconds.textContent} to guess the correct number. Press the new game button to play again`;
             alert(winnerMessage);
             incrementScore();
             timer();
         } else {
             console.log(bullcount, cowcount);
             document.getElementsByClassName("bulls")[attempt].innerHTML = bullcount;
             document.getElementsByClassName("cows")[attempt].innerHTML = cowcount;
             if(attempt === 7) {
                 document.getElementById("lost").innerHTML = "You Lost! Computer had chosen the number"
                 document.getElementById("reveal-answer").innerHTML = ans;
                 document.getElementById("total-wins").innerText = 0;
             } else {
                 //var parent = document.getElementsByClassName("active");
                 //parent[0].innerHTML = userInput[0].value;
                 //parent[1].innerHTML = '';
                 //parent[1].removeAttribute("class");
                 var table = document.getElementById("user-guess");
                 var row = table.insertRow(attempt + 2);
                 row.setAttribute("id",attempt+1);
                 row.setAttribute("class","guess");
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
                 cell2.setAttribute("class","active");
                 var btn= document.createElement("button");
                 btn.setAttribute("type","button");
                 btn.setAttribute("class","validate");
                 btn.setAttribute("onclick","checkAnswer()");
                 btn.innerHTML = "Ok";
                 cell3.appendChild(btn);
                 cell3.setAttribute("class","active");
                 cell4.setAttribute("class","bulls");
                 cell5.setAttribute("class","cows");

             }
         }
     }
     //var child = document.getElementById(attempt).childNodes[3];
     //child.removeAttribute("class");
     return;

 }

 /**
 * function to display computer answer
 * when the player quits the game
 */

 function playerQuits() {

     document.getElementById("lost").innerHTML = "You Lost! The correct answer was"
     document.getElementById("reveal-answer").innerHTML = ans;

     document.getElementById("total-wins").innerText = 0;

     var rowCount = document.getElementsByClassName("guess");
     var table = document.getElementById("user-guess");

 }

/**
 * Displays the lapsed time
 */

 const seconds = document.getElementById("seconds");
 const minutes = document.getElementById("minutes");
 let secondsTime = 0;
 let minutesTime = 0;

 function timer() {
  interval = setInterval(function () {
    secondsTime++;
    seconds.textContent = (("0" + secondsTime).slice(-2)).toString();
    minutes.textContent = (("0" + minutesTime).slice(-2)).toString();
    if (secondsTime === 60) {
      secondsTime = 0;
      seconds.textContent = (("0" + secondsTime).slice(-2)).toString();
      minutesTime++;
      minutes.textContent = (("0" + minutesTime).slice(-2)).toString();
    }
    if ((secondsTime === 59) && (minutesTime === 59)) {
      clearInterval(intervalCount);
    }
  }, 1000);
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("total-wins").innerText);
    document.getElementById("total-wins").innerText = ++oldScore;

}

/**
 * Function to start a new game
 */
function newGame() {
    
    secondsTime = 0;
    minutesTime = 0;
    var node = document.getElementsByTagName("tr");
    var count = node.length;
    var userInput =  document.getElementsByClassName("user-input");
    //reset value in input field
    userInput[0].value = "";
    userInput[0].focus();
    //reset value in bulls and cows
    document.getElementsByClassName("bulls")[1].innerHTML = 0;
    document.getElementsByClassName("cows")[1].innerHTML = 0;
    //remove new rows
    for(var c = count; c > 3; c--){
        document.getElementById("user-guess").deleteRow(c-1);
    }
    generateNumber();
}