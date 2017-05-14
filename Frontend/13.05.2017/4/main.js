function addition (a, b) 
{
	var result = a + b;
	document.write(a + " + " + b + " = " + result);
}

function subtraction (a, b) 
{
	var result = a - b;
	document.write(a + " - " + b + " = " + result);
}

function multiplication (a, b) 
{
	var result = a * b;
	document.write(a + " * " + b + " = " + result);
}

function division (a, b) 
{
	if (b == 0) {
		return document.write("На ноль делить нельзя!");
	}
	var result = a / b;
	document.write(a + " / " + b + " = " + result);
}

var a = +prompt("Введите первое число", "0");
var b = +prompt("Введите второе число", "0");
var operator = prompt("Введите оператор ( + / - * )", "+");

if (operator == "+") {
	addition(a, b)
} else if (operator == "-") {
	subtraction(a, b);
} else if (operator == "*") {
	multiplication(a, b)
} else if (operator == "/") {
	division(a, b)
} else {
	document.write("Неверный оператор");
}

