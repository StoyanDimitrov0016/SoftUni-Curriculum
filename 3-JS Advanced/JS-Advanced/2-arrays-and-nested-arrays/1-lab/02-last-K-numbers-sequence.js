function lastKnumsSequence(n, k) {
    let sequence = [1];
    // There is already existing number in the array (starting number). That's why it is i < n-1 in the for-loop

    for (let i = 0; i < n - 1; i++) {
        const lastKelementsSum = sequence.slice(-k).reduce((a, b) => a + b, 0);
        sequence.push(lastKelementsSum);
    }
    return sequence;
} console.log(lastKnumsSequence(8, 2));