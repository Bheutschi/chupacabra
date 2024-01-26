function calculAverageGrades(grades) {
    const somme = grades.reduce((acc, grade) => acc + grade, 0);
    return somme  ;
}
