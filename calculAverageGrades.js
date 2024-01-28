// Function to calculate the average of grades, handling various cases
function calculAverageGrades(grades) {
    // Check if the input is invalid: null, empty, or contains non-numeric grades
    if (!grades || grades.length === 0 || !areNumericGrades(grades)) {
        return 1; // Return a default value of 1 for invalid input
    }

    // Check if there are invalid grades (greater than 6)
    if (hasInvalidGrades(grades)) {
        const errorMessage = "You shouldn't put a grade more than 6";
        console.warn(errorMessage); // Log a warning message
        return errorMessage; // Return the error message
    }

    // Adjust grades (convert negative grades to 1)
    const adjustedGrades = adjustGrades(grades);

    // Calculate the average and round to the nearest 0.5
    const average = calculateAverage(adjustedGrades);

    return average; // Return the rounded average
}

// Function to round grades to the nearest 0.5
function roundGrades(grades) {
    return Math.round(grades * 2) / 2;
}

// Function to check if all grades are numeric
function areNumericGrades(grades) {
    return grades.every(grade => typeof grade === 'number');
}

// Function to handle the case of empty grades
function handleEmptyGrades() {
    return 1; // Return a default value of 1 for empty grades
}

// Function to check if there are invalid grades (greater than 6)
function hasInvalidGrades(grades) {
    return grades.some(grade => grade > 6);
}

// Function to adjust grades, converting negative grades to 1
function adjustGrades(grades) {
    return grades.map(grade => (grade < 0 ? 1 : grade));
}

// Function to calculate the average of rounded grades
function calculateAverage(grades) {
    const sum = grades.reduce((acc, note) => acc + note, 0);
    return roundGrades(sum / grades.length); // Return the rounded average
}

// Export the main function for calculating average grades
module.exports = calculAverageGrades;