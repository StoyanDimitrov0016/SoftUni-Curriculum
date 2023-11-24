function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let volumeRoom = width * length * height;
    let index = 3;
    let command = input[index];
    let occupiedVolume = 0;
    let doesRoomFull = false;
    while (command !== `Done`) {
        let box = Number(command);
        occupiedVolume += box;
        if (occupiedVolume > volumeRoom) {
            console.log(`No more free space! You need ${occupiedVolume - volumeRoom} Cubic meters more.`);
            doesRoomFull = true;
            break;
        }
        index++;
        command = input[index];
    }
    if (!doesRoomFull) {
        console.log(`${volumeRoom - occupiedVolume} Cubic meters left.`);
    }
}