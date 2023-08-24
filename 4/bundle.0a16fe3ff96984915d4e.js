(()=>{"use strict";var e={766:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(537),s=a.n(i),r=a(645),c=a.n(r)()(s());c.push([e.id,".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n","",{version:3,sources:["webpack://./src/views/list-view.css"],names:[],mappings:"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,iBAAiB;AACnB",sourcesContent:[".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n"],sourceRoot:""}]);const n=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",i=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),i&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),i&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(i)for(var n=0;n<this.length;n++){var d=this[n][0];null!=d&&(c[d]=!0)}for(var o=0;o<e.length;o++){var f=[].concat(e[o]);i&&c[f[0]]||(void 0!==r&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=r),a&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=a):f[2]=a),s&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=s):f[4]="".concat(s)),t.push(f))}},t}},537:e=>{e.exports=function(e){var t=e[1],a=e[3];if(!a)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function a(e){for(var a=-1,i=0;i<t.length;i++)if(t[i].identifier===e){a=i;break}return a}function i(e,i){for(var r={},c=[],n=0;n<e.length;n++){var d=e[n],o=i.base?d[0]+i.base:d[0],f=r[o]||0,l="".concat(o," ").concat(f);r[o]=f+1;var p=a(l),b={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(b);else{var u=s(b,i);i.byIndex=n,t.splice(n,0,{identifier:l,updater:u,references:1})}c.push(l)}return c}function s(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var n=a(r[c]);t[n].references--}for(var d=i(e,s),o=0;o<r.length;o++){var f=a(r[o]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}r=d}}},569:e=>{var t={};e.exports=function(e,a){var i=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var i="";a.supports&&(i+="@supports (".concat(a.supports,") {")),a.media&&(i+="@media ".concat(a.media," {"));var s=void 0!==a.layer;s&&(i+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),i+=a.css,s&&(i+="}"),a.media&&(i+="}"),a.supports&&(i+="}");var r=a.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.nc=void 0,(()=>{class e extends HTMLElement{constructor(){super(),this.state=Object.create(null)}setState(e){Object.assign(this.state,e),this.render()}render(){this.innerHTML=this.createHtml()}createHtml(){return""}}const t=e;function i(e,...t){return e.reduce(((e,a,i)=>{const s=t[i-1];return void 0===s?e+a:Array.isArray(s)?e+s.join("")+a:e+s+a}))}customElements.define("brief-view",class extends t{constructor(){super(),this.classList.add("trip-info")}createHtml(){return i`
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>
        <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
      </div>

      <p class="trip-info__cost">
        Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    `}});customElements.define("filter-view",class extends t{constructor(){super(),this.classList.add("trip-filters")}createHtml(){return i`
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
    `}});customElements.define("add-button-view",class extends t{createHtml(){return i`
      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    `}});customElements.define("sort-view",class extends t{constructor(){super(),this.classList.add("trip-sort")}createHtml(){return i`
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
    `}});var s=a(379),r=a.n(s),c=a(795),n=a.n(c),d=a(569),o=a.n(d),f=a(565),l=a.n(f),p=a(216),b=a.n(p),u=a(589),v=a.n(u),_=a(766),m={};m.styleTagTransform=v(),m.setAttributes=l(),m.insert=o().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=b(),r()(_.Z,m),_.Z&&_.Z.locals&&_.Z.locals;class h extends t{constructor(){super()}createHtml(){return i`
      <div class="event">
        ${this.createStartDateHtml()}
        ${this.createTypeIconHtml()}
        ${this.createDestinationHtml()}
        ${this.createScheduleHtml()}
        ${this.createPriceHtml()}
        ${this.createOfferListHtml()}
        ${this.createFavouriteButtonHtml()}
        ${this.createOpenButtonHtml()}
      </div>
    `}createStartDateHtml(){return i`
      <time class="event__date" datetime="2019-03-18">MAR 18</time>
    `}createTypeIconHtml(){return i`
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
      </div>
    `}createDestinationHtml(){return i`
      <h3 class="event__title">Taxi Amsterdam</h3>
    `}createScheduleHtml(){return i`
      <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
        —
        <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
      </p>
      <p class="event__duration">30M</p>
    </div>
    `}createPriceHtml(){return i`
      <p class="event__price">
      €&nbsp;<span class="event__price-value">20</span>
      </p>
    `}createOfferListHtml(){return i`
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">Order Uber</span>
          +€&nbsp;
          <span class="event__offer-price">20</span>
        </li>
      </ul>
    `}createFavouriteButtonHtml(){return i`
      <button class="event__favorite-btn event__favorite-btn--active" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
        </svg>
      </button>
    `}createOpenButtonHtml(){return i`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `}}customElements.define("card-view",h);const y=h;class g extends t{constructor(){super()}createHtml(){return i`
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          ${this.createTypeFieldHtml()}
          ${this.createDestinationFieldHtml()}
          ${this.createScheduleFieldHtml()}
          ${this.createPriceFieldHtml()}
          ${this.createSubmitButtonHtml()}
          ${this.createResetButtonHtml()}
          ${this.createCloseButtonHtml()}
        </header>

        <section class="event__details">
        ${this.createOfferListFieldHtml()}
        ${this.createDestinationHtml()}
        </section>
      </form>
    `}createTypeFieldHtml(){return i`
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            <div class="event__type-item">
              <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
            </div>
          </fieldset>
        </div>
      </div>
    `}createDestinationFieldHtml(){return i`
    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        Flight
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
      <datalist id="destination-list-1">
        <option value="Amsterdam"></option>
        <option value="Geneva"></option>
        <option value="Chamonix"></option>
      </datalist>
    </div>
    `}createScheduleFieldHtml(){return i`
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">
      </div>
    `}createPriceFieldHtml(){return i`
    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        €
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
    </div>
    `}createSubmitButtonHtml(){return i`
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `}createResetButtonHtml(){return i`
      <button class="event__reset-btn" type="reset">Cancel</button>
    `}createCloseButtonHtml(){return i`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Close event</span>
      </button>
    `}createOfferListFieldHtml(){return i`
      <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked="">
          <label class="event__offer-label" for="event-offer-luggage-1">
            <span class="event__offer-title">Add luggage</span>
            +€&nbsp;
            <span class="event__offer-price">30</span>
          </label>
        </div>

        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort">
          <label class="event__offer-label" for="event-offer-comfort-1">
            <span class="event__offer-title">Switch to comfort class</span>
            +€&nbsp;
            <span class="event__offer-price">100</span>
          </label>
        </div>
      </div>
    </section>
    `}createDestinationHtml(){return i`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>

        <div class="event__photos-container">
          <div class="event__photos-tape">
            <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">
          </div>
        </div>
      </section>
    `}}customElements.define("editor-view",g);const w=g;customElements.define("list-view",class extends t{constructor(){super(),this.classList.add("trip-list"),this.setAttribute("role","list")}render(){const e=new Array(4).fill().map(((e,t)=>{const a=0===t?new w:new y;return a.classList.add("trip-list__item"),a.setAttribute("role","listitem"),a.render(),a}));this.replaceChildren(...e)}});const T=class{},j=class extends T{constructor(e){super(),this.id=e.id,this.basePrice=e.base_price,this.dateFrom=e.date_from,this.dateTo=e.date_to,this.destinationId=e.destination,this.isFavorite=e.is_favorite,this.offerIds=structuredClone(e.offers),this.type=e.type}},x=JSON.parse('[{"id":"c1435607-468d-43ee-b613-ec29f2432fcb","base_price":7939,"date_from":"2023-10-06T16:25:12.137Z","date_to":"2023-10-07T13:38:12.137Z","destination":"ada95d30-aa92-43ea-9149-718cae143e28","is_favorite":true,"offers":["4be82d96-00a6-42ea-a789-5b9c77113bbd"],"type":"bus"},{"id":"e956bdfa-aad2-4f35-ae5b-9ba0d8f5b63e","base_price":3553,"date_from":"2023-10-08T04:29:12.137Z","date_to":"2023-10-08T21:36:12.137Z","destination":"6a95d228-c660-4b73-a04e-c1a9eed4b771","is_favorite":true,"offers":["2f65ac84-01ce-4bb2-b24b-096dbb33f6a8","ab4014bc-0419-431d-b8b2-3ce614f03685","667714bd-122d-429f-a38e-86b253f431a6","e4d68623-0389-44df-b96d-57a5e2d14765","d929f152-1ac4-4f1c-9215-e30a94576b76","8f4ce1ac-b734-452c-a319-1533da439e4a"],"type":"flight"},{"id":"ab2da60a-0d8e-4fa5-b93d-c73980e71508","base_price":4638,"date_from":"2023-10-10T05:59:12.137Z","date_to":"2023-10-11T04:02:12.137Z","destination":"6a95d228-c660-4b73-a04e-c1a9eed4b771","is_favorite":false,"offers":["1c21e069-78ee-4119-bff3-e00008827c7d","2e7f1ea3-48ec-4036-ae71-79ae53576a89","c643f5c1-3a20-4de3-bdfc-f7f5696465f1"],"type":"train"},{"id":"6ba078f2-e4c1-40e6-8119-06620267a476","base_price":6870,"date_from":"2023-10-11T18:52:12.137Z","date_to":"2023-10-12T07:49:12.137Z","destination":"ada95d30-aa92-43ea-9149-718cae143e28","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"de4368b5-41d5-4881-89ed-eda5357de2f1","base_price":3183,"date_from":"2023-10-14T00:40:12.137Z","date_to":"2023-10-14T20:31:12.137Z","destination":"3f4fb5bd-a207-42f3-b54f-32cb36e438b0","is_favorite":false,"offers":["07485cea-1056-4547-a9ee-642c8ab16f7f","b4a44fda-f682-4d36-815e-303cd1ee4263","81ef88cf-7399-43fc-b5d0-f5503fef4ab4","ce1490c2-ecb4-4e6c-8419-d83d63cce008","97ce25d0-acbb-45a3-92e6-1b9160a25da0"],"type":"taxi"},{"id":"8fceab39-c6e0-463e-a9d1-c3bcce419893","base_price":4771,"date_from":"2023-10-16T00:59:12.137Z","date_to":"2023-10-16T23:49:12.137Z","destination":"ada95d30-aa92-43ea-9149-718cae143e28","is_favorite":false,"offers":["f455833f-733c-415b-97b8-6738ef74e4fc","cc7a8678-6fb3-439f-8e82-8aead2d791db","d86a59e4-9805-4d18-b62d-1b4d5c11ee8a","df81baa3-46bd-4769-ba3f-c13a4154a09e","b03077af-7492-42dd-93f2-bb44a8772c2b"],"type":"check-in"},{"id":"d53461ed-d372-45b5-9c94-7de156850ae5","base_price":5437,"date_from":"2023-10-17T14:33:12.137Z","date_to":"2023-10-19T08:53:12.137Z","destination":"ada95d30-aa92-43ea-9149-718cae143e28","is_favorite":false,"offers":["9f838924-6221-4062-aea4-3a7a9c30659e","364d413b-6ad0-4cc8-b398-2b3cf8fe72d0"],"type":"drive"},{"id":"fd8a29df-102f-40b5-b829-43d18cb323c9","base_price":9855,"date_from":"2023-10-20T11:05:12.137Z","date_to":"2023-10-21T06:46:12.137Z","destination":"6a95d228-c660-4b73-a04e-c1a9eed4b771","is_favorite":true,"offers":[],"type":"drive"},{"id":"a3b1d0fa-4999-4603-ad50-7a12362df135","base_price":4502,"date_from":"2023-10-21T22:15:12.137Z","date_to":"2023-10-23T03:07:12.137Z","destination":"88de64f6-8144-4130-8494-380e1431b4ce","is_favorite":true,"offers":["1c21e069-78ee-4119-bff3-e00008827c7d","2e7f1ea3-48ec-4036-ae71-79ae53576a89","c643f5c1-3a20-4de3-bdfc-f7f5696465f1"],"type":"train"},{"id":"ce936f87-ba6f-4645-aa95-24472bebabe9","base_price":4394,"date_from":"2023-10-24T14:26:12.137Z","date_to":"2023-10-25T01:04:12.137Z","destination":"dde3ab4c-5cec-4cb0-b8bf-1695b7b4e190","is_favorite":true,"offers":["23aacd41-df44-4911-9a3a-b89e4363daef","3cdcbd0f-9236-486b-930e-7930e0073b9f","4be82d96-00a6-42ea-a789-5b9c77113bbd"],"type":"bus"},{"id":"615db2cb-53a1-4f60-8602-98d3527094ef","base_price":9711,"date_from":"2023-10-26T18:14:12.137Z","date_to":"2023-10-27T01:51:12.137Z","destination":"6a95d228-c660-4b73-a04e-c1a9eed4b771","is_favorite":false,"offers":["23aacd41-df44-4911-9a3a-b89e4363daef","3cdcbd0f-9236-486b-930e-7930e0073b9f","4be82d96-00a6-42ea-a789-5b9c77113bbd"],"type":"bus"},{"id":"1aadf710-64e7-4300-be45-cc374f5de873","base_price":3379,"date_from":"2023-10-28T08:47:12.137Z","date_to":"2023-10-29T20:00:12.137Z","destination":"c2b34d85-b20e-4d86-a177-392261bc31f2","is_favorite":true,"offers":["b4a44fda-f682-4d36-815e-303cd1ee4263","81ef88cf-7399-43fc-b5d0-f5503fef4ab4","ce1490c2-ecb4-4e6c-8419-d83d63cce008","97ce25d0-acbb-45a3-92e6-1b9160a25da0"],"type":"taxi"},{"id":"317a929d-2166-4507-ba0d-069b63c5d459","base_price":8161,"date_from":"2023-10-30T04:11:12.137Z","date_to":"2023-10-31T05:17:12.137Z","destination":"88de64f6-8144-4130-8494-380e1431b4ce","is_favorite":true,"offers":["b4a44fda-f682-4d36-815e-303cd1ee4263","81ef88cf-7399-43fc-b5d0-f5503fef4ab4","ce1490c2-ecb4-4e6c-8419-d83d63cce008","97ce25d0-acbb-45a3-92e6-1b9160a25da0"],"type":"taxi"},{"id":"3d754091-6537-4363-9211-e9c3a2561f8f","base_price":9367,"date_from":"2023-11-01T04:38:12.137Z","date_to":"2023-11-02T18:48:12.137Z","destination":"97eba8a3-75dc-4902-80d8-0bba916e1735","is_favorite":false,"offers":[],"type":"flight"},{"id":"36319252-880c-4ff4-92fa-21629c3feaaa","base_price":590,"date_from":"2023-11-04T03:45:12.137Z","date_to":"2023-11-05T02:04:12.137Z","destination":"dde3ab4c-5cec-4cb0-b8bf-1695b7b4e190","is_favorite":true,"offers":[],"type":"check-in"},{"id":"427a72fc-0018-461b-8cd1-22c6b9020e2a","base_price":3804,"date_from":"2023-11-06T11:48:12.137Z","date_to":"2023-11-08T12:25:12.137Z","destination":"fca87a37-8a40-40cd-afcb-a188d848de7b","is_favorite":true,"offers":[],"type":"sightseeing"},{"id":"d59ba2d8-2d3f-48ca-918b-b1410db04f37","base_price":6419,"date_from":"2023-11-09T15:07:12.137Z","date_to":"2023-11-10T01:30:12.137Z","destination":"dde3ab4c-5cec-4cb0-b8bf-1695b7b4e190","is_favorite":false,"offers":[],"type":"flight"},{"id":"3f3e9478-c3c2-47fb-a0e8-5b63825392e7","base_price":584,"date_from":"2023-11-10T16:27:12.137Z","date_to":"2023-11-12T16:29:12.137Z","destination":"dde3ab4c-5cec-4cb0-b8bf-1695b7b4e190","is_favorite":true,"offers":["c643f5c1-3a20-4de3-bdfc-f7f5696465f1"],"type":"train"},{"id":"80261d8c-b8f5-4f70-ad7f-ed1fc3eee362","base_price":1815,"date_from":"2023-11-13T22:34:12.137Z","date_to":"2023-11-15T07:52:12.137Z","destination":"88de64f6-8144-4130-8494-380e1431b4ce","is_favorite":true,"offers":["07485cea-1056-4547-a9ee-642c8ab16f7f","b4a44fda-f682-4d36-815e-303cd1ee4263","81ef88cf-7399-43fc-b5d0-f5503fef4ab4","ce1490c2-ecb4-4e6c-8419-d83d63cce008","97ce25d0-acbb-45a3-92e6-1b9160a25da0"],"type":"taxi"},{"id":"0e7fcba2-815a-41d4-bbe0-c25b3e90c3f7","base_price":5849,"date_from":"2023-11-16T09:18:12.137Z","date_to":"2023-11-18T09:40:12.137Z","destination":"6a95d228-c660-4b73-a04e-c1a9eed4b771","is_favorite":false,"offers":["23aacd41-df44-4911-9a3a-b89e4363daef","3cdcbd0f-9236-486b-930e-7930e0073b9f","4be82d96-00a6-42ea-a789-5b9c77113bbd"],"type":"bus"},{"id":"06303de3-98b4-432f-8ed2-1ef00c00b18c","base_price":8295,"date_from":"2023-11-20T07:25:12.137Z","date_to":"2023-11-20T22:40:12.137Z","destination":"3f4fb5bd-a207-42f3-b54f-32cb36e438b0","is_favorite":true,"offers":["d929f152-1ac4-4f1c-9215-e30a94576b76","8f4ce1ac-b734-452c-a319-1533da439e4a"],"type":"flight"},{"id":"c9226b74-9608-40fd-adde-5707a76f0939","base_price":6913,"date_from":"2023-11-22T23:22:12.137Z","date_to":"2023-11-24T11:32:12.137Z","destination":"e4075d80-7af4-4c76-8599-f03d98d4048f","is_favorite":true,"offers":["1c21e069-78ee-4119-bff3-e00008827c7d","2e7f1ea3-48ec-4036-ae71-79ae53576a89","c643f5c1-3a20-4de3-bdfc-f7f5696465f1"],"type":"train"},{"id":"c45d14ca-bd25-4f5e-bdc9-4a96cd42271f","base_price":1254,"date_from":"2023-11-26T00:15:12.137Z","date_to":"2023-11-27T22:57:12.137Z","destination":"88de64f6-8144-4130-8494-380e1431b4ce","is_favorite":true,"offers":["364d413b-6ad0-4cc8-b398-2b3cf8fe72d0"],"type":"drive"},{"id":"4881180c-1b81-4809-bd2b-9107309e731b","base_price":6414,"date_from":"2023-11-29T18:44:12.137Z","date_to":"2023-12-01T04:57:12.137Z","destination":"fca87a37-8a40-40cd-afcb-a188d848de7b","is_favorite":true,"offers":["b4a44fda-f682-4d36-815e-303cd1ee4263","81ef88cf-7399-43fc-b5d0-f5503fef4ab4","ce1490c2-ecb4-4e6c-8419-d83d63cce008","97ce25d0-acbb-45a3-92e6-1b9160a25da0"],"type":"taxi"},{"id":"c0d0870b-47db-41ad-832d-5f84c92f5a6b","base_price":4870,"date_from":"2023-12-02T13:13:12.137Z","date_to":"2023-12-04T10:16:12.137Z","destination":"e4075d80-7af4-4c76-8599-f03d98d4048f","is_favorite":true,"offers":["9f838924-6221-4062-aea4-3a7a9c30659e","364d413b-6ad0-4cc8-b398-2b3cf8fe72d0"],"type":"drive"}]'),A=JSON.parse('[{"id":"ada95d30-aa92-43ea-9149-718cae143e28","description":"Paris - a true asian pearl","name":"Paris","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Paris in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/20.jpg","description":"Paris with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/9.jpg","description":"Paris is a beautiful city"},{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Paris is a beautiful city"},{"src":"https://21.objects.pages.academy/static/destinations/4.jpg","description":"Paris a perfect place to stay with a family"}]},{"id":"fca87a37-8a40-40cd-afcb-a188d848de7b","description":"Munich - a true asian pearl","name":"Munich","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/19.jpg","description":"Munich a true asian pearl"}]},{"id":"88de64f6-8144-4130-8494-380e1431b4ce","description":"Rotterdam - famous for its crowded street markets with the best street food in Asia","name":"Rotterdam","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/17.jpg","description":"Rotterdam with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Rotterdam in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/18.jpg","description":"Rotterdam famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Rotterdam with a beautiful old town"}]},{"id":"c2b34d85-b20e-4d86-a177-392261bc31f2","description":"Vien - famous for its crowded street markets with the best street food in Asia","name":"Vien","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Vien famous for its crowded street markets with the best street food in Asia"}]},{"id":"e4075d80-7af4-4c76-8599-f03d98d4048f","description":"","name":"Kioto","pictures":[]},{"id":"08adc35a-deec-4c3a-b0bf-4709b6b850f7","description":"Oslo - a true asian pearl","name":"Oslo","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/9.jpg","description":"Oslo with an embankment of a mighty river as a centre of attraction"},{"src":"https://21.objects.pages.academy/static/destinations/15.jpg","description":"Oslo famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Oslo middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Oslo with an embankment of a mighty river as a centre of attraction"}]},{"id":"dde3ab4c-5cec-4cb0-b8bf-1695b7b4e190","description":"Amsterdam - full of of cozy canteens where you can try the best coffee in the Middle East","name":"Amsterdam","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/1.jpg","description":"Amsterdam for those who value comfort and coziness"},{"src":"https://21.objects.pages.academy/static/destinations/4.jpg","description":"Amsterdam famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Amsterdam full of of cozy canteens where you can try the best coffee in the Middle East"},{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Amsterdam a perfect place to stay with a family"},{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Amsterdam with a beautiful old town"}]},{"id":"6a95d228-c660-4b73-a04e-c1a9eed4b771","description":"Barcelona - middle-eastern paradise","name":"Barcelona","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/15.jpg","description":"Barcelona with a beautiful old town"}]},{"id":"3f4fb5bd-a207-42f3-b54f-32cb36e438b0","description":"Saint Petersburg - a perfect place to stay with a family","name":"Saint Petersburg","pictures":[]},{"id":"97eba8a3-75dc-4902-80d8-0bba916e1735","description":"Valencia - with a beautiful old town","name":"Valencia","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Valencia in a middle of Europe"}]}]'),Z=JSON.parse('[{"type":"taxi","offers":[{"id":"07485cea-1056-4547-a9ee-642c8ab16f7f","title":"Upgrade to a business class","price":75},{"id":"b4a44fda-f682-4d36-815e-303cd1ee4263","title":"Choose the radio station","price":75},{"id":"81ef88cf-7399-43fc-b5d0-f5503fef4ab4","title":"Choose temperature","price":104},{"id":"ce1490c2-ecb4-4e6c-8419-d83d63cce008","title":"Drive quickly, I\'m in a hurry","price":200},{"id":"97ce25d0-acbb-45a3-92e6-1b9160a25da0","title":"Drive slowly","price":131}]},{"type":"bus","offers":[{"id":"23aacd41-df44-4911-9a3a-b89e4363daef","title":"Infotainment system","price":172},{"id":"3cdcbd0f-9236-486b-930e-7930e0073b9f","title":"Order meal","price":187},{"id":"4be82d96-00a6-42ea-a789-5b9c77113bbd","title":"Choose seats","price":54}]},{"type":"train","offers":[{"id":"1c21e069-78ee-4119-bff3-e00008827c7d","title":"Book a taxi at the arrival point","price":94},{"id":"2e7f1ea3-48ec-4036-ae71-79ae53576a89","title":"Order a breakfast","price":43},{"id":"c643f5c1-3a20-4de3-bdfc-f7f5696465f1","title":"Wake up at a certain time","price":116}]},{"type":"flight","offers":[{"id":"2f65ac84-01ce-4bb2-b24b-096dbb33f6a8","title":"Choose meal","price":99},{"id":"ab4014bc-0419-431d-b8b2-3ce614f03685","title":"Choose seats","price":172},{"id":"667714bd-122d-429f-a38e-86b253f431a6","title":"Upgrade to comfort class","price":128},{"id":"e4d68623-0389-44df-b96d-57a5e2d14765","title":"Upgrade to business class","price":70},{"id":"d929f152-1ac4-4f1c-9215-e30a94576b76","title":"Add luggage","price":165},{"id":"8f4ce1ac-b734-452c-a319-1533da439e4a","title":"Business lounge","price":73}]},{"type":"check-in","offers":[{"id":"f455833f-733c-415b-97b8-6738ef74e4fc","title":"Choose the time of check-in","price":190},{"id":"cc7a8678-6fb3-439f-8e82-8aead2d791db","title":"Choose the time of check-out","price":75},{"id":"d86a59e4-9805-4d18-b62d-1b4d5c11ee8a","title":"Add breakfast","price":33},{"id":"df81baa3-46bd-4769-ba3f-c13a4154a09e","title":"Laundry","price":78},{"id":"b03077af-7492-42dd-93f2-bb44a8772c2b","title":"Order a meal from the restaurant","price":101}]},{"type":"sightseeing","offers":[]},{"type":"ship","offers":[{"id":"02313917-7b97-4785-b130-c67e840fa151","title":"Choose meal","price":159},{"id":"4b55fd53-ace5-4df3-83cc-8e497d4d1920","title":"Choose seats","price":33},{"id":"b28fbf78-90e8-4792-a4bd-ce41b2942d5b","title":"Upgrade to comfort class","price":153},{"id":"e60cd786-d607-438f-8baf-f4bffa174164","title":"Upgrade to business class","price":71},{"id":"945be03e-f5de-4eca-8e0d-8bcbee63f398","title":"Add luggage","price":41},{"id":"aa8dec4d-216a-4944-a99c-b74fb4ce3836","title":"Business lounge","price":93}]},{"type":"drive","offers":[{"id":"9f838924-6221-4062-aea4-3a7a9c30659e","title":"With automatic transmission","price":61},{"id":"364d413b-6ad0-4cc8-b398-2b3cf8fe72d0","title":"With air conditioning","price":188}]},{"type":"restaurant","offers":[{"id":"c325cd0b-1af9-4fcd-a412-e2700f5cd368","title":"Choose live music","price":124},{"id":"b0b535f5-a048-428c-b78f-0551f4fee378","title":"Choose VIP area","price":128}]}]'),H=class{constructor(e,t){this.view=e,this.model=t,window.queueMicrotask((()=>this.updateView()))}updateView(){}},C=class extends H{constructor(...e){super(...e)}updateView(){this.view.render()}},E=class extends H{constructor(...e){super(...e)}updateView(){this.view.render()}},k=class extends H{constructor(...e){super(...e)}updateView(){this.view.render()}},O=class extends H{constructor(...e){super(...e)}updateView(){this.view.render()}},S=class extends H{constructor(...e){super(...e)}updateView(){this.view.render()}},B=new class extends T{constructor(){super(),this.points=[],this.destinations=[],this.offerGroups=[]}async ready(){this.points=x,this.destinations=A,this.offerGroups=Z}getPoints(){return this.points.map((e=>new j(e)))}getDestinations(){return structuredClone(this.destinations)}getOfferGroups(){return structuredClone(this.offerGroups)}};B.ready().then((()=>{new C(document.querySelector("brief-view"),B),new E(document.querySelector("filter-view"),B),new k(document.querySelector("add-button-view"),B),new O(document.querySelector("sort-view"),B),new S(document.querySelector("list-view"),B)}))})()})();
//# sourceMappingURL=bundle.0a16fe3ff96984915d4e.js.map