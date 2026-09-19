let name = "Rahul";
const age = 20;
var city = "Delhi";

console.log(name);
console.log(age);
console.log(city);

let username = "itachi";

function showName() {
    console.log(username);
}

showName();

let firstName = "Purvansh";
let lastName = "Singh";

let fullName = firstName + " " + lastName;

console.log(fullName);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());


let text = "JavaScript";

console.log(text.length);
console.log(text.charAt(0));
console.log(text.includes("Script"));
console.log(text.startsWith("Java"));
console.log(text.endsWith("Script"));

let data = "Hello World";

let result = data.split(" ");

console.log(result);


let course = [55 , 578 , 7465 , 986 ] ;
let date = new Date() ;
console.log(
    "Month : " , date.getMonth() +1 
) ; 