function calculAverageGrades(grades) {
    if (grades.length === 0) {
        return 0;
    }
    let sum = 0
    for(let i = 0; i < grades.length; i++) {
        const grade = grades[i];
        if (grade < 0) {
            sum += 1;
        }else{
            sum += grade;
        }
    }
    return sum / grades.length;
}
module.exports = calculAverageGrades;