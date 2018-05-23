//https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript





//OBJECTS
/*In classic Object Oriented Programming, objects are collections of data and methods that operate on that data. 
JavaScript is a prototype-based language that contains no class statement, as you'd find in C++ or Java (this is 
sometimes confusing for programmers accustomed to languages with a class statement).*/


//Function Object
function makePerson(first, last, age) {
	return {
		first: first,
		last: last,
		age: age,
		fullName: function () {
			return this.first + " " + this.last;
		},
		personFullNameReversed: function() {
			return this.last + ", " + this.first;
		},
		personAge: function () {
			return this.age;
		}
	};
}

uad = makePerson("Alihan", "Dikel", "26");
uad.fullName();
uad.personFullNameReversed();
uad.personAge();
//this.variable -> only in the scope of function object
/*If you called it using dot notation or bracket notation on an object, that object becomes this. 
If dot notation wasn't used for the call, this refers to the global object.*/
var fullName = uad.fullName;
fullName(); // undefined undefined

//this and new
/* new creates a brand new empty object, 
and then calls the function specified, with this set to that new object.*/
//Functions that are designed to be called by new are called constructor functions.
function Person(first, last) {
	this.first = first;
	this.last = last;
	this.fullName = function () {
		return this.first + " " + this.last;
	};
	this.fullNameReversed = function () {
		return this.last + ", " + this.first;
	};
}
//var uad = new Person("Alihan", "Dikel");
//uad.fullName();

//creating the method functions only once, and assigning references to them inside the constructor.
function personFullName() {
  return this.first + ' ' + this.last;
}
function personFullNameReversed() {
  return this.last + ', ' + this.first;
}
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = personFullName;
  this.fullNameReversed = personFullNameReversed;
}

//Prototype
/* Person.prototype is an object shared by all instances of Person. (prototype chain)
anything assigned to Person.prototype becomes available to all instances of that constructor via the this object.*/
function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function() {
  return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
  return this.last + ', ' + this.first;
};

/*As a result, anything assigned to Person.prototype becomes available to all instances of that constructor via the this object.
 you can add extra methods to existing objects at runtime*/
s = new Person('Alihan', 'Dikel');
//s.firstNameCaps(); // TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function() {
  return this.first.toUpperCase();
};
s.firstNameCaps(); // "SIMON"

//you can also add things to the prototype of built-in JavaScript objects
namestring = "Alihan"
String.prototype.reversed = function() {
	var r = "";
	for (var i = this.length - 1; i >= 0; i--) {
		r += this[i];
	}
	return r;
}
namestring.reversed();

/*prototype forms part of a chain. The root of that chain is Object.prototype
it is this method that is called when you try to represent an object as a string
This is useful for debugging our Person objects:*/
var ali = new Person("ali", "dikel");

Person.prototype.toString = function() {
	return '<insan: ' + this.fullName() + '>';
}

ali.toString();

//The first argument to apply() is the object that should be treated as 'this'
//In this snippet, ...args (including the ellipsis) is called the "rest arguments" — as the name implies, 
//this contains the rest of the arguments.
function trivialNew(constructor, ...args) {
  var o = {}; // Create an object
  constructor.apply(o, args);
  return o;
}

var bill = trivialNew(Person, 'William', 'Orange'); //is therefore almost equivalent to
var bill = new Person('William', 'Orange');

//apply() has a sister function named call,
// which again lets you set this but takes an expanded argument list as opposed to an array

function lastNameCaps() {
  return this.last.toUpperCase();
}
var person = new Person('Simon', 'Willison');
lastNameCaps.call(person);
// Is the same as:
person.lastNameCaps = lastNameCaps;
person.lastNameCaps(); // WILLISON




//Inner Functions

//function declarations are allowed inside other functions
//***they can access variables in their parent function

//Nested functions can share variables in their parent, so you can use that mechanism to couple functions together when it makes sense without polluting your global namespace
//local globals!
function parentF() {
	var a = 1;

	function nestedF() {
		var b = 4; //parentF can't use this
		return a + b;
	}
	return nestedF();
}


//Closures
//differences: firstly, a brand new scope object is created every time a function starts executing, and 
//secondly, unlike the global object (which is accessible as this and in browsers as window) these scope objects cannot be directly accessed from your JavaScript code
// closure is the combination of a function and the scope object in which it was created. 
//Closures let you save state — as such, they can often be used in place of objects.
function makeAdder(a) {
	return function(b) {
		return a + b;
	};
}

var x = makeAdder(5);
var y = makeAdder(20);

x(6); // 11?
//https://stackoverflow.com/questions/111102/how-do-javascript-closures-work