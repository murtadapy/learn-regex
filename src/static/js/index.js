const regexInput = document.getElementById("regex-input");
const content = document.getElementById("content");
let originalText = content.innerText;
const colorList = [
    "#167ccc",
    "#17CB44",
    "#DAB42B",
    "#CC1616",
    "#Cc8616",
    "#C616cc",
];

function reset() {
    content.innerText = originalText;
    regexInput.classList.remove("input-wrong");
}

function handleRegexInputChange() {
    reset();
    try {
        if (regexInput.value) {
            const regex = new RegExp(regexInput.value, "g");
            let matchIndex = 0;
            const highlighted = originalText.replaceAll(regex, (match) => {
                const color = colorList[matchIndex % colorList.length];
                matchIndex++;
                return `<span style="color: #1a1a1a; background: ${color};">${match}</span>`;
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
