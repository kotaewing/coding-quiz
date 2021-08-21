const answerContainerEl = document.getElementById('answers');
const questionEl = document.getElementById('question')
const evalEl = document.getElementById('eval')
const startBtn = document.getElementById('start')
const introEl = document.getElementById('intro');
let correctAnswerIdx = 0;
let currentQuestionIdx = 0;
const currentQuestion = (val) => val;


if (currentQuestionIdx >= 5) {
    gameOver();
}

const questionArr = [
    {
        question: 'This is question 1',
        answers: [
            'Answer A-1',
            'Answer B-1',
            'Answer C-1',
            'Answer D-1',
        ],
        correctAnswer: 0
    },
    {
        question: 'This is question 2',
        answers: [
            'Answer A-2',
            'Answer B-2',
            'Answer C-2',
            'Answer D-2',
        ],
        correctAnswer: 0
    },
    {
        question: 'This is question 3',
        answers: [
            'Answer A-3',
            'Answer B-3',
            'Answer C-3',
            'Answer D-3',
        ],
        correctAnswer: 0
    },
    {
        question: 'This is question 4',
        answers: [
            'Answer A-4',
            'Answer B-4',
            'Answer C-4',
            'Answer D-4',
        ],
        correctAnswer: 0
    },
    {
        question: 'This is question 5',
        answers: [
            'Answer A-5',
            'Answer B-5',
            'Answer C-5',
            'Answer D-5',
        ],
        correctAnswer: 0
    },
]

function currentQuestionSwitch(eval) {
    switch (currentQuestion(currentQuestionIdx)) {
        case 0:
            createQuiz(questionArr[0], eval)
            break;
        case 1:
            createQuiz(questionArr[1], eval)
            break;
        case 2:
            createQuiz(questionArr[2], eval)
            break;
        case 3:
            createQuiz(questionArr[3], eval)
            break;
        case 4:
            createQuiz(questionArr[4], eval)
            break;
    }
}

function createQuiz(answerObj, eval) {
    introEl.innerHTML = ""
    answerContainerEl.innerHTML = ""
    if (eval) {
        evalEl.innerHTML = eval
    }
    questionEl.innerHTML = answerObj.question
    const answerArr = answerObj.answers
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
    if (parseInt(event.target.attributes.id.value) === questionArr[correctAnswerIdx].correctAnswer) {
        currentQuestionSwitch('Correct')
    } else {
        currentQuestionSwitch('Incorrect')
    }
})

function gameOver() {
    console.log('Game Over')
}

startBtn.addEventListener('click', () => {
    currentQuestionSwitch();
});

