const username = document.getElementById("username");
const saveScoreButton = document.getElementById("saveScoreButton");
const final = document.getElementById('final');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores =  JSON.parse(localStorage.getItem("highscores")) || {};

const MAX_HIGH_SCORES = 5;
console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
saveScoreButton.disabled = !username.value;
});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username,
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.assign("/");
};