window.addEventListener("load", init, false);

function init() {

	(function heightDetect() {
		var w = window.innerHeight;
		document.getElementById('wrapper').style.height = w + "px";
	})();

	var inputs = document.getElementsByTagName("input");

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.type != "text") continue;
        if (input.dataset.charsAllowed == undefined) continue;

        input.addEventListener("keypress", keyFilter);
	}
}

function keyFilter(e) {

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
        return false;
    }
    else {
        if (element) {
            element = document.getElementById(element);
            element.style.visibility = "hidden";
        }
        return true;
    }
}
