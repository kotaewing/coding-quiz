const scoreListEl = document.getElementById('score-list');

const scoresLS = localStorage.getItem('highscores');

const scoreList = JSON.parse(scoresLS);

console.log(scoreList)
scoreList.forEach(score => {
    const newScore = document.createElement('li')

    newScore.innerHTML = `${score.initial}: ${score.score}`

    scoreListEl.appendChild(newScore)
});