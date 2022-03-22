console.log('working?');

let question = document.getElementById('question');
let choices = Array.from(document.querySelectorAll('.choice-text'));
let progressText = document.getElementById('progressText');
let scoreText = document.getElementById('score');
let progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


// Question array
let questions = [
    {
        question: 'Who destroyed the first Death Star?',
        choice1: 'Luke Skywalker',
        choice2: 'Wrong',
        choice3: 'Wrong',
        choice4: 'Wrong',
        answer: 1,
    },
    {
        question: 'Who dueled Darth Sidious in the Senate on Coruscant?',
        choice1: 'Wrong',
        choice2: 'Yoda',
        choice3: 'Wrong',
        choice4: 'Wrong',
        answer: 2,
    },
    {
        question: 'Who was the apprentice of Qui-Gon Jinn?',
        choice1: 'Wrong',
        choice2: 'Wrong',
        choice3: 'Obi-Wan Kenobi',
        choice4: 'Wrong',
        answer: 3,
    },
];

let POINTS_GAIN = 100;
let MAX_QUESTIONS = 3;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion()
};

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    let questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        let number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
//removes used questions
    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', event => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = event.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(POINTS_GAIN)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

function incrementScore(num) {
    score +=num
    scoreText.innerText = score
}

startGame()




    