// в обьекте data существует метод addRecord, который аргументами получает любой набор объектов. Метод addRecord добавляет все свойства переданных объектов в data.

// data = {
// 	 addRecord: function(){},
// 	 p: 600,
// 	 str: 'hello',
// 	 y: -50
// }
// data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
// data.x // 50
// data.y // 20
// data.z // 30
// data.p // 600
// data.str // 'hello'

// data = {
// 	addRecord: function () { },
// 	p: 600,
// 	str: 'hello',
// 	y: -50
// }

// data.addRecord({ x: 10 }, { y: 20 }, { z: 30, x: 50 });
// data.x // 50
// data.y // 20
// data.z // 30
// data.p // 600
// data.str // 'hello'

data = {
	addRecord: function () {
		for (var i = 0; i < arguments.length; i++) {
			var args = arguments[i];

			for (var key in args) {
				this[key] = args[key];
			}
		}
		return this;
	},
	p: 600,
	str: 'hello',
	y: -50
}

var result = data.addRecord({ x: 10 }, { y: 20 }, { z: 30, x: 50 });

console.log(result);


// data = {
// 	addRecord: function (...args) {
// 		Object.assign(data, ...args);
// 		return;
// 	},
// 	p: 600,
// 	str: 'hello',
// 	y: -50
// }

// data.addRecord({ x: 10 }, { y: 20 }, { z: 30, x: 50 });

// console.log(data);