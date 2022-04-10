/*
 *Напиши скрипт, який:
 *Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
 *Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
 */

const refs = {
	categories: document.querySelectorAll("#categories>li"),
};

//TODO: Subtask 1:

const quantityOfCategories = refs.categories.length;
console.log(`Number of categories: ${quantityOfCategories}`);

//TODO: Subtask 2

for (const item of refs.categories) {
	const header = item.querySelector("h2");
	const elements = item.querySelectorAll("li");
	console.log(`category: ${header.textContent}`);
	console.log(`Elements: ${elements.length}`);
}
