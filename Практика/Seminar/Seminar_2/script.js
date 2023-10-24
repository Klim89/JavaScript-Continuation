"use strict";

/* <div class="block"></div>
Дан блок, внутри него необходимо создать элемент div с классом item, 
разместить текст “Элемент внутри” и задать стили
Цвет текста синий
Рамка сплошная черная
Цвет фона #f8f8f8
Внутренний отступ 16px
Добавить данному блоку класс item_1 (использовать setAttribute) */

const block = document.querySelector(".block");
const searchBlock = document.createElement("div");
block.appendChild(searchBlock);
searchBlock.classList.add("item");
// searchBlock.setAttribute('class', 'item');
searchBlock.textContent = "Элемент внутри";
searchBlock.style.color = "blue";
searchBlock.style.border = "solid 1px #000";
searchBlock.style.background = "#f8f8f8";
searchBlock.style.padding = "16px";
searchBlock.setAttribute("class", `${searchBlock.className} item_1`);
// searchBlock.setAttribute('class', 'item item_1');

console.log(block);

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

const paragraphEl = document.querySelector("p.text");
console.log(paragraphEl);
console.log(paragraphEl.previousElementSibling);
console.log(paragraphEl.parentElement);
console.log(paragraphEl.parentElement.previousElementSibling);
console.log(paragraphEl.parentElement.parentElement);

// Найти всех родителей элемента h2

const h2El = document.querySelector(".subtitle");

function getParent(el) {
  if (el.parentElement) {
    console.log(el.parentElement);
    getParent(el.parentElement);
  }
}
getParent(h2El);

// Дано поле ввода и кнопка отправить, необходимо
// реализовать функционал, если пользователь нажимает на кнопку отправить,
// а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок
// h2 с текстом вы не заполнили поле ввода
// У поля ввода должна появиться рамка красного цвета

const form = document.querySelector("form");
const input = document.querySelector("input");
const textEl = document.createElement("p");
textEl.textContent = "вы не заполнили поле ввода";
form.onsubmit = function getInput(e) {
  e.preventDefault();
  const val = document.querySelector("input").value;
  if (val.trim() === "") {
    form.append(textEl);
    input.style.borderColor = "red";
  } else {
    if (textEl) {
      textEl.remove();
      input.style.borderColor = "black";
    }
  }
};
