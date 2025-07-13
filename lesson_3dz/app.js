function generateDigits(count = 4) {
    const codeBox = document.getElementById('codeBox');
    codeBox.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const digit = document.createElement('div');
        digit.className = 'digit';
        digit.textContent = Math.floor(Math.random() * 10);
        codeBox.appendChild(digit);
    }
}

function refreshCode() {
    generateDigits();
}

window.onload = () => {
    generateDigits();
};