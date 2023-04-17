let changeBackgroundElement = document.querySelector(".js-changeBackground");
let containerElement = document.querySelector("body");
let changeThemeElement = document.querySelector(".js-changeTheme");

changeBackgroundElement.addEventListener("click", () => {
    containerElement.classList.toggle("body--dark");

    changeThemeElement.innerText = containerElement.classList.contains("body--dark") ? "jaśniejszy" : "ciemniejszy";
});

