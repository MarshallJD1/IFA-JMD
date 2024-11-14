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

    // Random horizontal position and starting near the input area
    letter.style.left = `${Math.random() * 90}%`;
    letter.style.top = '90vh';  // Start letters from near the input field

    fireworksContainer.appendChild(letter);

    // Listen for when the "rise" animation ends
    letter.addEventListener('animationend', () => {
        // After the rise animation ends, create a new letter to trigger the explode animation
        createExplosionLetter(letter);
    });
}

// Function to create a new letter that will explode at the end of the rise
function createExplosionLetter(originalLetter) {
    const explosionLetter = document.createElement('div');
    explosionLetter.classList.add('letter');
    explosionLetter.textContent = originalLetter.textContent;  // Copy the letter content

    // Position the new letter exactly where the rise animation ended
    explosionLetter.style.left = originalLetter.style.left;
    explosionLetter.style.top = `${parseFloat(originalLetter.style.top) - 70}vh`;  // Position at the end of the rise

    fireworksContainer.appendChild(explosionLetter);

    // Apply the explode animation immediately
    explosionLetter.style.animation = 'explode 0.5s ease-out forwards';

    // Cleanup after explosion animation ends
    explosionLetter.addEventListener('animationend', () => {
        fireworksContainer.removeChild(explosionLetter);
    });

    // Cleanup the original letter after the rise animation ends
    setTimeout(() => {
        fireworksContainer.removeChild(originalLetter);
    }); // Wait until the rise animation finishes (2s)
}
