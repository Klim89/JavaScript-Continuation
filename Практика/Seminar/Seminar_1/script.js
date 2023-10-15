/* <div id="block">
	<p>1</p>
	<p>2</p>
</div>
Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
Получите ссылку на первый абзац с классом www. и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p> */

const text1 = document.querySelector("#block p:first-child");
console.log(text1);

const text2 = document.getElementById("block").children[0];
console.log(text2);

const text3 = document.querySelector(".www");
console.log(text3);

const text4 = document.getElementsByClassName("www")[0];
console.log(text4);

// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/
// Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

const link = document.querySelector(".link");

link.setAttribute("href", "https://developer.mozilla.org/ru/ ");
link.textContent = "link text js";

const image = document.querySelector(".photo");
image.setAttribute(
  "src",
  "https://alexdev.ru/wp-content/uploads/2015/06/JS-logo.png"
);

link.textContent = "link text js";
link.href = "https://developer.mozilla.org/ru/";

// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

const contentEl = document.querySelector(".content");
const pEl = document.createElement("p");
pEl.textContent = "Новый текстовый элемент";

contentEl.append(pEl);

contentEl.removeChild(pEl);

const addElBtn = document.querySelector(".add__btn"),
  remElBtn = document.querySelector(".rem__btn");

addElBtn.addEventListener("click", (e) => {
  contentEl.append(pEl);
});

remElBtn.addEventListener("click", (e) => {
  contentEl.removeChild(pEl);
});

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

const count = document.querySelector(".btn");

let counter = 0;
count.addEventListener("click", () => {
  console.log(`на кнопку нажали ${++counter} раз`);
});

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
// Создать вторую кнопку, при клике на которую должен появляться параграф с произвольным текстом.
// При нажатии на вторую кнопку еще раз, текст должен пропадать.

const contentBtn = document.querySelector(".content_1");
const BtnEl = document.createElement("button");
BtnEl.textContent = "Отправить";

// BtnEl.addEventListener("click", (e) => {
//   BtnEl.textContent = "Текст отправлен";
// });
