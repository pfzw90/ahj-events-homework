import GoblinField from './goblinField';
import GoblinLogic from './goblinLogic';

export default class goblinGame {
  constructor(fieldsize) {
    this.fieldSize = fieldsize;
  }

  startGame() {
    this.field = new GoblinField(this.fieldSize);
    this.field.draw();
    this.game = new GoblinLogic(this.fieldSize);

    this.startBtn = document.createElement('button');
    this.startBtn.id = 'start-btn';
    this.startBtn.innerText = 'Погнали!';
    document.getElementById('container').insertAdjacentElement('beforeend', this.startBtn);
    this.startBtn.classList.add('visible');
    this.startBtn.addEventListener('click', () => {
      this.startBtn.classList.toggle('visible');
      this.game.try();
    });
  }
}
