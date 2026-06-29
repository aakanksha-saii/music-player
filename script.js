const songs = [
    "songs/song1.mp3",
    "songs/song2.mp3",
    "songs/song3.mp3"
];

const titles = [
    "Song 1",
    "Song 2",
    "Song 3"
];

const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

let songIndex = 0;

function loadSong(index){
    audio.src = songs[index];
    title.textContent = titles[index];
}

function playPause(){
    if(audio.paused){
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong(){
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    audio.play();
}

function prevSong(){
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    audio.play();
}

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

loadSong(songIndex);