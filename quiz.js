function checkAnswer() {
    const correctAnswer = 4;
    const feedback= document.getElementById('feedback');
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    if (userAnswer === correctAnswer) {
        feedback.textContent="Correct! Well done.";
    }
    if(userAnswer != correctAnswer) {
        feedback.textContent="Thats incorrect. Try again!";
    }
}

document.getElementById('submit-button').addEventListener('click' , checkAnswer);