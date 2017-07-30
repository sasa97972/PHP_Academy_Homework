Object.prototype.getCookie  = function(name) {
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function LastAttend() { //Last Attend Constructor
	var month = 60 * 60 * 24 * 30,
	    date = new Date();

	window.onbeforeunload = function() {
		document.cookie = "lastAttend=" + date + "; max-age=" + month;
	}

	this.showLastAttend = function() {
		if (this.getCookie("lastAttend") !== undefined) {
			alert("You attend this page last time at: " + this.getCookie("lastAttend"));
		}
	}

	this.showLastAttend();
}

function ChangeColor() { //Change Color Constructor
	var select = document.getElementById('color'),
		fontSize = document.getElementById('fontSize');

	select.onchange = function() {
		var color = this.options[this.options.selectedIndex].value;
		document.body.style.backgroundColor = color;
		document.cookie = "color=" + color + "; max-age=500000";
		document.cookie = "selectedIndex=" + this.options.selectedIndex + "; max-age=500000";
	}

	fontSize.onchange = function() {
		document.body.style.fontSize = this.value + "px";
		document.cookie = "fontSize=" + this.value + "; max-age=500000";
	}

	if (this.getCookie("color") != undefined) {
		document.body.style.backgroundColor = this.getCookie("color");
		select.options[this.getCookie("selectedIndex")].selected=true;
	}

	if (this.getCookie("fontSize") != undefined) {
		document.body.style.fontSize = this.getCookie("fontSize") + "px";
		fontSize.value = this.getCookie("fontSize");
	}
}

var objAttend = new LastAttend();
var objColor = new ChangeColor();
var objEvents = {

	keyfilter: function(e) {
	    if (!e) e = window.event;
	    if (e.charCode == 0 || e.charCode < 32) return true;

	    var allowedText = e.target.dataset.charsAllowed;
	    var element = e.target.dataset.messageId;

	    var symbol = String.fromCharCode(e.charCode).toLowerCase();

	    if (allowedText.search(symbol) == -1) {
	        if (element) {
	            element = document.getElementById(element);
	            element.style.visibility = "visible";
	        }
	        e.preventDefault();
	        return false;
	    }
	    else {
	        if (element) {
	            element = document.getElementById(element);
	            element.style.visibility = "hidden";
	        }
	        return true;
	 	} 
	},

	reset: function() {
		document.cookie = "fontSize=0; max-age=-1";
		document.cookie = "lastAttend=0; max-age=-1";
		document.cookie = "color=0; max-age=-1";
		document.body.style.backgroundColor = "white";
		document.body.style.fontSize = "16px";
	}
}	

document.getElementById('fontSize').addEventListener("keypress", objEvents.keyFilter);
document.getElementById('reset').addEventListener("click", objEvents.reset);

