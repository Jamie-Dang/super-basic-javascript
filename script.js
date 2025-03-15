/*
1. Difference(s) between `==` and `===`?
==: just only compares value
 ===: compares both value and type
For example: 
5 == "5" => True because string "5" is converted to a number
5 === "5" => false because type number cannot compare to type string
 */
// 1. Calculate BMI (Body Mass Index)
let weight = 60;
let height = 1.6;

// let bodyMassIndex = weight / (height * height);
let bodyMassIndex = weight / height ** 2;
console.log("Body Mass Index: ", bodyMassIndex);
console.log(`Body Mass Index: ${bodyMassIndex}`);

// 2. Calculate Simple Interest (principal * rate * time) => (p)
let principal = 100;
let rate = 5 / 100;
let time = 1;
let simpleInterest = principal * rate * time;
console.log("Simple Interest: ", simpleInterest);
console.log(`Simple Interest: ${simpleInterest}`);

// 3. Convert Currency (USD to local currency)
let usdAmount = 100;
let localCurrency = 100 * 2500;
console.log(
  "Convert currency from " +
    usdAmount +
    " USD to local currency => " +
    localCurrency +
    " VND"
);
console.log(
  `Convert currency from ${usdAmount} USD to local currency => ${localCurrency} VND`
);

// 4. Calculate Time (hours:minutes:seconds)
let hours = 1;
let minutes = hours * 60;
let seconds = minutes * 60;
console.log("Calculate Time => " + hours + ":" + minutes + ":" + seconds);
console.log(`Calculate Time => ${hours}:${minutes}:${seconds}`);

// ======================================================================
// Additional Challenges:
/*
1. Add more variables to make calculations more complex
2. Try using different mathematical operators 
3. Print results in different formats
4. Think about edge cases (negative numbers, zero, etc.)
5. Compare `let`, `const`, `var`
=> The big difference between let (function scoped -> accessible throughout a function) and var (block-scoped -> only accessible within {} curly braces) is scope and const means constant (their values cannot be changed except objects and arrays)
 */
// ======================================================================
// Exercise 1: Calculate Average Score
// Declare scores for 3 subjects
// let mathScore = 8;
// let physicScore = 7;
// let chemistryScore = 9;
// let averageScore = (mathScore + physicScore + chemistryScore) / 3;
// console.log("Average score: ", averageScore);

// ======================================================================
// Exercise 2: Calculate Rectangle Perimeter and Area
// Declare width and height
// let width = 5;
// let height = 3;
// // Calculate perimeter
// let perimeter = (width + height) * 2;
// let area = width * height;
// console.log("Perimeter : ", perimeter);
// console.log("Area : ", area);

// ======================================================================
// Exercise 3: Convert Celsius to Fahrenheit
// Temperature in Celsius
// let celsius = 30;
// // Convert to Fahrenheit
// let fahrenheit = (celsius * 9) / 5 + 32;
// // Print result
// console.log(celsius + "°C = " + fahrenheit + "°F");

// ======================================================================
// Exercise 4: Calculate Tip Amount
// Bill amount
// let billAmount = 200000;
// // Tip percentage
// let tipPercent = 10;
// // Calculate tip amount
// let tipAmount = (billAmount * tipPercent) / 100;
// // Calculate total amount
// let totalAmount = billAmount + tipAmount;
// // Print result
// console.log("Bill amount: ", billAmount);
// console.log("Tip amount: ", tipAmount);
// console.log("Total amount: ", totalAmount);

// ======================================================================
// Exercise 5: Check Even or Odd Number
// Number to check
// let number = 7;
// // Check if divisible by 2
// let isEven = number % 2 == 0 ? " is Even number" : " is Odd number";
// console.log(number + isEven);
