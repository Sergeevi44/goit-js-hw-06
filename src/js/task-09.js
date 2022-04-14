/*
 *Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
 */

const refs = {
	body: document.querySelector("body"),
	color: document.querySelector("span.color"),
	changeColorBtn: document.querySelector("button.change-color"),
};
console.log(refs.body);

refs.changeColorBtn.addEventListener("click", onChangeColorBtnClick);

function onChangeColorBtnClick() {
	const color = getRandomHexColor();
	refs.color.textContent = color;
	refs.body.style.backgroundColor = color;
}
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
