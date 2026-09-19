// Creating an object in JavaScript
const student = {
  name: "Purvansh",
  age: 20,
  course: "B-Tech",
  city: "Ghaziabad",
  salary: 50000,
  display() {
    console.log(`Hello, my name is ${this.name}`);
    console.log(`I am ${this.age} years old and I am pursuing ${this.course}`);
    console.log(`I live in ${this.city} and my salary is ${this.salary}`);
  },
  show() {
    console.log("MY name" + this.name);
    console.log("Age: " + this.age);
    console.log("Course: " + this.course);
    console.log("City: " + this.city);
    console.log("Salary: " + this.salary);
  }
};

console.log(student);
console.log(student.name);
console.log(student["age"]);
console.log(student["city"]);
console.log(student["salary"]);
student.display();
student.show();
