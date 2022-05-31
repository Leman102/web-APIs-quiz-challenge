var username = document.querySelector("#username");
var saveScoreBtn = document.querySelector("#save-score-btn");
var finalScore = document.querySelector(".final-score");
var mostRecentScore = document.querySelector("#mostRecentScore");

let highScores =JSON.parse(localStorage.getItem('highScores')) || [];

let maxScores = 5;

finalScore.innerText = mostRecentScore

username.addEventListener('keyup',() => {
    saveScoreBtn.disabled = !username.ariaValueMax;
})

saveHighScore = e => {
    e.preventDefault ()

    var score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)
    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores',JSON.stringify(highScores))
    window.location.assign('/')
}