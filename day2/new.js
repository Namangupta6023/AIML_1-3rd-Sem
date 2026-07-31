console.log("==== Variables ====") ;

var text = "something" ;
console.log(text) ;

console.log("===== If-Else =====") ;

var a = 20 ;
var b = 10 ;

if(a>b){
    console.log("A is greater than B") ;
}
else{
    console.log("B is greater than A. ") ;
}


console.log("===== function with parameters==== ");
function greet(fname , lname){
    console.log("Hello" , fname , lname) ;
}
greet("Utkarsh"," Dixit") ;
greet("Waseem ","Ahmed") ;


function add(x,y){
    return x+y ;
}

var result = add(10,20) ;
console.log("sum = " , result) ;


console.log("======Default Argument =====") ;

function fullName(fname = "ABES" , lname = "Engineering College") {
    return fname + " " + lname ; 
}

console.log(fullName()) ;
console.log(fullName("Utkarsh","Dixit")) ;


console.log("=== Percentage Function ===")

function percentage(total){
    return total/3 ;
}
function totalMarks(math , english , science){
    return math+english+science ;
}

var total = totalMarks(80,75,90) ;
console.log("TotalMarks : " , total );
console.log("percentage : " , percentage(total) + "%") ;


// Global Variable 

console.log("===== Global Variable ====");

function hello(){

}