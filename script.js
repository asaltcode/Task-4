// 1. Do the below programs in anonymous function & IIFE
// a. Print odd numbers in an array
console.log("1. Do the below programs in anonymous function & IIFE")

let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("A. odd numbers:-");
for (a = 0; a < arrayNumber.length; a++) {
  (function (odd) {
    if (odd % 2 !== 0) {
      console.log(arrayNumber[a]);
    }
  })(arrayNumber[a]);
}

console.log(""); //This creates a space on the console

// b. Convert all the strings to title caps in a string array
let title = ["javaScript iS a programming lanFUage"];

(function caps(wor){
  for(let bb = 0; bb < wor.length; bb++){
  let res = wor[bb].toString();
  let data = res.toLowerCase().split(" ")
  for(b = 0; b < data.length; b++){
    data[b] = data[b].charAt(0).toUpperCase() + data[b].slice(1);
  }
  console.log(data.join(" "))
  }
})(title)

// c. Sum of all numbers in an array

console.log("") //This creates a space on the console
console.log("C. Sum:-");

var add = [1, 2, 3, 4, 15]; // sums to 10
var Sum = 0;
for (var i = 0; i < add.length; i++) {
  (function (num) {
    Sum += num;
  })(add[i]);
}
console.log("Totale = " + Sum);

// d. Return all the Prime numbers in an array

console.log("") //This creates a space on the console
console.log("D. Prime numbers:-")

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (i = 1; i < numbers.length; i++) {
  (function text_prime(n) {
    if (n === 1) {
      return false;
    } else if (n === 2) {
      console.log(n);
      return true;
    } else {
      for (x = 2; x < n; x++) {
        if (n % x === 0) {
          return false;
        }
      }
      console.log(n);
      return true;
    }
  })(numbers[i])
}

// e. Return all the palindromes in an array
console.log(""); //This creates a space on the console
console.log("E. Palindromes:-");

let words = ["Madam", "Amma", "Appa", "Guvi", "Refer", "Malayalam", "School"];
(function(w){
  for(let e = 0; e < w.length; e++){
    let letter = w[e].toLowerCase(); // All words are converted to lowercase letters
    let reverse = letter.split("").reverse().join("");
    if (letter === reverse) {
      console.log(w[e]);
    }
  }
}(words))
// f. Return median of two sorted arrays of the same size
console.log(""); //This creates a space on the console
console.log("F. Median");

let arr1 = [11, 8, 15, 22, 3];
let arr2 = [50, 1, 4, 33, 14];
// Merge the two array and Sort out
let arrSort = arr1.concat(arr2).sort(function(a,b){
  return a - b;
})
//The length of two arrays
let l = arrSort.length;

(function(arr, n){
   if(n%2 == 0){
    var z = n/2;
    var e = arr[z];
    var q = arr[z - 1];
    var ans = (e  + q) / 2;
    console.log(ans);
   }else{
    let o = Math.floor(n / 2);
    console.log(arr[o]);
   }
}(arrSort, l));

//g. Remove duplicates from an array
console.log(""); //This creates a space on the console
console.log("G. Remove duplicate value:-");
let fruits = ["apple", "mango", "apple", "orange", "mango", "mango"];
console.log("This is the original array :- " , fruits);
(function(){
  let remove = [];
  for(g of fruits){
    if(remove.indexOf(g) === -1){
      remove.push(g);
    }
  }
  console.log("Answer:",remove.join(", "));
}());

// h. Rotate an array by k times

console.log(""); //This creates a space on the console
console.log("H. Rotate k times:-")
let arr =[1,2,3,4,5,6];

console.log("This is the original array, k = 4:- " , arr);

let arrL = arr.length;
let k = 4;
(function(a, l, k){
  for(let h = 0; h < l; h++){
    if(h < k){
      console.log(a[l + h - k])
    }else{
      console.log(a[h -k])
    }
  }
}(arr, arrL, k))




console.log(""); //This creates a space on the console
console.log("2. Do the below programs in arrow functions."); //This creates a space on the console
console.log(""); //This creates a space on the console
// 2. Do the below programs in arrow functions.
// a. Print odd numbers in an array

let arrayNum = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log("A. odd numbers:-");

let oddNumber = (odd) => {
  let result = [];
  for (let a = 0; a < odd.length; a++) {
    if (odd[a] % 2 !== 0) {
      result.push(arrayNum[a]);
    }
  }
  return result;
};
console.log(oddNumber(arrayNum));

console.log(""); //This creates a space on the console

// b. Convert all the strings to title caps in a string array
console.log("B. Convert to capital letters:-");
let pro = [
  "html",
  "css",
  "javascript",
  "mongo db",
  "express",
  "react",
  "node",
];
let caps = (lan) => {
  let result = [];
  for (b of lan) {
    result.push(b.toUpperCase());
  }
  return result;
};
console.log(caps(pro));

// c. Sum of all numbers in an array

console.log(""); //This creates a space on the console
console.log("C. Sum:-");

var add = [1, 2, 3, 4, 15]; // sums to 10
var Sum = 0;
let sum = (num) => {
  let result = num.reduce((pre, val) => pre + val);
  return result;
};
console.log("Total =", sum(add));

// d. Return all the Prime numbers in an array

console.log(""); //This creates a space on the console
console.log("D. Prime numbers:-");

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let prime = (n) => {
  let result = [];
  for (p = 0; p < n.length; p++) {
    let PN = 1;
    if (numbers[p] === 0 || n[p] === 1) {
      PN = 0;
    } else if (PN === 1) {
      for (x = 2; x <= n[p]; x++) {
        if (n[p] % x == 0 && x !== n[p]) {
          PN = 0;
        }
      }
    }
    if (PN === 1) {
      result.push(n[p]);
    }
  }
  return result;
};
console.log(prime(number));

// e. Return all the palindromes in an array
console.log(""); //This creates a space on the console
console.log("E. Palindromes:-");

let word = ["Madam", "Amma", "Appa", "Guvi", "Refer", "Malayalam", "School"];

let palindromes = (w) => {
  let result = [];
  for (e of w) {
    let letter = e.toLowerCase(); // All words are converted to lowercase letters
    let reverse = letter.split("").reverse().join("");
    if (letter === reverse) {
      result.push(e);
    }
  }
  return result;
};
console.log(palindromes(word));
