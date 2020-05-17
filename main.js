var questions = [
  "The 10 most-bodged DIY jobs",
  "Most capped players for England",
  "Top 10 teams in the Bundesliga",
  "The top Champions league scorers",
  "Top 10 Highest-grossing animated films",
  "Leonardo DiCaprio's 10 Highest-Grossing Movies",
  "Brad Pitt Movies: 10 Highest-Grossing Movies",
  "The 10 London Underground stations with ‘City’, ‘Town’ or ‘Square’ in their name",
  "The first 10 central London tube stations with ‘Park’ in their name",
  "The 10 London Underground stations in Zone 1 that begin with the letters ‘T’, ‘E’ or ‘N’",
  "The first 10 six-letter words ending in the letters ‘KER’",
  "The first 10 six-letter words ending in the letters ‘GLE’",
  "The first 10 six-letter words that end with the letters ‘DGE’",
  "The 10 most populous capital cities in the EU",
  "The 10 countries with names that end with  the letters ‘LAND’ or ‘LANDS’",
  "The first 10 one-word countries alphabetically after Nigeria that end with the letter ‘A’",
  "The first ten locations you can buy on the Monopoly board",
  "The 10 largest countries by area beginning with ‘S’",
  "The 10 most featured actor or actress in Brooklyn 99",
];
var answers = [
  [
    "Hanging wallpaper",
    "Putting up shelves",
    "Painting a room",
    "Fixing a toilet flush",
    "Unblocking a drain",
    "Bleeding a radiator",
    "Laying a carpet",
    "Fixing a leaking tap",
    "Plastering a wall",
    "Grouting",
  ],
  [
    "Peter Shilton",
    "Wayne Rooney",
    "David Beckham",
    "Steven Gerrard",
    "Bobby Moore",
    "Ashley Cole",
    "Bobby Charlton",
    "Frank Lampard",
    "Billy Wright",
    "Bryan Robson",
  ],
  [
    "Bayern Munich",
    "Borussia Dortmund",
    "RB Leipzig",
    "Borussia Monchengladbach",
    "Bayer Leverkusen",
    "VfL Wolfsburg",
    "SC Freiburg",
    "Schalke 04",
    "TSG Hoffenheim",
    "FC Cologne",
  ],
  [
    "Cristiano Ronaldo",
    "Lionel Messi",
    "Raul",
    "Robert Lewandowski",
    "Karim Benzema",
    "Ruud van Nistelrooy",
    "Thierry Henry",
    "Alfredo Di Stefano",
    "Andriy Shevchenko",
    "Zlatan Ibrahimovic",
  ],
  [
    "The Lion King (2019 remake)",
    "Frozen II",
    "Frozen",
    "Toy Story 3",
    "Minions",
    "Toy Story 4",
    "Incredibles 2",
    "Despicable Me 3",
    "Finding Dory",
    "Zootopia",
  ],
  [
    "TITANIC",
    "INCEPTION",
    "THE REVENANT",
    "DJANGO UNCHAINED",
    "THE WOLF OF WALL STREET",
    "ONCE UPON A TIME... IN HOLLYWOOD",
    "THE GREAT GATSBY",
    "CATCH ME IF YOU CAN",
    "SHUTTER ISLAND",
    "THE DEPARTED",
  ],
  [
    "DEADPOOL 2",
    "WORLD WAR Z",
    "TROY",
    "MR & MRS. SMITH",
    "OCEAN'S ELEVEN",
    "ONCE UPON A TIME... IN HOLLYWOOD",
    "Ocean's Twelve",
    "THE CURIOUS CASE OF BENJAMIN BUTTON",
    "SE7EN",
    "MEGAMIND",
  ],
  [
    "Acton Town",
    "Camden Town",
    "Canning Town",
    "Euston Square",
    "Kentish Town",
    "Leicester Square",
    "Russell Square",
    "Sloane Square",
    "Sudbury Town",
    "White City",
  ],
  [
    "Belsize Park",
    "Finsbury Park",
    "Green Park",
    "Holland Park",
    "Hyde Park Corner",
    "Kilburn Park",
    "Queen’s Park",
    "Ravenscourt Park",
    "Regent's Park",
    "St James's Park",
  ],
  [
    "Temple",
    "Tottenham Court Road",
    "Tower Hill",
    "Earl's Court",
    "Edgware Road",
    "Elephant & Castle",
    "Embankment",
    "Euston",
    "Euston Square",
    "Notting Hill Gate",
  ],
  [
    "Backer",
    "Banker",
    "Barker",
    "Beaker",
    "Bicker",
    "Broker",
    "Bunker",
    "Canker",
    "Choker",
    "Conker",
  ],
  [
    "Bangle",
    "Beagle",
    "Boggle",
    "Bungle",
    "Burgle",
    "Dangle",
    "Dingle",
    "Gaggle",
    "Gargle",
    "Giggle",
  ],
  [
    "Bridge",
    "Dredge",
    "Drudge",
    "Fridge",
    "Grudge",
    "Kludge",
    "Pledge",
    "Sledge",
    "Sludge",
    "Smudge",
  ],
  [
    "Berlin",
    "Madrid",
    "Rome",
    "Paris",
    "Bucharest",
    "Vienna",
    "Warsaw",
    "Budapest",
    "Prague",
    "Sofia",
  ],
  [
    "Finland",
    "Iceland",
    "Ireland",
    "Marshall Islands",
    "Netherlands",
    "New Zealand",
    "Poland",
    "Solomon Islands",
    "Switzerland",
    "Thailand",
  ],
  [
    "Panama",
    "Romania",
    "Russia",
    "Rwanda",
    "Samoa",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "Syria",
  ],
  [
    "Old Kent road",
    "Whitechapel road",
    "Kings Cross station",
    "The Angel, Islington",
    "Euston Road",
    "Pentonville Road",
    "Pall Mall",
    "Whitehall",
    "Northumberland Avenue",
    "Bow Street",
  ],
  [
    "Saudi Arabia",
    "Sudan",
    "South Africa",
    "South Sudan",
    "Somalia",
    "Spain",
    "Sweden",
    "Senegal",
    "Syria",
    "Suriname",
  ],
  [
    "Jake Peralta",
    "Rosa Diaz",
    "Terry Jeffords",
    "Amy Santiago",
    "Charles Boyle",
    "Raymond Holt",
    "Hitchcock",
    "Scully",
    "Gina Linetti",
    "Kevin Cozner",
  ],
];

