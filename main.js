var questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"];
var answers = [["question 1 answer 1", "2", "3", "4", "5"], ["question 2 answer 1", "answer 2", "answer 3"]];

var current_question_number = 0;

function setCurrentQuestionAndAnswers() {
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

document.addEventListener("DOMContentLoaded", function() {
    setCurrentQuestionAndAnswers();

    document.getElementById("answer-input").addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit-answer-btn").click();
      }
    });
    document.getElementById("submit-answer-btn").addEventListener("click", function(){
      var answer = document.getElementById("answer-input").value.toLowerCase();
      var current_question = questions[current_question_number];
      var current_answers = answers[current_question_number];
      if (current_answers.includes(answer)) {
        var answer_container = document.getElementById("answer-" + (current_answers.indexOf(answer) + 1))
        answer_container.parentElement.getElementsByClassName("default-answer")[0].classList.add("hidden");
        answer_container.classList.remove("hidden");
        answer_container.parentElement.classList.add("correct");

      } else {
        // Show incorrect answer image or something
      }
      document.getElementById("answer-input").value = "";
    });
    document.getElementById("next-question-btn").addEventListener("click", function(){
        current_question_number += 1;
        setCurrentQuestionAndAnswers();
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