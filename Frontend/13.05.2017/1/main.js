var shops = +prompt("Введите количество магазинов");

function factorial(number)
{
	if (number == 1) {
		return 1;
	}
	return number * factorial(number - 1);
}

var res = factorial(shops);

document.write("Количество магазинов: " + shops + "<br>");
document.write("Количество возможных вариантов доставки: " + res + "<br>");

//Способ №2
function factorial2(number)
{
	var result = 1;
		do {
			result *= numbrer;
			number--;
	} while (numbre > 1);
	return result;
}

var res2 = factorial(shops);

document.write("Количество возможных вариантов доставки: " + res);

