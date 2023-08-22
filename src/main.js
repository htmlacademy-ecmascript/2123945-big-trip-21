import './views/brief-view.js';
import './views/filter-view.js';

/**
 * @type {import('./views/brief-view').default}
 */

const BriefView = document.querySelector('brief-view');

/**
 * @type {import('./views/filter-view').default}
 */

const FilterView = document.querySelector('filter-view');

BriefView.render();
FilterView.render();
