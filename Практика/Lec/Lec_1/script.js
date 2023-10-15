"use strict";

// Событие по клику

const buttonEl = document.querySelector(".btn");
const contentEl = document.querySelector(".content");
const imgEl = document.querySelector(".img");

imgEl.onclick = function () {
  imgEl.src = "newphoto.jpg";
};

const textEl = document.createElement("p");
textEl.textContent = "Тут любой текст";

buttonEl.onclick = function () {
  buttonEl.textContent = "Товар в корзине";
  contentEl.appendChild(textEl);
};

// Поиск узла в документе

const heading2 = document.getElementById("heading");
console.log(heading2);
const heading3 = document.querySelector("#heading");
console.log(heading3);

const listEls = document.getElementsByClassName("list");
console.log(listEls);
const listElsQs = document.querySelectorAll(".list");
console.log(listElsQs);

const listTag = document.getElementsByTagName("li");
console.log(listTag);
const listTagQs = document.querySelectorAll("li");
console.log(listTagQs);

const heading = document.querySelector(".title");
const text = document.querySelector(".text");
const text1 = document.querySelectorAll(".text");
for (let i = 0; i < text1.length; i++) {
  console.log(text1[i]);
}
text1.forEach((element) => {
  console.log(element);
});

console.log(heading);
console.log(text);

// Создание и добавление узлов

const sectionElement = document.querySelector("section");
const paragraphElement = document.createElement("p");
paragraphElement.textContent = "Новый текст параграфа";
console.log(paragraphElement);

const titleEl = document.querySelector(".title");
titleEl.textContent = "Заголовок из JS";
console.log(titleEl);

// Добавление текстового узла в абзац

const paragraphElementText = document.createTextNode(
  "Содержимое текстовой ноды"
);
paragraphElement.appendChild(paragraphElementText);
console.log(paragraphElement);

// Клонирование узлов

Node.cloneNode(deep);

// Удаление узлов

parentNode.removeChild(child); /*через родительский элемент*/
Element.remove; /*удаление элемента*/

const heading4 = document.querySelector("#heading");
heading4.remove();

// Замена узла

constdivElement = document.createElement("div");
constparagraphElement = document.createElement("p");
divElement.appendChild(paragraphElement);

constspanElement = document.createElement("span");
conststrongElement = document.createElement("strong");
paragraphElement.replaceWith(spanElement, strongElement);

console.log(divElement.outerHTML);
