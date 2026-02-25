// //1.You are building a bank system where different account types give different interest rates, but all accounts have one common thing → balance.

// //  Create a parent class Account
// //  Store balance
// //  Create child classes:
// //  SavingsAccount → gives 5% interest
// //  FixedDepositAccount → gives 7% interest
// //  Each child should:
// //  Calculate interest
// //  Add it to balance
// //  Show total amount
// //  Expected result
// //  Input: balance = 10000
// //  Output:
// //  Savings → 10500
// //  Fixed Deposit → 10700


// class Account {
//     constructor(balance) {
//         this.balance = balance;
//     }
// }
// class SavingsAccount extends Account {
//     saacc() {
//         let a = this.balance * 0.5;
//         let b = this.balance + a
//         console.log(" SavingsAccount :", b);

//     }
// }

// class FixedDepositAccount extends Account {

//     saacc1() {
//         let a1 = this.balance * 0.7;
//         let b1 = this.balance + a1;
//         console.log("FixedDepositAccount :", b1);

//     }

// }

// let a11 = new SavingsAccount(5000);
// a11.saacc();

// let b22 = new FixedDepositAccount(3000)
// b22.saacc1()


let today=new Date("2026/1/21,17");

let date=today.getHours();


if(date<12){
    console.log("good morning");
    
}
 
else if(date>=12 && date<17){
    console.log("good afternoon");
    
}

else{
    console.log("good night");
    
}


console.log(date);

let arr=[1,3,"a",true];
let ob={}
for(let ele of arr){
 if(typeof ele ==="number"){
    ob["number"]=[];
    ob["number"].push(ele)
 }
 else if(typeof ele === "string"){
    ob["string"]=[];
    ob["string"].p
 }
}
console.log(ob);


let bg=[1,2,2,3,4,4];
let arrl=[];

for(let e of bg){
    if(!arrl.includes(bg[e])){
        arrl.push(bg[e])
    }
}

console.log(arrl)