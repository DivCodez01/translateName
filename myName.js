document.title = "My Name";
const insParagraph = document.querySelector(".inside-paragraph");
const parag1 = document.querySelector(".parag1");
const parag2 = document.querySelector(".parag2");
const parag3 = document.querySelector(".parag3");
const parag4 = document.querySelector(".parag4");
const button = document.querySelector("button");
const nameMeaningBtn = document.querySelector(".name-meaning-btn");
const viewContainerEl = document.querySelector(".view-container-el");
const paragContainer = document.querySelector(".parag-container");
const backBtn = document.querySelector(".back-btn");
const fstHeaderEl = document.querySelector(".fstHeader-el");
const label = document.querySelector("label");
const h2 = document.querySelector("h2");

button.addEventListener("click", function () {
    if (button.innerHTML == "Blue") {
        button.innerHTML = "Green"
        parag1.style.backgroundColor = "green";
        parag2.style.backgroundColor = "green";
        parag3.style.backgroundColor = "green";
        parag4.style.backgroundColor = "green";
        insParagraph.style.backgroundColor = "green"
    } else if (button.innerHTML == "Green") {
        button.innerHTML = "Brown";
        parag1.style.backgroundColor = "brown";
        parag2.style.backgroundColor = "brown";
        parag3.style.backgroundColor = "brown";
        parag4.style.backgroundColor = "brown";
        insParagraph.style.backgroundColor = "brown"
    } else if (button.innerHTML == "Brown") {
        button.innerHTML = "Grey";
        parag1.style.backgroundColor = "grey";
        parag2.style.backgroundColor = "grey";
        parag3.style.backgroundColor = "grey";
        parag4.style.backgroundColor = "grey";
        parag1.style.color = "black";
        parag2.style.color = "black";
        parag3.style.color = "black";
        parag4.style.color = "black";
        parag1.style.border = "5px solid black";
        parag2.style.border = "5px solid black";
        parag3.style.border = "5px solid black";
        parag4.style.border = "5px solid black";
        insParagraph.style.backgroundColor = "grey";
    } else if (button.innerHTML == "Grey") {
        button.innerHTML = "Red";
        parag1.style.backgroundColor = "red";
        parag2.style.backgroundColor = "red";
        parag3.style.backgroundColor = "red";
        parag4.style.backgroundColor = "red";
        insParagraph.style.backgroundColor = "red"
    } else if (button.innerHTML == "Red") {
        button.innerHTML = "White";
        parag1.style.backgroundColor = "white";
        parag2.style.backgroundColor = "white";
        parag3.style.backgroundColor = "white";
        parag4.style.backgroundColor = "white";
        insParagraph.style.backgroundColor = "black"
    } else if (button.innerHTML == "White") {
        button.innerHTML = "Pink";
        parag1.style.backgroundColor = "pink";
        parag2.style.backgroundColor = "pink";
        parag3.style.backgroundColor = "pink";
        parag4.style.backgroundColor = "pink";
        insParagraph.style.backgroundColor = "pink"
    } else if (button.innerHTML == "Pink") {
        button.innerHTML = "Yellow";
        parag1.style.backgroundColor = "yellow";
        parag2.style.backgroundColor = "yellow";
        parag3.style.backgroundColor = "yellow";
        parag4.style.backgroundColor = "yellow";
        insParagraph.style.backgroundColor = "yellow"
    } else if (button.innerHTML == "Yellow") {
        button.innerHTML = "Black";
        parag1.style.backgroundColor = "black";
        parag2.style.backgroundColor = "black";
        parag3.style.backgroundColor = "black";
        parag4.style.backgroundColor = "black";
        parag1.style.color = "white";
        parag2.style.color = "white";
        parag3.style.color = "white";
        parag4.style.color = "white";
        parag1.style.border = "5px solid white";
        parag2.style.border = "5px solid white";
        parag3.style.border = "5px solid white";
        parag4.style.border = "5px solid white";
        insParagraph.style.backgroundColor = "black";
    } else if (button.innerHTML == "Black") {
        button.innerHTML = "Beige";
        parag1.style.backgroundColor = "beige";
        parag2.style.backgroundColor = "beige";
        parag3.style.backgroundColor = "beige";
        parag4.style.backgroundColor = "beige";
        parag1.style.color = "black";
        parag2.style.color = "black";
        parag3.style.color = "black";
        parag4.style.color = "black";
        parag1.style.border = "5px solid black";
        parag2.style.border = "5px solid black";
        parag3.style.border = "5px solid black";
        parag4.style.border = "5px solid black";
        insParagraph.style.backgroundColor = "black"
    } else if (button.innerHTML == "Beige") {
        button.innerHTML = "Navy";
        parag1.style.backgroundColor = "navy";
        parag2.style.backgroundColor = "navy";
        parag3.style.backgroundColor = "navy";
        parag4.style.backgroundColor = "navy";
        parag1.style.color = "white";
        parag2.style.color = "white";
        parag3.style.color = "white";
        parag4.style.color = "white";
        parag1.style.border = "5px solid white";
        parag2.style.border = "5px solid white";
        parag3.style.border = "5px solid white";
        parag4.style.border = "5px solid white";
        insParagraph.style.backgroundColor = "navy"
    } else if (button.innerHTML == "Navy") {
        button.innerHTML = "Maroon";
        parag1.style.backgroundColor = "maroon";
        parag2.style.backgroundColor = "maroon";
        parag3.style.backgroundColor = "maroon";
        parag4.style.backgroundColor = "maroon";
        parag1.style.color = "white";
        parag2.style.color = "white";
        parag3.style.color = "white";
        parag4.style.color = "white";
        insParagraph.style.backgroundColor = "maroon"
    } else if (button.innerHTML == "Maroon") {
        button.innerHTML = "Purple";
        parag1.style.backgroundColor = "purple";
        parag2.style.backgroundColor = "purple";
        parag3.style.backgroundColor = "purple";
        parag4.style.backgroundColor = "purple";
        insParagraph.style.backgroundColor = "purple";
    } else if (button.innerHTML == "Purple") {
        button.innerHTML = "Orange";
        parag1.style.backgroundColor = "orange";
        parag2.style.backgroundColor = "orange";
        parag3.style.backgroundColor = "orange";
        parag4.style.backgroundColor = "orange";
        parag1.style.color = "black";
        parag2.style.color = "black";
        parag3.style.color = "black";
        parag4.style.color = "black";
        parag1.style.border = "5px solid black";
        parag2.style.border = "5px solid black";
        parag3.style.border = "5px solid black";
        parag4.style.border = "5px solid black";
        insParagraph.style.backgroundColor = "orange"
    } else if (button.innerHTML == "Orange") {
        button.innerHTML = "Aqua";
        parag1.style.backgroundColor = "aqua";
        parag2.style.backgroundColor = "aqua";
        parag3.style.backgroundColor = "aqua";
        parag4.style.backgroundColor = "aqua";
        insParagraph.style.backgroundColor = "aqua"
    } else {
        button.innerHTML = "Blue"
        parag1.style.backgroundColor = "blue";
        parag2.style.backgroundColor = "blue";
        parag3.style.backgroundColor = "blue";
        parag4.style.backgroundColor = "blue";
        parag1.style.color = "white";
        parag2.style.color = "white";
        parag3.style.color = "white";
        parag4.style.color = "white";
        parag1.style.border = "5px solid white";
        parag2.style.border = "5px solid white";
        parag3.style.border = "5px solid white";
        parag4.style.border = "5px solid white";
        insParagraph.style.backgroundColor = "blue"
    }
})

nameMeaningBtn.addEventListener("click", function () {
    // // viewContainerEl.style.display = "grid"
    paragContainer.style.display = "none";
    viewContainerEl.style.display = "flex";
    fstHeaderEl.innerHTML = "This's my full name and their meanings";
    fstHeaderEl.className += " changeBck"
    h2.style.display = "none";
    label.style.display = "none";
    button.style.display = "none";
})

backBtn.addEventListener("click", function () {
    paragContainer.style.display = "flex";
    viewContainerEl.style.display = "none";

    fstHeaderEl.innerHTML = "My name is:";
    fstHeaderEl.className += " changeBck"
    h2.style.display = "grid";
    label.style.display = "grid";
    button.style.display = "grid";
})