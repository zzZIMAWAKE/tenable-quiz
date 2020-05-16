var questions = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
    "Question 6",
];
var answers = [
    ["question 1 answer 1", "a 2", "a 3", "a 4", "a 5", "a 6", "a 7", "a 8", "a 9", "a 10"],
    ["question 2 answer 1", "answer 2", "answer 3"],
    [],
    [],
    [],
    [],
];

var correctAnswers = []

var current_question_number = 0;

function setCurrentQuestionAndAnswers() {
    correctAnswers = [];
    document.getElementById("question").innerText = questions[current_question_number];
    var i = 1;
    while (i <= 10) {
        var answer_container = document.getElementById("answer-" + i);
        answer_container.classList.add("hidden");
        answer_container.parentElement.classList.remove("correct");
        i += 1;
    }

    document.querySelectorAll(".default-answer").forEach(function(element) {
        element.classList.remove("hidden");
    });

    answers[current_question_number].forEach(function(answer) {
        document.getElementById("answer-" + (answers[current_question_number].indexOf(answer) + 1)).innerText = answer;
    });
}

function highlightElement(element, wasCorrect, answerSearching, answerCorrect, answer_container) {
    if (!correctAnswers.includes(element.innerText)) {
        element.parentElement.classList.add("correct");
    }
}

function unhighlightElement(element, wasCorrect) {
    if (!correctAnswers.includes(element.innerText)) {
        element.parentElement.classList.remove("correct");
    }
}

function highlightForIncorrect(elements) {
    elements.forEach(function(element) {
        element.parentElement.classList.add("incorrect");
    });
}

function removeHighlightForIncorrect(elements) {
    elements.forEach(function(element) {
        element.parentElement.classList.remove("incorrect");
    });
}

function wrongAnswer(answerSearching, elements) {
    var answerIncorrect = new Audio("tenable-incorrect-noise-3.mp3");
    answerIncorrect.play();
    answerSearching.pause();
    answerSearching.currentTime = 0;
    highlightForIncorrect(elements);
    setTimeout(function() { removeHighlightForIncorrect(elements)} , 500);
}

function correctAnswerFound(answerSearching, answerCorrect, answer_container) {
    answerCorrect.play();
    answerSearching.pause();
    answerSearching.currentTime = 0;
    answer_container.parentElement.classList.add("correct");
    answer_container.parentElement.getElementsByClassName("default-answer")[0].classList.add("hidden");
    answer_container.classList.remove("hidden");
    correctAnswers.push(answer_container.innerText);
}

function checkAnswers() {
    var answerSearching = new Audio("tenable-searching-5.mp3");
    var answerInput = document.getElementById("answer-input");
    var answer = answerInput.value.toLowerCase();
    var current_question = questions[current_question_number];
    var current_answers = answers[current_question_number];
    var answerCorrect = new Audio("tenable-correct-noise-2.mp3");
    var wasCorrect = false;

    var answer_container = document.getElementById("answer-" + (current_answers.indexOf(answer) + 1));

    console.log(answer_container)

    answerSearching.play();
    var loop = 0;
    console.log(document.querySelectorAll(".answer-text"));
    var allAnswerNodes = document.querySelectorAll(".answer-text")
    allAnswers = Array.prototype.slice.call(allAnswerNodes);
    allAnswers.reverse().forEach(function(element) {
        if (!wasCorrect) {
            if (element.innerText.toLowerCase() === answer) {
                wasCorrect = true;
            }
            setTimeout(function() { highlightElement(element, wasCorrect, answerSearching, answerCorrect, answer_container)},  loop);

            setTimeout(function() { unhighlightElement(element, wasCorrect)}, 750 + loop);

            loop += 750
        };
    });

    if (!wasCorrect) {
        setTimeout(function () {wrongAnswer(answerSearching, allAnswerNodes, answer)}, loop - 750)
    };

    if (wasCorrect) {
        console.log(loop);
        console.log("correct answer found")
        setTimeout(function () {correctAnswerFound(answerSearching, answerCorrect, answer_container)}, loop - 750)
    }

    answerInput.value = "";
};

document.addEventListener("DOMContentLoaded", function() {
    var theme = new Audio("tenable-theme.mp3");
    theme.play();

    var answerInput = document.getElementById("answer-input")
    setCurrentQuestionAndAnswers();

    answerInput.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit-answer-btn").click();
      }
    });
    document.getElementById("submit-answer-btn").addEventListener("click", function(){
      checkAnswers();
    });

    document.getElementById("next-question-btn").addEventListener("click", function(){
        if (current_question_number + 1 === questions.length) {
            window.open("https://www.youtube.com/watch?v=b9434BoGkNQ", '_blank');
        } else {
            current_question_number += 1;
            setCurrentQuestionAndAnswers();
        }

        if (current_question_number === 5) {
            backgroundElement = document.getElementsByClassName("background")[0]
            backgroundElement.classList.remove("background");
            backgroundElement.classList.add("background-karan");
        }
    });
    document.getElementById("previous-question-btn").addEventListener("click", function(){
        current_question_number -= 1;
        setCurrentQuestionAndAnswers();
    });
    document.getElementById("reveal-all-btn").addEventListener("click", function(){
        document.querySelectorAll(".default-answer").forEach(element => element.classList.add("hidden"));
        document.querySelectorAll(".answer-text").forEach(element => element.classList.remove("hidden"));
    });
});