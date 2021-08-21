let body = document.body;
let toggle = document.querySelector(".toggle-btn");
let darkMode = localStorage.getItem("darkMode");
let darkButton=document.querySelector(".btn-tog")
let logo=document.querySelector(".logo")
let github=document.querySelector(".github-tree")
let twitter=document.querySelector(".twitter-tree")
let linkedin=document.querySelector(".linkedin-tree")


const enablelightmode = () => {
    body.classList.add("light-class");
    localStorage.setItem("darkMode", "enabled")
}
const disablelightmode = () => {
    body.classList.remove("light-class");
    localStorage.setItem("darkMode", "disenabled")
}
if (darkMode === "enabled") {
    enablelightmode();
}

toggle.addEventListener("click", function () {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        darkButton.src="../images/dark.png"
        logo.src="../images/logo.svg"
        enablelightmode();
        github.src="../images/githubLight.png"
        twitter.src="../images/twitterBlack.svg"
        linkedin.src="../images/linkedinBlack.svg"
    } else {
        darkButton.src="../images/light.png"
        logo.src="../images/logo2.svg"
        disablelightmode();
        github.src="../images/github.svg"
        twitter.src="../images/twitter.svg"
        linkedin.src="../images/linkedin.svg"
    }
})

