document.title = "My Name";
const insParagraph = document.querySelector(".inside-paragraph");
const parag1 = document.getElementById("parag1");
const parag2 = document.getElementById("parag2");
const parag3 = document.getElementById("parag3");
const parag4 = document.getElementById("parag4");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    if (button.innerHTML == "Blue") {
        parag1.style.backgroundColor = "green";
        button.innerHTML = "white"
    }
})