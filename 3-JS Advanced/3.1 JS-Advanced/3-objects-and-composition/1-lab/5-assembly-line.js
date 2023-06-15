function createAssemblyLine() {

    const features = {

        hasClima: (vehicle) => {

            vehicle.temp = 21;
            vehicle.tempSettings = 21;

            vehicle.adjustTemp = () => {

                if (vehicle.temp < vehicle.tempSettings) {
                    vehicle.temp++;
                } else if (vehicle.temp > vehicle.tempSettings) {
                    vehicle.temp--;
                }
            };
        },

        hasAudio: (vehicle) => {

            vehicle.currentTrack = {
                name: '',
                artist: ''
            };
            vehicle.nowPlaying = () => {

                if (vehicle.currentTrack != null) {
                    console.log(`Now playing '${vehicle.currentTrack.name}' by ${vehicle.currentTrack.artist}`);
                }
            };
        },

        hasParktronic: (vehicle) => {

            vehicle.checkDistance = (distance) => {
                let indicator = '';

                if (distance < 0.5 && distance >= 0.25) {
                    indicator = 'Beep! Beep! Beep!';
                } else if (distance < 0.25 && distance >= 0.10) {
                    indicator = 'Beep! Beep!';
                } else if (distance < 0.1) {
                    indicator = 'Beep!';
                }

                console.log(indicator);
            }
        }
    }
    return features;
};