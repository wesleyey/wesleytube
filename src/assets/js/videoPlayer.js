import getBlobDuration from "get-blob-duration";

const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeButton");
const fullScrBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume");
const timeLine = document.getElementById("jsTimeline");

const regiterView = () => {
  const videoId = window.location.href.split("/video")[1];
  fetch(`/api/${videoId}/view`, {
    method: "POST"
  });
};

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeRange.value = videoPlayer.volume;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    volumeRange.value = 0;
    videoPlayer.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function exitFullScreen() {
  fullScrBtn.innerHTML = '<i class="fas fa-expand"></i>';
  //fullScrBtn.removeEventListener("click", exitFullScreen);
  fullScrBtn.addEventListener("click", fullScreen);
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function fullScreen() {
  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen();
  } else if (videoContainer.mozRequestFullScreen) {
    videoContainer.mozRequestFullScreen();
  } else if (videoContainer.webkitRequestFullscreen) {
    videoContainer.webkitRequestFullscreen();
  } else if (videoContainer.msRequestFullscreen) {
    videoContainer.msRequestFullscreen();
  }
  fullScrBtn.innerHTML = '<i class="fas fa-compress"></i>';
  fullScrBtn.removeEventListener("click", fullScreen);
  fullScrBtn.addEventListener("click", exitFullScreen);
}

const formatDate = seconds => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (totalSeconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  return `${hours}:${minutes}:${totalSeconds}`;
};

function getCurrentTime() {
  currentTime.innerHTML = formatDate(videoPlayer.currentTime);
  timeLine.value = videoPlayer.currentTime;
}

async function setTotalTime() {
  let duration;
  if (typeof (videoPlayer.duration) !== "number") {
    const blob = await fetch(videoPlayer.src).then(response => response.blob());
    duration = await getBlobDuration(blob);
  } else {
    duration = await videoPlayer.duration;
  }
  const totalTimeString = formatDate(duration);
  timeLine.max = duration;
  totalTime.innerHTML = totalTimeString;
  setInterval(getCurrentTime, 1000);
}

function handleEnded() {
  regiterView();
  videoPlayer.currentTime = 0;
  timeLine.value = 0;
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function handleVolumeControl(e) {
  //const volumeValue = e.target.value;
  const {
    target: { value }
  } = e;
  videoPlayer.volume = value;
  if (value >= 0.6) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else if (value >= 0.2) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
  } else {
    volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
  }
}

function handleTimelineControl(e) {
  const {
    target: { value }
  } = e;
  videoPlayer.currentTime = value;
}

function init() {
  videoPlayer.volume = 0.6;
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  fullScrBtn.addEventListener("click", fullScreen);
  videoPlayer.addEventListener("loadeddata", setTotalTime);
  videoPlayer.addEventListener("ended", handleEnded);
  volumeRange.addEventListener("input", handleVolumeControl);
  timeLine.addEventListener("input", handleTimelineControl);
}

if (videoContainer) {
  init();
}
