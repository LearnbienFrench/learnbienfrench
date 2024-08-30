function checkAnswer(element, correctAnswer, quizId) {
    const resultDiv = document.getElementById('result-' + quizId);
    
    if (element.innerText.startsWith(correctAnswer)) {
        resultDiv.innerHTML = '<span style="color: green; font-size: 24px;">✔ Correct!</span>';
    } else {
        resultDiv.innerHTML = '<span style="color: red; font-size: 24px;">✖ Incorrect!</span>';
    }
    
    // Disable further clicks on this quiz
    const choices = element.parentElement.getElementsByTagName('li');
    for (let i = 0; i < choices.length; i++) {
        choices[i].style.pointerEvents = 'none';
        if (choices[i].innerText.startsWith(correctAnswer)) {
            choices[i].style.backgroundColor = '#28a745';
        } else {
            choices[i].style.backgroundColor = '#dc3545';
        }
    }
}
