function buying(input) {

    let budget = Number(input[0]);
    let GPUs = Number(input[1]);
    let CPUs = Number(input[2]);
    let RAMs = Number(input[3]);

    let sumGPUs = GPUs * 250;
    let sumCPU = (sumGPUs * 0.35) * CPUs;
    let sumRAMs = (sumGPUs * 0.1) * RAMs;

    let sum = sumGPUs + sumCPU + sumRAMs;
    //discount
    if (GPUs > CPUs) {
        sum *= 0.85;
    }

    if (budget >= sum) {
        console.log(`You have ${(budget - sum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`);
    }
}
buying(["900", "2", "1", "3"]);