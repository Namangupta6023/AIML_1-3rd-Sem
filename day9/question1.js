class Student {
  static totalStudents = 0;

  constructor(rollNo, name, marks) {
    this.rollNo = rollNo;
    this.name = name;
    this.marks = marks;
    Student.totalStudents += 1;
  }

  displayResult() {
    const result = this.marks >= 40 ? "Passed" : "Failed";

    console.log("Student Details:");
    console.log("Roll No:", this.rollNo);
    console.log("Name:", this.name);
    console.log("Marks:", this.marks);
    console.log("Result:", result);
  }

  static displayTotalStudents() {
    console.log("Total students created:", Student.totalStudents);
  }
}

const student1 = new Student(101, "Rachit", 85);
const student2 = new Student(102, "Naman", 35);
const student3 = new Student(103, "Prateek", 72);

console.log("Student 1");
student1.displayResult();

console.log("\nStudent 2");
student2.displayResult();

console.log("\nStudent 3");
student3.displayResult();

console.log("\nStatic Count:");
Student.displayTotalStudents();