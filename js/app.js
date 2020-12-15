const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 2, stagger: 1 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

const links = document.querySelectorAll(".navigation__item");
const check = document.querySelector(".navigation__checkbox");
const ground = document.querySelector(".navigation__background");
const nav = document.querySelector(".navigation__nav");
const button = document.querySelector(".navigation__button");
links.forEach((option) => {
  option.addEventListener("click", () => {
    console.log("food");
    ground.classList.add("out");
    nav.classList.add("out");
  });
});
button.addEventListener("click", () => {
  ground.classList.remove("out");
  nav.classList.remove("out");
});

// let body = document.body;
// let toggle = document.querySelector(".toggle-btn");
// let darkMode = localStorage.getItem("darkMode");
// let logo=document.querySelector(".logo")
// let logo2=document.querySelector(".lin")
// let logo3=document.querySelector(".lin2")
// let logo4=document.querySelector(".lin3")

// const enablelightmode = () => {
//   body.classList.add("light-class");
//   logo.src="images/logo2.svg"
//   logo.src="../images/logo2.svg"

//   localStorage.setItem("darkMode", "enabled");
// };
// const disablelightmode = () => {
//   body.classList.remove("light-class");
//   logo.src="images/logo.svg"
//   logo.src="../images/logo.svg"
//   localStorage.setItem("darkMode", null);
// };
// if (darkMode === "enabled") {
//   enablelightmode();
// }

// toggle.addEventListener("click", function () {
//   darkMode = localStorage.getItem("darkMode");
//   if (darkMode !== "enabled") {
//     enablelightmode();
//   } else {
//     disablelightmode();
//   }
// });
