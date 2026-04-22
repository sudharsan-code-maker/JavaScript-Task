// 1️⃣ Create Student Data
let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
];

// 📌 Task 1: Print All Students
console.log("---- All Students ----");
for(let i=0; i<students.length; i++){
    console.log(
        students[i].id,
        students[i].name,
        students[i].mark,
        students[i].course
    );
}
/*
Output:
---- All Students ----
1 Naveen 85 MERN
2 John 45 Python
3 Priya 72 Java
4 Arun 95 React
*/

// 📌 Task 2: Pass / Fail
console.log("---- Pass / Fail ----");
for(let s of students){
    if(s.mark >= 50){
        console.log(s.name + " - Pass");
    } else {
        console.log(s.name + " - Fail");
    }
}
/*
Output:
---- Pass / Fail ----
Naveen - Pass
John - Fail
Priya - Pass
Arun - Pass
*/

// 📌 Task 3: Grade System
console.log("---- Grades ----");
for(let s of students){
    if(s.mark >= 90){
        console.log(s.name + " - A Grade");
    } else if(s.mark >= 75){
        console.log(s.name + " - B Grade");
    } else if(s.mark >= 50){
        console.log(s.name + " - C Grade");
    } else {
        console.log(s.name + " - Fail");
    }
}
/*
Output:
---- Grades ----
Naveen - B Grade
John - Fail
Priya - C Grade
Arun - A Grade
*/

// 📌 Task 4: Topper Student
let topper = students[0];

for(let s of students){
    if(s.mark > topper.mark){
        topper = s;
    }
}
console.log("Topper is " + topper.name + " - " + topper.mark);
/*
Output:
Topper is Arun - 95
*/

// 📌 Task 5: Course Search (React)
console.log("---- React Student ----");
for(let s of students){
    if(s.course === "React"){
        console.log(s);
    }
}
/*
Output:
---- React Student ----
{id: 4, name: "Arun", mark: 95, course: "React"}
*/

// 📌 Task 6: Add New Student
students.push({id:5, name:"Rahul", mark:88, course:"Node JS"});

console.log("---- After Adding Student ----");
for(let s of students){
    console.log(s);
}
/*
Output:
---- After Adding Student ----
{id: 1, name: "Naveen", mark: 85, course: "MERN"}
{id: 2, name: "John", mark: 45, course: "Python"}
{id: 3, name: "Priya", mark: 72, course: "Java"}
{id: 4, name: "Arun", mark: 95, course: "React"}
{id: 5, name: "Rahul", mark: 88, course: "Node JS"}
*/

// 📌 Task 7: Attendance System
let status = "present";

switch(status){
    case "present":
        console.log("Welcome");
        break;
    case "absent":
        console.log("Mark Absent");
        break;
    case "leave":
        console.log("Approved Leave");
        break;
    default:
        console.log("Invalid Status");
}
/*
Output:
Welcome
*/

// 📌 Task 8: Login System
let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("Login Success");
} else {
    console.log("Invalid User");
}
/*
Output:
Login Success
*/
