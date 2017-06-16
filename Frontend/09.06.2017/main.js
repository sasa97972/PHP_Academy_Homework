// ----------------1----------------
function CreateObject(name) {
	this.firstName = name;
	this.sayHello = function() {
		return "Hello, my name is " + this.firstName;
	}
}

CreateObject.prototype.lastName = "Dulya"
CreateObject.prototype.sayBye = function() {
	return "Goodbye";
}

var obj1 = new CreateObject("Alexandr");

console.log(obj1.firstName);
console.log(obj1.lastName);
console.log(obj1.sayHello());
console.log(obj1.sayBye());

// ----------------2----------------
function Human(name, age) {
	this.name = name;
	this.age = age;
}

var humans = [
	new Human("Alexandr", 20),
	new Human("Kostya", 35),
	new Human("Serhii", 42),
	new Human("Nikolay", 37),
	new Human("Roman", 19),
];

humans.sort(function(a, b) { 
	return a.age > b.age; 
});
//За зростанням

console.log(humans);

humans.sort(function(a, b) { 
	return a.age < b.age; 
});
//За спаданням

console.log(humans);

// ----------------3----------------
var p = document.querySelectorAll("#wrap1 > p");
document.getElementById("p").onclick = function() {
	for(i = 0; i < p.length; i++) {
		if (p[i].style.border != "none" && p[i].style.border != "") {
			p[i].style.border = "none";
		} else {
			p[i].style.border = "2px solid red";
		}
	}
}

var a = document.querySelectorAll("#wrap1 > a");
document.getElementById("a").onclick = function() {
	for(i = 0; i < a.length; i++) {
		if (a[i].style.border != "none" && a[i].style.border != "") {
			a[i].style.border = "none";
		} else {
			a[i].style.border = "2px solid green";
		}
	}
}

var div = document.querySelectorAll("#wrap1 > div");
document.getElementById("div").onclick = function() {
	for(i = 0; i < div.length; i++) {
		if (div[i].style.border != "none" && div[i].style.border != "") {
			div[i].style.border = "none";
		} else {
			div[i].style.border = "2px solid blue";
		}
	}
}

// ----------------4----------------
var parent = document.getElementById("wrap2");
document.getElementById("pNew").onclick = function() {
	if (document.querySelectorAll("#wrap2 > p").length == 10) {
		var p = document.querySelectorAll("#wrap2 > p");
		for(i = 0; i < p.length; i++) {
			parent.removeChild(p[i]);
		}
	} else {
		var pNew = document.createElement("p");
		pNew.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta minus voluptatum odit, similique sed mollitia, impedit velit magnam recusandae laborum."
		parent.appendChild(pNew);
	}
}

// ----------------5----------------
var countS = 0;
var countM = 0;
var countH = 0;

function second() {
		var sec = document.getElementById('second');
		if (countS == 59) {
			sec.innerHTML = "00";
			countS = 0;
		} else if (countS < 9) {
			sec.innerHTML = "0" + ++countS;
		} else {
			sec.innerHTML = ++countS;
		}
}

function minute() {
		var min = document.getElementById('minute');
		if (countM == 59) {
			min.innerHTML = "00";
			countM = 0;
		} else if (countM < 9) {
			min.innerHTML = "0" + ++countM;
		} else {
			min.innerHTML = ++countM;
		}	
}

function hour() {
		var hour = document.getElementById('second');
		if (countH == 59) {
			hour.innerHTML = "00";
			countH = 0;
		} else if (countH < 9) {
			hour.innerHTML = "0" + ++countH;
		} else {
			hour.innerHTML = ++countH;
		}
}

document.getElementById('start').onclick = function() {
	Sec = setInterval(second, 1000);
	Min = setInterval(minute, 1000 * 60);
	Hour = setInterval(hour, 1000 * 60 * 60);
}

document.getElementById('stop').onclick = function() {
	clearInterval(Sec);
	clearInterval(Min);
	clearInterval(Hour);
}

document.getElementById('clear').onclick = function() {
	countS = 0;
	countM = 0;
	countH = 0;
	document.getElementById('second').innerHTML = "00";
	document.getElementById('minute').innerHTML = "00";
	document.getElementById('hour').innerHTML = "00";
}

// ----------------5----------------
var href = document.querySelectorAll("#wrap4 > a");
for(i = 0; i < href.length; i++) {
	href[i].addEventListener('click', function(e) {
				e.preventDefault();
				if(this.nextElementSibling.style.display == "block") {
					var text = this.nextElementSibling.children[0].innerHTML;
					this.nextElementSibling.style.display = "none";
					this.innerHTML = text;
				} else {
					this.nextElementSibling.style.display = "block";
					this.innerHTML = this.innerHTML + " (Відкрито)"
				}
	}, false);	
}

var button = document.querySelectorAll(".modal > button");
for(i = 0; i < button.length; i++) {
	button[i].onclick = function() {
		this.parentElement.style.display = "none";
		var text = this.previousElementSibling.innerHTML;
		this.parentElement.previousElementSibling.innerHTML = text ;
	};
}