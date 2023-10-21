"use strict";

// Добавление inline стилей

const divElement = document.createElement("div");
const paragraphElement = document.createElement("p");
divElement.appendChild(paragraphElement);
paragraphElement.style.color = "white";
paragraphElement.style.backgroundColor = "black";
paragraphElement.style.padding = "10px";
paragraphElement.style.width = "250px";
paragraphElement.style.textAlign = "center";

const content = document.querySelector(".content");

const h1El = document.createElement("h1");
h1El.textContent = "h1 element";
h1El.style.backgroundColor = "#ccc";
h1El.style.textAlign = "center";
h1El.setAttribute("class", "heading");

const imgEl = document.createElement("img");
imgEl.src = "photo.png";
imgEl.setAttribute("alt", "крутое фото");

content.appendChild(h1El);
content.appendChild(imgEl);

const liEl = document.querySelectorAll(".menu__list");
const liElOne = document.querySelector(".menu__list");
const linkEl = document.querySelector(".menu__link");
const menuEl = document.querySelector(".menu");

console.log(liEl);
console.log(liElOne.parentNode.children);

console.log(linkEl.children);
console.log(linkEl.childNodes);

console.log(menuEl.children); // HTML коллекция
console.log(menuEl.childNodes); // NodeList

menuEl.childNodes.forEach((element) => {
  console.log(element);
});

// SPREAD

const studentsGroup1PracticeTime = [
  { firstName: "Ivanov", practiceTime: 56 },
  { firstName: "Petrov", practiceTime: 120 },
  { firstName: "Sidorov", practiceTime: 148 },
  { firstName: "Belkin", practiceTime: 20 },
  { firstName: "Avdeev", practiceTime: 160 },
];

const studentsGroup2PracticeTime = [
  { firstName: "Mankov", practiceTime: 87 },
  { firstName: "Kistin", practiceTime: 133 },
  { firstName: "Kotlyarov", practiceTime: 140 },
  { firstName: "Peskov", practiceTime: 10 },
];

// Напишем не очень удобную, но показательную функцию, которая умеет принимать неограниченное число аргументов и находить максимум среди них. Функция должна вызываться подобным образом: const maximum = findMax(4, 7, 10);

function findMax() {
  const values = arguments; // arguments — переменная,которая доступна внутри каждой функции и содержит в себе все аргументы, переданные в функцию. Является псевдомассивом.
  let maxValue = -Infinity;
  // Поскольку arguments является псевдомассивом,мы не можем применять к нему новые методы массивов, такие как forEach или reduce, а будем итерировать по старинке.
  for (let index = 0; index < values.length; index++) {
    if (values[index] > maxValue) maxValue = values[index];
  }
  return maxValue;
}
// Мы должны передавать в функции только числа, а в наших массивах содержатся объекты, поэтому сначала создадим массивы только со значениями времени, отработанного студентами.
const group1PracticeTime = studentsGroup1PracticeTime.map(
  (student) => student.practiceTime
); // [56, 120, 148, 20, 160];
const group2PracticeTime = studentsGroup2PracticeTime.map(
  (student) => student.practiceTime
); // [87, 133, 140, 10];
// Теперь можем вызывать функцию поиска максимального значения. Она принимает множество числовых аргументов, а у нас есть только массив — тут нам и поможет оператор spread.
const maxTimeFromGroup1 = findMax(...group1PracticeTime); // ...group1PracticeTime вытянет из массива все элементы и передаст их в функцию как отдельные переменные.
// Это аналогично страшной и неудобной записи: // findMax(group1PracticeTime[0], group1PracticeTime[1], group1PracticeTime[2], group1PracticeTime[3], group1PracticeTime[4])
console.log(maxTimeFromGroup1); // 160

const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2); // 140

// Давайте также найдём максимально отработанное время среди двух групп. Мы можем сделать это, передав данные обоих массивов в функцию таким образом:
// findMax(...group1PracticeTime, ...group2PracticeTime);

// А можем объединить два массива в один — это очень частая операция, и оператор расширения (spread) очень в этом помогает.
const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
// Для объединения двух массивов нам нужно вытащить их элементы в один общий массив, поэтому мы объявляем новый массив, а в качестве его элементов делаем расширение элементов первого и второго массива. Также мы могли бы добавить в него и другие элементы.

const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups); // 160

