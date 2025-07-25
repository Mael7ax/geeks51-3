const textInput = document.getElementById("textInput");
const enteredCount = document.getElementById("enteredCount");
const remainingCount = document.getElementById("remainingCount");

const maxChars = 20;

textInput.oninput = () => {
    if (textInput.value.length > maxChars) {
        textInput.value = textInput.value.slice(0, maxChars);
    }

    enteredCount.textContent = textInput.value.length;
    remainingCount.textContent = maxChars - textInput.value.length;
};
