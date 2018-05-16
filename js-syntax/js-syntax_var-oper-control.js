//https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

//Strings
//generic methods : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods
"hello".length
"hello".charAt(0)
"hello".replace("hello", "goodbye");
"hello".toUpperCase();

//false, 0, empty strings (""), NaN, null, and undefined all become false
//All other values become true



//Variables
//let :  allows you to declare block-level variables. The declared variable is available from the block it is enclosed in.
for (let myletVar = 0; myletVar < 10; myletVar++){
/*	console.log(myletVar);*/
}

//const : allows you to declare variables whose values are never intended to change. The variable is available from the block it is declared in
const pi = 3.14;
//pi = 1; -> throws error

//var : does not have the restrictions. Available from the function it is declared in
for (var myvarVar = 0; myvarVar < 5; myvarVar++){
/*	console.log(myvarVar);*/
}
//console.log(myvarVar + 1);



//Operators
'3' + 4 + 5;  // "345"
 3 + 4 + '5'; // "75"

// == : double-equals operator performs type coercion
123 == '123'; // true   // !=
1 == true; // true

// === : avoid type coercion, use the triple-equals operator
123 === '123'; // false  //!==
1 === true;    // false  

//bitwise operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators



//Control Structures
//ifs
var name = "ahmet";

if (name == "ali") {
	name += "ayşe";
} else if (name == "ahmet") {
	name += "banu";
} else {
	name += "!!!";
}
//console.log(name);

//While
/*var a = 1;
while (a = 2) {
	console.log("this is infinite");
}*/

/*var input;
do {
	input = get_input();
} while (inpuIsNotValid(input));*/

//For
for (var i = 0; i < 5; i++) {
  // Will execute 5 times
}


object = [1,2,3,4]
for (let property of object) {
	//console.log(property);
}


// && and ||
//The && and || operators use short-circuit logic, 
//which means whether they will execute their second operand is dependent on the first.
o = null
cachedName = "Ahmet"
var name = o && o.getName();
var name = cachedName || (cachedName = getName());

// ?  (ternary operator)
age = 16;
var allowed = (age > 18) ? 'yes' : 'no';
//console.log(allowed);

//switch
action = "draw";
switch (action) {
  case 'draw':
    //console.log("draw geldi")
    break;
  case 'eat':
    //console.log("eat geldi")
    break;
  default:
}



//PRACTICE 15.05.2018
var myArray = new Array();
for (i = 0; i < 10; i++) {
	for(j = 0; j < 5 ; j++) {
		myArray.push([i,j]);	
	}
}

//console.log(myArray);
