let questions = [
  {
    "question": "Wert hat HTML erfunden?",
    "answer1": "Robbie Williams",
    "answer2": "Lady Gaga",
    "answer3": "Tim Berners-Lee",
    "answer4": "Justin Bieber",
    "rightAnswer": 3
  },
  {
    "question": "Wofür steht HTML?",
    "answer1": "Hyper Text Preprocessor",
    "answer2": "Hyper Text Markup Language",
    "answer3": "Hyper Text Multiple Language",
    "answer4": "Hyper Tool Multi Language",
    "rightAnswer": 2
  },
  {
    "question": "Wofür steht CSS?",
    "answer1": "Common Style Sheet",
    "answer2": "Colorful Style Sheet",
    "answer3": "Computer Style Sheet",
    "answer4": "Cascading Style Sheet",
    "rightAnswer": 4
  },
  {
    "question": "Wofür steht PHP?",
    "answer1": "Hypertext Preprocessor",
    "answer2": "Hypertext Programming",
    "answer3": "Hypertext Preprogramming",
    "answer4": "Hometext Preprocessor",
    "rightAnswer": 1
  },
  {
    "question": "Wofür steht XML?",
    "answer1": "eXtensible Markup Language",
    "answer2": "eXecutable Multiple Language",
    "answer3": "eXtra Multi-Program Language",
    "answer4": "eXamine Multiple Language",
    "rightAnswer": 1
  },
];

let currentQuestion = 0;
let rightAnswers = 0;


function init() {
  document.getElementById("current-question").innerHTML = `Frage ${currentQuestion+1} von ${questions.length}`;
  document.getElementById("question").innerHTML = `${questions[currentQuestion]['question']}`
  document.getElementById("answer-options").innerHTML = /*html*/ `
  <div class="single-answer-options" id="answer1" onclick="checkAnswer('answer1')">${questions[currentQuestion]['answer1']}</div>
  <div class="single-answer-options" id="answer2" onclick="checkAnswer('answer2')">${questions[currentQuestion]['answer2']}</div>
  <div class="single-answer-options" id="answer3" onclick="checkAnswer('answer3')">${questions[currentQuestion]['answer3']}</div>
  <div class="single-answer-options" id="answer4" onclick="checkAnswer('answer4')">${questions[currentQuestion]['answer4']}</div>
  `
}

function preventClicking() {
  document.getElementById('answer1').removeAttribute('onclick');
  document.getElementById('answer2').removeAttribute('onclick');
  document.getElementById('answer3').removeAttribute('onclick');
  document.getElementById('answer4').removeAttribute('onclick');
}

function countRightAnswers() {
  rightAnswers++;
}

function checkAnswer(answer) {
  let selectedAnswer = parseInt(answer.slice(-1));
  let rightAnswer = questions[currentQuestion]['rightAnswer'];
  if (selectedAnswer === rightAnswer) {
    document.getElementById(answer).classList.add('right-answer');
    countRightAnswers();
  } else {
    document.getElementById(`answer${rightAnswer}`).classList.add('right-answer');
    document.getElementById(answer).classList.add('wrong-answer');
  }
  document.getElementById('next-question-btn').disabled = false;
  preventClicking();
}

function renderCurrentQuestion() {
  let currentQuestion = document.getElementById("question");
  currentQuestion.innerHTML = `${questions["currentQuestion"]}`;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById('next-question-btn').disabled = true; 
  (currentQuestion < questions.length) ? init() : endGame();
}

function hideGame() {
  document.getElementById('current-question').classList.add('d-none');
  document.getElementById('question').classList.add('d-none');
  document.getElementById('answer-options').classList.add('d-none');
  document.getElementById('next-question-btn').classList.add('d-none');
}

function showGame() {
  document.getElementById('current-question').classList.remove('d-none');
  document.getElementById('question').classList.remove('d-none');
  document.getElementById('answer-options').classList.remove('d-none');
  document.getElementById('next-question-btn').classList.remove('d-none');
}

function endGame() {
  hideGame();
  renderEndscreen();
}

function resetGame() {
  currentQuestion = 0;
  rightAnswers = 0;
  document.getElementById('endscreen').innerHTML = '';
  showGame();
  init();
}

function renderEndscreen() {
  document.getElementById('endscreen').innerHTML = /*html*/ `
    Du hast ${rightAnswers} von ${questions.length} richtig beantwortet!
    <button class="reset-game-btn" onclick="resetGame()">Erneut spielen</button>
  `
}







