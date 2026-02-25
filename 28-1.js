// using Abstraction Create a function createCounter() keeps a private count
// returns methods: increment(), decrement(), getCount()


// function createCounter() {
//   let count = 0; 

//   return {
//     increment()
//      { count++; },

//     decrement()
//      { count--; },

//     getCount() 
//     { return count; }
//   };
// }


// let counter11 = createCounter();
// counter11.increment();
// console.log(`increment ${counter11.getCount()}`)
// counter11.decrement();
// console.log(`decrement ${counter11.getCount()}`);
 


// 29-1-2026 practice example


//1.Write a JavaScript program that iterates over an object using a for...in loop and removes all properties whose values are null, undefined, or an empty string.

let a={
  name:"",
 age:null,
 village: undefined,
 city:"akole"
}

for(let v in a){

if(a[v]===""){
delete a[v]
}
else if(typeof a[v]=="object"){
delete a[v]
  
  }

  else if(typeof a[v]==="undefined"){
    delete a[v]

    
  }
  // else{
  //   console.log(v);
    
  // }
  
}
  console.log(a);


//2.Write a JavaScript program that uses a for...of loop to calculate the total price of all items in an array of numbers.
 let item=[12,23,5,45,76,87];

let c=0;

for(let a of item){
  c+=a
  
}
console.log(c);

//3.Write a JavaScript program that uses a for...in loop to find the total sum of all numeric values present in an object. 

let sir={ 
    name:"sai",
    m1:18,
    m2:18
}
let g=0;

for(let key in sir){
 if(typeof sir[key]==="number"){
  g+=sir[key]
 }
}
console.log(g);

//4.Write a JavaScript program that uses a for...of loop to convert all words in an array to uppercase and store the results in a new array.

let d = ["hello", "world", "javascript"];

let e = [];

for (let word of d) {
  e.push(word.toUpperCase())
}
console.log(e);






