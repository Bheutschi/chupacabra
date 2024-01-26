function calculAverageGrades(grades) {
    if (grades.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }

    return sum ;
}
module.exports = calculAverageGrades;