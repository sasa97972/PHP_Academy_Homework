//1.
var x = 6, y = 15, z = 4;
document.write((x += y - x++ * z) + '<br>');
document.write((z = --x - y * 5) + '<br>');
document.write((y /= x + 5 % z) + '<br>');
document.write((z = x++ + y * 5) + '<br>');
document.write((x = y - x++ * z ) + '<br>');

document.write("<hr>");

//2
var a_1 = parseInt(prompt('Введите первое число', 0));
var a_2 = parseInt(prompt('Введите второе число', 0));
var avg = (a_1 + a_2)/2;
document.write("Среднее арифметическое = " + avg);

document.write("<hr>");

//3
var r = parseInt(prompt('Введите радиус цилиндра', 0));
var h = parseInt(prompt('Введите высоту цилиндра', 0));
var capacity = Math.PI * Math.pow(r,2) * h;
var area = 2 * Math.PI * r * (r + h);
document.write("Объем цилиндра = " + capacity + "<br>");
document.write("Площадь цилиндра = " + area);

document.write("<hr>");

//4
var A = parseInt(prompt("Введите первое число: "));
var B = parseInt(prompt("Введите второе число, которое должно быть больше чем первое: "));
if (A > B) {
	document.write("Второе число должно быть больше чем первое!")
} else {
	var count = 0;
	for (var i = A; i <= B; i++) {
		count += i;
		if (i % 2 != 0) {
			document.write("Число " + i + " непарное из промежутка заданых значений <br>");
		}
	}
	document.write("<hr>");
	document.write("Сумма всех чисел из промежутка заданых значений = " + count);

}

document.write("<hr>");
