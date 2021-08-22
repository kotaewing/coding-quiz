const scoreListEl = document.getElementById('score-list');
const clearBtnEl = document.getElementById('clear')

const scoresLS = localStorage.getItem('highscores');

const scoreList = JSON.parse(scoresLS);

console.log(scoreList)
scoreList.forEach(score => {
    const newScore = document.createElement('li')

    newScore.innerHTML = `${score.initial}: ${score.score}`

    scoreListEl.appendChild(newScore)
});

clearBtnEl.addEventListener('click', () => {
    localStorage.removeItem('highscores')
    window.location.reload(false)
})