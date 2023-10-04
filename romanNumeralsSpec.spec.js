const { toRomanLazy, toRoman } = require("./romanNumerals.js");

console.log(toRomanLazy(4) === "IIII");
console.log(toRomanLazy(150) === "CL");
console.log(toRomanLazy(944) === "DCCCCXXXXIIII");

console.log(toRoman(4) === "IV");
console.log(toRoman(150) === "CL");
console.log(toRoman(944) === "CMXLIV");

describe("Testing the Lazy Roman Numeral Functions", () => {
  test("Convert 4 to a lazy Roman Numeral", () => {
    expect(toRomanLazy(4)).toBe("IIII");
  });

  test("Convert 150 to a lazy Roman Numeral", () => {
    expect(toRomanLazy(150)).toBe("CL");
  });

  test("Convert 944 to a lazy Roman Numeral", () => {
    expect(toRomanLazy(944)).toBe("DCCCCXXXXIIII");
  });

  test("test accurate roman numeral function", () => {
    expect(toRoman(5)).toBe("V");
  });
});

describe("Testing the Roman Numeral Functions", () => {
  test("Convert 4 to a Roman Numeral", () => {
    expect(toRoman(4)).toBe("IV");
  });

  test("Convert 150 to a Roman Numeral", () => {
    expect(toRoman(150)).toBe("CL");
  });

  test("Convert 944 to a Roman Numeral", () => {
    expect(toRoman(944)).toBe("CMXLIV");
  });
});
