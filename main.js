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

// ==========JavaScript Cardio Session One=========

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

console.log(reverseString("hello"));
console.log(palindrome("madam"));
console.log(reverseInteger(12345));
console.log(reverseInteger(-12345)); //Math.sign(string)

console.log(CapitalizeLetter("i code in javascript"));
console.log(maxCharacter("javascript"));
console.log(fizzBuzz());