var correctAnswers = [];

var current_question_number = 0;

function setCurrentQuestionAndAnswers() {
  correctAnswers = [];
  document.getElementById("question").innerText =
    questions[current_question_number];
  var i = 1;
  while (i <= 10) {
    var answer_container = document.getElementById("answer-" + i);
    answer_container.classList.add("hidden");
    answer_container.parentElement.classList.remove("correct");
    i += 1;
  }

  document.querySelectorAll(".default-answer").forEach(function (element) {
    element.classList.remove("hidden");
  });

  answers[current_question_number].forEach(function (answer) {
    document.getElementById(
      "answer-" + (answers[current_question_number].indexOf(answer) + 1)
    ).innerText = answer;
  });
}

function highlightElement(
  element,
  wasCorrect,
  answerSearching,
  answerCorrect,
  answer_container
) {
  if (!correctAnswers.includes(element.innerText.toLowerCase())) {
    element.parentElement.classList.add("correct");
  }
}

function unhighlightElement(element, wasCorrect) {
  if (!correctAnswers.includes(element.innerText.toLowerCase())) {
    element.parentElement.classList.remove("correct");
  }
}

function highlightForIncorrect(elements) {
  elements.forEach(function (element) {
    element.parentElement.classList.add("incorrect");
  });
}

function removeHighlightForIncorrect(elements) {
  elements.forEach(function (element) {
    element.parentElement.classList.remove("incorrect");
  });
}

