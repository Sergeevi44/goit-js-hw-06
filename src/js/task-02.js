/*
 *Напиши скрипт, який для кожного елемента масиву ingredients:
 *Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
 *Додасть назву інгредієнта як його текстовий вміст.
 *Додасть елементу клас item.
 *Після чого, вставить усі <li> за одну операцію у список ul.ingredients.
 */

const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const markup = [];

for (const ingredient of ingredients) {
	const item = document.createElement("li");
	item.textContent = ingredient;
	item.classList.add(".item");
	markup.push(item);
}

ingredientsList.append(...markup);
