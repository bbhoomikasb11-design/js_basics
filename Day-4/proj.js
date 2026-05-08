// Array of student marks
const marks = [45, 67, 89, 32, 76, 90, 55];

console.log("Student Marks:", marks);

// 1. Add bonus marks using map()
const updatedMarks = marks.map(mark => mark + 5);

console.log("Updated Marks:", updatedMarks);

// 2. Find passed students using filter()
const passedStudents = updatedMarks.filter(mark => mark >= 40);

console.log("Passed Students:", passedStudents);

// 3. Calculate total marks using reduce()
const total = updatedMarks.reduce((sum, mark) => sum + mark, 0);

console.log("Total Marks:", total);

// 4. Find average marks
const average = total / updatedMarks.length;

console.log("Average Marks:", average);

// 5. Find highest marks
const highest = Math.max(...updatedMarks);

console.log("Highest Marks:", highest);