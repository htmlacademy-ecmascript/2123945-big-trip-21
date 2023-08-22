import './views/brief-view.js';
import './views/filter-view.js';
import './views/add-button-view.js';
import './views/sort-view.js';
import './views/list-view.js';

/**
 * @type {import('./views/brief-view').default}
 */

const BriefView = document.querySelector('brief-view');

/**
 * @type {import('./views/filter-view').default}
 */

const FilterView = document.querySelector('filter-view');

/**
 * @type {import('./views/add-button-view').default}
 */

const AddButtonView = document.querySelector('add-button-view');

/**
 * @type {import('./views/sort-view').default}
 */

const SortView = document.querySelector('sort-view');

/**
 * @type {import('./views/list-view').default}
 */

const ListView = document.querySelector('list-view');

BriefView.render();
FilterView.render();
AddButtonView.render();
SortView.render();
ListView.render();
