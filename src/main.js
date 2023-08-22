import './views/brief-view.js';
import './views/filter-view.js';
import './views/add-button-view.js';
import './views/sort-view.js';

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
 * @type {import('./views/sort-view.js').default}
 */

const SortView = document.querySelector('sort-view');

BriefView.render();
FilterView.render();
AddButtonView.render();
SortView.render();
