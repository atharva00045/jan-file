


// //Question 1: Class and Object (Student)
// //Define a class named Student with the following properties:
// // name
// // rollNo
// // address
// // mobileNumber
// // course
// // age
// // Create one object of the class and assign values to all properties.
// // Print any three properties .


// class Student {
//     name;
//     rollNo;
//     address;
//     mobileNumber;
//     course;
//     age;
// }

// let ok = new Student();

// ok.name = "atharva";
// ok.rollNo = 45;
// ok.address = "akole";
// ok.mobileNumber = 52352146;
// ok.course = "BCA";
// ok.age = 18;

// console.log(ok.name);
// console.log(ok.age);
// console.log(ok.rollNo);


// // Question 2: Class and Object (Employee)
// // Create a class named Employee with the following properties:
// // empId
// // empName
// // department
// // salary
// // companyName
// // location
// // isPermanent
// // Create an object of the class, assign values, and print all properties


// class Employee {
//     empId;
//     empName;
//     department;
//     salary;
//     companyName;
//     location;
//     isPermanent;
// }


// let ep = new Employee();

// ep.empId = "atharva45";
// ep.empName = "atharva chaudhari";
// ep.department = "backend";
// ep.salary = 45000;
// ep.companyName = "baap company";
// ep.location = "sangmner";
// ep.isPermanent = "yes";

// console.log(ep);



// // Question 3: Class and Object (Car)
// // Create a class named Car with the following properties:
// // brand
// // model
// // color
// // fuelType
// // mileage
// // price
// // isAutomatic
// // Create objects of the class and display the brand and model of cars.

// class car {
//     brand;
//     model;
//     color;
//     fuelType;
//     mileage;
//     price;
//     isAutomatic;
// }

// let info = new car();

// info.brand = "BMW";
// info.model = "BS6";
// info.color = "red";
// info.fuelType = "petrol";
// info.mileage = "8kilometer/liter"
// info.price = 8200000;
// info.isAutomatic = "yes";

// console.log("brand:", info.brand);
// console.log("model:", info.model);






// // Write a class Hello with a method that prints "Hello JavaScript"

// class Hello {
//     print() {
//         console.log("Hello JavaScript");
//     }
// }

// let jj = new Hello;

// jj.print()


// // Create a class Number with a property num. Print the value of num.

// class Number {
//     num1;
//     num2;
//     num3;
// }

// let bc = new Number()

// bc.num1 = 12;
// bc.num2 = 45;
// bc.num3 = 82;

// console.log(bc);


// // Write a class Student with properties name and age. Display both.

// class student {
//     name;
//     age;
// }

// let stu = new student();
// stu.name = "atharva";
// stu.age = 18;

// console.log(stu);


// // Create a class Add with two numbers and a method to add them.

// class a {

//     num1;
//     num2;

//     ok() {
//         return this.num1 + this.num2
//     }
// }

// let bb = new a();

// bb.num1 = 45;
// bb.num2 = 83;

// console.log(bb.ok());




// // 1) create a student class with name, marks1 , mark2 , mark3,  mark4,  and calculate marks average of mars  using method if average is grater than 35 --> pass  and average is less than 35 fail using class and object

// class student1 {
//     name;
//     mark1;
//     mark2;
//     mark3;
//     mark4;

//     function1() {
//         let ct = this.mark1 + this.mark2 + this.mark3 + this.mark4 / 4;
//         return ct >= 35 ? "pass" : "fail";


//     }

// }

// let to = new student1();

// to.name = "atharva chaudhari"
// to.mark1 = 45;
// to.mark2 = 40;
// to.mark3 = 55;
// to.mark4 = 35;

// console.log(to.function1());



// // 2) create a Car class with brand , speed  and check speed  if speed > 120 → over Speeding , and speed between 60–120 → Normal Speed and  speed < 60 → Too Slow  using class and object

// class car22 {
//     brand;
//     speed;

//     return;
// }

// let mm = new car22();

// mm.brand = "BMW";
// mm.speed = 110;

// if (mm.speed > 120) {
//     console.log("over speeding");

// }
// else if (mm.speed >= 60 && mm.speed <= 120) {
//     console.log("Normal speed");