function wrongAnswer(answerSearching, elements) {
  var answerIncorrect = new Audio("tenable-incorrect-noise-3.mp3");
  answerIncorrect.play();
  answerSearching.pause();
  answerSearching.currentTime = 0;
  highlightForIncorrect(elements);
  setTimeout(function () {
    removeHighlightForIncorrect(elements);
  }, 500);
}

function playCorrectAnswerSound(answerCorrect, answerSearching) {
  answerCorrect.play();
  answerSearching.pause();
  answerSearching.currentTime = 0;
}

function correctAnswerFound(answer_container) {
  answer_container.parentElement.classList.add("correct");
  answer_container.parentElement
    .getElementsByClassName("default-answer")[0]
    .classList.add("hidden");
  answer_container.classList.remove("hidden");
  correctAnswers.push(answer_container.innerText.toLowerCase());
}

function checkAnswers() {
  var answerSearching = new Audio("tenable-searching-5.mp3");
  var answerInput = document.getElementById("answer-input");
  var answer = answerInput.value.toLowerCase();
  var current_question = questions[current_question_number];
  var current_answers = [];
  answers[current_question_number].forEach(function (answer_text) {
    current_answers.push(answer_text.toLowerCase());
  });
  var answerCorrect = new Audio("tenable-correct-noise-3.mp3");
  var wasCorrect = false;
  var answer_container = document.getElementById(
    "answer-" + (current_answers.indexOf(answer) + 1)
  );

  answerSearching.play();
  var loop = 0;
  var allAnswerNodes = document.querySelectorAll(".answer-text");
  allAnswers = Array.prototype.slice.call(allAnswerNodes);
  allAnswers.reverse().forEach(function (element) {
    if (element.innerText.toLowerCase() === answer) {
      wasCorrect = true;
    }
    // We kind of override for the final element so this stops jankiness around highlighting late
    if (loop !== 6750) {
      if (!wasCorrect) {
        setTimeout(function () {
          highlightElement(
            element,
            wasCorrect,
            answerSearching,
            answerCorrect,
            answer_container
          );
        }, loop);

        setTimeout(function () {
          unhighlightElement(element, wasCorrect);
        }, 750 + loop);
        loop += 750;
      }
    }
  });

  if (!wasCorrect) {
    setTimeout(function () {
      wrongAnswer(answerSearching, allAnswerNodes, answer);
    }, loop);
  }

  if (wasCorrect) {
    setTimeout(function () {
      playCorrectAnswerSound(answerCorrect, answerSearching);
    }, loop);
    setTimeout(function () {
      correctAnswerFound(answer_container);
    }, loop);
  }

  answerInput.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  //    var theme = new Audio("tenable-theme.mp3");
  //    theme.play();

  var answerInput = document.getElementById("answer-input");
  setCurrentQuestionAndAnswers();

  answerInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("submit-answer-btn").click();
    }
  });
  document
    .getElementById("submit-answer-btn")
    .addEventListener("click", function () {
      checkAnswers();
    });

  document
    .getElementById("next-question-btn")
    .addEventListener("click", function () {
      if (current_question_number + 1 === questions.length) {
        window.open("https://www.youtube.com/watch?v=b9434BoGkNQ", "_blank");
      } else {
        current_question_number += 1;
        setCurrentQuestionAndAnswers();
      }

      if (current_question_number === 5) {
        backgroundElement = document.getElementById("background-img");
        backgroundElement.classList.add("transparent");
        backgroundElementNew = document.getElementById("background-img-2");
        backgroundElementNew.classList.remove("transparent");
      }
    });
  document
    .getElementById("previous-question-btn")
    .addEventListener("click", function () {
      if (current_question_number > 0) {
        current_question_number -= 1;
        setCurrentQuestionAndAnswers();
      }
    });
  document
    .getElementById("reveal-all-btn")
    .addEventListener("click", function () {
      document
        .querySelectorAll(".default-answer")
        .forEach((element) => element.classList.add("hidden"));
      document
        .querySelectorAll(".answer-text")
        .forEach((element) => element.classList.remove("hidden"));
    });
});
