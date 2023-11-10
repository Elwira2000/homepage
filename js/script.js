{
    const welcome = () => {
        console.log("Witam wszystkich wtajemniczonych!");
    };

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("grey");
        themeName.innerText = body.classList.contains("grey") ? "czarne" : "szare";
    };

    const init = () => {
        const button = document.querySelector(".js-navigationButton");
        button.addEventListener("click", toggleBackground);

        welcome ();
    };

    init ();
}