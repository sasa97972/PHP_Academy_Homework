function info_array(number) {
	var res = "";

	//Создаем массив и наполняем его числами
	arr = new Array(number);
	for(var i = 0; i < arr.length; i++) {
		arr[i] = Math.floor(Math.random() * 100)
	}
	res += "Сгенерированный массив: " + arr + "<br>";

	//Находим мин, макс,сумму и непарные числа
	var summ = 0;
	var odd = new Array();
	var min = arr[0];
	var max = arr[0];
	for(var i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}
		summ += arr[i];
		if (arr[i] % 2 != 0) {
			odd = odd.concat(arr[i]);
		}
	}
	res += "Максимальное значение в массиве: " + max + "<br>";
	res += "Минимальное значение в массиве: " + min + "<br>";
	res += "Сумма всех элементов в массиве: " + summ + "<br>";

	var odd_str = odd.join();
	res += "Непарные числа в массиве: " + odd_str + "<br>";

	//Находим среднее арифметическое
	var avg = summ/(arr.length);
	res += "Среднее арифметическое элементов в массиве: " + avg + "<br>";

	return res;
}

var number = +prompt("Введите количество элементов в массиве")
document.write(info_array(number));

function change_array() {
	res = "";

	//Создаем многомерный массив
	var big_arr = new Array(5);
	for(var i = 0; i < big_arr.length; i++) {
		big_arr[i] = new Array(5);
		for(var j = 0; j < big_arr[i].length; j++) {
			big_arr[i][j] = Math.floor(-100 + Math.random() * (100 + 100));
		}
	}
	
	//Заменяем числа и выводим массив
	for(var i = 0; i < big_arr.length; i++) {
		for(var j = 0; j < big_arr[i].length; j++) {
			if (i == j) {
				big_arr[i][j] >= 0 ? big_arr[i][j] = 1 : big_arr[i][j] = 0;
			}
			res += "<td>" + big_arr[i][j];
		}
		res += "<tr>";
	}

	return res;
}
	
document.getElementById('array').innerHTML = change_array();