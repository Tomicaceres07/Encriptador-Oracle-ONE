

    

/* function showError() {

} */


function encrypt() {

    let noMessageDiv = document.getElementById("no-message-div");
    let messageDiv = document.getElementById("message-div");
    let paragraphText = document.getElementById("paragraph-text");
    let paragraphError = document.getElementById("paragraph-error");
    
    let textarea = document.getElementById("textarea");
    let text = textarea.value

    let letters = /^[ a-z\n]+$/;
    let matrixCode = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]

    if (text.length >= 1 && text.match(letters)) {
        noMessageDiv.classList.add('hidden');
        messageDiv.classList.remove('hidden');

        paragraphError.innerHTML = "";

        for (let i = 0; i < matrixCode.length; i++) {
            if(text.includes(matrixCode[i][0])) {
                text = text.replaceAll(matrixCode[i][0], matrixCode[i][1])
            }
        }

        paragraphText.innerHTML = text;
        textarea.value = ""
    } else {
        noMessageDiv.classList.remove('hidden');
        messageDiv.classList.add('hidden');

        paragraphError.innerHTML = "Solo letras minúsculas y sin acentos";
    }
}