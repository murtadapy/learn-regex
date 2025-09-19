const regexInput = document.getElementById("regex-input");
const content = document.getElementById("content");
let originalText = content.innerText;

function reset() {
    content.innerText = originalText;
    regexInput.classList.remove("input-wrong");
}

function handleRegexInputChange() {
    reset();
    try {
        if (regexInput.value) {
            const regex = new RegExp(regexInput.value, "g");
            const highlighted = originalText.replaceAll(regex, (match) => {
                return `<span style="color: green">${match}</span>`;
            });
            content.innerHTML = highlighted;
        }
    } catch (e) {
        regexInput.classList.add("input-wrong");
    }
}

function changeContent() {
    originalText = content.innerText;
}

regexInput.addEventListener("keyup", handleRegexInputChange);
content.addEventListener("keyup", changeContent);
