function triangle(size)
{
	var mid = size/2;
	var count = 0;
	for(var i = 0; i < mid; i++){
	    for(var j = 0; j < size; j++) {
	    	if (j >= mid - count && j <= mid + count) {
	    		document.write("*");
	    	} else {
	    		document.write("&nbsp&nbsp");
	    	}
	    }
	    count++;
	    document.write("<br>");
	}	
}

var size = +prompt("Введите размер равностороннего треугольника", "26");
triangle(size);
