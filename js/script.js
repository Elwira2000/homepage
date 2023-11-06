console.log("Witam wszystkich wtajemniczonych!");

let button = document.querySelector(".js-navigationButton");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("grey");

    themeName.innerText = body.classList.contains("grey") ? "czarne" : "szare";
});