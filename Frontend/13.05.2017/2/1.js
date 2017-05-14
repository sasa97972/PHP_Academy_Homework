function rectangle(width, height)
{
	for(var i = 1; i <= height; i++) {
		for(var j = 1; j <= width; j++) {
			document.write("*&nbsp&nbsp");
		}
		document.write("<br>");	
	}

}
var width = +prompt("Введите ширину прямоугольниика", "15");
var height = +prompt("Введите высоту прямоугольниика", "25");
rectangle(width, height);
