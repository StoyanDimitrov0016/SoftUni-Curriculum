function gramophone(bandName, albumName, songName) {
    songDuration = albumName.length * bandName.length * songName.length / 2;
    let rotations = Math.ceil(songDuration / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}
