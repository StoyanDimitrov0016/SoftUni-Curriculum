function trainTheTrainers(input) {
    let index = 0;
    let judgesCount = Number(input[index]);
    index++
    let command = input[index];
    let totalProblemCount = 0;
    let totalGradeSum = 0;
    while (command !== "Finish") {
        let problemCount = 0;
        let gradeSum = 0;
        let problemName = command;
        index++;
        for (let i = 0; i < judgesCount; i++) {
            totalProblemCount++;
            problemCount++;
            let grade = Number(input[index]);
            totalGradeSum += grade;
            gradeSum += grade;
            index++;
        }
        console.log(`${problemName} - ${(gradeSum / problemCount).toFixed(2)}.`);
        command = input[index];
    }
    console.log(`Student's final assessment is ${(totalGradeSum / totalProblemCount).toFixed(2)}.`);
}