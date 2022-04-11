/*
 *Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
 *Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
 *Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
 */

const input = document.querySelector("#validation-input");
//todo Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
let quantity = Number(input.dataset.length);

input.addEventListener("blur", onBlurEvent);

//todo Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
function onBlurEvent(e) {
	input.classList.add("valid");
	e.target.value.length != quantity
		? input.classList.add("invalid")
		: input.classList.remove("invalid");
}
