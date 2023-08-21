import { createElement } from '../render';

function createNewEventListTemplate() {
  return `
    <ul class="trip-events__list"></ul>
  `;
}

export default class NewEventListView {
  getTemplate() {
    return createNewEventListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
