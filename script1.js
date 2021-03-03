// Задан обьект с любым количеством свойств.Одно из свойств является функция renderObject(), которая описана в window.При вызове метода obj.renderObject() -> выводит в document всё содержимое объекта, кроме самого метода renderObject

// obj => { x: 10, y: 20 }
// obj.renderObject() -> x: 10, y: 20

var obj = {
	x: 10,
	y: 20,
}

function renderObject() {
	for (var key in this) {
		if (key !== 'renderObject')
			console.log(`${key}: ${this[key]}`);
	}
}

obj.renderObject = renderObject;

obj.renderObject()