// }
// else {
//     console.log("to slow");

// }


// // 3) create a BankAccount class with accountHolder , balance  and deposit money  , withdraw money , total balance   using class and object

// class BankAccound {
//     accoundHolder;
//     balance;
//     depositmoney;
//     withdrawmonay;
//     totalbalance() {
//         let e = this.balance + this.depositmoney - this.withdrawmonay
//         return e;
//     }

// }

// let ba = new BankAccound();

// ba.accoundHolder = "sarthak chaudhari";
// ba.balance = 800;
// ba.depositmoney = 100;
// ba.withdrawmonay = 50;

// console.log("total balance",ba.totalbalance(),"depositmoney:",ba.depositmoney,"withdrawmoney:",ba.withdrawmonay);




// //////////////////////////////




// // 1.Create a Product class that stores product name, price, and quantity.
// // Calculate and display the total bill amount.

// class Product{
//     constructor(name,price,quantity){
//         this.name=name;
//         this.price=price;
//         this.quantity=quantity;
//         this.tatalbill=this.price*this.quantity
//     }
// }

// let dd=new Product("head phon",200,3);

// console.log(dd);


// // 2.Create a Voting class that takes age using a constructor.
// // Add a method to check whether the person is eligible to vote.

// class Voting{
//     constructor(age){
//         this.age=age;
//     }
// }

// let v8=new Voting(18);

// console.log(v8.age>=18?"eligible for vote":"not eligible for vote");


// // 3.Create a Rectangle class that accepts length and width.

// class Rectangle{
//     constructor(length,width){
//         this.length=length;
//         this.width=width;
//     }
// }

// let lw=new Rectangle(78,45);

// console.log(lw);


// // 4.Create a Result class that stores three subject marks.
// // Calculate total, average, and pass/fail.


// class Result{
//     constructor(sub1,sub2,sub3){
//         this.sub1=sub1;
//         this.sub2=sub2;
//         this.sub3=sub3;
//         this.total=this.sub1+this.sub2+this.sub3
//         this.average=this.total/3


//     }
// }

// let re=new Result(45,50,45);

// console.log(re);
// console.log("result pass or fail:",re.average>=35?"pass":"fail");




// ////////////


// // 1.Create a LibraryBook class that stores book name, author, and availability status. Add a method to display book details.


// class LibraryBook{
//     constructor(name,author,availability){
//         this.name=name;
//         this.author=author;
//         this.availability=availability;
//     }
// }

// let toall=new LibraryBook("life time","shankar sir",900);

// console.log(toall);


// // 2.class that stores total days and present days. Calculate attendance percentage. 

//  class Attendance{
//     constructor(totaldays,presentdays){
//         this.totaldays=totaldays;
//         this.presentdays=presentdays;
//         }
//     }

//     let att=new Attendance(300,200);

//     console.log("total days:",att.totaldays,"present days:",att.presentdays,"attendance percentage:",
//         (att.presentdays/att.totaldays)*100);




// // 3.Create a MovieTicket class that stores movie name, seat count, and price per seat. Calculate total ticket cost.

// class Movieticket{
//     constructor(moviename,seatcount,priceperseat){

//         this.moviename=moviename;
//         this.seatcount=seatcount;
//         this.priceperseat=priceperseat;
//        }
//        total() {
//              return this.seatcount*this.priceperseat;
//         }
// }

// let movie=new Movieticket("chhavva",150,100);

// console.log(" movie name:",movie.moviename,"count of seat :",movie.seatcount,"price of seat :",movie.priceperseat,"total cost:",movie.total());


// // 4.Create a ElectricityBill class that calculates bill amount (unit × rate).


// class ElectricityBill{
//     constructor(unit,rate){
//      this.unit=unit;
//      this.rate=rate;
//      }
//       calculate(){
//         return this.unit*this.rate
//      }
// }

// let check1=new ElectricityBill(90,18);

// console.log(`unit ${check1.unit} rate ${check1.rate} totalcalculation : ${check1.calculate()}`);







// // Question 1:
// // Create a Book class with 6 properties:
// // title
// // author
// // publisher
// // price
// // pages
// // language
// // Use a constructor and display book details.


