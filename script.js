
// changing the color in automation
const changePaletteButton = document.getElementById('changePalette');
const body = document.body;

let currentPalette = 10;

const changePalette = () => {
  body.className = `palette-${currentPalette}`;
  currentPalette = (currentPalette + 10) % 50;
};

changePaletteButton.addEventListener('click', () => {
  changePalette();
});

setInterval(() => {
  changePalette();
}, 10000);

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  });