// Rest-operator

const studentsGroup3PracticeTime = [
  { firstName: "Ivanov", practiceTime: 56 },
  { firstName: "Petrov", practiceTime: 120 },
  { firstName: "Sidorov", practiceTime: 148 },
  { firstName: "Belkin", practiceTime: 20 },
  { firstName: "Avdeev", practiceTime: 160 },
];

const studentsGroup4PracticeTime = [
  { firstName: "Mankov", practiceTime: 87 },
  { firstName: "Kistin", practiceTime: 133 },
  { firstName: "Kotlyarov", practiceTime: 140 },
  { firstName: "Peskov", practiceTime: 10 },
];

// Напишем не очень удобную, но показательную функцию, которая умеет принимать неограниченное число аргументов и находить максимум среди них. Функция должна вызываться примерно следующим образом: const maximum = findMax(4, 7, 10);
function findMax(...values) {
  // тут мы принимаемвсе переданные аргументы и с помощью rest-оператора упаковываем их в массив values. // На этот раз values — уже настоящий массив, и мы можем использовать reduce для итерации по нему и для нахождения максимального числа.
  return values.reduce((acc, value) => {
    if (value > acc) return value;
    return acc;
  }, -Infinity);
}
// Создадим массивы только со значениями времени, отработанного студентами.
const group3PracticeTime = studentsGroup1PracticeTime.map(
  (student) => student.practiceTime
);
const group4PracticeTime = studentsGroup2PracticeTime.map(
  (student) => student.practiceTime
);
// Вызовем нашу функцию поиска максимума, используя оператор spread.
const maxTimeFromGroup3 = findMax(...group3PracticeTime);
console.log(maxTimeFromGroup3); // 160
const maxTimeFromGroup4 = findMax(...group4PracticeTime);
console.log(maxTimeFromGroup4); // 140
// Давайте также найдём максимально отработанное время среди двух групп.
const bothGroups2Time = [...group3PracticeTime, ...group4PracticeTime];
const maxTimeBothGroups2 = findMax(...bothGroups2Time);
console.log(maxTimeBothGroups2);
// 160 Теперь посмотрим на ещё один пример:

const saveFullNameInDB = (firstName, lastName, ...additionals) => {
  saveFirstName(firstName);
  saveLastName(lastName);
  saveAdditionals(additionals);
};
// Благодаря rest оператору мы смогли собрать все дополнительные данные, которые были переданы для сохранения в базе данных, и можем передать их одним массивом в функцию сохранения дополнительных данных.

// Работа с коллекциями

const divElement1 = document.querySelector("div");
console.log(divElement1.childNodes.length); // 7
console.log(divElement1.children.length); // 3

Array.from(divElement1.childNodes).forEach((childNode) => {
  console.log(
    'childNode "%s" типа "%d"',
    childNode.nodeName,
    childNode.nodeType
  );
});
[...divElement1.children].forEach((child) => {
  console.log('child "%s" типа "%d"', child.nodeName, child.nodeType);
});

const liElOne1 = document.querySelector(".menu__list");
console.log(liElOne1);
console.log(liElOne1.parentElement.lastElementChild); //элемент
console.log(liElOne1.parentElement.lastChild);
console.log(liElOne1.parentElement.firstElementChild);
console.log(liElOne1.nextElementSibling);
console.log(liElOne1.parentElement.lastElementChild.previousElementSibling);


const allParagraphElements = divElement1.querySelectorAll("p");
console.log("Static NodeList длина до: %d", allParagraphElements.length);
console.log("Dynamic NodeList длина до: %d", divElement.childNodes.length);
console.log("HTMLCollection длина до: %d", divElement.children.length);
const fourthParagraphElement = document.createElement("p");
fourthParagraphElement.textContent = "Четвертый параграф";
divElement1.appendChild(fourthParagraphElement);
console.log("Static NodeList длина после: %d", allParagraphElements.length);
console.log("Dynamic NodeList длина после: %d", divElement1.childNodes.length);
console.log("HTMLCollection длина после: %d", divElement1.children.length);

document.body.parentNode; // Элемент <html>
document.body.parentElement; // Элемент <html>
document.documentElement.parentNode; // Нода document
document.documentElement.parentElement(
  // null
  document.documentElement.parentNode === document
)(
  // true
  document.documentElement.parentElement === document
); // false
