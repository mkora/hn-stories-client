export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  render() {
    this.model.get().then((data) => {
      this.view.render(data);
    }).catch(err => console.error(err)); 
  }
}
