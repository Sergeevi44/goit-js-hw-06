/*
*Напиши скрипт управління формою логіна.
todo: Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
todo: Під час відправлення форми сторінка не повинна перезавантажуватися.
todo: Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
todo: Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
todo: Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/

const refs = {
	form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
	e.preventDefault();
	const email = refs.form.elements.email.value;
	const password = refs.form.elements.password.value;
	const object = { email, password };
	if (email === "" || password === "") {
		return alert("Всі поля повинні бути заповнені");
	} else {
		console.log(object);
	}
}
