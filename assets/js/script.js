console.log('working?');

let question = document.getElementById('question');
let choices = Array.from(document.querySelectorAll('.choice-text'));
let progressText = document.getElementById('progressText');
let scoreText = document.getElementById('score');
let progressBarFull = document.getElementById('progressBarFull');


let startButton = document.getElementById('start-btn');
let restartButton =document.getElementById('restart-btn');
let gameContainer = document.getElementById('game');

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

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    gameContainer.classList.remove('hide');
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion()
};

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
       // localStorage.setItem('mostRecentScore', score);

        return showResults();
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
        let selectedChoice = event.target
        let selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(POINTS_GAIN)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 10)
    })
})

function incrementScore(num) {
    score +=num
    scoreText.innerText = score
}

function showResults () {
    gameContainer.classList.add('hide');
    restartButton.classList.remove('hide');
    restartButton.addEventListener('click', showStart);
}

function showStart() {
    startButton.classList.remove('hide');
    restartButton.classList.add('hide');
}

//startGame()




    