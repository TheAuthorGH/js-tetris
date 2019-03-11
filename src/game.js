import render from './render';

import State from './state';

export default class Game {
  constructor() {
    this.state = new State(); 
  }

  start() {
    setInterval(() => this.tick(), 1000/30);
  }

  tick() {
    window.requestAnimationFrame(() => render(this.state));
  }
};