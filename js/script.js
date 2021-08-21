
let body = document.body;
let toggle = document.querySelector(".toggle-btn");
let darkMode = localStorage.getItem("darkMode");
let darkButton=document.querySelector(".btn-tog")
let logo=document.querySelector(".logo")
let github=document.querySelector(".github-tree")
let twitter=document.querySelector(".twitter-tree")
let linkedin=document.querySelector(".linkedin-tree")
logo.src="../images/logo2.svg"
darkButton.src="../images/light.png"
// localStorage.clear()
if (localStorage.getItem("darkMode") === "null") {
    console.log("falsenull")
    logo.src="../images/logo2.svg"
darkButton.src="../images/light.png"
  }
else if("darkMode" in localStorage){
    console.log("false")
    let buttonMode = localStorage.getItem("button");
    let logoMode = localStorage.getItem("logo");
    logo.src=logoMode
    darkButton.src=buttonMode
}



const enablelightmode = () => {
    body.classList.add("light-class");
    localStorage.setItem("darkMode", "enabled")
    localStorage.setItem("button", "../images/dark.png")
    localStorage.setItem("logo", "../images/logo.svg")
    localStorage.setItem("github", "../images/githubLight.png")
    localStorage.setItem("twitter", "../images/twitterBlack.svg")
    localStorage.setItem("linkedin", "../images/linkedinBlack.svg")

}
const disablelightmode = () => {
    body.classList.remove("light-class");
    console.log("falsedark")

    localStorage.setItem("darkMode", null)
    // localStorage.setItem("button", null)
    // localStorage.setItem("logo", null)
    // localStorage.setItem("github", null)
    // localStorage.setItem("twitter", null)
    // localStorage.setItem("linkedin", null)
}
if (darkMode === "enabled") {
    console.log("falselight")

    enablelightmode();
}

toggle.addEventListener("click", function () {
    darkMode = localStorage.getItem("darkMode");
    // buttonMode = localStorage.getItem("button");
    // logoMode = localStorage.getItem("logo");
    // githubMode = localStorage.getItem("github");
    // twitterMode = localStorage.getItem("twitter");
    // linkedinMode = localStorage.getItem("linkedin");
    if (darkMode !== "enabled") {
        darkButton.src="../images/dark.png"
        logo.src="../images/logo.svg"
        enablelightmode();
        // github.src="../images/githubLight.png"
        // twitter.src="../images/twitterBlack.svg"
        // linkedin.src="../images/linkedinBlack.svg"
    } else {
        darkButton.src="../images/light.png"
        logo.src="../images/logo2.svg"
        disablelightmode();
        // github.src="../images/github.svg"
        // twitter.src="../images/twitter.svg"
        // linkedin.src="../images/linkedin.svg"
    }
})

