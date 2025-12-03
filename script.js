document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    const textToType = "Welcome to my digital blog, This is the beta Blog .";
    let index = 0;

    function type() {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        } else {
            // Add a blinking cursor at the end
            const cursor = document.createElement('span');
            cursor.textContent = '█';
            cursor.style.animation = 'blink 1s infinite';
            textElement.appendChild(cursor);
        }
    }

    type();
});
