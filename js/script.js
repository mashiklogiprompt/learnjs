console.log("Student Management Portal Started...");

let collegeName = "ABC College";
let totalStudents = 0;
let isOpen = true;

console.log(collegeName);
console.log(totalStudents);
console.log(isOpen);

let courses = ["BCA", "BSc", "BCom", "MCA"];
console.log(courses);
console.log(courses[3]); 

let studentBasic = {
    id: 1,
    name: "Mashik",
    age: 21,
    course: "BCA"
};
console.log(studentBasic.name);

let studentWithMarks = {
    id: 1,
    name: "Mashik",
    marks: {
        maths: 95,
        english: 80,
        science: 75
    }
};
console.log(studentWithMarks.marks.maths);

function welcomeStudent(name) {
    console.log("Welcome " + name);
}
welcomeStudent("Mashik");

function add(a, b) {
    return a + b;
}
let answer = add(10, 20);
console.log(answer);

let averageMark = 92;
if (averageMark > 90) {
    console.log("Excellent");
} else {
    console.log("Good");
}

let students = ["John", "Alice", "Mashik", "David"];
for (let i = 0; i < students.length; i++) {
    console.log("Welcome " + students[i]);
}

let challengeStudent = {
    name: "Alex",
    age: 23,
    course: "MCA",
    phone: "123-456-7890",
    email: "alex@example.com",
    address: "123 Tech Street, Dev City",
    marks: {
        maths: 94,
        english: 88,
        science: 91
    }
};

console.log(challengeStudent.name);
console.log(challengeStudent.marks.maths);
console.log(challengeStudent.email);
