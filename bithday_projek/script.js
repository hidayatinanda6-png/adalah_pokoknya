const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");
const musicToggle = document.getElementById("musicToggle");

const music = document.getElementById("music");
const video = document.getElementById("video");

const back1 = document.getElementById("backToStart1");
const back2 = document.getElementById("backToStart2");

function backToStart(){
  slide2.classList.remove("active");
  slide3.classList.remove("active");
  slide1.classList.add("active");

  video.pause();
  video.currentTime = 0;
}

back1.onclick = backToStart;
back2.onclick = backToStart;

openBtn.onclick = () => {
  slide1.classList.remove("active");
  slide2.classList.add("active");
  music.volume = 0.4;
  music.play().catch(()=>{});
};

nextBtn.onclick = () => {
  slide2.classList.remove("active");
  slide3.classList.add("active");
  setTimeout(()=>video.play().catch(()=>{}),800);
};

musicToggle.onclick = () => {
  if(music.paused){
    music.play();
    musicToggle.innerText="Music: ON";
  }else{
    music.pause();
    musicToggle.innerText="Music: OFF";
  }
};
