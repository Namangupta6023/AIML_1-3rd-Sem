console.log("==== if Else ====");

var a = 40;
var b = 30;

if(a>b){
  console.log("A is greater");


}

else{
  console.log("B is greater");
}


function greet(fname, lname){
  console.log(`Hello ${fname} ${lname}`);
}


greet("Naman", "Gupta");
greet("Prateek", "Kumar");


function add(x, y){
  return x + y;
}


var result = add(20, 30);

console.log("Sum =", result);

function fullname(fname = "ABES ", lname = "Engineering College"){
  return fname + " " + lname;
}

console.log(fullname());
console.log(fullname("Prateek", "Kumar"));


function totalMarks(maths, english, science){
  return  maths + english + science;
}

function percentage(total){
  return (total/300) * 100;
}

