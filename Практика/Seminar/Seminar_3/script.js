"use strict";

// 1. В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль
// текст “событие addEventListener”

document.addEventListener("DOMContentLoaded", () => {
  console.log("страница загрузилась");
});

const buttonEl = document.querySelector(".button");

buttonEl.onclick = () => {
  console.log("событие onclick");
};

buttonEl.addEventListener("click", function (e) {
  console.log("событие addEventListener");
});

// 2. Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

const buttonClick = (e) => {
  const target = e.target;
  console.log(target);
};

const buttonsEl = document.querySelectorAll(".button");

buttonsEl.forEach((element) => {
  element.addEventListener("click", buttonClick);
});

const button4 = document.createElement("button");
document.body.append(button4);
button4.textContent = "Кнопка 4";
button4.classList.add("button");

let count = 0;

const clickBtn4 = function () {
  count++;
  console.log(`Кликов по кнопке ${count}`);
};

button4.addEventListener("click", clickBtn4);

const button5 = document.createElement("button");
document.body.append(button5);
button5.textContent = "Кнопка 5";
button5.classList.add("button");

let c = true;
const clickBtn5 = function () {
  if (c) {
    button5.textContent = `Вы нажали на эту кнопку`;
  } else {
    button5.textContent = `Кнопка 5`;
  }
  c = !c;
};

button5.addEventListener("click", clickBtn5);

// 3. Создать кнопку, которая добавляет заголовок h1 с текстом, “Новый заголовок,
// данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” ,
// как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

const button6 = document.createElement("button");
document.body.append(button6);
button6.textContent = "Кнопка 6";
button6.classList.add("button");

const clickBtn6 = function () {
  const heading = document.createElement("h1");
  heading.textContent = "Новый заголовок";
  button6.insertAdjacentElement("afterend", heading);
};

button6.addEventListener("click", clickBtn6);

const button7 = document.createElement("button");
document.body.append(button7);
button7.textContent = "Кнопка 7";
button7.classList.add("button");

button7.addEventListener("click", function (e) {
  const heading2 = document.querySelector("h1");
  heading2.remove();
});

const button8 = document.createElement("button");
document.body.append(button8);
button8.textContent = "Кнопка 8";
button8.classList.add("button");

button8.addEventListener("mouseover", function (e) {
  console.log("вы навели на данную кнопку");
});

button8.addEventListener("mouseleave", function (e) {
  console.log("Наведения на кнопку больше нет");
});

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

const ula = document.querySelector(".ula");

const button9 = document.createElement("button");
button9.textContent = "добавить элемент";
button9.addEventListener("click", () => {
  ula.insertAdjacentHTML("afterbegin", `<li>новый элемент списка</li>`);
});
document.querySelector("body").append(button9);

const button10 = document.createElement("button");
button10.textContent = "удалить первый эелемент";
button10.addEventListener("click", () => {
  document.querySelector(".ula>li").remove();
});
document.querySelector("body").append(button10);

const button11 = document.createElement("button");
button11.textContent = "добавить класс клик";
button11.addEventListener("click", () => {
  button11.classList.toggle("click");
});
document.querySelector("body").prepend(button11);
