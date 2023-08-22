(()=>{"use strict";class e extends HTMLElement{render(){this.innerHTML=this.createHtml()}createHtml(){return""}}const t=e;function s(e,...t){return e.reduce(((e,s,r)=>{const n=t[r-1];return void 0===n?e+s:Array.isArray(n)?e+n.join("")+s:e+n+s}))}customElements.define("brief-view",class extends t{constructor(){super(),this.classList.add("trip-info")}createHtml(){return s`
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>
        <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
      </div>

      <p class="trip-info__cost">
        Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    `}}),document.querySelector("brief-view").render()})();
//# sourceMappingURL=bundle.3002137245825b05d0c6.js.map