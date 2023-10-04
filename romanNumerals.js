
const toRomanLazy = num =>{

  output ="";

  romanNumeralToArabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  romanNumeralPriorityOrder = ["M", "D", "C", "L", "X", "V", "I"];

  for (i = 0; i < romanNumeralPriorityOrder.length; i++) {
    divisor = romanNumeralToArabic[romanNumeralPriorityOrder[i]];

    let numLetter = Math.floor(num / divisor);
    //console.log(`Number of times we print ${romanNumeralPriorityOrder[i]} is ${numLetter}`)

    for (j = 0; j < numLetter; j++) {
      output += romanNumeralPriorityOrder[i];
    }

    num -= divisor * numLetter;
    //console.log(`new num is: ${num}`)
    //console.log(output)
  }

  return output;
}

//Tests
//console.log(toRomanLazy(4)); //IIII
//console.log(toRomanLazy(150)); //CL
//console.log(toRomanLazy(944)); //DCCCCXXXXIIII

function toRoman(num) {
  output = "";

  romanNumeralToArabic = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  romanNumeralPriorityOrder = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  for (i = 0; i < romanNumeralPriorityOrder.length; i++) {
    divisor = romanNumeralToArabic[romanNumeralPriorityOrder[i]];

    let numLetter = Math.floor(num / divisor);
    //console.log(`Number of times we print ${romanNumeralPriorityOrder[i]} is ${numLetter}`)

    for (j = 0; j < numLetter; j++) {
      output += romanNumeralPriorityOrder[i];
    }

    num -= divisor * numLetter;
    //console.log(`new num is: ${num}`)
    //console.log(output)
  }

  return output;
}

//console.log(toRoman(4)); //IV
//console.log(toRoman(150)); //CL
//console.log(toRoman(944)); //CMXLIV


module.exports = { toRoman, toRomanLazy };
