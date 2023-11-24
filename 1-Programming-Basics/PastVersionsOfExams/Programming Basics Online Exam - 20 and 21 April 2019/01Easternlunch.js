function demo(input) {
    let easterBreadCount = Number(input[0]);
    let eggsCount = Number(input[1]);
    let cookiesKilos = Number(input[2]);
    let sum = easterBreadCount * 3.2 + eggsCount * 4.35 + cookiesKilos * 5.4 + eggsCount * 12 * 0.15;
    console.log(sum.toFixed(2));
}
demo([4,4,3]);