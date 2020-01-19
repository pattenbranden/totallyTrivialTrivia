

// use custom font
// greet player with instructions and start button on document ready 
// hide instructions on game start 
// inside a div put a timer feature that will run down to zero, 
// when timer hits zero, input as if wrong answer 
// congradulate player on correct answer // on timer offer next question 
// do similar with wrong answer, show correct answer
// after round is complete offer results and the option to resset the script 

// var qNum = 2



var wrongAnswer;
var correctAnswer;


var qBank = {

q0: {
    text: "how long is a foot?",
    answers: ["12 inches", "6 centimeters", "10 toes", "18 pounds"],
    correct: 0,
    additionalInfo: "did you know that 12 inches is also not that big"
    },

q1: {
    text: "how heavy is a pound of feathers?",
    answers: ["a pound", "3 stone", "12 kilograms", "14 miles"],
    correct: 0,
    additionalInfo: "did you know that a pound of steel is just as heavy as a pound of feathers?"
    },
q2: {
    text: "how long is a foot?",
    answers: ["12 inches", "6 centimeters", "10 toes", "18 pounds"],
    correct: 0,
    additionalInfo: "did you know that 12 inches is also not that big"
    },
    
};

$(document).ready(function() {
    var qNum


function newQuestion() {
    qNum = ("q" + Math.floor(Math.random() * (qBank.q0.answers.length - 1)));
    array = qBank[qNum].answers;
    $("#questionDisplay").text(qBank[qNum].text);
    
    for (let i = 0; i < (qBank[qNum].answers.length +3); i++) {
        j = Math.floor(Math.random() * (array.length ));
        $(".answer").eq(i).text(array[j]);
        array.splice(j, 1);
        
        document.getElementById("answerList").addEventListener("click",function(e) {if (e.target && e.target == (qBank[qNum].answers[0])) {
        alert("NAiled it! " + qBank[qNum].additionalInfo);
        // start timer 
        newQuestion();
        } else { 
            alert("womp. :( sorry. ) " + qBank[qNum].additionalInfo);
            newQuestion();
        
       };

        
        
    });
    

};
    


};






newQuestion();

});