 

// 1. Encapsulation
// Encapsulation is the bundling of data (variables) and methods (functions) that operate on the data into a single unit or class. It also involves restricting direct access to some of an object's components, which is a means of preventing unintended interference and misuse of the data.

// Example:

 
class Employee {
    constructor(name, salary) {
        this._name = name; // "_" indicates a private variable by convention
        this._salary = salary;
    }

    // Getter method for name
    getName() {
        return this._name;
    }

    // Setter method for salary
    setSalary(newSalary) {
        if (newSalary > 0) {
            this._salary = newSalary;
        } else {
            console.log('Invalid salary amount.');
        }
    }

    // Method to display employee details
    displayInfo() {
        console.log(`Name: ${this._name}, Salary: ${this._salary}`);
    }
}

const emp1 = new Employee('John Doe', 50000);
emp1.displayInfo(); // "Name: John Doe, Salary: 50000"
emp1.setSalary(55000);
emp1.displayInfo(); // "Name: John Doe, Salary: 55000"
// In this example, the Employee class encapsulates the name and salary properties, providing getter and setter methods to access and modify the data safely.

// 2. Abstraction
// Abstraction involves hiding the complex implementation details of a system and exposing only the necessary and relevant parts to the user. This simplifies interaction with the object and reduces complexity.

 
class API {
    constructor() {
        this.baseUrl = 'https://api.example.com';
    }

    // Private method to perform a GET request
    _fetchData(endpoint) {
        return fetch(`${this.baseUrl}/${endpoint}`)
            .then(response => response.json())
            .catch(error => console.log('Error fetching data:', error));
    }

    // Public method to get user data
    getUserData(userId) {
        return this._fetchData(`users/${userId}`);
    }

    // Public method to get post data
    getPostData(postId) {
        return this._fetchData(`posts/${postId}`);
    }
}

const api = new API();
api.getUserData(1).then(data => console.log(data));
api.getPostData(10).then(data => console.log(data));
// In this example, the API class abstracts away the details of fetching data from a remote server. The user interacts with simple methods like getUserData and getPostData without worrying about the underlying implementation.

// 3. Inheritance
// Inheritance allows a class to inherit properties and methods from another class. This promotes code reusability and establishes a hierarchical relationship between classes.
 
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog('Rex', 'German Shepherd');
myDog.speak(); // "Rex makes a noise."
myDog.bark();  // "Rex barks."
// In this example, the Dog class inherits from the Animal class, gaining access to its properties and methods while adding its own method bark.

// 4. Polymorphism
// Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent different underlying forms (data types). This is often achieved through method overriding, where a subclass provides a specific implementation of a method that is already defined in its superclass.

// Example:

 
class Bird {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} chirps.`);
    }
}

class Parrot extends Bird {
    speak() {
        console.log(`${this.name} talks.`);
    }
}

const bird = new Bird('Sparrow');
const parrot = new Parrot('Polly');

bird.speak();    // "Sparrow chirps."
parrot.speak();  // "Polly talks."

// Function that demonstrates polymorphism
function makeSpeak(animal) {
    animal.speak();
}

makeSpeak(bird);   // "Sparrow chirps."
makeSpeak(parrot); // "Polly talks."
// In this example, both Bird and Parrot classes have a speak method. The Parrot class overrides the speak method to provide a different implementation. The makeSpeak function demonstrates polymorphism by accepting any object that has a speak method and calling it, regardless of the object's specific class.

