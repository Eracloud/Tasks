import "./style.css";

const main = document.createElement("main");
const body = document.querySelector("body");
body.append(main);
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const li5 = document.createElement("li");
const li6 = document.createElement("li");
const li7 = document.createElement("li");
const li8 = document.createElement("li");
main.append(ul);

ul.setAttribute("id", "slides_container");

ul.append(li1);
ul.append(li2);
ul.append(li3);
ul.append(li4);
ul.append(li5);
ul.append(li6);
ul.append(li7);
ul.append(li8);

li1.classList.add("slide", "active");
li1.innerText = "slide 1";

li2.classList.add("slide");
li2.innerText = "slide 2";

li3.classList.add("slide");
li3.innerText = "slide 3";

li4.classList.add("slide");
li4.innerText = "slide 4";

li5.classList.add("slide");
li5.innerText = "slide 5";

li6.classList.add("slide");
li6.innerText = "slide 6";

li7.classList.add("slide");
li7.innerText = "slide 7";

li8.classList.add("slide");
li8.innerText = "slide 8";

const buttonNext = document.createElement("button");
buttonNext.setAttribute("id", "next");
buttonNext.classList.add("btn");
buttonNext.innerText = "NEXT";

const buttonPrev = document.createElement("button");
buttonPrev.setAttribute("id", "prev");
buttonPrev.classList.add("btn");
buttonPrev.innerText = "PREV";

const btnContainer = document.createElement("div");
main.append(btnContainer);
btnContainer.setAttribute("id", "btnContainer");
const btnContainerQuery = document.getElementById("btnContainer");

btnContainerQuery.append(buttonPrev);
btnContainerQuery.append(buttonNext);

const slides = document.querySelectorAll("#slides_container .slide");
let currentSlide = 0;

const changeSlide = (n) => {
  slides[currentSlide].className = "slide";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "slide active";
};

const nextSlide = () => {
  changeSlide(currentSlide + 1);
};

const prevSlide = () => {
  changeSlide(currentSlide - 1);
};

buttonNext.onclick = () => {
  nextSlide();
};

buttonPrev.onclick = () => {
  prevSlide();
};
