// use custom font
// greet player with instructions and start button on document ready 
// hide instructions on game start 
// inside a div put a timer feature that will run down to zero, 
// when timer hits zero, input as if wrong answer 
// congradulate player on correct answer // on timer offer next question 
// do similar with wrong answer, show correct answer
// after round is complete offer results and the option to resset the script 

var qNum = 0
var wrongAnswer
var correctAnswer


var qBank = {

q0: {
    text: "how long is a foot?",
    wa: ["6 centimeters", "10 toes", "18 pounds"],
    ca: "12 inches",
    additionalInfo: "did you know that 12 inches is also not that big"
    },

q1: {
    text: "how heavy is a pound of feathers?",
    wa: ["3 stone", "12 kilograms", "14 miles"],
    ca: "a pound",
    additionalInfo: "did you know that a pound of steel is just as heavy as a pound of feathers?"
    },
q3: {
    text: "how long is a foot?",
    wa: ["6 centimeters", "10 toes", "18 pounds"],
    ca: "12 inches",
    additionalInfo: "did you know that 12 inches is also not that big"
    }
};


function questionRandomizer () {
    var qNum = Math.floor(Math.random() * qBank.length)
}

function newQuestion() {
    //random number generator function to pick the new question from the bank
$("#questionDisplay").text(qBank.q1.text)
questionAnswers = $("<div>")
    //i want to add a random number generator to mix up the answers index between rounds
$("#a1").text(qBank.q1.wa[1])
// DRY  i'll have to think about this later, should be a for loop with array index++
$("#a2").text(qBank.q1.wa[2])

$("#a3").text(qBank.q1.wa[0])

$("#a4").text(qBank.q1.ca)




}
newQuestion()