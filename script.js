
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

// Update the content of the span element with the current year
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;
