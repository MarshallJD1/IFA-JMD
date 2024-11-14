const input = document.getElementById('textInput');
const fireworksContainer = document.getElementById('fireworks');

input.addEventListener('input', (e) => {
    const value = e.target.value;
    const lastChar = value[value.length - 1];
    
    if (lastChar) {
        createFireworkLetter(lastChar);
        input.value = ''; // Clear the input field after capturing the character
    }
});

function createFireworkLetter(char) {
    const letter = document.createElement('div');
    letter.classList.add('letter');
    letter.textContent = char;
    letter.style.left = `${Math.random() * 90}%`;  // Random horizontal position

    fireworksContainer.appendChild(letter);

    // Trigger explosion animation
    setTimeout(() => {
        letter.style.animationName = 'rise, explode';
        letter.style.animationDuration = '2s, 0.5s';
    }, 1000); // 1 second delay for explosion effect

    // Remove the element after animation ends
    setTimeout(() => {
        fireworksContainer.removeChild(letter);
    }, 2500);
}
