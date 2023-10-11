class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getEmail() {
      return this.email;
    }
  }
  
  // Example usage of the Person class
  const person1 = new Person("John", "Doe", 30, "john.doe@example.com");
  
  console.log("Full Name:", person1.getFullName());
  console.log("Age:", person1.getAge());
  console.log("Email:", person1.getEmail());
  