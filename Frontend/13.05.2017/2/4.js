function rhombus(size)
{
	var mid = size/2;
	var count = 0;
	var number = 0;

	for(var i = 0; i < size + 1; i++, count++){
	    for(var j = 0; j < size + 1; j++) {
	    	if (j >= mid - number && j <= mid + number) {
	    		document.write("*");
	    	} else {
	    		document.write("&nbsp&nbsp");
	    	}
	    }
	    if (count < mid) {
	    	number++;
	    } else {
	    	number--;
	    }
	    document.write("<br>");
	}
}

var size = +prompt("Введите размер ромба", "24");
rhombus(size);



