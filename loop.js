

// // Create a for loop that logs numbers from 10 to 1 in reverse, but break if it reaches 5.

// for (let i = 10; i > 0; i--){
//     if (i === 5){
//         break;
//     }
//     console.log(i);
// }




// // Write a loop that finds the maximum value in [3, 7, 2, 9, 5] using a for loop.

// let ok=[3,7,2,9,5];

// let max=ok[0];

// for (let i=0; i<ok.length; i++){
//     if (ok[i]>max){
//         max=ok[i];
//     }
// }
// console.log(max);



//  // 1) Write a JavaScript program to check whether a given number is greater than 10 using the ternary operator. If the number is greater than 10, print  Greter than 10, otherwise print 10  or less using a named function.
//  function check(num){
//     return num>10 ? "Greater than 10" : "10 or less";
// }
// console.log(check(20));


// //  2) Write a JavaScript program using a named function to count how many even numbers are present between 1 and 10. Print the total count of even numbers.

// function count(){ 
//     let count=0;
//     for (let i=1; i<=10; i++){
//         if (i%2===0){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(count());



// //  3)Write a JavaScript program using the map() method to find the square of each element in an array and return a new array with the squared values using named function.

// let arr=[1,2,3,4,5];

// let newArr=arr.map(function(item){
//     return item*item;
// });
// console.log(newArr);


//////////////

// 1} Write a JavaScript program using a named function to print each element of an array with its index using the forEach() method.

function index(arr) {
    arr.forEach(e => {
        console.log(e, "index:", arr.indexOf(e));
    })
}
index([1, 2, 3, 4, 5])


//  2} Write a JavaScript program using a named function to check if an array contains any negative numbers

function check(arr) {
    let count = 0;
    arr.forEach(e => {
        if (e < 0) {
            count++;
        }
    })
    if (count > 0) {
        return true;
    }

    return false;
}
console.log(check([1, -2, 3, 4, 5]));



// 3} Write a JavaScript program using a named function to sort an array of numbers in ascending order.

function sort(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sort([1, 2, 3, 4, 5]));

// 4}  Write a JavaScript program using a named function to return a new array containing the lengths of each string in the original array.

function length(arr) {
    let newArr = [];
    arr.forEach(e => {
        newArr.push(e.length);
    })
    return newArr;
}
console.log(length(["hello sir ", "", "rutik", "atharva", "sarthak"]));

/////////