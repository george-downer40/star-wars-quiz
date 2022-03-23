console.log('working?');

let question = document.getElementById('question');
let choices = Array.from(document.querySelectorAll('.choice-text'));
let progressText = document.getElementById('progressText');
let scoreText = document.getElementById('score');

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
        choice2: 'Yodaaaaaa',
        choice3: 'Wrong',
        choice4: 'Wrong',
        answer: 2,
    },
    {
        question: 'Who was the apprentice of Qui-Gon Jinn?',
        choice1: 'Wrong',
        choice2: 'Wrong',
        choice3: 'Obi-Wan Kenooooobi',
        choice4: 'Wrong',
        answer: 3,
    },
];

let POINTS_GAIN = 100;
let MAX_QUESTIONS = 3;

startButton.addEventListener('click', startGame);

//hides the start button and shows quiz
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

        return showResults();
    }

    //iterates question counter by 1. 
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    
    // randomizes questions
    let questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

   //loops through choices array to show question
    for (let choice of choices) {
        let number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    }

//removes used questions
    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}


//loops through choices array and if correct, increase points by 100
for (let choice of choices) {
    choice.addEventListener('click', function(event) {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        let selectedChoice = event.target
        let selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(POINTS_GAIN)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        //delays the next question
        setTimeout( function() {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 500)
    })
}  

function incrementScore(num) {
    score +=num
    scoreText.innerText = score
}
/**
 * hides quiz and takes user to results page
 */
function showResults () {
    gameContainer.classList.add('hide');
    restartButton.classList.remove('hide');
    restartButton.addEventListener('click', restartQuiz);
    console.log(score);
}
/**
 * reset user's score to 0 when game is restarted
 */
function resetScore() {
    score = 0;
    scoreText.innerText = 0;
}
/**
 * takes user back to beginning of quiz
 */
function restartQuiz() {
    startButton.classList.remove('hide');
    restartButton.classList.add('hide');
    resetScore();
}






    