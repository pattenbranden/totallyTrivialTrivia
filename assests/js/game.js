$(document).ready(function () {

    let questionslist = {};
    let trivia = {};
    let questions;
    let answers = ["B", "D", "A", "B", "D", "A", "B", "D"];

    let intervalID;

    var dootDoot = document.createElement("audio");
    dootDoot.setAttribute("src", "./assests/audio/skullsound2.mp3");
    dootDoot.setAttribute("class", "audio");

    var theme = document.createElement("audio");
    theme.setAttribute("src", "./assests/audio/DOOM - Hellwalker + DEMIGOD intro.mp3");
    theme.setAttribute("class", "audio");

    theme.volume = 0.2
    dootDoot.volume = 0.2
    //Timer
    timer = {

        time: 120,

        start: function () {
            $("#timer-display").text("02:00");
            intervalID = setInterval(timer.countdown, 1000);
        },

        countdown: function () {
            /*console.log("countdown");*/
            timer.time--;
            let currentTime = timer.timeConverter(timer.time);
            /*console.log(currentTime);*/
            $("#timer-display").text(currentTime);

            if (timer.time === 0) {
                $("#timer-display").text("Time's Up!");
                clearInterval(intervalID);
                $(".done, .question-block").hide();
                score();
                $(".results, .reset").show();
            } else {

            }
        },

        reset: function () {
            timer.time = 120;
            $("#timer-display").text("02:00");
            clearInterval(intervalID);
        },

        timeConverter: function (t) {
            let minutes = Math.floor(t / 60);
            let seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            }

            else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        },

    };
    //Start
    function startTrivia() {
        theme.play()
        questionslist = resetQuestions();
        trivia = resetTrivia();

        showQuestions();

    }
    //return to start condition
    function resetTrivia() {
        return {
            correct: 0,
            incorrect: 0,
            blank: 0,
        }
    }
    // question bank
    function resetQuestions() {
        return {
            q0: {
                question: "What planet does the DOOM 2016 story take place on?",
                A: "Jupiter",
                B: "Mars",
                C: "Mercury",
                D: "Alpha Centauri",
            },
            q1: {
                question: "How did the DOOM slayer gain his might?",
                A: "His armour",
                B: "By accident",
                C: "Sheer power of will",
                D: "the Seraphim gave it to him",
            },
            q2: {
                question: "From where does the DOOM slayer originate?",
                A: "Earth",
                B: "Hell",
                C: "Nowhere",
                D: "Neptune",
            },
            q3: {
                question: "How were the demons of hell able to temporarily defeat the Slayer?",
                A: "They didn't.",
                B: "They trapped him.",
                C: "The B.F.G.",
                D: "Luck.",
            },
            q4: {
                question: "Who is known as 'The Betrayer'?",
                A: "Samuel Hayden",
                B: "Phobos",
                C: "Argent D'Nur",
                D: "Valen",
            },
            q5: {
                question: "What is the Slayer also known as?",
                A: "All of these",
                B: "Flynn Taggart",
                C: "William Blazkowicz",
                D: "The Outlander ",
            },
            q6: {
                question: "What was his pet, Daisy?",
                A: "A parrot",
                B: "A rabbit",
                C: "A cat",
                D: "A squirrel",
            },
            q7: {
                question: "What demon is non-canonicly seen playing the trumpet?",
                A: "The Cacodemon",
                B: "Kronos",
                C: "The Cyberdemon",
                D: "The Revenant",
            }
        }
    }
    //  set-up for question block 
    function showQuestions() {
        questions = Object.keys(questionslist);
        for (var i = 0; i < questions.length; i++) {
            var questiontitle = questions[i];
            var question = questionslist[questiontitle];
            var questionblocks = createQuestions(question, questiontitle);
            $(".question-block").append(questionblocks).show();
        }
    }
    // create the question blocks 
    function createQuestions(question, key) {
        var block = $("<div class='question' name='" + key + "'>" + '<h4 class="q">' + question.question + '</h3>' + "" +
            "<ul class='answer'>" +
            "<li><input type='radio' name='" + key + "' value='A'><label>" + question.A + "</label></li>" +
            "<li><input type='radio' name='" + key + "' value='B'><label>" + question.B + "</label></li>" +
            "<li><input type='radio' name='" + key + "' value='C'><label>" + question.C + "</label></li>" +
            "<li><input type='radio' name='" + key + "' value='D'><label>" + question.D + "</label></li>" +
            "</ul>");

        return block;
    }
    // trivia end
    function score() {
        let playeranswers = [$("input:radio[name='q0']:checked").val(),
        $("input:radio[name='q1']:checked").val(),
        $("input:radio[name='q2']:checked").val(),
        $("input:radio[name='q3']:checked").val(),
        $("input:radio[name='q4']:checked").val(),
        $("input:radio[name='q5']:checked").val(),
        $("input:radio[name='q6']:checked").val(),
        $("input:radio[name='q7']:checked").val()];

        console.log(playeranswers);
        console.log(answers);

        for (k = 0; k < questions.length; k++) {
            if (playeranswers[k] === undefined) {
                trivia.blank++;
            } else if (playeranswers[k] === answers[k]) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }

        }

        $("#correct").text("Correct: " + trivia.correct);
        $("#incorrect").text("Incorrect: " + trivia.incorrect);
        $("#unanswered").text("Unanswered: " + trivia.blank);

        console.log(trivia.correct);
        console.log(trivia.incorrect);
        console.log(trivia.blank);
    }


    $(".reset, .results, .done").hide();

    $(".start").on("click", function () {
        $(".start").hide();
        startTrivia();
        timer.start();
        $(".done").show();

    });

    $(".done").on("click", function () {
        score();
        $(".done, .question-block").hide();
        timer.reset();
        $(".results, .reset").show();
        theme.pause()
        dootDoot.play()
    });

    $(".reset").on("click", function () {
        $(".question-block").empty();
        $(".start").show();
        $(".reset, .results").hide();
        timer.reset();
        theme.currentTime = 0
    });
});