// 🔹 Task 1: Array Basics
let arr1 = [10, 20, 30, 40, 50];

console.log("First element:", arr1[0]);        // 10
console.log("Last element:", arr1[arr1.length - 1]); // 50
console.log("Total length:", arr1.length);     // 5


// 🔹 Task 2: Push & Pop
let arr2 = [1,2,3];

arr2.push(4,5);   // [1,2,3,4,5]
arr2.pop();       // remove 5

console.log("Final array:", arr2); // [1,2,3,4]


// 🔹 Task 3: Includes Check
let arr3 = ["html","css","javascript","react"];

console.log("Includes javascript:", arr3.includes("javascript")); // true


// 🔹 Task 4: Filter Salaries
let emp1 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];

let highSalary = emp1.filter(e => e.salary > 20000);

console.log("Salary > 20000:", highSalary);
// [{name:"B", salary:50000}, {name:"C", salary:30000}]


// 🔹 Task 5: Map Names
let names = emp1.map(e => e.name);

console.log("Names:", names); // ["A","B","C"]


// 🔹 Task 6: Reduce Sum
let totalSalary = emp1.reduce((sum, e) => sum + e.salary, 0);

console.log("Total Salary:", totalSalary); // 90000


// 🔹 Task 7: Remove Duplicates
let arr4 = [1,2,2,3,4,4,5];

let unique = [...new Set(arr4)];

console.log("Unique array:", unique); // [1,2,3,4,5]


// 🔹 Task 8: Find Largest Number
let arr5 = [10, 200, 5, 90];

let max = Math.max(...arr5);

console.log("Largest number:", max); // 200


// 🔹 Task 9: Reverse String WITHOUT reverse()
let str1 = "hello";

let reversed = "";
for(let i = str1.length - 1; i >= 0; i--) {
  reversed += str1[i];
}

console.log("Reversed string:", reversed); // "olleh"


// 🔹 Task 10: Group by Salary
let emp2 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:10000}
];

let grouped = emp2.reduce((acc, e) => {
  if(!acc[e.salary]) {
    acc[e.salary] = [];
  }
  acc[e.salary].push(e.name);
  return acc;
}, {});

console.log("Grouped:", grouped);
// {10000:["A","C"], 50000:["B"]}


// 🔹 Task 11: Flatten Array (without flat)
let arr6 = [1,[2,[3,[4]]]];

function flatten(arr) {
  let result = [];
  for(let item of arr) {
    if(Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log("Flattened:", flatten(arr6)); // [1,2,3,4]


// 🔹 Task 12: Custom Sort (Descending)
let arr7 = [5,2,9,1];

arr7.sort((a,b) => b - a);

console.log("Descending:", arr7); // [9,5,2,1]


// 🔹 Task 13: Find Second Largest
let arr8 = [10, 50, 20, 40];

let sorted = [...arr8].sort((a,b) => b - a);

console.log("Second largest:", sorted[1]); // 40


// 🔹 Task 14: Count Characters
let str2 = "aabbccdde";

let count = {};

for(let ch of str2) {
  count[ch] = (count[ch] || 0) + 1;
}

console.log("Character count:", count);
// {a:2, b:2, c:2, d:2, e:1}
