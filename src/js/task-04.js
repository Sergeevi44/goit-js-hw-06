/*
 *Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
 *Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
 *Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
 *Оновлюй інтерфейс новим значенням змінної counterValue.
 */

const refs = {
	value: document.querySelector("#value"),
	decrement: document.querySelector('[data-action="decrement"]'),
	increment: document.querySelector('[data-action="increment"]'),
};

//todo Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
let counterValue = Number(refs.value.textContent);

//todo Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
refs.decrement.addEventListener("click", onDecrementClick);
refs.increment.addEventListener("click", onIncrementClick);

//todo Оновлюй інтерфейс новим значенням змінної counterValue.
function onDecrementClick(e) {
	counterValue -= 1;
	refs.value.textContent = counterValue;
}
function onIncrementClick(e) {
	counterValue += 1;
	refs.value.textContent = counterValue;
	console.log("increment");
}
