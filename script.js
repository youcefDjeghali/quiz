const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

// Get the DOM elements
const question = document.getElementById("question");
// get radio buttons
const radioButtons = document.querySelectorAll("input[type=radio]");
// get labels
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
// get submit button
const submit = document.getElementById("submit");
let score = 0;
// Generate Questions and Answers
function generateQuestions() {
  question.textContent = quizData[0].question;
  a_text.textContent = quizData[0].a;
  b_text.textContent = quizData[0].b;
  c_text.textContent = quizData[0].c;
  d_text.textContent = quizData[0].d;
}

generateQuestions();

// check if radioButton is checked or not
function checkRadio() {
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return true;
    }
  }
}

// unchecked radio buttons
function uncheckRadio() {
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
}

// Get the next question
let currentQuestionIndex = 0;
function nextQuestion() {
  if (checkRadio() === true) {
    if (
      quizData[currentQuestionIndex].correct ===
      radioButtons[currentQuestionIndex].value
    ) {
      score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      question.textContent = quizData[currentQuestionIndex].question;
      a_text.textContent = quizData[currentQuestionIndex].a;
      b_text.textContent = quizData[currentQuestionIndex].b;
      c_text.textContent = quizData[currentQuestionIndex].c;
      d_text.textContent = quizData[currentQuestionIndex].d;
    }
  }
  uncheckRadio();
}

// Get the score
submit.addEventListener("click", nextQuestion);


























































/*

// Get the DOM elements
const question = document.getElementById("question");
// get radio buttons
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const radioButtons = document.querySelectorAll("input[type=radio]");
// get labels
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
// get submit button
const submit = document.getElementById("submit");
let score = 0;
// Generate Questions and Answers
function generateQuestions() {
  question.textContent = quizData[0].question;
  a_text.textContent = quizData[0].a;
  b_text.textContent = quizData[0].b;
  c_text.textContent = quizData[0].c;
  d_text.textContent = quizData[0].d;
}

generateQuestions();

// Get the next question

 function checkQuestion(){
     for (let index = 0; index < radioButtons.length; index++) {
         if (radioButtons.checked) {
             return true
         }
         
     }
 }

 function uncheckRadio() {
    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
    }
  }

let currentQuestionIndex = 0;
function nextQuestion() {
    if (checkQuestion === true) { 
        if (
          quizData[currentQuestionIndex].correct === radioButtons[currentQuestionIndex].value
          ) {
            score++;
          }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    question.textContent = quizData[currentQuestionIndex].question;
    a_text.textContent = quizData[currentQuestionIndex].a;
    b_text.textContent = quizData[currentQuestionIndex].b;
    c_text.textContent = quizData[currentQuestionIndex].c;
    d_text.textContent = quizData[currentQuestionIndex].d;
  }
}
uncheckRadio()
}

submit.addEventListener("click", nextQuestion);*/