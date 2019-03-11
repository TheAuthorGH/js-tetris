import gameConfig from './gameConfig';
const {blockWidth, blockHeight} = gameConfig;

const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

const blockPixelSize = 20;
const gutterPixelSize = 4;
const cellPixelSize = blockPixelSize + (gutterPixelSize * 2);

const canvasWidth = cellPixelSize * blockWidth;
const canvasHeight = cellPixelSize * blockHeight;

canvas.setAttribute('width', canvasWidth);
canvas.setAttribute('height', canvasHeight);

export default function(state) {
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvasWidth, canvasHeight);
  for(let x = 0; x < blockWidth; x++) {
    for(let y = 0; y < blockHeight; y++) {
      if(state.blockAt(x, y)) {
        context.fillStyle = 'white';
        context.fillRect(x * cellPixelSize, y * cellPixelSize, cellPixelSize, cellPixelSize);
      }
    }
  }
};