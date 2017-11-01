import '../css/style.css';

import View from './view';
import Model from './model';
import Controller from './controller';
import Service from './service';

class App {
  constructor() {
    const model = new Model(new Service());
    const view = new View();
    this.controller = new Controller(model, view);
  }

  init() {
    this.controller.render();
  }
}

const app = new App();

/* global window */
/* eslint no-undef: "error" */
window.addEventListener('load', () => app.init());
