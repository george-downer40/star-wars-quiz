console.log('working?');

let question = document.getElementById('question');
let choices = Array.from(document.querySelectorAll('.choice-text'));
let progressText = document.getElementById('progressText');
let scoreText = document.getElementById('score');
let progressBarFull = document.getElementById('progressBarFull');


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

let questionBox = document.getElementById('question-box');

function displayQuestion(questions) {
    console.log('working?');
}
    