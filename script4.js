// В метод addRecord добавляется последний необязательный аргумент flag, который указывает приоритет присвоения свойств с одинаковым названием. Если true - берется свойство из первоначального объекта this, если false - берется свойство из arguments. По умолчанию flag = false;

data = {
	addRecord: function () {
		var flag = typeof arguments[arguments.length - 1] == 'boolean' ? arguments[arguments.length - 1] : false

		for (var i = 0; i < arguments.length; i++) {
			var args = arguments[i];
			for (var key in args) {
				if (flag && this.hasOwnProperty(key)) {
					continue
				} else {
					this[key] = args[key];
				}
			}
		}
		return this;
	},
	p: 600,
	str: 'hello',
	y: -50
}

var result = data.addRecord({ x: 10 }, { y: 20 }, { z: 30, x: 50 }, true);

console.log(result);