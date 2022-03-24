window.addEventListener('load', restartQuiz);


const START_BUTTON = document.getElementById('start-container');
const RESTART_BUTTON =document.getElementById('results-container');
const GAME_CONTAINER = document.getElementById('game');
const MAX_QUESTIONS = 3;
const CHOICES = document.querySelectorAll('.choice-text');


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
        choice1: 'WroSSSSng',
        choice2: 'Wrong',
        choice3: 'Obi-Wan Kenooooobi',
        choice4: 'Wrong',
        answer: 3,
    },
];


START_BUTTON.addEventListener('click', startGame);

/**
 * hides the initial start button and shows the quiz
 */
function startGame() {
    START_BUTTON.classList.add('hide');
    GAME_CONTAINER.classList.remove('hide');
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion()
};

/**
 * shows the question and runs showResults function once all questions have
 * been looped through
 */
function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {

        return showResults();
    }

    //iterates question counter by 1. 
    questionCounter++
    let progressText = document.getElementById('progressText');
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    
    // randomizes questions
    let questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    let QUESTION = document.getElementById('question');
    QUESTION.innerText = currentQuestion.question

   //loops through choices array to show question
    for (let choice of CHOICES) {
        let number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    }

//removes used questions
    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}


//loops through choices array and if correct, increase points by 100
for (let choice of CHOICES) {
    choice.addEventListener('click', checkAnswer)
}

/**
 * checks if the answer is correct and applies the class correct or incorrect based on result
 */
function checkAnswer(event) {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    let selectedChoice = event.target
    let selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if(classToApply === 'correct') {
        const POINTS_GAIN = 100;
        incrementScore(POINTS_GAIN)
    }

    selectedChoice.parentElement.classList.add(classToApply)

    //delays the next question
    setTimeout( function() {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()

    }, 1000)

}

/**
 * increases score by 100 when called / correct answer selected
 */
function incrementScore(num) {
    let scoreText = document.getElementById('score');
    score +=num
    scoreText.innerText = score
}

/**
 * hides quiz and takes user to results page
 */
function showResults () {
    GAME_CONTAINER.classList.add('hide');
    RESTART_BUTTON.classList.remove('hide');
    RESTART_BUTTON.addEventListener('click', restartQuiz);
    console.log(score);
}

/**
 * reset user's score to 0 when game is restarted
 */
function resetScore() {
    let scoreText = document.getElementById('score');
    score = 0;
    scoreText.innerText = 0;
}

/**
 * takes user back to beginning of quiz
 */
function restartQuiz() {
    START_BUTTON.classList.remove('hide');
    RESTART_BUTTON.classList.add('hide');
    resetScore();
    console.log('test');
}






    