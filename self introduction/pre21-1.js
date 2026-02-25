// //You are building a parking system where all vehicles have parking hours, but max limits and fine rules differ.// //Create a parent class:
// //Vehicle
// //Store hours
// //Create child classes:
// //Bike
// //Max parking: 12 hours
// //Fine: ₹50 per extra hour
// //car
// //Max parking: 24 hours
// //Fine: ₹100 per extra hour
// //Each child should:
// //Check whether parking is allowed or penalty
// //Calculate fine if penalty applies


// class Vehicle1 {
//   constructor(hours) {
//     this.hours = hours;
//   }
// }

// class Bike extends Vehicle1 {
//   constructor(hours) {
//     super(hours);
//   }

//   checkParking() {
//     if (this.hours > 12) {
//       return (this.hours - 12) * 50;
//     }
//     return "No fine";
//   }
// }

// class Car extends Vehicle1 {
//   constructor(hours) {  
//     super(hours);
//   }

//   checkParking() {
//     if (this.hours > 24) {
//       return (this.hours - 24) * 100;
//     }
//     return "No fine";
//   }
// }




/////////////////////////

// 1.Electricity Bill System
// Create an electricity billing system.
// Create a parent class Electricity that stores used units.
// Create child classes:
// Home
// Free units: 100
// Rate: ₹5 per extra unit
// Commercial
// Free units: 200
// Rate: ₹8 per extra unit
// Each child class should:
// Check if bill is generated
// Calculate bill amount if units exceed limit
// solve this using inheritance 


class Electricity{
  constructor(units){
    this.units=units;

  }
  
}


class Home extends Electricity{
  constructor(units){
    super(units);
  }
 checkunit(){
  if(this.units>100){
    return (this.units-100)*5
  }
  return " no extra per unit";
 }
  
}

 class Commercial extends Electricity{
  constructor(units){
    super(units)
  }
  checkunit1(){
    if(this.unit>200){
      return(this.unit-200)*8
    }
    return "no extra per unit"
  }
 } 

 let to =new Home(122);


 let to1=new Commercial(281);


 console.log(to.checkunit());

 console.log(to1.checkunit1());
 
 

 ////////////////


//  class Electricity {
//   constructor(units) {
//     this.units = units;
//   }
// }

// class Home extends Electricity {
//   constructor(units) {
//     super(units);
//   }

//   checkUnit() {
//     if (this.units > 100) {
//       return (this.units - 100) * 5;
//     }
//     return "No extra per unit";
//   }
// }

// class Commercial extends Electricity {
//   constructor(units) {
//     super(units);
//   }

//   checkUnit() {
//     if (this.units > 200) {
//       return (this.units - 200) * 8;
//     }
//     return "No extra per unit";
//   }
// }


// let homeUser = new Home(99);
// let commercialUser = new Commercial(201);


// console.log(homeUser.checkUnit());        
// console.log(commercialUser.checkUnit());  
