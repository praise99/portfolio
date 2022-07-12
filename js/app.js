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
let project = document.querySelector(".second");
let see = document.querySelector(".sugr");
let margin = document.querySelector(".rep");
project.addEventListener("mouseout", () => {
  see.classList.toggle("pencil");
  margin.classList.toggle("project-title-sub");
});
project.addEventListener("mouseover", () => {
  see.classList.toggle("pencil");
  margin.classList.toggle("project-title-sub");
});

let project2 = document.querySelector(".first");
let see2 = document.querySelector(".sugr2");
let margin2 = document.querySelector(".rep2");
project2.addEventListener("mouseout", () => {
  see2.classList.toggle("pencil");
  margin2.classList.toggle("project-title-sub");
});
project2.addEventListener("mouseover", () => {
  see2.classList.toggle("pencil");
  margin2.classList.toggle("project-title-sub");
});
let project3 = document.querySelector(".third");
let see3 = document.querySelector(".sugr3");
let margin3 = document.querySelector(".rep3");
project3.addEventListener("mouseout", () => {
  see3.classList.toggle("pencil");
  margin3.classList.toggle("project-title-sub");
});
project3.addEventListener("mouseover", () => {
  see3.classList.toggle("pencil");
  margin3.classList.toggle("project-title-sub");
});
let project4 = document.querySelector(".fourth");
let see4 = document.querySelector(".sugr4");
let margin4 = document.querySelector(".rep4");
project4.addEventListener("mouseout", () => {
  see4.classList.toggle("pencil");
  margin4.classList.toggle("project-title-sub");
});
project4.addEventListener("mouseover", () => {
  see4.classList.toggle("pencil");
  margin4.classList.toggle("project-title-sub");
});
let project5 = document.querySelector(".fifth");
let see5 = document.querySelector(".sugr5");
let margin5 = document.querySelector(".rep5");
project5.addEventListener("mouseout", () => {
  see5.classList.toggle("pencil");
  margin5.classList.toggle("project-title-sub");
});
project5.addEventListener("mouseover", () => {
  see5.classList.toggle("pencil");
  margin5.classList.toggle("project-title-sub");
});


let project6 = document.querySelector(".sixth");
let see6 = document.querySelector(".sugr6");
let margin6 = document.querySelector(".rep6");
project6.addEventListener("mouseout", () => {
  see6.classList.toggle("pencil");
  margin6.classList.toggle("project-title-sub");
});
project6.addEventListener("mouseover", () => {
  see6.classList.toggle("pencil");
  margin6.classList.toggle("project-title-sub");
});
