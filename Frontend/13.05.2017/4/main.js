// function addition (a, b) 
// {
// 	var result = a + b;
// 	document.write(a + " + " + b + " = " + result);
// 	return result;
// }

// function subtraction (a, b) 
// {
// 	var result = a - b;
// 	document.write(a + " - " + b + " = " + result);
// 	return result;
// }

// function multiplication (a, b) 
// {
// 	var result = a * b;
// 	document.write(a + " * " + b + " = " + result);
// 	return result;
// }

// function division (a, b) 
// {
// 	if (b == 0) {
// 		return document.write("На ноль делить нельзя!");
// 	}
// 	var result = a / b;
// 	document.write(a + " / " + b + " = " + result);
// 	return result;
// }

// var a = +prompt("Введите первое число", "0");
// var b = +prompt("Введите второе число", "0");
// var operator = prompt("Введите оператор ( + / - * )", "+");

// if (operator == "+") {
// 	addition(a, b)
// } else if (operator == "-") {
// 	subtraction(a, b);
// } else if (operator == "*") {
// 	multiplication(a, b)
// } else if (operator == "/") {
// 	division(a, b)
// } else {
// 	document.write("Неверный оператор");
// }

var buttons = document.getElementsByClassName("buttons");
var res = "";
for (var i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function() {
		res += this.value;
		document.getElementById('monitor').innerHTML = res;
	};
}

var clear = document.getElementById('clear').onclick = function() {
	res = "";
	document.getElementById('monitor').innerHTML = res;
}

var pattern = /[\+]/;

var result = document.getElementById('result');
result.onclick = function() {
	res = eval(res);
	document.getElementById('monitor').innerHTML = res;
};







