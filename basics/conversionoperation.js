let score = 50;
console.log(typeof score); // shows number

score = "fifty";
console.log(typeof score); // shows string

let valueinNumber = Number(score);
console.log(typeof valueinNumber); // shows number

console.log(valueinNumber); // shows NaN (Not a Number)

//when score has null value the valueinNumber will be 0 so it is better to check for null or undefined value before conversion
//when score has boolean value true=1 and false=0
//"33" => 33
//"33abc" => NaN
//"abc33" => NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //  shows true and  if "0" then false

//if the value is non zero number or non empty string it will be true otherwise false


