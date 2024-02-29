function calculateLove() {
    const partner1 = document.getElementById('partner1').value;
    const partner2 = document.getElementById('partner2').value;

    // Validate input
    if (!partner1 || !partner2) {
        alert('Please enter both names.');
        return;
    }

    // Fictional algorithm to calculate love percentage
    const lovePercentage = Math.floor(Math.random() * 101);

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = generateLoveMessage(partner1, partner2, lovePercentage);
}

function generateLoveMessage(partner1, partner2, lovePercentage) {
    let message = `${partner1} and ${partner2}'s Love Percentage is ${lovePercentage}%!`;

    if (lovePercentage < 30) {
        message += " It seems there's room for improvement.";
    } else if (lovePercentage < 70) {
        message += " Not bad! Keep the love growing.";
    } else {
        message += " Wow! You two are a perfect match!";
    }

    return message;
}

function resetForm() {
    document.getElementById('partner1').value = '';
    document.getElementById('partner2').value = '';
    document.getElementById('result').innerHTML = '';
}
