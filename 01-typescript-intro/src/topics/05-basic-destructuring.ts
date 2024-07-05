interface AudioPlayer {
        audioVolume: number;
        songDuration: number;
        song: string;
        details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
};

const song = 'New Song';

// Destructuring de objetos
//Mi forma de hacerlo
// const { song:anotherSong, songDuration:duration, audioVolume:volume } = audioPlayer;
// const { author, year } = audioPlayer.details;
//Su forma de hacerlo
// const { song:anotherSong, songDuration:duration, audioVolume:volume, details } = audioPlayer;
// const { author, year } = details;
// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Volume: ', volume);
// console.log('Author: ', author);
// console.log('Year: ', year);

// Destructuring de arreglos
const [ , , trunks = 'Not Found'] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3: ', trunks);
// console.log('Personaje 3: ', dbz[3] || 'Personaje no encontrado');





export{}