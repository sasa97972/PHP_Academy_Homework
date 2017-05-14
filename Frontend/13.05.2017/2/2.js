function triangle(size)
{
	var str = "";
	for(var i = 1; i <= size; i++) {
		str += "*";
		document.write(str+"<br>");	
	}	
}

var size = +prompt("Введите размер прямоугольного треугольника", "26");
triangle(size);