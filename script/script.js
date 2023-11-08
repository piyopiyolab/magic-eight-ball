// HARD LEVEL DEBUG 
'use strict';


//Array 7 answers (note:array starts from 0) 
let answerArray = ["You may rely on it.", "Most likely.", "Outlook good.", "Ask again later.", "Concentrate and ask again.", "Don't count on it.", "Absolutely", "Very Doubtful"];



let fortuneTitle = document.getElementById('fortuneTitle'); //eightBall Answer
let question = document.getElementById('question-input-box'); //user question
let eightBall = document.getElementById('eightBall'); //eightBall background
let submitBtn = document.getElementById('question-submit-button'); //button submit
let questionForm = document.getElementById('question-form'); // question form
let resetBtn = document.getElementById('reset'); // Reset button




//prevent refresh during submission.

function submitForm(event) {

    //Preventing page refresh
    event.preventDefault();
}


//prevent refresh during submission.
questionForm.addEventListener('submit', submitForm);

//Fonction for the eightBall answer

function eightBallAnswer() {
    //alert if question is empty (length < 1)
    if (question.value.length < 1) {
        alert('Please, enter a question.')
    }
    else {
        //Random number between 0 & Array's number of items
        let indexAnswer = Math.floor(Math.random() * answerArray.length);
        //Stock the index answer
        let answer = answerArray[indexAnswer];
        fortuneTitle.innerHTML = `<p>${answer}</p>`;
        /*eightBall.classList.add("bgPosition-negative");*/
        eightBall.style.backgroundPosition = '-993px 0';
        fortuneTitle.classList.add('text-animation');

    }
}

function resetInput() {
    eightBall.style.backgroundPosition = '11px 0';
    fortuneTitle.innerHTML = ``;
    fortuneTitle.classList.remove('text-animation');
    questionForm.reset();

}
//When a user click on submit button, eightBall answer
submitBtn.addEventListener('click', eightBallAnswer);
resetBtn.addEventListener('click', resetInput);
