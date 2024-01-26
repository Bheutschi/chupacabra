function calculAverageGrades(grades) {
    if (grades.length === 0) {
        return 0;
    }
    const adjustedGrades = grades.map(grade => (grade < 0 ? 1 : grade));
    const sum = adjustedGrades.reduce((acc, note) => acc + note, 0);
    return sum / grades.length;
}
module.exports = calculAverageGrades;