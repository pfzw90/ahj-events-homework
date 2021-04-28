import img from '../img/goblin.png';

export default class goblinLogic {
  constructor(fieldSize) {
    this.fieldSize = fieldSize;
    this.goblin = document.createElement('img');
    this.goblin.src = img;
    this.currentPos = 0;
    this.lose = 0;
    this.goblin.addEventListener('click', () => {
      clearTimeout(this.timeout);
      this.try();
    });
  }

  generateRand() {
    let rand = this.currentPos;
    while (rand === this.currentPos) {
      rand = Math.floor(Math.random() * (this.fieldSize ** 2 - 1));
    }
    return rand;
  }

  endGame() {
    this.lose = 0;
    document.getElementById(`cell_${this.currentPos}`).innerHTML = '';
    document.getElementById('start-btn').classList.toggle('visible');
  }

  losePoint() {
    this.lose += 1;
    if (this.lose === 5) {
      this.endGame();
    } else { window.clearTimeout(this.timeout); this.try(); }
  }

  try() {
    this.drawGoblin();
    this.timeout = window.setTimeout(() => {
      this.losePoint();
    }, 1000);
  }

  drawGoblin() {
    document.getElementById(`cell_${this.currentPos}`).innerHTML = '';
    this.currentPos = this.generateRand();
    document.getElementById(`cell_${this.currentPos}`).insertAdjacentElement('afterbegin', this.goblin);
  }
}
