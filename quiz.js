var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var scoreText = document.querySelector(".countdown");
var pageContent = document.querySelector("#page-content");

console.log(choices)

pageContent.querySelector(".choice-text").textContent ="peace"

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
// console.log(scoreText)


let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];
let score = 0;

// console.log(scoreText);

let questionsContent = [
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

const scorePoints = 100;
var maxQuestions = questionsContent.length;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questionsContent]
    getNewQuestion()
    // console.log(availableQuestions)
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions){
        alert("Game Over")
        localStorage.setItem('mostRecentScore', score);
        return localStorage.assign("./end.html");
    }

    questionCounter++;
    
    var questionIndex = Math.floor(Math.random() * availableQuestions.length)
    
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question
    
    choices.forEach(choice =>{
        var number = choice.dataset['number'];
        console.log(number)
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true; 
    console.log(currentQuestion)
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number'];
       
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            incrementScore(10);
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        },1000)
       
    })
})

// incrementScore = num => {
//     timeleft += num
//     scoreText.innerText = timeLeft
// }



startQuiz()
countDown();

pageContent.addEventListener("submit",countDown);
