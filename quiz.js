var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var scoreText = document.querySelector(".countdown");
var pageContent = document.querySelector("#page-content");
var footer = document.querySelector("#foot-h3");

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];

var timeLeft = '';
function countDown(){
    timeLeft = 20;

    var timeInterval = setInterval(function (){   
        if(timeLeft <= 0 ||questionCounter > maxQuestions){
            clearInterval(timeInterval);
            alert("Game Over " + timeLeft)
        }
        else if(timeLeft > -1){
            scoreText.textContent = timeLeft;
            timeLeft--;
        }

    },1000)
}
// console.log(scoreText)

console.log(timeLeft)
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

var maxQuestions = questionsContent.length;

startQuiz = () => {
    questionCounter = 0;
    availableQuestions = [...questionsContent]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions || timeLeft === 0){
        alert("Game Over " + timeLeft)
       
        localStorage.setItem('mostRecentScore', timeLeft);
        console.log(timeLeft)
        return window.location.assign('end.html');
    }
    //clear footer class
    footer.className = '';
    footer.textContent = '';
    
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
       
        if(selectedAnswer == currentQuestion.answer){
           
            footer.className = 'correct-label';
            footer.textContent = '✅ CORRECT!'
            timeLeft += 10;
         
        }else if(selectedAnswer != currentQuestion.answer){
            footer.className = 'incorrect-label';
            footer.textContent = '❌ INCORRECT!'
           
            if(timeLeft > 10){
                timeLeft -= 10;

            }else{
                timeLeft = 0;
            }
            
        }
        setTimeout(()=>{
            getNewQuestion()
        },1000)
       
    })
})

startQuiz()
countDown();

pageContent.addEventListener("submit",countDown);
