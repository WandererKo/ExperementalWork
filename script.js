	var age = 0;
	var newP = document.createElement ("p");
	newP.innerHTML = "Здесь появится ответ)";
	base.appendChild (newP);

function functionAge() {
	age = document.getElementById ("in_base").value;
	if (age < 0) {
		newP.innerHTML = "Ты че, вродился что-ли?";
	} else if (age <= 10) {
		newP.innerHTML = "Ты только родился!";
	} else if (age <= 20) {
		newP.innerHTML = "Ох уж эта школа!";
	} else if (age <= 30) {
		newP.innerHTML = "Ох уж эта работа!";
	} else if (age <= 40) {
		newP.innerHTML = "Надеюсь ты уже устроился в жизни!";
	} else if (age <= 50) {
		newP.innerHTML = "Ну теперь точно ты должен быть устроен в жизни!";
	} else if (age <= 60) {
		newP.innerHTML = "Скоро на пенсию!";
	} else if (age <= 70) {
		newP.innerHTML = "Наконец-то ты отдохнул!";
	} else if (age <= 80) {
		newP.innerHTML = "Тяжело тебе наверное!";
	} else if (age <= 90) {
		newP.innerHTML = "Очень не плохо!";
	} else if (age <= 100) {
		newP.innerHTML = "Давай еще чуть-чуть, молодцом держишься!";
	} else if (age <= 110) {
		newP.innerHTML = "Да ты ваще кремень!";
	} else if (age <= 121) {
		newP.innerHTML = "До рекорда совсем недалеко!";
	} else {
		newP.innerHTML = "Настоящий зарегистрированный мировой рекорд 122 года!";
	}
}	
	document.getElementById ("push").onclick = functionAge;
	base.appendChild (newP);