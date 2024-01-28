const calculAverageGrades =  require('./calculAverageGrades');
test('Calculate average of grades with 4 and 5 should give 4.5', () => {
    const grades = [4,5];
    const average = calculAverageGrades(grades);
    expect(average).toBe(4.5);
});

test('Calculates average  with negative grades should return 1', () => {
    const grades = [-10, -5, -1 , -2];
    const average = calculAverageGrades(grades);
    expect(average).toBe(1);
});

test("When a grade is more than 6 should return the error answer", () => {
    const grades = [7];
    const average = calculAverageGrades(grades);
    expect(average).toMatch("You shouldn't put a grade more than 6");
});