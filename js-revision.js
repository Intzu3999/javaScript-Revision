console.log('This is my first javascript inside javascript script');


console.log('');
console.log('Data Types');
let firstName = 'Eveess'; //string literal
let lastName = 'Keoy'; //string literal
let age = 23; //number literal
let isApproved = true; //boolean literal
let selectedColor = null; //used in situation where we want to clear the variable
let randomVariable = undefined;
console.log('Programmer name is: ' + firstName + ' ' + lastName);



console.log('change 1');
console.log('change 2');
console.log('change 3');
console.log('Static vs Dynamic Variable');
const  interestRate1 = 0.8; //this variable is fixed and can never be changed.
let interestRate2 = 1.1; //this variable can be changed later in the code
interestRate2 = 1.3;
console.log('interestRate1: ' + interestRate1 + ", interestRate2: " + interestRate2);



console.log('');
console.log('Object Literal');
let person = { 
    firstName: 'Evees',
    lastName: 'Keoy',
    age: 23,
}; 

//basic notation
console.log('person=',(person));

//dot notation to change value
person.age = '24';
console.log('after dot notation person.age= ' + person.age);
console.log('person=',(person));

//Bracket notation to change value
person['firstName'] = 'Eva' ;
console.log('after bracket notation, person.firstName= ' + person.firstName);
console.log('person=',(person));

//Bracket selection notation to change value
let selection = 'firstName';
person[selection] = 'Ivy';
console.log('after selection bracket notation, selection=firstName; person[selection]= ' + person.firstName);
console.log('person=',(person));



console.log('');
console.log('Array');
let selectedColors = ['black','cyan', 'magenta', 'yellow'];
console.log("All selected colors",selectedColors);
selectedColors[4] = 'grey';
selectedColors[3] = 'orange';
console.log("When [3] is orange, [4] is grey",selectedColors);
console.log("selectedd color [1] is", selectedColors[1]);
console.log(selectedColors.length);



console.log('');
console.log('Function');

function greet1(){
    console.log('This is greet1 function')
}
greet1();

function greet2(firstName, lastName) {
    console.log('This is greet 2 function. Hello ' + firstName + ' ' + lastName);
}
greet2('Evelyn', 'Keoy');
greet2('Alana');

function square(number){
    return number * number;
}
console.log(square(4));