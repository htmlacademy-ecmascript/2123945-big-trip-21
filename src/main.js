import './views/brief-view.js';
import './views/filter-view.js';
import './views/add-button-view.js';

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

BriefView.render();
FilterView.render();
AddButtonView.render();
