function checkAnswer() {
    const correctAnswer = 4;
    const feedback= document.getElementById('feedback');
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    if (userAnswer === correctAnswer) {
        feedback.textContent="Correct! Well done.";
    }else {
        feedback.textContent="Thats incorrect. Try again!";
    }
}

const submitAnswer = document.getElementById('submit-answer');

submitAnswer.addEventListener('click',checkAnswer);
