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