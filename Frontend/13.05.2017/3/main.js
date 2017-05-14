function Calculate (a, b, c) {
	var result = (a + b + c)/3
	document.write("Первое число: " + a + "<br>");
	document.write("Второе число: " + b + "<br>");
	document.write("Третье число: " + c + "<br>");
	document.write("Среднее арифметическое: " + result);
}

var a = +prompt("Введите первое число", "0");
var b = +prompt("Введите второе число", "0");
var c = +prompt("Введите третье число", "0");

Calculate(a, b, c);