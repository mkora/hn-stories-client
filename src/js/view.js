import { content } from './template';

export default class View {
  constructor() {
    /* global document */
    /* eslint no-undef: "error" */
    this.el = document.getElementById('app');
  }

  render(data) {
    this.el.innerHTML = content(data);
  }
}
