/*
 *Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
 */

const refs = {
	input: document.querySelector("#name-input"),
	output: document.querySelector("#name-output"),
};

//todo Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
refs.input.addEventListener("input", onInputChange);

function onInputChange() {
	if (refs.input.value) {
		refs.output.textContent = refs.input.value;
	} else {
		refs.output.textContent = "Anonymous";
	}
}