// class Book{
//     constructor(title,author,publisher,price,pages,language){

//         this.title=title;
//         this.author=author;
//         this.publisher=publisher;
//         this.price=price;
//         this.pages=pages;
//         this.language=language;

//     }
// }

//  let book=new Book("life time","shankar sir","sarthak",800,900,"english");

//  console.log(book);


// // Question 2
// // Create a BankAccount class with 5 properties:
// // accountHolder
// // accountNumber
// // bankName
// // accountType
// // balance
// // Use a constructor and create one object.

// class BankAccount{
//     constructor(accountHolder,accountNumber,bankName,accountType,balance){

//         this.accountHolder=accountHolder;
//         this.accountNumber=accountNumber;
//         this.bankName=bankName;
//         this.accountType=accountType;
//         this.balance=balance;

//     }
// }

// let bank=new BankAccount("atharva","454545","sbi","savings",80000);

// console.log(bank);




// // Question 3
// // Create a Mobile class with 6 properties:
// // brand
// // model
// // price
// // color
// // storage
// // battery
// // Add a method to display mobile details.

// class Mobile{
//     constructor(brand,model,price,color,storage,battery){
//         this.brand=brand;
//         this.model=model;
//         this.price=price;
//         this.color=color;
//         this.storage=storage;
//         this.battery=battery;
//     }
// }

// let mob=new Mobile("samsung","s23",80000,"black",128,"5000mh");

// console.log(mob);






// //////////////////////


// // 1.Create an Employee class with:
// // name, salary
// // Inherit it into Manager and add:
// // department
// // Display complete details.

// class Employee12{
//     constructor(name,salary){
//         this.name=name;
//         this.salary=salary;
//     }
// }

// class Manager extends Employee12{
//     constructor(name,salary,department){
//         super(name,salary);
//         this.department=department;
//     }

// }

// let emp=new Manager("atharva",80000,"backend");

// console.log(emp);


// // 2.Create a Person class with:
// // name, age
// // Create a Student class that inherits Person and adds:
// // rollNumber
// // Display all details.

// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;

//     }
//     }

//     class student12 extends person{
//         constructor(name,age,rollNo){

//             super( name,age);
//             this.rollNo=rollNo;

//         }
//     }

//     let tp=new student12("atharva",19,45);

// console.log(tp);


// // 3.Create a Product class with:
// // name, price
// // Create DiscountedProduct class that:
// // adds discountPercent

// class product{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;

//     }
// }

// class DiscountedProduct extends product{
//     constructor(name,price,DiscountedProduct){
//         super(name,price,DiscountedProduct)
//         this.DiscountedProduct=DiscountedProduct;
//     }
// }

// let pc= new DiscountedProduct("sarhak",450,5);

// console.log(pc);

// /////////////


// a) Write a program to calculate a student’s percentage from six subject marks and determine the result using a constructor:

// A class if percentage > 80, B class if percentage is between 60 and 80, C class if percentage is between 40 and 60, otherwise Fail.


// class student99 {
//     constructor(name, sub1, sub2, sub3, sub4, sub5, sub6) {
//         this.name = name;
//         this.sub1 = sub1;
//         this.sub2 = sub2;
//         this.sub3 = sub3;
//         this.sub4 = sub4;
//         this.sub5 = sub5;
//         this.sub6 = sub6;
//         this.total = this.sub1 + this.sub2 + this.sub3 + this.sub4 + this.sub5 + this.sub6
//         this.percentage = this.total / 6
//     }
// }
// let gt = new student99("aditya", 87, 91, 57, 80, 75, 90)

// console.log(gt.percentage);

// if (gt.percentage > 80) {
//     console.log("A class");

// }
// else if (gt.percentage > 60 && gt.percentage <= 80) {
//     console.log("B class");

// }

// else if (gt.percentage >= 40 && gt.percentage <= 60) {
//     console.log("c class");

// }
// else {
//     console.log("fail");

// }


// b) write a program check person is eligiable for vote based on that age using constructor


// class person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// let ok = new person("sarthak", 19);

// console.log(ok.age >= 18 ? "eligiable for vote" : "not eligiable for vote");

//////////////

// 1. Create Person → Employee → Manager to store name, employee ID, and department, and display all details using a Manager object


