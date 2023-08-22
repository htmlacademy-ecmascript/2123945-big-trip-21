(()=>{"use strict";class t extends HTMLElement{render(){this.innerHTML=this.createHtml()}createHtml(){return""}}const e=t;function r(t,...e){return t.reduce(((t,r,i)=>{const s=e[i-1];return void 0===s?t+r:Array.isArray(s)?t+s.join("")+r:t+s+r}))}customElements.define("brief-view",class extends e{constructor(){super(),this.classList.add("trip-info")}createHtml(){return r`
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>
        <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
      </div>

      <p class="trip-info__cost">
        Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    `}});customElements.define("filter-view",class extends e{constructor(){super(),this.classList.add("trip-filters")}createHtml(){return r`
      <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">
        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
        <label class="trip-filters__filter-label" for="filter-future">Future</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">
        <label class="trip-filters__filter-label" for="filter-present">Present</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
        <label class="trip-filters__filter-label" for="filter-past">Past</label>
      </div>
    `}});customElements.define("add-button-view",class extends e{createHtml(){return r`
      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    `}});customElements.define("sort-view",class extends e{constructor(){super(),this.classList.add("trip-sort")}createHtml(){return r`
      <div class="trip-sort__item  trip-sort__item--day">
        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked="">
        <label class="trip-sort__btn" for="sort-day">Day</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled="">
        <label class="trip-sort__btn" for="sort-event">Event</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--time">
        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
        <label class="trip-sort__btn" for="sort-time">Time</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--price">
        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
        <label class="trip-sort__btn" for="sort-price">Price</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--offer">
        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled="">
        <label class="trip-sort__btn" for="sort-offer">Offers</label>
      </div>
    `}});class i extends e{constructor(){super()}createHtml(){return r`

    `}}customElements.define("card-view",i);const s=i;class l extends e{constructor(){super()}createHtml(){return r`

    `}}customElements.define("editor-view",l);const a=l;customElements.define("list-view",class extends e{constructor(){super(),this.classList.add("trip-list"),this.setAttribute("role","list")}render(){const t=new Array(4).fill().map(((t,e)=>{const r=0===e?new a:new s;return r.classList.add("trip-list__item"),r.setAttribute("role","listitem"),r.render(),r}));this.replaceChildren(...t)}});const n=document.querySelector("brief-view"),o=document.querySelector("filter-view"),d=document.querySelector("add-button-view"),p=document.querySelector("sort-view"),c=document.querySelector("list-view");n.render(),o.render(),d.render(),p.render(),c.render()})();
//# sourceMappingURL=bundle.4e2c3062ef7a9834a72a.js.map