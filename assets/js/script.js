const answerContainerEl = document.getElementById('answers');
const questionEl = document.getElementById('question')
const timeEl = document.getElementById('time')
const evalEl = document.getElementById('eval')
const startBtn = document.getElementById('start')
const introEl = document.getElementById('intro');
let correctAnswerIdx = 0;
let currentQuestionIdx = 0;
let currentTime = 60;

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

        answerBtn.innerHTML = answerArr[i]

        answerContainerEl.appendChild(answerBtn)
    }

    console.log({ currentQuestionIdx })
    currentQuestionIdx++
}

answerContainerEl.addEventListener('click', (event) => {
    if (currentQuestionIdx >= 5 && parseInt(event.target.attributes.id.value) === questionArr[correctAnswerIdx].correctAnswer) {
        gameOver();
    } else if (currentQuestionIdx >= 5 && parseInt(event.target.attributes.id.value) !== questionArr[correctAnswerIdx].correctAnswer) {
        evalEl.innerHTML = 'Incorrect';
        currentTime - 5;
        gameOver();
    } else if (parseInt(event.target.attributes.id.value) === questionArr[correctAnswerIdx].correctAnswer) {
        createQuiz('Correct')
    } else {
        currentTime = currentTime - 5;
        createQuiz('Incorrect')
    }
})

function gameOver() {
    console.log('Game Over')
}

startBtn.addEventListener('click', () => {
    timer();
    createQuiz();
});

