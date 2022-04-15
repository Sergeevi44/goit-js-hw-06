/*
 *Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
todo: Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

todo:Розміри найпершого <div> - 30px на 30px.

todo:Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.

todo:Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

todo:Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
 */

const refs = {
	container: document.querySelector("#boxes"),
	input: document.querySelector("#controls input"),
	createBtn: document.querySelector("button[data-create]"),
	clearBtn: document.querySelector("button[data-destroy]"),
};

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.clearBtn.addEventListener("click", destroyBoxes);

function onCreateBtnClick() {
	return createBoxes(refs.input.value);
}

function createBoxes(amount) {
	const markupArr = [];
	const length = 30;
	for (let i = 0; i < amount; i += 1) {
		markupArr.push(
			`<div style="background-color:${getRandomHexColor()};width:${
				length + i * 10
			}px;height:${length + i * 10}px"></div>`
		);
	}
	refs.container.innerHTML = markupArr.join("");
}

function destroyBoxes() {
	refs.input.value = 0;
	refs.container.innerHTML = "";
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
