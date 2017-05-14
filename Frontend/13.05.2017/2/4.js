function rhombus(size)
{
	var mid = size/2;
	var count = 0;

	for(var i = 0; i < size/2; i++){
	    for(var j = 0; j < size; j++) {
	    	if (j == mid && (i == 0 || i == mid - 1)) {
	    		document.write("*");
	    	} else if (j >= mid - count && j <= mid + count) {
	    		document.write("*");
	    	} else {
	    		document.write("&nbsp&nbsp");
	    	}
	    }
	    if (count < size/4 - 1) {
	    	count++;
	    } else {
	    	break;
	    }
	    document.write("<br>");
	}

	document.write("<br>");
	count++;

	for(var i = 0; i < size/4+1; i++){
	    for(var j = 0; j < size; j++) {
	    	if (j == mid && i == 0) {
	    		document.write("*");
	    	} else if (j >= mid - count && j <= mid + count) {
	    		document.write("*");
	    	} else {
	    		document.write("&nbsp&nbsp");
	    	}
	    }
	    count--;
	    document.write("<br>");
	}
}
var size = +prompt("Введите размер ромба", "36");
rhombus(size);

