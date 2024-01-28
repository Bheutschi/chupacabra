function calculAverageGrades(grades) {
    if (!grades || grades.length === 0) {
        return 1;
    }

    if (hasInvalidGrades(grades)) {
        const errorMessage = "You shouldn't put a grade more than 6";
        console.warn(errorMessage);
        return errorMessage;
    }

    const adjustedGrades = adjustGrades(grades);
    const average = calculateAverage(adjustedGrades);

    return average;
}

function hasInvalidGrades(grades) {
    return grades.some(grade => grade > 6);
}

function adjustGrades(grades) {
    return grades.map(grade => (grade < 0 ? 1 : grade));
}

function calculateAverage(grades) {
    const sum = grades.reduce((acc, note) => acc + note, 0);
    return sum / grades.length;
}

module.exports = calculAverageGrades;
