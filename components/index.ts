export interface Component {
  element: HTMLElement;
  component(): HTMLElement;
}

export class AbstractComponent implements Component {
  element:HTMLElement;
  component(): HTMLElement {
    return this.element;
  }

  constructor(){
    this.element = document.createElement('div');
    this.element.innerHTML = 'hi dave'
  }
}