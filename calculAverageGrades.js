function calculAverageGrades(grades) {
    if (grades.length === 0) {
        return 0;
    }
    const sum = grades.reduce((acc, note) => acc + note, 0);
    return sum / grades.length;
}
module.exports = calculAverageGrades;