//   1.Create a program using abstraction:
// Parent class: Employee
// Method: getSalary()
// Child class: Manager
// Print monthly salary

class Employee{
    constructor(salary){
    
            this._salary=salary;

    }
    get salary(){
        return this._salary;
    }
}

class Manager extends Employee{
    constructor(salary){
        super(salary);
    }
    get salary(){
        return this._salary*12;
    }

}
let ok=new Manager(25000);

console.log('salary in per year',ok.salary);


// 2.Create a program using abstraction:
// Parent class: Food
// Method: prepare()
// Child class: Pizza
// Print: "Pizza is prepared"

class Food{
    // constructor(name){
    //     this.name=name;
    // }
    prepare(){
        console.log(` pizza is prepared`);
    }
}

class Pizza extends Food{
    constructor(name){
        super(name);
    }
}

let pizza=new Pizza("pizza");

pizza.prepare();  
