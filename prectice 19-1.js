// Question: 1

// Write a JavaScript program to demonstrate Hierarchical Inheritance using the following classes:
// Create a base class Vehicle with:
// a constructor to initialize brand
// a method showBrand()
// Create two child classes:
// Car
// Inherits from Vehicle
// Has an additional property fuelType
// Has a method showCarDetails()
// Bike
// Inherits from Vehicle
// Has an additional property engineCC
// Has a method showBikeDetails()
// Create objects of both Car and Bike
// Display all details using methods


class Vehicle{
    constructor(brand){
this.brand=brand;
    }
    showBrand(){
        console.log(this.brand);
    }
}

class Car extends Vehicle{
    constructor(brand,fueltype){
        super(brand);
        this.fueltype=fueltype;
    }
   showCarDetails(){
    console.log(this.fueltype);
    
   }

}

class Bike extends Vehicle{
    constructor(brand,engineCC){
        super(brand);
        this.engineCC=engineCC

    }
    showBikeDetails(){
        console.log(this.engineCC);
        
    }
} 

let bike=new Bike("honda",100);
bike.showBrand();        
bike.showBikeDetails();

let car=new Car("BMW","petrol");
car.showBrand();
car.showCarDetails();




// Question 2: Employee System
//                 Write a JavaScript program to explain Hierarchical Inheritance using the following classes:
// Create a base class Employee with:
// a constructor to  name
// a method showName()
// Create two child classes:
// Manager
// Inherits from Employee
// Has an additional property department
// Has a method showManagerDetails()
// Developer
// Inherits from Employee
// Has an additional property language
// Has a method showDeveloperDetails()
// Create objects of both child classes
// Print all details using class methods.

class Employee{
    constructor(name){
        this.name=name;
    }
    showName(){
        console.log(`sir name: ${this.name}`);
        
    }
}

class Manager extends Employee{
    constructor(name,department){
        super(name);
        this.department=department;
    }
    showMangerDetails(){
        console.log(`Department name :${this.department}`);
        
    }
}

class Developer extends Employee{
    constructor(name,language){
        super(name);
        this.language=language;
    }
    showDeveloper(){
        console.log(`language name is : ${this.language}`);
        
    }
}

let mang=new Manager("akshay sir","IT Deperment");
mang.showName();
mang.showMangerDetails();

let de=new Developer("shiv sir",'javascript');
de.showName();
de.showDeveloper();