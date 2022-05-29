var question = document.querySelector("#question");
var choices = Array.from(document.querySelector(".choice-text"));
var scoreText = document.querySelector(".countdown");
var pageContent = document.querySelector("#page-content");


function countDown(){
    timeLeft = 75

    var timeInterval = setInterval(function (){
        if(timeLeft > 0){
            scoreText.textContent = timeLeft;
            timeLeft--;
        }
        else if(timeLeft == 0){
            clearInterval(timeInterval);
        }
    },1000)
}
console.log(scoreText)


let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];

// console.log(scoreText);

let questions = [
    {
        question: "Commonly used data types DO NOT Include:",
        choice1: "stings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3,
    },
    {
        question: "Arrays in JavaScript can be used to store ___________.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4,
    },
    {
        question: "The condition in a if/else statementis enclosed with _______.",
        choice1: "quotes",
        choice2: "parenthesis",
        choice3: "curly brackets",
        choice4: "square brackets",
        answer: 2,
    },
    {
        question: "A very Useful tool used during development and debuging for printing content to the debugger is:",
        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        answer: 4,
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choice1: "quotes",
        choice2: "commas",
        choice3: "curly brackets",
        choice4: "parenthesis",
        answer: 1,
    },
]

console.log()


countDown();

pageContent.addEventListener("submit",countDown);

// let MaxQuestions = 5;

// var startQuiz = function(){
//     questionCounter = 0;
//     score = 0;
//     availableQuestions = [...questions]
//     getNewQuestion()
// }

// var getNewQuestion = function(){
//     if(availableQuestions.length === 0 || questionCounter > MaxQuestions){
//         localStorage.setItem('mostRecentScore', score);
//         return window.location.assign("./end.html")
//     }
    
//     questionCounter++;

//     let questionIndex = Math.floor(Math.random() * availableQuestions.length);
//     currentQuestion = availableQuestions[questionIndex];
//     question.innerText = currentQuestion.question;

//     choices.forEach(function(choice){
//         var number = choice.dataset['number'];
//         choice.innerText = currentQuestion["choice" + number]
//     }) 

//     availableQuestions.splice(questionIndex,1)
//     acceptingAnswers = true;
// }

// choices.forEach(function(choice){
//     choice.addEventListener("click", function (e){
//         if(!acceptingAnswers)return

//         acceptingAnswers = false;
//         let selectedChoice = e.target;
//         let selectedAnswer = selectedChoice.dataset["number"];

//         // let classToApply = selectedAnswer == currentQuestion.answer 
//     })
// })