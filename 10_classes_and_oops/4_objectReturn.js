// Explicit Return of an Object:
 
function Car(make, model) {
    this.make = make;
    this.model = model;

    // Explicitly returning an object
    return {
        make: 'Toyota',
        model: 'Corolla',
        year: 2020
    };
}

const car1 = new Car('Honda', 'Civic');
console.log(car1.make);  // "Toyota"
console.log(car1.model); // "Corolla"
console.log(car1.year);  // 2020
 

// Car is a constructor function.
// It explicitly returns an object with different properties.
// When new Car('Honda', 'Civic') is called, the explicitly returned object is assigned to car1 instead of the new object created with make and model.
// Explicit Return of a Non-Object Value:
 
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Explicitly returning a non-object value (ignored)
    return 42;
}

const person1 = new Person('Alice', 30);
console.log(person1.name); // "Alice"
console.log(person1.age);  // 30
 

// Person is a constructor function.
// It explicitly returns the value 42, which is a primitive.
// Since a non-object value is returned, it is ignored, and the newly created object with name and age properties is assigned to person1.