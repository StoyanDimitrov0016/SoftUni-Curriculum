function demo(input) {
    // Входът се чете от конзолата и се състои от три реда:
    //  Първи ред – размер на яйцата – текст с възможности "Large", "Medium" или "Small"
    //  Втори ред – цвят на яйцата – текст с възможности "Red", "Green" или "Yellow"
    //  Трети ред – брой партиди – цяло число в интервала [1… 350]
    let eggsSize = input[0];
    let paint = input[1];
    let count = Number(input[2]);
    let revenue = 0;
    let pricePerCount = 0;
    if (eggsSize === "Large") {
        switch (paint) {
            case "Red": pricePerCount = 16; break;
            case "Green": pricePerCount = 12; break;
            case "Yellow": pricePerCount = 9; break;
        }
    } else if (eggsSize === "Medium") {
        switch (paint) {
            case "Red": pricePerCount = 13; break;
            case "Green": pricePerCount = 9; break;
            case "Yellow": pricePerCount = 7; break;
        }
    } else if (eggsSize === "Small") {
        switch (paint) {
            case "Red": pricePerCount = 9; break;
            case "Green": pricePerCount = 8; break;
            case "Yellow": pricePerCount = 5; break;
        }
    }
    revenue = (count * pricePerCount) * 0.65;
    console.log(`${revenue.toFixed(2)} leva.`);
}
demo(["Large", "Red", 7])