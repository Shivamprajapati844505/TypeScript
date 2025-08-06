

const arr = [ 2,34,55,67, "shiv"];

// Parent interface
interface Person {
  name: string;
  age: number;
}

// Extended interface
interface Employee extends Person {
  employeeId: number;
  department: string;
}

const emp: Employee = {
  name: "Shivam",
  age: 25,
  employeeId: 101,
  department: "Eng",
};

// use the object
console.log(`${emp.name} ID: ${emp.employeeId} and works in ${emp.department} department.`);