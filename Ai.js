// 1} count frequency of each character in "Aabbbbccdd" || output format {"a":2,"b":4,"c":2,"d":2}

const str = "Aabbbbccdd";

const freq = {};

for (let ch of str) {
  ch = ch.toLowerCase(); // convert to lowercase
  freq[ch] = (freq[ch] || 0) + 1;
}

console.log(JSON.stringify(freq));


// 2} REMOVE DUBLICATE CHARACTERS FROM A STRING WITHOUT USING SET  Ex :"programming" into "progamin" code these program in js

function removeDuplicates(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Check if character already exists in result
    if (result.indexOf(char) === -1) {
      result += char;
    }
  }

  return result;
}

const input = "programming";
console.log(removeDuplicates(input)); // "progamin"



// 3} group element by data type input [1,"a",2,"b",true,false] in js 


const arr = [1, "a", 2, "b", true, false];

const grouped = {};

for (let i = 0; i < arr.length; i++) {
  const type = typeof arr[i];
  grouped[type] = grouped[type] || [];
  grouped[type].push(arr[i]);
}

console.log(grouped);


// 4} find the longest word in :"javascript is powerful language"" in js 

 const str1 = "javascript is powerful language";

const words = str1.split(" ");
let longest = "";

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i];
  }
}

console.log(longest);



// 5}reverse only alternate words not sentence "i love learning java scrpt

const str2 = "i love learning java scrpt";

const words1 = str2.split(" ");

for (let i = 1; i < words1.length; i += 2) {
  words1[i] = words1[i].split("").reverse().join("");
}

const result = words1.join(" ");
console.log(result);

//  6] remove  duplicate number from arry with out using set()
// [1,2,2,3,4,4]

const arr00= [1, 2, 2, 3, 4, 4];
const unique = [];

for (let i = 0; i < arr00.length; i++) {
  let isDuplicate = false;

  // Check if arr[i] already exists in unique array
  for (let j = 0; j < unique.length; j++) {
    if (arr00[i] === unique[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    unique.push(arr00[i]);
  }
}

console.log(unique);




//7}  write a code to check wether number is prime or not

function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  if (num === 2) return true; // 2 is prime

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // divisible by i → not prime
    }
  }

  return true; // no divisors → prime
}

// Example usage
const number = 17;
console.log(`${number} is prime?`, isPrime(number));



// 8}longest word with out repeating letter "apple banana world code"

const strrr = "apple banana world code";
const wordsr = str.split(" ");

function hasUniqueLetters(wordr) {
  const seen = {};
  for (let ch of wordr) {
    if (seen[ch]) return false; // repeated letter found
    seen[ch] = true;
  }
  return true;
}

let longestr = "";

for (let word of words) {
  if (hasUniqueLetters(word) && word.length > longestr.length) {
    longestr = word;
  }
}

console.log(longestr);


// 9} checke if string can become palindrome after removing one character"abca"


function validPalindrome(s) {
  function isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // Try removing either left or right character
      return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
    }
    left++;
    right--;
  }

  return true; // already palindrome
}

// Example usage
const str23 = "abca";
console.log(validPalindrome(str23)); // true


// 10}  find longest common prefix ["flower ","flow","flight"]

const strs = ["flower", "flow", "flight"];

if (strs.length === 0) {
  console.log("");
} else {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1); // remove last character
      if (prefix === "") break;
    }
  }

  console.log(prefix);
}
