const messageContainer = document.getElementById("message-container");
const noMessageDiv = document.getElementById("no-message-div");
const messageDiv = document.getElementById("message-div");
const paragraphText = document.getElementById("paragraph-text");
const paragraphError = document.getElementById("paragraph-error");


function showError() {
    noMessageDiv.classList.remove('hidden');
    messageDiv.classList.add('hidden');
    messageDiv.classList.remove('message-div');

    messageContainer.classList.add('justify-content-center');

    paragraphError.innerHTML = "Solo letras minúsculas y sin acentos";
}

function hideError() {
    noMessageDiv.classList.add('hidden');
    messageDiv.classList.remove('hidden');
    messageDiv.classList.add('message-div');

    messageContainer.classList.remove('justify-content-center');

    paragraphError.innerHTML = "";
}

function encrypt() {
    let textarea = document.getElementById("textarea");
    let text = textarea.value;

    let letters = /^[ a-z\n]+$/;

    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

    if (text.length >= 1 && text.match(letters)) {
        hideError()

        for (let i = 0; i < matrixCode.length; i++) {
            if(text.includes(matrixCode[i][0])) {
                text = text.replaceAll(matrixCode[i][0], matrixCode[i][1])
            }
        }

        paragraphText.innerHTML = text;
        textarea.value = ""
    } else {
        showError()
    }
}

function decrypt() {
    let textarea = document.getElementById("textarea");
    let text = textarea.value;

    let letters = /^[ a-z\n]+$/;

    let matrixCode = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]

    if (text.length >= 1 && text.match(letters)) {
        hideError()
        
        for (let i = 0; i < matrixCode.length; i++) {
            if(text.includes(matrixCode[i][1])) {
                text = text.replaceAll(matrixCode[i][1], matrixCode[i][0])
            }
        }

        paragraphText.innerHTML = text;
        textarea.value = ""
    } else {
        showError()
    }
}

function copy() {
    const paragraphText = document.querySelector("#paragraph-text");
    navigator.clipboard.writeText(paragraphText.textContent)
    paragraphText.value = "";
}
