var FeDeveloper = {
	firstName: "Alexandr",
	lastName: "Dulya",
	age: 21,
	city: "Kyiv"
};

// Вариант №1
var BeDeveloper = new Object();
BeDeveloper.firstName = "Alexandr";
BeDeveloper.lastName = "Dulya";
BeDeveloper.age = 21;
BeDeveloper.city = "Kyiv";

// Вариант №2
function BEdev(Fname, Lname, age, city) {
	this.firstName = Fname;
	this.lastName = Lname;
	this.age = age;
	this.city = city;
}
var BeDeveloper2 = new BEdev("Alexandr", "Dulya", 21, "Kyiv");

var CustomDoc = {
	header: "some property",
	body: "some property",
	section: "some property",
	footer: "some property",
	addition: {
		header: "some property",
		body: "some property",
		section: "some property",
		footer: "some property",
		color: "#ccc"
	},
	create: function(){},
	delete: function(){},
	edit: function(){}
};

//BINDING

function foo(a) {
	this.a = a;
}

var obj1 = {foo: foo};
var obj2 = {};

obj1.foo(2); //Implicit Binding
console.log(obj1.a); //Выведет 2, т.к. функция foo была вызвана в контексте obj1

obj1.foo.call(obj2, 3); //Explicit Binding
console.log(obj2.a);

var bar = new obj1.foo(4); //Особенности работы конструктора в JS
console.log(obj1.a);
console.log(bar.a);


