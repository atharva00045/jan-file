// // 1. Numbers – Even & Odd Split

// // Store 10 integers in an array.

// // Use a for loop to separate them into two arrays: one for even numbers and one for odd numbers.

// //Print both arrays.



// ////////////
// let num=[1,2,4,3,5,4,6,7,12,487448,878,14,];

// let  even=[];
// let odd=[];

// for(let i=0;i<num.length;i++){
//     if(num[i] % 2===0  ){
//         even.push(num[i]);
//     }

//         else {
//             odd.push(num[i]);
//         }

// }
// console.log("even num",even);
// console.log('odd num',odd);



// // 2)A class has 5 students. Their exam marks are stored in an array. Write a program using a for loop to calculate the average marks of the class.


// let m=[80,50,90,111,45];

// let s=0;

// for(let i=0;i<m.length;i++){
//     s+=m[i]
// }
// console.log(s);


// let mark=[23,23,23,2,32,3]

// let sum=0;

// for( let i=0;i<mark.length;i++){
//     sum+=mark[i]
// }
// console.log(sum);







// //3)  A cricket team’s scores in 6 matches are stored in an array. Write a program to find the highest score and the lowest score using a for loop.



// let score=[79,109,85,124,90,98];

// let high=score[0];
// let low=score[0];

// for(let i=0;i<score.length;i++){
//     if(score[i]>high){
//         high=score[i]
//     }
//     else if (score[i]<low){
//         low=score[i]
//     }
// }

// console.log(high);
// console.log(low);


//////////////////////////////  loops  ///////////////////////////////



for( let i=0;i<5;i++){
    console.log(i);

}
console.log("");


for (let i=0;i<3;i=i+2){
    console.log(i);

}

console.log("");

for(let i=0;i<20;i=i+5){
    console.log(i);

}

console.log("");


for(let i=0;i>3;i++){
    console.log(i);

}

console.log("");

let ah=[45,45,45,5];

for(let i=0;i<ah.length;i++){
    console.log(ah[i]);

}
console.log("");

for (i=0;i<20;i=i+2){
    console.log(i);

}
console.log("");

for (i=3;i<30;i=i+3){
    console.log(i);

}
console.log("");

 for(i=4;i<40;i=i+4);
 console.log(i);
console.log("");

for(i=9;i<=90;i=i+9){
    console.log(i);

}

for(i=0;i>0;i++){
    console.log("atharva");

}




let gk=[12,212,23,45,56,45];

let odd=[];
let even=[];


for(let i=2;i<gk.length;i++){

    if(i%2==0){
        odd.push(i)
    }
    else {
         even.push(i)
    }

}

console.log(odd);
console.log(even);



// 1 Print multiplication table: Use a for loop to print the multiplication table of a given number (e.g., 7) up to 10 rows.

for(i=0;i<=10;i++){
  console.log(i*7);

}
console.log("");

// 2 Write a for loop to print numbers from 1 to 10.

for(i=0;i<=10;i++){
    console.log(i);

}

console.log("");



// 3 Write a for loop to calculate the sum of the first 5 natural numbers.

let d=[1,2,3,4,5]

sl=0;

for(let i=0;i<d.length;i++){
  sl+=d[i]
}
console.log(sl);

console.log("");

//4  Write a for loop to print the multiplication table of 7.

for( let i=7;i<70;i=i+7){
    console.log(i);

}


// 5 Write a for loop to print all even numbers from 1 to 20.

for(i=0;i<=20;i++){
  if(i%2==0){
  console.log(i);

  }
}

// 6 Write a for loop to find the factorial of a given number.

let hh=9;

let w=1
for(let i=1;i<=hh;i++){
  w*=i
}
console.log(w);



// 7 Write a for loop to print the elements of an array

 





//8 Write a nested for loop to print a 3x3 matrix.




// Write a for loop to check if a number is prime







// 10 Write a for loop to reverse a string.

let namel="atharva";

let na='';

for(let i=namel.length -1;i>0;i--){
      na+=namel[i]
}

console.log(na);



// 11 Write a for loop to print the Fibonacci series up to 10 terms.






// // practice time 5:30///////

// //   1)Write a JavaScript program using a for loop to print numbers from 1 to 10.


for (let i = 1; i <= 10; i++) {
    console.log(i)
}



console.log("");


// //   2)Write a program using a for loop to find the sum of all numbers.

let kk = [12, 12, 43, 67, 89];

let sum = 0;

for (let i = 0; i < kk.length; i++) {
    sum += kk[i]
}

console.log(sum);




// //   3)Write a program to reverse a string "JavaScript" using a for loop.



let name = "javascript";

let aa = "";

for (let i = name.length - 1; i >= 0; i--) {
    aa += name[i]

}
console.log();



// //2)Write a program using a for loop to find the sum of all numbers.
arras = [5, 10, 15, 20]

let s = 0;

for (let i = 0; i < arras.length; i++) {
    s += arras[i]
}
console.log(s);

//practice time 2pm/////


// 1. Print numbers from 1 to 5.

for (let i = 1; i <= 5; i++) {
  console.log(i);

}



//2. Print numbers from 5 to 1.

for (let i = 5; i >= 1; i--) {
  console.log(i);

}

console.log("");

//3. Print even numbers from 1 to 10.

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0)
    console.log(i);

}

//4. Print odd numbers from 1 to 10.
for (let i = 1; i < 10; i++) {
  if (i % 2 != 0)
    console.log(i);


}

