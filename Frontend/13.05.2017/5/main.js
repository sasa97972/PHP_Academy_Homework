function isSimple(b)
{
	if (b == 2) {
		return document.write("Это число простое <br>");
	} else if (b <= 1) {
		return document.write("Это число не простое <br>");
	} 
	for (var i = 2; i < b; i++) {
		if (b % i == 0) {
			return document.write("Это число не простое <br>");
		}
	}
	return document.write("Это число простое <br>");
}

function info(a)
{
	document.write("Число: " + a + "<br>");
	if (a < 0) {
		document.write("Это число отрицательное <br>");
	}  else {
		document.write("Это число положительное <br>");
	}
	isSimple(a);
	var div = "Число делится без остачи, на:";
	divNumber = [2, 3, 5, 6, 9];
	for(var numb in divNumber) {
		if (a % divNumber[numb] == 0) {
			div += " " + divNumber[numb];
		}
	}
	document.write(div);
}

var number = +prompt("Введите число, чтобы получить информацию");
info(number);