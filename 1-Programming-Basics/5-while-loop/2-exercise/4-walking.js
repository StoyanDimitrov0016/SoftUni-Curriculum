function walking(input) {
    let index = 0;
    let currentInput = input[index];
    let stepsGoal = 10000;
    let totalSteps = 0;
    let doesShePrematurelyDone = false;
    while (currentInput !== `Going home`) {
        let steps = Number(currentInput);
        totalSteps += steps;
        if (totalSteps >= stepsGoal) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - stepsGoal} steps over the goal!`);
            doesShePrematurelyDone = true;
            break;
        }

        index++;
        currentInput = input[index];
    }
    let stepsToHome = Number(input[index + 1]);
    totalSteps += stepsToHome;
    if (!doesShePrematurelyDone) {
        if (totalSteps >= stepsGoal) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - stepsGoal} steps over the goal!`);
        }
        if (totalSteps < stepsGoal) {
            console.log(`${stepsGoal - totalSteps} more steps to reach goal.`);
        }
    }
}