console.log('');

//5. Find sum of numbers from 1 to 5.

sum = 0

for (let i = 0; i <= 5; i++) {
  sum += i
}

console.log(sum);
console.log("");


//6. Print multiplication table of 2.

for (let i = 2; i <= 20; i = i + 2) {
  console.log(i);

}

console.log("");

//7. Print square of numbers from 1 to 5.

for (let i = 1; i <= 5; i++) {
  console.log(i * i);

}

console.log("i")

console.log("");

//8. Print array elements.

let a = [11, 22, 33, 43, 54]
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);

}

console.log("a");
//9. Count from 0 to 4.

for (let i = 0; i <= 4; i++) {
  console.log(i);

}

1//0. Print “Hello” 3 times


for (let i = 0; i < 3; i++) {
  console.log("hello");
}

console.log("");

// let nab = "hello ";

// for (let i = 0; i < 1; i++) {
//   console.log(nab.repeat(3));

// }


// Print “Hello” 3 times use Array repeat () method.




// for(inti=0;i<5;i++){
//   printf("%d\n",i);
// }



// for(inti=0;i<5;i--){
//   printf("%d\n",i);
// }


// for(inti=0;i<5;i=i+2){
//   printf("%d\n",i);
// }

// diffrence between


console.log("");

///practice time 5:30 ///

// 1) let nums = [12, 5, 8, 130, 44];
// Use a for loop to find the largest number in the array.

let nums=[12,5,8,130,45244];
let large=nums[0]
for(i=0;i<nums.length;i++){
 if(nums[i]>large){
  large=nums[i]
 }
}
 
console.log("large number in array:",large);

console.log("");

//2) Write a JavaScript program using a for loop to print the multiplication table of 7 (from 7×1 to 7×10).

for(let i=1;i<=10;i++){
  console.log('7  ×',i,"",i*7);
  
} 


console.log("");

//3) let arr = [3, -1, -7, 8, -3, 5];
//Use a for loop to count how many negative numbers are present.


let arrmy=  [3,-1,-7,8,-3,5];

for(let i=0;i<arrmy.length;i++){
  if(arrmy[i]<0){
    console.log(arrmy[i]);
    
  }
}

console.log("");

////////////practic time////////


//1.Write a program to reverse a string "Hello" using a loop.

let ok="hellow";

let r=""

for(let i=ok.length-1;i>0;i--){
  r+=ok[i]
}
console.log(r);



//2. Write a program to count how many vowels are in the string "javascript".

let aaa='javascript'

let vo=''
for(let i=0; i<=aaa.length;i++){
  if(aaa[i]=="a"||aaa[i]=="e"||aaa[i]=="i"||aaa[i]=="o"||aaa[i]=="u"){
    vo+=aaa[i]
  }
  

}
console.log(vo.length,"vowels in string");


//3.Convert each character of a string into an array.

let string="atharva"

let arr=[];

for(let i=0;i<string.length;i++){
  arr.push(string[i])
  
}


console.log(arr);



//4.Given an array:
//[1,3,5,3,7,1,9]
//Remove duplicates without using any built-in function.

let nuk=[1,3,5,7,1,9];

let nk=[];

for(i=0;i<nuk.length;i++){
  if(nums[i]==1 || nums[i]==3 ||nums[i]==5 ||nums[i]==7 ||nums[i]==1 ||nums[i]==9 ){
       nk-=nuk
  }
}
console.log(nk);
/////////////
// const arr1 = [1, 3, 5, 3, 7, 1, 9];
// const result = [];

// for (let i = 0; i < arr1.length; i++) {
//   let exists = false;
//   for (let j = 0; j < result.length; j++) {
//     if (arr1[i] === result[j]) {
//       exists = true;
//       break;
//     }
//   }
//   if (!exists) {
//     result.push(arr1[i]);
//   }
// }

// console.log(result);  // [1, 3, 5, 7, 9]


//5.Convert ["ram", "raj", "komal"] to uppercase using a loop
let names = ["ram", "raj", "komal"];
let upperNames = [];

for (let i = 0; i < names.length; i++) {
  upperNames.push(names[i].toUpperCase());
}

console.log(upperNames); 







////practice time in sarthak sir////////


//1) Count how many odd numbers using a for  loop
   //arr = [11, 22, 33, 44, 55, 60];
 

   let a2=[11,22,33,44,55,60];

   let o1=0

   for(let i=0;i<a2.length;i++){
    if(a2[i]% 2 !==0){
    o1++;
    }
   }

console.log(o1);

//2)Reverse an array using a for loop
   //data = [1, 2, 3, 4, 5];
 
let name23 =[1,2,3,4,5] ;

let aa23 =[];

for (let i = name23.length - 1; i >= 0; i--) {
    aa23+= name23[i]

}
console.log(aa23);

//)Multiply each array value by 2
//numbers = [2, 4, 6, 8];
let numbers = [2, 4, 6, 8];
let Nkk = [];
for (let i=0;i<numbers.length;i++) {
    Nkk.push(numbers[i] * 2);
}
console.log(Nkk); 




//Use filter to return only the numbers greater than 20 from [10, 25, 5, 40].
 

let fi=[10,25,5,40];

let fi2=[]
for(let i=0;i<fi.length;i++ ){
  if (fi[i]>20) {
    fi2.push(fi[i])
  }
}

console.log(fi2);   


