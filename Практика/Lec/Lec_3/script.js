"use strict";

// Список возможных событий в DOM очень длинен:
// ● click— нажатие кнопки мыши
// ● touch— касание
// ● load— загрузка
// ● drag— перетаскивание
// ● change— изменение
// ● input— ввод
// ● error— ошибка
// ● resize— изменение размера
// ● contextmenu— открытие меню
// ● submit— отправка формы

const buttonEl = document.querySelector(".button");
let count = 0;
let counter = 0;

const click = function () {
  console.log("Click js button");
  count++;
  console.log(`Кликов по кнопке ${count}`);
};

buttonEl.onclick = click;

// addEventListener
buttonEl.addEventListener("click", click);

buttonEl.addEventListener("click", function (e) {
  console.log("click add");
});

buttonEl.addEventListener("click", function (e) {
  console.log("click add two");
});

// Для удаления обработчика используется метод removeEventListener

const button1 = document.querySelector("button");
const onceListener = () => {
  console.log('Будет вызван только один раз с включённой опцией "once"');
};
const onceListenerManual = (event) => {
  console.log(
    "Будет вызван только один раз и удалёнвручную через вызов removeEventListener"
  );
  event.target.removeEventListener("click", onceListenerManual);
};
button1.addEventListener("click", onceListener, { once: true });
button1.addEventListener("click", onceListenerManual);

// Несколько одинаковых обработчиков события

const button2 = document.querySelector("button");
const listener = (event) => {
  switch (event.eventPhase) {
    case Event.CAPTURING_PHASE: {
      console.log("Будет вызван во время фазы захвата");
      break;
    }
    case Event.BUBBLING_PHASE: {
      console.log("Будет вызван во время фазы всплытия");
      break;
    }
    case Event.AT_TARGET: {
      console.log("Будет вызван в фазе цели");
      break;
    }
  }
};
document.addEventListener("click", listener); //Фаза всплытия (bubbling phase)
document.addEventListener("click", listener, true); // Фаза захвата (capturing

// Делегирование событий

const buttonEls = document.querySelectorAll(".button");
buttonEls.forEach((element) => {
  element.addEventListener("click", function (event) {
    const target = event.target;
    console.log(target);
  });
});

const menuEl = document.querySelector(".menu");
const nameFunction = (e) => {
  console.log(e.target, e.currentTarget);
};

menuEl.addEventListener("click", nameFunction);

[("fourth", "fifth")].forEach((text) => {
  const listItem = document.createElement("li");
  listItem.append(text);
  list.append(listItem);
});
