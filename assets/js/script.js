const answerContainerEl = document.getElementById('answers');
const quizEl = document.getElementById('quiz');
const questionEl = document.getElementById('question')
const timeEl = document.getElementById('time')
const evalEl = document.getElementById('eval')
const startBtn = document.getElementById('start')
const introEl = document.getElementById('intro');
let scores = [];
let correctAnswerIdx = 0;
let currentQuestionIdx = 0;
let currentTime = 59;
let finalScore = 0;

function timer() {
    let timeInterval = setInterval(() => {
        if (currentTime >= 1) {
            timeEl.innerHTML = `Time: ${currentTime}`;

            currentTime--;
        } else {
            timeEl.innerHTML = "Time: 0";

            clearInterval(timeInterval);
            gameOver();
        }

    }, 1000);
}

const questionArr = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            'strings',
            'booleans',
            'alerts',
            'numbers',
        ],
        correctAnswer: 2
    },
    {
        question: 'The condition in an if/else statement is enclosed with ______.',
        answers: [
            'quotes',
            'curly brackets',
            'parenthesis',
            'square brackets',
        ],
        correctAnswer: 2
    },
    {
        question: 'Arrays in JavaScript can be used to store ________.',
        answers: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above',
        ],
        correctAnswer: 3
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to variables.',
        answers: [
            'commas',
            'curly brackets',
            'quotes',
            'parenthesis',
        ],
        correctAnswer: 2
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            'console.log',
            'JavaScript',
            'terminal/bash',
            'for loops',
        ],
        correctAnswer: 0
    },
]

function createQuiz(eval) {
    introEl.innerHTML = ""
    answerContainerEl.innerHTML = ""
    if (eval) {
        evalEl.innerHTML = eval
    }
    questionEl.innerHTML = questionArr[currentQuestionIdx].question
    const answerArr = questionArr[currentQuestionIdx].answers
    for (let i = 0; i < answerArr.length; i++) {
        let answerBtn = document.createElement('button');
        answerBtn.id = `${i}`
        answerBtn.classList = 'btn btn-warning py-1 my-1'

        answerBtn.innerHTML = answerArr[i]

        answerContainerEl.appendChild(answerBtn)
    }

    currentQuestionIdx++
}

answerContainerEl.addEventListener('click', (event) => {
    if (event.target.localName === 'button' && currentQuestionIdx >= 5 && parseInt(event.target.attributes.id.value) === questionArr[correctAnswerIdx].correctAnswer) {
        finalScore = currentTime;
        currentTime = 0;
        evalEl.innerHTML = 'Correct!'
    } else if (event.target.localName === 'button' && currentQuestionIdx >= 5 && parseInt(event.target.attributes.id.value) !== questionArr[correctAnswerIdx].correctAnswer) {
        currentTime - 5;
        finalScore = currentTime;
        currentTime = 0;
        evalEl.innerHTML = 'Incorrect!';
    } else if (event.target.localName === 'button' && parseInt(event.target.attributes.id.value) === questionArr[correctAnswerIdx].correctAnswer) {
        correctAnswerIdx++
        createQuiz('Correct!')
    } else if (event.target.localName === 'button') {
        currentTime = currentTime - 5;
        correctAnswerIdx++
        createQuiz('Incorrect!')
    }
})

function gameOver() {
    console.log(finalScore)
    questionEl.innerHTML = "Game Over!!";
    answerContainerEl.innerHTML = `Your final score is ${finalScore}`;
    const inputInitials = document.createElement('input');
    const submitInitials = document.createElement('button');

    inputInitials.setAttribute('placeholder', 'Type Your Initials Here!')
    inputInitials.setAttribute('id', 'input')

    submitInitials.innerHTML = 'Submit'
    submitInitials.setAttribute('id', 'initials')
    submitInitials.classList = 'btn btn-warning mx-2'

    quizEl.appendChild(inputInitials);
    quizEl.appendChild(submitInitials);

    const submitInitialsEl = document.getElementById('initials')

    submitInitialsEl.addEventListener('click', handleSubmit);
}

function handleSubmit() {
    const initials = document.getElementById('input')
    const newScore = {
        initial: initials.value,
        score: finalScore
    }

    scores.push(newScore);
    localStorage.setItem('highscores', JSON.stringify(scores))
    initials.value = "";

    // window.location.href = "https://kotaewing.github.io/js-code-quiz/highscore.html";
    window.location.href = "127.0.0.1:5500/highscore.html";
}

startBtn.addEventListener('click', () => {
    timer();
    createQuiz();
});

function getHighScores() {
    let localStorageScores = localStorage.getItem('highscores')
    if (!scores) {
        scores = [];
        return false
    }

    scores = JSON.parse(localStorageScores);
}

getHighScores();
console.log(scores);



