function User(name, age) {
	this.name = name;
	this.age = age;
}

User.prototype.sayHello = function() {
	return "Hello";
}

User.prototype.sayWord = function(word) {
	return "I say: " + word;
}

User.prototype.divide = function(dividend, divisor) {
	return dividend / divisor;
}

var user1 = new User("Alexandr", 20);
var user2 = new User("Kostya", 35);