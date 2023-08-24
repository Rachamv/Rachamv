const changePaletteButton = document.getElementById('changePalette');
const body = document.body;

let currentPalette = 10;

const changePalette = () => {
  body.className = `palette-${currentPalette}`;
  currentPalette = (currentPalette + 10) % 80;
};

changePaletteButton.addEventListener('click', () => {
  changePalette();
});

setInterval(() => {
  changePalette();
}, 10000);
