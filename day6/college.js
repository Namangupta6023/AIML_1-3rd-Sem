function college() {
    return {
        name: "ABESEC",
        location: "Ghaziabad",
        established: 2000,
        department: {
            computerScience: {
                hod: "Mr. Rachit",
                students: 1080
            },
            AIML: {
                hod: "Mr. Aayush Agarwal",
                students: 180
            }
        },
        class: {
            section: "A",
            totalStudents: 80,
            course: "B-Tech"
        },
        displayDetails() {
            console.log("College Name: " + this.name);
            console.log("Location: " + this.location);
            console.log("Established: " + this.established);
            console.log("Department: ", this.department);
            console.log("Class Details: ", this.class);
        }
    };
}

const myCollege = college();
myCollege.displayDetails();