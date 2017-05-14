var shops = +prompt("Введите количество магазинов");

function factorial(number)
{
	if (number == 1) {
		return 1;
	}
	return number * factorial(number - 1);
}

var result = factorial(shops);

document.write("Количество магазинов: " + shops + "<br>");
document.write("Количество возможных вариантов доставки: " + result);
