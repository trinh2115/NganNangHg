function playBgMusic() {
  const audio = document.getElementById('bg-music');
  if (!audio) return;
  audio.play().catch(() => {});
}

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('HAPPY BIRTHDAY 🎉NGÂN🎂 [NangHg]').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 150);
      } else {
        playBgMusic();
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

const audio = document.getElementById("bg-music");

let isPlaying = false;

function startMusic() {
  if (isPlaying) return;

  audio.volume = 0.5; // tùy chỉnh
  audio.loop = true;

  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isPlaying = true;
        console.log("Music started");
      })
      .catch((err) => {
        console.log("Autoplay blocked:", err);
      });
  }

  // chỉ chạy 1 lần rồi tự gỡ
  document.removeEventListener("click", startMusic);
  document.removeEventListener("touchstart", startMusic);
}

// bắt cả click và touch để cover mọi thiết bị
document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);