class person {
    constructor(name) {
        this.name = name
    }
}

class Employee extends person {
    constructor(name, employeeID) {
        super(name, employeeID)
        this.employeeID = employeeID
    }
}

class Manager extends Employee {
    constructor(name, employeeID, deperment) {
        super(name, employeeID, deperment)
        this.deperment = deperment

    }
}

let toevery = new Manager("atharva", "mh17", "backend developer")

console.log(toevery);



// 2. Design Order → PaidOrder → ShippedOrder to display order ID, payment mode, and delivery address.


class Design {
    constructor(orderID) {
        this.orderID = orderID
    }
}

class PaidOrder extends Design {
    constructor(orderID, paymentmode) {
        super(orderID, paymentmode)
        this.paymentmode = paymentmode
    }
}

class ShippedOrder extends PaidOrder {
    constructor(orderID, paymentmode, deliveryaddress) {
        super(orderID, paymentmode, deliveryaddress)
        this.deliveryaddress = deliveryaddress
    }
}


let toall = new ShippedOrder(4545, "cash", "akole MH")

console.log(toall);

// 3. Build Transport → Bus → LuxuryBus to calculate total fare based on seat count and price.


class Build {
  constructor(name) {
    this.name = name;
  }
}


class Transport extends Build {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}

class Bus1 extends Transport {
  constructor(name, type, seatCount) {
    super(name, type);
    this.seatCount = seatCount;
  }
}


class LuxuryBus extends Bus1 {
  constructor(name, seatCount, pricePerSeat) {
    super(name, "Bus", seatCount);
    this.pricePerSeat = pricePerSeat;
  }

  calculateTotalFare() {
    return this.seatCount * this.pricePerSeat;
  }
}

const luxuryBus1 = new LuxuryBus("Volvo Luxury", 40, 1200);

console.log("Bus Name:", luxuryBus1.name);
console.log("Seat Count:", luxuryBus1.seatCount);
console.log("Price per Seat:", luxuryBus1.pricePerSeat);
console.log("Total Fare:", luxuryBus1.calculateTotalFare());




class Bus extends LuxuryBus {
    constructor(seatcount, price, totalfare) {
        super(seatcount, price, totalfare)
        this.totalfare = this.seatcount * this.price
    }
}

let ok=new Bus(45,100,9);

console.log(ok.totalfare);





// 4. Create a JavaScript class named Employee with properties empName and salary.

class  Employee99{
    empName;
    salary;
};

let print= new Employee99();

print.empName="karan";
print.salary=25000;

console.log(print);



// Define a method getAnnualSalary() to calculate and display the employee’s yearly salary

 class Employee999{
    empName;
    salary;
    getAnnualSalary(){
        return this.salary*12;
    }
};

let print1= new Employee999();

print1.empName="karan";
print1.salary=25000;

console.log(print1.getAnnualSalary())



// 1.You have an array of student objects. Write code to return the names of students who scored above 80, sorted in descending order of their scores.

let student45=[
    {name:"atharva",score:99},
    {name:"aditya",score:86},
    {name:"sai",score:89}
]


let filter=student45.filter((student45)=>student45.score>80) 

let sort=filter.sort((a,b)=>b.score-a.score)

console.log(sort);



//

// 2.Write a loop that prints the Fibonacci sequence up to the 10th term without using recursion.

let a = 0;
let b = 1;

for (let i = 0; i < 10; i++) {
  console.log(a);
  let c = a + b;
  a = b;
  b = c;
}
 





// 3.Convert this object into an array of strings like "key: value".

let obj = {
  name: "atharva",
  age: 18,  skill: "python",
};

let result = [];

for (let key in obj) {
  result.push(`${key}: ${obj[key]}`);
}

console.log(result)
 





// 2)Write a JavaScript program that checks the current hour using Date().getHours() and prints Good  Morning, Good Afternoon, or Good Evening using if–else conditions.
 
 let date=new Date();
 let hour=date.getHours();
 
 if(hour>=0 && hour<12){
    console.log("good morning");
 }

 else if(hour>=12 && hour<17){
    console.log("good afternoon");
 }

 else  {
    console.log("good evening");
 }