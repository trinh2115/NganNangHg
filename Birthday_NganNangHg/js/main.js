
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('HAPPY BIRTHDAY 🎂🎉NGÂN ┇𝘕𝘢𝘯𝘨𝘏𝘨┇🎉🎂').split('')
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

audio.loop = true;
audio.volume = 0.5;

let unlocked = false;

function startMusic() {
  if (unlocked) return;

  unlocked = true;

  const playPromise = audio.play();

  if (playPromise) {
    playPromise.catch(err => {
      console.log("Play blocked:", err);
      unlocked = false;
    });
  }

  // remove listener sau khi chạy
  document.removeEventListener("click", startMusic);
  document.removeEventListener("touchstart", startMusic);
}

// bắt mọi tương tác đầu tiên
document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });
document.addEventListener("pointerdown", startMusic, { once: true });