const Student = ["Name", "Age", "marks"];
//learned to add
Student.push("Results");
Student.unshift("id");

console.log(Student);

//learned to remove
Student.pop();
Student.shift();

console.log(Student);

// learned .map function
const myStudents = Student.map(item => item.toUpperCase());

console.log(myStudents);

//learned .filter function
 const Scores = [20,45,60,75,90,100,99,86];
 const Result = Scores.filter(num => num > 75);
 console.log(Result);

 //learned .find function
 const target = Student.find(name => name.startsWith("N"));
 console.log(target);

 //destructing 
 const themeColor = ["black", "white"];
 const [primary, secondary] = themeColor;
 console.log(primary);
 console.log(secondary);

 //... Spread operator
 const backGround = ["purple", "blue"];
 const finalColor = [...themeColor, ...backGround, "Pink", "Orange"];
 console.log(finalColor);