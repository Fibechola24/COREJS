
//%%%%%%%%%%%%%%%%%%%% CORE JS %%%%%%%



/*
var testing = 100;

var testing2 = 'vic';

console.log(testing2)
*/




//%%%%%%%%%%%%%%%%%%      LET keyword



// let firstName = 'Victor';

// console.log(firstName);

//  firstName = 'Stella';
// console.log(firstName);


//const keyword

// const age = 31;
//  console.log(age);

//  let taxnumber;

 //let or //const

/*
 let testString = 'this is a string';
 console.log(testString);

let testnumber = '123345.98764';
console.log(testnumber);


let testBoolean = true;

console.log(testBoolean);

*/

// i = 10;

// i = 15;

// console.log(i);

// let i = 2;




/*
let a , b , c;

a = 5;
b = 6;
c = 7;

result = a + b + c;
*/


// let x = 5;
// let y = 2;
// let result;

//result += x;       
//result = result + x;

// - / *


//console.log(result);


//Boolean - true or false


// let isAlive = true;
// console.log(!isAlive);



//Dates

/*
let birthday = new Date(1980, 0, 15, 0, 0, 0, 0);

//console.log(birthday);

console.log(birthday.getUTCFullYear());
console.log(birthday.getDate());
*/


//%%%%%%%%%%%%%%%%%%%%%%          Arrays


//const countries = ['Germany', 'Gabon', 'Nigeria', 'Niger', 'France', 'Italy'];

//push

/*
countries.push('Portugal');
countries.push('Guinea Republic');
countries.push('Ghana');
countries.push('France');
countries.push('India');
countries.push('Bangladesh');
*/

//pop

//const lastCountries = countries.pop();

//console.log(lastCountries);

//indexOf

//console.log(countries);
//console.log(countries.indexOf('Spain'));



//filter

/*

const Gcountries = countries.filter(
    function(country){
        return country.startsWith('G');
    }
);

*/
//console.log(Gcountries);


//substring

//console.log(lastCountries.substring(0, 4))


//map

/*
const firstThreeLetters = countries.map(
    function(country){
        return country.substring(0,3);
    }
);

console.log(firstThreeLetters);
*/


// %%%%%%%% LOOPS %%%%%%%%

/*
// for loop

const people = ['Alice', 'Jonathan', 'Bob', 'Victor', 'Stella', 'Daniel'];

//console.log('Alice');


console.log(people[0]);
console.log(people[1]);
console.log(people[2]);
console.log(people[3]);
*/
/*
for( let i = 0; i < people.length; i++){
    console.log(people[i]);
}
    */
//console.log(people.length);





/*
//%%%%%%%  For of loop

const people = ['Alice', 'Jonathan', 'Bob', 'Victor', 'Stella', 'Daniel'];

for (const person of people) {
    console.log(person);
}

*/



/*
//%%%%%%%%%  FOR EACH LOOP 

const people = ['Alice', 'Jonathan', 'Bob', 'Victor', 'Stella', 'Daniel'];

// people.forEach(function(person){
//     console.log(person);
// });

//arrow function expression
people.forEach(person => {
    console.log(person);
});

*/



//%%%% WHILE LOOP

const people = ['Alice', 'Jonathan', 'Bob', 'Victor', 'Stella', 'Daniel'];


/*
//avoid infinite loop
let i = 0;

while (i < people.length) {
    console.log(people[i]);
    i++;

}
*/

/*
let i = 0;

while (i < people.length) {
    console.log(people[i]);
    i++;

}
    */




//%%%%% FUNCTIONS 
// let result = 5 + 6;
// console.log(result)

// result = 2 + 6;

// console.log(result)


function add( x =5, y = 7){
    return x + y;
}

// let result = add(6, 12);
// console.log(result);

// result  = add(10, 288);
// console.log(result);

// const moreResults = add(19, 20) + add(50, 100);
// console.log(moreResults);


/*
function greetUser(){
    console.log('Hello User');
    console.log('You are highly welcome');
    console.log('I hope you are enjoying the developer series?');   

    result = add(30, 50);
    console.log(`the result of the addition is ${result}`);
    
}

greetUser();
*/


// %%%%%%%%%%%%%% ARROW Function

const subtract = (x, y) =>  x - y;


let result2 = subtract(10, 5);
console.log(result2);

const countries = ['Germany', 'Portugal', 'Spain', 'Nigeria', 'USA', 'Gabon', 'Guinea Republic'];


const filtered = countries.filter(function(country){
    return country.substring(0,1) === 'G';
});

console.log(filtered);
