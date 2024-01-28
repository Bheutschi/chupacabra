// calculMoyenne.js
function calculAverageGrades(grades) {
    if (grades.length === 0) {
        return 0;
    }

    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];

        if (grade > 6) {
            console.warn("You shouldn't put a grade more than 6");
            return "You shouldn't put a grade more than 6";
        }
    }

    const adjustedGrades = grades.map(grade => (grade < 0 ? 1 : grade));

    const sum = adjustedGrades.reduce((acc, note) => acc + note, 0);
    return sum / grades.length;
}

module.exports = calculAverageGrades;
