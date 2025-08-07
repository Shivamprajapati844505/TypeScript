class Person {
  public name: string;         
  private age: number;        
  protected email: string;     

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  showDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
  }
}

// Subclass using protected
class Employee extends Person {
  showEmail() {
    console.log(`Employee Email: ${this.email}`); // allowed (protected)
  }
}

const p1 = new Person("Shivam", 25, "shivam@example.com");

console.log(p1.name);      //  public - accessible
 console.log(p1.age);    // private - Error
console.log(p1.email);  //  protected - Error

p1.showDetails(); //  works fine
