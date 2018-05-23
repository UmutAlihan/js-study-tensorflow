
//////////////////////////////////////////////////////////////////////////////
//Javascript Challenges Book Solutions Cheatsheet
//////////////////////////////////////////////////////////////////////////////
//http://tcorral.github.io/javascript-challenges-book/banking/README.html
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////



//1//Self invoking function
//////////////////////////////////////////////////////////////////////////////
!function test() { testValue = 3; }();
(function test() { testValue = 3; })();


//2//Dealing with floating numbers (toFixed)
//////////////////////////////////////////////////////////////////////////////
var stockOptionsCost = 10.70, paid = 20.80;
function calculateChange() {
    return (paid - stockOptionsCost).toFixed(2);
}


//3//Hoisting and Conditionals Statements
//////////////////////////////////////////////////////////////////////////////
//Hoisting is JavaScript's default behavior of moving declarations to the top.
//To avoid bugs, always declare all variables at the beginning of every scope.
//https://www.w3schools.com/js/js_hoisting.asp
var bird = 'Pidgeons';
( function () {
    if ( typeof bird === 'undefined' ){
        bird = 'Rubber Duck';    
        //(erased var as part of solution)                 
        //This is because only the declaration (var bird), not the initialization is hoisted to the top.
        console.log('Ernie loves his ' + bird );
    } else {
        console.log('Bert loves his ' + bird );
    }
}() );


//4//Check properties
//////////////////////////////////////////////////////////////////////////////
var key,
    obj = {
        name: 'john',
        surname: 'doe'
    };
Object.prototype.hasOwnProperty = function (key) {  //this is the solution -> changed how the function behaves during runtime
    if(key == 'name'){
        return false;
    }
    return true;
};
for ( key in obj ) {
    if ( obj.hasOwnProperty( key ) ) {
       console.log( key + ' exists in obj' );
       console.log( key + ': ' + obj[key] );
       continue;
    }
    console.log( key + " doesn't exist in obj" );
}


//5//Closures and Objects
//////////////////////////////////////////////////////////////////////////////

//This is happening because when the closure has been executed it has saved the reference in memory for oPerson as oTeacher and even when oPerson has changed the assigned value to a different object it continues being referenced inside the closure. 
//It is important to check this problems because if you make the same with DOM elements and the element is removed from the DOM tree you will get memory leaks issue
//This is a pointer problem. Closures copy variableto another, otherwise variable is referenced with pointer-logic
var oPerson = { name: 'john' };
(function(oTeacher) {
   window.getTeacher= function() {
      console.log(oTeacher);
   };
}(oPerson));
//The solution to fix the problem:
window.getTeacher= function() {
  console.log(oPerson);
};


//6//Conditionals and Functions
//////////////////////////////////////////////////////////////////////////////
//The execution of Snippet 1 shows "That's true" because function expressions are evaluated in execution time.
//The execution of Snippet 2 shows "That's false" because function declarations are evaluated in evaluation time, and the second one overwrittes the first one.
//The execution of Snippet 3 shows "That's true" because when the code has been evaluated it has changed to the function that could return "That's false" but when the code has been executed it has been overwritten again with the function expression.
//Snipp1
var test;
if ( true ) {
    test = function () {
        console.log( "That's true" );
    };
} else {
    test = function () {
        console.log( "That's false" );
    };
}
test(); // Shows "That's true"
//Snipp2
if ( true ) {
    function test() {
        console.log( "That's true" );
    }
} else {
    function test() {
        console.log( "That's false" );
    }
}
test(); // Shows "That's false"
//Snipp3
var test;
if ( true ) {
    test = function () {
        console.log( "That's true" );
    };
} else {
    function test() {
        console.log( "That's false" );
    }
}
test(); // Shows "That's true"
//test = function () { ... } -> function expression
//function test() { ... } -> function declaration
