const gradeToLetter =require("./gradeToLetter")

describe("calculateGrade", () => {
  test("should return 'A' for a score of 95", () => {
    expect(gradeToLetter(95)).toBe("A");
  });

  test("should return 'B' for a score of 85", () => {
    expect(gradeToLetter(85)).toBe("B");
  });

  test("should return 'C' for a score of 75", () => {
    expect(gradeToLetter(75)).toBe("C");
  });

  test("should return 'D' for a score of 65", () => {
    expect(gradeToLetter(65)).toBe("D");
  });

  //New EPC
  test("should return 'F' for a score < 60", () => {
    expect(gradeToLetter(59)).toBe("F");
  });

  //New BVA
  test(" lower boundary testing for inputs", () => {
    expect(gradeToLetter(60)).toBe("D");
    expect(gradeToLetter(70)).toBe("C");
    expect(gradeToLetter(80)).toBe("B");
    expect(gradeToLetter(90)).toBe("A");
  });

  //New EPC
  test("should return error msg for an invalid input", () => {
    expect(gradeToLetter('hello')).toBe("Invalid input. Please provide a number.");
  });

});