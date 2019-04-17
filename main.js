function reverseString(str) {
  // first method
  // return str
  //   .split("")
  //   .reverse()
  //   .join("");

  // // Second Method
  // let reverseString = "";

  // for (let i = str.length - 1; i >= 0; i--) {
  //   reverseString = reverseString + str[i];
  // }
  // return reverseString;

  // Third Method
  // let reverseString = "";

  // for (let i = 0; i <= str.length - 1; i++) {
  //   reverseString = str[i] + reverseString;
  // }
  // return reverseString;

  // Fourth Method
  // let reverseString = "";

  // for (let char of str) {
  //   reverseString = char + reverseString;
  // }
  // return reverseString;

  // Fifth  Method

  // let reverseString = "";
  // str.split("").forEach(char => (reverseString = char + reverseString));

  // Sixth MEthod
  return str
    .split("")
    .reduce((reverseString, char) => char + reverseString, "");
}

function palindrome(str) {
  // first Method
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
  // First Method
  // const strArray = str.toLowerCase().split(" ");

  // for (let i = 0; i < strArray.length; i++) {
  //   strArray[i] =
  //     strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
  // }
  // return strArray.join(" ");

  // second method
  // return str
  //   .toLowerCase()
  //   .split(" ")
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(" ");

  // third method

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
console.log(fizzBuzz());
