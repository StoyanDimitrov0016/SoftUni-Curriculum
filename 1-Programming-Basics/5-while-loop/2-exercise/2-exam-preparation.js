function exam(input) {
    let badGradesLimit = Number(input[0]);
    let actualBadGrades = 0;
    let inputText = input[1];
    let index = 1;
    let problemsCount = 0;
    let problemName = "";
    let sumGrades = 0;
    let isHeFailed = false;
    while (inputText !== "Enough") {
        if (actualBadGrades == badGradesLimit) {
            isHeFailed = true;
            break;
        }
        problemName = input[index];
        let problemGrade = Number(input[index + 1]);
        sumGrades += problemGrade;
        problemsCount++;
        index += 2;
        inputText = input[index];
        if (problemGrade <= 4) {
            actualBadGrades++;
        }
    }
    if (isHeFailed) {
        console.log(`You need a break, ${actualBadGrades} poor grades.`);

    } else {
        console.log(`Average score: ${(sumGrades / problemsCount).toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${problemName}`);
    }
}