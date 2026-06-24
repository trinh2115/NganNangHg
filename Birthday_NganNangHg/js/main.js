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