var FeDeveloper = {
	firstName: "Alexandr",
	lastName: "Dulya",
	age: 21,
	city: "Kyiv"
};

var BeDeveloper = new Object();
BeDeveloper.firstName = "Alexandr";
BeDeveloper.lastName = "Dulya";
BeDeveloper.age = 21;
BeDeveloper.city = "Kyiv";

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


