const body = document.getElementsByTagName("body")[0]
const form = document.getElementsByTagName("form")[0];
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const message = document.createElement("div");
message.classList.add("message");
body.appendChild(message);


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(optionB.value > optionA.value) {
    message.innerHTML = "Fomulário valido";
    message.classList.remove("invalid")
    message.classList.add("valid")
    } else {
    message.innerHTML = "Fomulário invalido";
    message.classList.remove("valid")
    message.classList.add("invalid")
    }

    optionA.value = "";
    optionB.value = "";
})
