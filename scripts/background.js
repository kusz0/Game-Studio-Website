const videos = [
  "../videos/water.mp4",
  "../videos/Heven.mp4",
  "../videos/Interstellar.mp4",
  "../videos/Bomb.mp4",
  "../videos/Driftin.mp4",
];

let index = 0;
const video = document.getElementById("bgVideo");

function playNextVideo() {
  video.src = videos[index];
  video.play();
  index = (index + 1) % videos.length;
}

video.addEventListener("ended", playNextVideo);

// start pierwszego
playNextVideo();