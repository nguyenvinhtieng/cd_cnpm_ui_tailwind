const avatarHeader = document.querySelector(".header__avatar");
const dropdownHeader = document.querySelector(".header__dropdown-content");
const dropdownHeaderMain = document.querySelector(".header__dropdown");
avatarHeader.addEventListener("click", () => handleToggleDropdown());
const handleToggleDropdown = (status = null) => {
    dropdownHeader.classList.toggle("active");
};
// window.addEventListener("click", (e) => {
//     if (e.target.closets(dropdownHeaderMain)) {
//         alert("run")
//     }
// })
const body = document.querySelector("body");
const switchThemeButton = document.querySelector("#switch-theme");

(function darkTheme() {
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
        body.classList.add("dark");
        switchThemeButton.checked = true;
    } else if (theme === "light") {
        body.classList.remove("dark");
        switchThemeButton.checked = false;
    }
})();
switchThemeButton.addEventListener("change", (e) => {
    if (switchThemeButton.checked) {
        body.classList.add("dark");
        switchThemeButton.checked = true;
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark");
        switchThemeButton.checked = false;
        localStorage.setItem("theme", "light");
    }
});
