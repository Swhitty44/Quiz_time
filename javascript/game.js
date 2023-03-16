const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What tag is used to create a button underneath another?",
        choice1: "<split>",
        choice2: "<br>",
        choice3: "<break>",
        choice4: "</br>",
        answer: "2"
    },
    {
        question: "What tag links javascript to an HTML file?",
        choice1: "<javascript>",
        choice2: "<js>",
        choice3: "<script>",
        choice4: "<java>",
        answer: "3"
    },
    {
        question: "How do you make text appear in the console?",
        choice1: "Console.log()",
        choice2: "Console=",
        choice3: "Nothing can appear in the console",
        choice4: "logConsole",
        answer: "1"
    }, 
    {
    question: "How do you make text appear in the console?",
    choice1: "Console.log()",
    choice2: "Console=",
    choice3: "Nothing can appear in the console",
    choice4: "logConsole",
    answer: "1"
}, 
{
    question: "How do you make text appear in the console?",
    choice1: "Console.log()",
    choice2: "Console=",
    choice3: "Nothing can appear in the console",
    choice4: "logConsole",
    answer: "1"
}, 
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [... questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length == 0 || questionCounter > MAX_QUESTIONS){
        return window.location.assign("/end.html")
    }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if(classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
        }, 1000);
      
    });
});

incrementScore =  num => {
    score += num;
    scoreText.innerText = score;
}

startGame();