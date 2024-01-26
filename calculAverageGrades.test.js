const calculAverageGrades =  require('./calculAverageGrades');
test('Calcul average of grades with 4 and 5 should give 4.5', () => {
    const grades = [4,5];
    const average = calculAverageGrades(grades);
    expect(average).toBe(4.5);
});