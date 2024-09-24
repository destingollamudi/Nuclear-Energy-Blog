// Shrink header on scroll
window.onscroll = function () {
    let header = document.getElementById("main-header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
};

// Vibration for the CTA button
document.getElementById("cta-button").addEventListener("click", function () {
    if (navigator.vibrate) {
        navigator.vibrate(200); // Vibrate for 200ms
    }

});

function checkAnswer(answer) {
    const resultElement = document.getElementById('quiz-result');

    // Both answers are false
    if (answer === 'false') {
        resultElement.innerHTML = "Neither option generates more energy than an average nuclear power plant. A nuclear plant generates the same amount of energy as 3 million PV solar panels or 431 utility-scale wind turbines.";
    }
}
