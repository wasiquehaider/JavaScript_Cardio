// ======Higher Order Functions======

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// =====ForLoop=====
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// =====ForEach=====
// companies.forEach((company, index, companies) => {
//   console.log(company);
// });

//=====Filter with ForLoop=====
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// =====Filter=====

// const canDrink = ages.filter(function(age, index, ages) {
//   if (age >= 21) {
//     return true;
//   }
// });

// =====Filter with arrow function=====
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// =====Filter Retail Company=====
// const retailCompanies = companies.filter(function(company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });

// =====Filter Retail companies using arrow function=====
// const retailCompanies = companies.filter(
//   company => company.category === "Retail"
// );
// console.log(retailCompanies);

// =====Get 80s Companies=====
// const companies80s = companies.filter(
//   company => company.start >= 1980 && company.start <= 1989
// );
// console.log(companies80s);

// =====Companies that lasted atleast 10 years=====
// const lastTenYears = companies.filter(
//   company => company.end - company.start >= 10
// );
// console.log(lastTenYears);

// =====MAP=====

// =====Create array of company names=====
// const companyNames = companies.map((company, index) => {
//   return company.name;
// });
// console.log(companyNames)

// =====Square of Ages=====
// const squareAges = ages.map(age => Math.sqrt(age));
// const agesTimesTwo = ages.map(age => age * 2);
// console.log(agesTimesTwo);

// =====SORT=====

// =====Sort by start year=====
// const sortedCompaniesByStartDate = companies.sort((c1, c2) =>
//   c1.start > c2.start ? 1 : -1
// );
// console.log(sortedCompaniesByStartDate);

// =====Sort Ages in accending order=====
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// =====Reduce=====

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// =====Reduce with arrow function=====
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log("AGESUM: ", ageSum);

// =====get total years for all companies=====

// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalYears);

// =====COMBINE METHODS=====

// const combined = ages
//   .map(age => age * 2)
//   .filter(age => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0);

// console.log(combined);

// ==============================================JavaScript Cardio Session One==============================================

function reverseString(str) {
  // =====first method=====
  // return str
  //   .split("")
  //   .reverse()
  //   .join("");

  // =====Second Method=====
  // let reverseString = "";

  // for (let i = str.length - 1; i >= 0; i--) {
  //   reverseString = reverseString + str[i];
  // }
  // return reverseString;

  // =====Third Method=====
  // let reverseString = "";

  // for (let i = 0; i <= str.length - 1; i++) {
  //   reverseString = str[i] + reverseString;
  // }
  // return reverseString;

  // =====Fourth Method=====
  // let reverseString = "";

  // for (let char of str) {
  //   reverseString = char + reverseString;
  // }
  // return reverseString;

  // =====Fifth  Method=====

  // let reverseString = "";
  // str.split("").forEach(char => (reverseString = char + reverseString));

  // =====Sixth MEthod=====
  return str
    .split("")
    .reduce((reverseString, char) => char + reverseString, "");
}

function palindrome(str) {
  // =====first Method=====
  const reverseString = str
    .split("")
    .reverse()
    .join("");
  return reverseString === str;
}

function reverseInteger(int) {
  const reverseString = int
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(reverseString) * Math.sign(int);
}

function CapitalizeLetter(str) {
  // =====First Method=====
  // const strArray = str.toLowerCase().split(" ");

  // for (let i = 0; i < strArray.length; i++) {
  //   strArray[i] =
  //     strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
  // }
  // return strArray.join(" ");

  // =====second method=====
  // return str
  //   .toLowerCase()
  //   .split(" ")
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(" ");

  // =====third method=====

  return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  str.split("").forEach(char => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    // debugger
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// console.log(reverseString("hello"));
// console.log(palindrome("madam"));
// console.log(reverseInteger(12345));
// console.log(reverseInteger(-12345)); //Math.sign(string)

// console.log(CapitalizeLetter("i code in javascript"));
// console.log(maxCharacter("javascript"));
// console.log(fizzBuzz());

// ==============================================JavaScript Cardio Session Two==============================================

function longestWord(sentence) {
  // create filtered array
  const wordArr = sentence.toLowerCase().match(/[a-z0-9]+/g);
  //sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  // if multiple words then put into Array
  const longestwordArr = sorted.filter(
    word => word.length === sorted[0].length
  );
  // check if more than one array value
  if (longestwordArr.length === 1) {
    return longestwordArr[0];
  } else {
    return longestwordArr;
  }
}

function chunkArray(arr, len) {
  //  first solution

  // // init chunked array
  // const chunkedArr = [];
  // // set index
  // let i = 0;

  // // loop while the length is less than the array length
  // while (i < arr.length) {
  //   // slice out from the index to the index + the chunk length and push on to the chunked array
  //   chunkedArr.push(arr.slice(i, i + len));
  //   //increment by the chunk lenght
  //   i += len;
  // }

  // return chunkedArr;

  // Second Solution

  // Init chunked array
  const chunkedArr = [];

  // loop thorugh array
  arr.forEach(val => {
    // get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // check if the last lenght is equal to the chunk length
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
}

function flattenArray(arrays) {
  //Solution 1
  // return arrays.reduce((a, b) => a.concat(b));
  //Solution 2
  // return [].concat.apply([], arrays);
  //Solution 3
  return [].concat(...arrays);
}
function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}
// helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
  return newStr;
}

// console.log(longestWord("Hello there , my name is wasique haider."));
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 4));
// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7, 8], [9, 0]]));
// console.log(isAnagram("Dormitory", "dirty room##"));
// console.log(letterChanges("Hello Therez"));

// ==============================================JavaScript Cardio Session Three==============================================

// Solution - ES5 arguments & for loops

// function addAll(){
//   var args = Array.prototype.slice.call(arguments)
//   var total = 0
//   for( var i = 0; i< args.length; i++ ){
//     total += args[i]
//   }
//   return total
// }

// Solution - ES6 ...res operator & reduce/ foreach

function addAll(...numbers) {
  // let total = 0;
  // numbers.forEach(num => (total += num));
  // return total;

  // with reduce

  return numbers.reduce((acc, cur) => acc + cur);
}

function sumAllPrimes(num) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i < num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

// solution 1 with aguments , indexof, filter

// function seekAndDestroy(arr) {
//   const args = Array.from(arguments);
//   function filterArr(arr) {
//     // return true if it is not in teh array
//     return args.indexOf(arr) === -1;
//   }
//   return arr.filter(filterArr);
// }

// Solution 2 res, filter and includes
function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

  const sortArray = arr2.sort((a, b) => a - b);
  arr1.forEach((val, i) => sortArray.splice(arr1[i], 0, -1));
  return sortArray;
}

function missigLetter(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split("").map((char, ind) => {
    if (str.charCodeAt(ind) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}
function evenAndoddSum(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum];
}

// console.log(addAll(2, 4, 6, 5, 7));
// console.log(sumAllPrimes(10));
// console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6, "hello"));
// const a = [-1, 150, 190, 170, -1, -1, 160, 180];
// console.log(sortByHeight(a));
// console.log(missigLetter("abce"));
// console.log(evenAndoddSum([50, 60, 60, 45, 71]));
