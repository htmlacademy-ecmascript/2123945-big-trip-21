(()=>{var e={287:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var s=i(537),a=i.n(s),r=i(645),n=i.n(r)()(a());n.push([e.id,".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}\n","",{version:3,sources:["webpack://./src/views/editor-view.css"],names:[],mappings:"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}\n"],sourceRoot:""}]);const c=n},766:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var s=i(537),a=i.n(s),r=i(645),n=i.n(r)()(a());n.push([e.id,".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n","",{version:3,sources:["webpack://./src/views/list-view.css"],names:[],mappings:"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,iBAAiB;AACnB",sourcesContent:[".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n"],sourceRoot:""}]);const c=n},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",s=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),s&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),s&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,s,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var n={};if(s)for(var c=0;c<this.length;c++){var o=this[c][0];null!=o&&(n[o]=!0)}for(var d=0;d<e.length;d++){var f=[].concat(e[d]);s&&n[f[0]]||(void 0!==r&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=r),i&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=i):f[2]=i),a&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=a):f[4]="".concat(a)),t.push(f))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],i=e[3];if(!i)return t;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(a," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,i="millisecond",s="second",a="minute",r="hour",n="day",c="week",o="month",d="quarter",f="year",l="date",u="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],i=e%100;return"["+e+(t[(i-20)%10]||t[i]||t[0])+"]"}},m=function(e,t,i){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(i)+e},v={s:m,z:function(e){var t=-e.utcOffset(),i=Math.abs(t),s=Math.floor(i/60),a=i%60;return(t<=0?"+":"-")+m(s,2,"0")+":"+m(a,2,"0")},m:function e(t,i){if(t.date()<i.date())return-e(i,t);var s=12*(i.year()-t.year())+(i.month()-t.month()),a=t.clone().add(s,o),r=i-a<0,n=t.clone().add(s+(r?-1:1),o);return+(-(s+(i-a)/(r?a-n:n-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:f,w:c,d:n,D:l,h:r,m:a,s,ms:i,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",y={};y[_]=h;var g=function(e){return e instanceof M},$=function e(t,i,s){var a;if(!t)return _;if("string"==typeof t){var r=t.toLowerCase();y[r]&&(a=r),i&&(y[r]=i,a=r);var n=t.split("-");if(!a&&n.length>1)return e(n[0])}else{var c=t.name;y[c]=t,a=c}return!s&&a&&(_=a),a||!s&&_},w=function(e,t){if(g(e))return e.clone();var i="object"==typeof t?t:{};return i.date=e,i.args=arguments,new M(i)},T=v;T.l=$,T.i=g,T.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,i=e.utc;if(null===t)return new Date(NaN);if(T.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(p);if(s){var a=s[2]-1||0,r=(s[7]||"0").substring(0,3);return i?new Date(Date.UTC(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return T},m.isValid=function(){return!(this.$d.toString()===u)},m.isSame=function(e,t){var i=w(e);return this.startOf(t)<=i&&i<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,i){return T.u(e)?this[t]:this.set(i,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var i=this,d=!!T.u(t)||t,u=T.p(e),p=function(e,t){var s=T.w(i.$u?Date.UTC(i.$y,t,e):new Date(i.$y,t,e),i);return d?s:s.endOf(n)},b=function(e,t){return T.w(i.toDate()[e].apply(i.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),i)},h=this.$W,m=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(u){case f:return d?p(1,0):p(31,11);case o:return d?p(1,m):p(0,m+1);case c:var y=this.$locale().weekStart||0,g=(h<y?h+7:h)-y;return p(d?v-g:v+(6-g),m);case n:case l:return b(_+"Hours",0);case r:return b(_+"Minutes",1);case a:return b(_+"Seconds",2);case s:return b(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var c,d=T.p(e),u="set"+(this.$u?"UTC":""),p=(c={},c[n]=u+"Date",c[l]=u+"Date",c[o]=u+"Month",c[f]=u+"FullYear",c[r]=u+"Hours",c[a]=u+"Minutes",c[s]=u+"Seconds",c[i]=u+"Milliseconds",c)[d],b=d===n?this.$D+(t-this.$W):t;if(d===o||d===f){var h=this.clone().set(l,1);h.$d[p](b),h.init(),this.$d=h.set(l,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](b);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[T.p(e)]()},m.add=function(i,d){var l,u=this;i=Number(i);var p=T.p(d),b=function(e){var t=w(u);return T.w(t.date(t.date()+Math.round(e*i)),u)};if(p===o)return this.set(o,this.$M+i);if(p===f)return this.set(f,this.$y+i);if(p===n)return b(1);if(p===c)return b(7);var h=(l={},l[a]=e,l[r]=t,l[s]=1e3,l)[p]||1,m=this.$d.getTime()+i*h;return T.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return i.invalidDate||u;var s=e||"YYYY-MM-DDTHH:mm:ssZ",a=T.z(this),r=this.$H,n=this.$m,c=this.$M,o=i.weekdays,d=i.months,f=function(e,i,a,r){return e&&(e[i]||e(t,s))||a[i].slice(0,r)},l=function(e){return T.s(r%12||12,e,"0")},p=i.meridiem||function(e,t,i){var s=e<12?"AM":"PM";return i?s.toLowerCase():s},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:T.s(c+1,2,"0"),MMM:f(i.monthsShort,c,d,3),MMMM:f(d,c),D:this.$D,DD:T.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,o,2),ddd:f(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:T.s(r,2,"0"),h:l(1),hh:l(2),a:p(r,n,!0),A:p(r,n,!1),m:String(n),mm:T.s(n,2,"0"),s:String(this.$s),ss:T.s(this.$s,2,"0"),SSS:T.s(this.$ms,3,"0"),Z:a};return s.replace(b,(function(e,t){return t||h[e]||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(i,l,u){var p,b=T.p(l),h=w(i),m=(h.utcOffset()-this.utcOffset())*e,v=this-h,_=T.m(this,h);return _=(p={},p[f]=_/12,p[o]=_,p[d]=_/3,p[c]=(v-m)/6048e5,p[n]=(v-m)/864e5,p[r]=v/t,p[a]=v/e,p[s]=v/1e3,p)[b]||v,u?_:T.a(_)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return y[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var i=this.clone(),s=$(e,t,!0);return s&&(i.$L=s),i},m.clone=function(){return T.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),S=M.prototype;return w.prototype=S,[["$ms",i],["$s",s],["$m",a],["$H",r],["$W",n],["$M",o],["$y",f],["$D",l]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,M,w),e.$i=!0),w},w.locale=$,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=y[_],w.Ls=y,w.p={},w}()},646:function(e){e.exports=function(){"use strict";var e,t,i=1e3,s=6e4,a=36e5,r=864e5,n=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,o=2592e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,f={years:c,months:o,days:r,hours:a,minutes:s,seconds:i,milliseconds:1,weeks:6048e5},l=function(e){return e instanceof _},u=function(e,t,i){return new _(e,i,t.$l)},p=function(e){return t.p(e)+"s"},b=function(e){return e<0},h=function(e){return b(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},v=function(e,t){return e?b(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},_=function(){function b(e,t,i){var s=this;if(this.$d={},this.$l=i,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return u(e*f[p(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){s.$d[p(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var a=e.match(d);if(a){var r=a.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var m=b.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,i){return t+(e.$d[i]||0)*f[i]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=h(e/c),e%=c,this.$d.months=h(e/o),e%=o,this.$d.days=h(e/r),e%=r,this.$d.hours=h(e/a),e%=a,this.$d.minutes=h(e/s),e%=s,this.$d.seconds=h(e/i),e%=i,this.$d.milliseconds=e},m.toISOString=function(){var e=v(this.$d.years,"Y"),t=v(this.$d.months,"M"),i=+this.$d.days||0;this.$d.weeks&&(i+=7*this.$d.weeks);var s=v(i,"D"),a=v(this.$d.hours,"H"),r=v(this.$d.minutes,"M"),n=this.$d.seconds||0;this.$d.milliseconds&&(n+=this.$d.milliseconds/1e3);var c=v(n,"S"),o=e.negative||t.negative||s.negative||a.negative||r.negative||c.negative,d=a.format||r.format||c.format?"T":"",f=(o?"-":"")+"P"+e.format+t.format+s.format+d+a.format+r.format+c.format;return"P"===f||"-P"===f?"P0D":f},m.toJSON=function(){return this.toISOString()},m.format=function(e){var i=e||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return i.replace(n,(function(e,t){return t||String(s[e])}))},m.as=function(e){return this.$ms/f[p(e)]},m.get=function(e){var t=this.$ms,i=p(e);return"milliseconds"===i?t%=1e3:t="weeks"===i?h(t/f[i]):this.$d[i],0===t?0:t},m.add=function(e,t,i){var s;return s=t?e*f[p(t)]:l(e)?e.$ms:u(e,this).$ms,u(this.$ms+s*(i?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return u(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},b}();return function(i,s,a){e=a,t=a().$utils(),a.duration=function(e,t){var i=a.locale();return u(e,{$l:i},t)},a.isDuration=l;var r=s.prototype.add,n=s.prototype.subtract;s.prototype.add=function(e,t){return l(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)},s.prototype.subtract=function(e,t){return l(e)&&(e=e.asMilliseconds()),n.bind(this)(e,t)}}}()},379:e=>{"use strict";var t=[];function i(e){for(var i=-1,s=0;s<t.length;s++)if(t[s].identifier===e){i=s;break}return i}function s(e,s){for(var r={},n=[],c=0;c<e.length;c++){var o=e[c],d=s.base?o[0]+s.base:o[0],f=r[d]||0,l="".concat(d," ").concat(f);r[d]=f+1;var u=i(l),p={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var b=a(p,s);s.byIndex=c,t.splice(c,0,{identifier:l,updater:b,references:1})}n.push(l)}return n}function a(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,a){var r=s(e=e||[],a=a||{});return function(e){e=e||[];for(var n=0;n<r.length;n++){var c=i(r[n]);t[c].references--}for(var o=s(e,a),d=0;d<r.length;d++){var f=i(r[d]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}r=o}}},569:e=>{"use strict";var t={};e.exports=function(e,i){var s=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(i)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,i)=>{"use strict";e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var s="";i.supports&&(s+="@supports (".concat(i.supports,") {")),i.media&&(s+="@media ".concat(i.media," {"));var a=void 0!==i.layer;a&&(s+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),s+=i.css,a&&(s+="}"),i.media&&(s+="}"),i.supports&&(s+="}");var r=i.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function i(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={id:s,exports:{}};return e[s].call(r.exports,r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.nc=void 0,(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.state=Object.create(null)}setState(e){Object.assign(this.state,e),this.render()}render(){this.innerHTML=this.createHtml()}createHtml(){return""}}const t=e;var s=i(484),a=i.n(s),r=i(646),n=i.n(r);function c(e,...t){return e.reduce(((e,i,s)=>{const a=t[s-1];return void 0===a?e+i:Array.isArray(a)?e+a.join("")+i:e+a+i}))}a().extend(n()),console.log(function(e,t){const i=a()("2023-08-15T14:00Z").diff("2023-08-15T13:00Z"),s=a().duration(i);return s.days()?s.format("DD[d] HH[h] mm[m]"):s.hours()?s.format("HH[h] mm[m]"):s.format("mm[m]")}());customElements.define("brief-view",class extends t{constructor(){super(),this.classList.add("trip-info")}createHtml(){return c`
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>
        <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
      </div>

      <p class="trip-info__cost">
        Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    `}});customElements.define("filter-view",class extends t{constructor(){super(),this.classList.add("trip-filters")}createHtml(){return c`
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
    `}});customElements.define("add-button-view",class extends t{createHtml(){return c`
      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    `}});customElements.define("sort-view",class extends t{constructor(){super(),this.classList.add("trip-sort")}createHtml(){return c`
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
    `}});var o=i(379),d=i.n(o),f=i(795),l=i.n(f),u=i(569),p=i.n(u),b=i(565),h=i.n(b),m=i(216),v=i.n(m),_=i(589),y=i.n(_),g=i(766),$={};$.styleTagTransform=y(),$.setAttributes=h(),$.insert=p().bind(null,"head"),$.domAPI=l(),$.insertStyleElement=v(),d()(g.Z,$),g.Z&&g.Z.locals&&g.Z.locals;class w extends t{constructor(){super()}createHtml(){return c`
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
    `}createStartDateHtml(){return c`
      <time class="event__date" datetime="2019-03-18">MAR 18</time>
    `}createTypeIconHtml(){return c`
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
      </div>
    `}createDestinationHtml(){return c`
      <h3 class="event__title">Taxi Amsterdam</h3>
    `}createScheduleHtml(){return c`
      <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
        —
        <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
      </p>
      <p class="event__duration">30M</p>
    </div>
    `}createPriceHtml(){return c`
      <p class="event__price">
      €&nbsp;<span class="event__price-value">20</span>
      </p>
    `}createOfferListHtml(){return c`
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">Order Uber</span>
          +€&nbsp;
          <span class="event__offer-price">20</span>
        </li>
      </ul>
    `}createFavouriteButtonHtml(){return c`
      <button class="event__favorite-btn event__favorite-btn--active" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
        </svg>
      </button>
    `}createOpenButtonHtml(){return c`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `}}customElements.define("card-view",w);const T=w;var M=i(287),S={};S.styleTagTransform=y(),S.setAttributes=h(),S.insert=p().bind(null,"head"),S.domAPI=l(),S.insertStyleElement=v(),d()(M.Z,S),M.Z&&M.Z.locals&&M.Z.locals;class A extends t{constructor(){super()}createHtml(){return c`
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
    `}createTypeFieldHtml(){const{types:e}=this.state;return c`
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img
            class="event__type-icon"
            width="17"
            height="17"
            src="img/icons/${e.find((e=>e.isSelected)).value}.png"
            alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            ${e.map((e=>c`
              <div class="event__type-item">
                <input
                  id="event-type-${e.value}-1"
                  class="event__type-input  visually-hidden"
                  type="radio"
                  name="event-type"
                  value="${e.value}"
                  ${e.isSelected?"checked":""}>
                <label
                  class="event__type-label  event__type-label--${e.value}"
                  for="event-type-${e.value}-1">
                  ${e.value}
                  </label>
              </div>
            `))}
          </fieldset>
        </div>
      </div>
    `}createDestinationFieldHtml(){const{types:e,destinations:t}=this.state;return c`
    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${e.find((e=>e.isSelected)).value}
      </label>

      <input
        class="event__input  event__input--destination"
        id="event-destination-1"
        type="text"
        name="event-destination"
        value="${t.find((e=>e.isSelected)).name}"
        list="destination-list-1">

      <datalist id="destination-list-1">
        ${t.map((e=>c`
          <option value="${e.name}"></option>
        `))}
      </datalist>
    </div>
    `}createScheduleFieldHtml(){const{dateFrom:e,dateTo:t}=this.state;return c`
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input
          class="event__input  event__input--time"
          id="event-start-time-1"
          type="text"
          name="event-start-time"
          value="${e}">
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input
          class="event__input  event__input--time"
          id="event-end-time-1"
          type="text"
          name="event-end-time"
          value="${t}">
      </div>
    `}createPriceFieldHtml(){const{basePrice:e}=this.state;return c`
    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        €
      </label>
      <input
        class="event__input  event__input--price"
        id="event-price-1"
        type="text"
        name="event-price"
        value="${e}">
    </div>
    `}createSubmitButtonHtml(){return c`
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `}createResetButtonHtml(){return c`
      <button class="event__reset-btn" type="reset">Cancel</button>
    `}createCloseButtonHtml(){return c`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Close event</span>
      </button>
    `}createOfferListFieldHtml(){const{offers:e}=this.state;return e.length?c`
      <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">

        ${e.map((e=>c`
          <div class="event__offer-selector">
            <input
              class="event__offer-checkbox  visually-hidden"
              id="${e.id}"
              type="checkbox"
              name="event-offer"
              value="${e.id}"
              ${e.isSelected?"checked":""}>

            <label class="event__offer-label" for="${e.id}">
              <span class="event__offer-title">${e.title}</span>
              +€&nbsp;
              <span class="event__offer-price">${e.price}</span>
            </label>
          </div>
        `))}
      </div>
    </section>
    `:""}createDestinationHtml(){const{destinations:e}=this.state,t=e.find((e=>e.isSelected));return t?c`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${t.description}</p>

        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${t.pictures.map((e=>c`
              <img class="event__photo" src="${e.src}" alt="${e.description}">
            `))}
          </div>
        </div>
      </section>
    `:""}}customElements.define("editor-view",A);const H=A;customElements.define("list-view",class extends t{constructor(){super(),this.classList.add("trip-list"),this.setAttribute("role","list")}render(){const e=this.state.items.map((e=>{const t=e.isEditable?new H:new T;return t.classList.add("trip-list__item"),t.setAttribute("role","listitem"),t.setState(e),t}));this.replaceChildren(...e)}});const Z=class{},x=class extends Z{constructor(e){super(),this.id=e.id,this.basePrice=e.base_price,this.dateFrom=e.date_from,this.dateTo=e.date_to,this.destinationId=e.destination,this.isFavorite=e.is_favorite,this.offerIds=structuredClone(e.offers),this.type=e.type}},D=JSON.parse('[{"id":"c1435607-468d-43ee-b613-ec29f2432fcb","base_price":7939,"date_from":"2023-10-06T16:25:12.137Z","date_to":"2023-10-07T13:38:12.137Z","destination":"ada95d30-aa92-43ea-9149-718cae143e28","is_favorite":true,"offers":["4be82d96-00a6-42ea-a789-5b9c77113bbd"],"type":"bus"},{"id":"e956bdfa-aad2-4f35-ae5b-9ba0d8f5b63e","base_price":3553,"date_from":"2023-10-08T04:29:12.137Z","date_to":"2023-10-08T21:36:12.137Z","destination":"6a95d228-c660-4b73-a04e-c1a9eed4b771","is_favorite":true,"offers":["2f65ac84-01ce-4bb2-b24b-096dbb33f6a8","ab4014bc-0419-431d-b8b2-3ce614f03685","667714bd-122d-429f-a38e-86b253f431a6","e4d68623-0389-44df-b96d-57a5e2d14765","d929f152-1ac4-4f1c-9215-e30a94576b76","8f4ce1ac-b734-452c-a319-1533da439e4a"],"type":"flight"},{"id":"ab2da60a-0d8e-4fa5-b93d-c73980e71508","base_price":4638,"date_from":"2023-10-10T05:59:12.137Z","date_to":"2023-10-11T04:02:12.137Z","destination":"6a95d228-c660-4b73-a04e-c1a9eed4b771","is_favorite":false,"offers":["1c21e069-78ee-4119-bff3-e00008827c7d","2e7f1ea3-48ec-4036-ae71-79ae53576a89","c643f5c1-3a20-4de3-bdfc-f7f5696465f1"],"type":"train"},{"id":"6ba078f2-e4c1-40e6-8119-06620267a476","base_price":6870,"date_from":"2023-10-11T18:52:12.137Z","date_to":"2023-10-12T07:49:12.137Z","destination":"ada95d30-aa92-43ea-9149-718cae143e28","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"de4368b5-41d5-4881-89ed-eda5357de2f1","base_price":3183,"date_from":"2023-10-14T00:40:12.137Z","date_to":"2023-10-14T20:31:12.137Z","destination":"3f4fb5bd-a207-42f3-b54f-32cb36e438b0","is_favorite":false,"offers":["07485cea-1056-4547-a9ee-642c8ab16f7f","b4a44fda-f682-4d36-815e-303cd1ee4263","81ef88cf-7399-43fc-b5d0-f5503fef4ab4","ce1490c2-ecb4-4e6c-8419-d83d63cce008","97ce25d0-acbb-45a3-92e6-1b9160a25da0"],"type":"taxi"},{"id":"8fceab39-c6e0-463e-a9d1-c3bcce419893","base_price":4771,"date_from":"2023-10-16T00:59:12.137Z","date_to":"2023-10-16T23:49:12.137Z","destination":"ada95d30-aa92-43ea-9149-718cae143e28","is_favorite":false,"offers":["f455833f-733c-415b-97b8-6738ef74e4fc","cc7a8678-6fb3-439f-8e82-8aead2d791db","d86a59e4-9805-4d18-b62d-1b4d5c11ee8a","df81baa3-46bd-4769-ba3f-c13a4154a09e","b03077af-7492-42dd-93f2-bb44a8772c2b"],"type":"check-in"},{"id":"d53461ed-d372-45b5-9c94-7de156850ae5","base_price":5437,"date_from":"2023-10-17T14:33:12.137Z","date_to":"2023-10-19T08:53:12.137Z","destination":"ada95d30-aa92-43ea-9149-718cae143e28","is_favorite":false,"offers":["9f838924-6221-4062-aea4-3a7a9c30659e","364d413b-6ad0-4cc8-b398-2b3cf8fe72d0"],"type":"drive"},{"id":"fd8a29df-102f-40b5-b829-43d18cb323c9","base_price":9855,"date_from":"2023-10-20T11:05:12.137Z","date_to":"2023-10-21T06:46:12.137Z","destination":"6a95d228-c660-4b73-a04e-c1a9eed4b771","is_favorite":true,"offers":[],"type":"drive"},{"id":"a3b1d0fa-4999-4603-ad50-7a12362df135","base_price":4502,"date_from":"2023-10-21T22:15:12.137Z","date_to":"2023-10-23T03:07:12.137Z","destination":"88de64f6-8144-4130-8494-380e1431b4ce","is_favorite":true,"offers":["1c21e069-78ee-4119-bff3-e00008827c7d","2e7f1ea3-48ec-4036-ae71-79ae53576a89","c643f5c1-3a20-4de3-bdfc-f7f5696465f1"],"type":"train"},{"id":"ce936f87-ba6f-4645-aa95-24472bebabe9","base_price":4394,"date_from":"2023-10-24T14:26:12.137Z","date_to":"2023-10-25T01:04:12.137Z","destination":"dde3ab4c-5cec-4cb0-b8bf-1695b7b4e190","is_favorite":true,"offers":["23aacd41-df44-4911-9a3a-b89e4363daef","3cdcbd0f-9236-486b-930e-7930e0073b9f","4be82d96-00a6-42ea-a789-5b9c77113bbd"],"type":"bus"},{"id":"615db2cb-53a1-4f60-8602-98d3527094ef","base_price":9711,"date_from":"2023-10-26T18:14:12.137Z","date_to":"2023-10-27T01:51:12.137Z","destination":"6a95d228-c660-4b73-a04e-c1a9eed4b771","is_favorite":false,"offers":["23aacd41-df44-4911-9a3a-b89e4363daef","3cdcbd0f-9236-486b-930e-7930e0073b9f","4be82d96-00a6-42ea-a789-5b9c77113bbd"],"type":"bus"},{"id":"1aadf710-64e7-4300-be45-cc374f5de873","base_price":3379,"date_from":"2023-10-28T08:47:12.137Z","date_to":"2023-10-29T20:00:12.137Z","destination":"c2b34d85-b20e-4d86-a177-392261bc31f2","is_favorite":true,"offers":["b4a44fda-f682-4d36-815e-303cd1ee4263","81ef88cf-7399-43fc-b5d0-f5503fef4ab4","ce1490c2-ecb4-4e6c-8419-d83d63cce008","97ce25d0-acbb-45a3-92e6-1b9160a25da0"],"type":"taxi"},{"id":"317a929d-2166-4507-ba0d-069b63c5d459","base_price":8161,"date_from":"2023-10-30T04:11:12.137Z","date_to":"2023-10-31T05:17:12.137Z","destination":"88de64f6-8144-4130-8494-380e1431b4ce","is_favorite":true,"offers":["b4a44fda-f682-4d36-815e-303cd1ee4263","81ef88cf-7399-43fc-b5d0-f5503fef4ab4","ce1490c2-ecb4-4e6c-8419-d83d63cce008","97ce25d0-acbb-45a3-92e6-1b9160a25da0"],"type":"taxi"},{"id":"3d754091-6537-4363-9211-e9c3a2561f8f","base_price":9367,"date_from":"2023-11-01T04:38:12.137Z","date_to":"2023-11-02T18:48:12.137Z","destination":"97eba8a3-75dc-4902-80d8-0bba916e1735","is_favorite":false,"offers":[],"type":"flight"},{"id":"36319252-880c-4ff4-92fa-21629c3feaaa","base_price":590,"date_from":"2023-11-04T03:45:12.137Z","date_to":"2023-11-05T02:04:12.137Z","destination":"dde3ab4c-5cec-4cb0-b8bf-1695b7b4e190","is_favorite":true,"offers":[],"type":"check-in"},{"id":"427a72fc-0018-461b-8cd1-22c6b9020e2a","base_price":3804,"date_from":"2023-11-06T11:48:12.137Z","date_to":"2023-11-08T12:25:12.137Z","destination":"fca87a37-8a40-40cd-afcb-a188d848de7b","is_favorite":true,"offers":[],"type":"sightseeing"},{"id":"d59ba2d8-2d3f-48ca-918b-b1410db04f37","base_price":6419,"date_from":"2023-11-09T15:07:12.137Z","date_to":"2023-11-10T01:30:12.137Z","destination":"dde3ab4c-5cec-4cb0-b8bf-1695b7b4e190","is_favorite":false,"offers":[],"type":"flight"},{"id":"3f3e9478-c3c2-47fb-a0e8-5b63825392e7","base_price":584,"date_from":"2023-11-10T16:27:12.137Z","date_to":"2023-11-12T16:29:12.137Z","destination":"dde3ab4c-5cec-4cb0-b8bf-1695b7b4e190","is_favorite":true,"offers":["c643f5c1-3a20-4de3-bdfc-f7f5696465f1"],"type":"train"},{"id":"80261d8c-b8f5-4f70-ad7f-ed1fc3eee362","base_price":1815,"date_from":"2023-11-13T22:34:12.137Z","date_to":"2023-11-15T07:52:12.137Z","destination":"88de64f6-8144-4130-8494-380e1431b4ce","is_favorite":true,"offers":["07485cea-1056-4547-a9ee-642c8ab16f7f","b4a44fda-f682-4d36-815e-303cd1ee4263","81ef88cf-7399-43fc-b5d0-f5503fef4ab4","ce1490c2-ecb4-4e6c-8419-d83d63cce008","97ce25d0-acbb-45a3-92e6-1b9160a25da0"],"type":"taxi"},{"id":"0e7fcba2-815a-41d4-bbe0-c25b3e90c3f7","base_price":5849,"date_from":"2023-11-16T09:18:12.137Z","date_to":"2023-11-18T09:40:12.137Z","destination":"6a95d228-c660-4b73-a04e-c1a9eed4b771","is_favorite":false,"offers":["23aacd41-df44-4911-9a3a-b89e4363daef","3cdcbd0f-9236-486b-930e-7930e0073b9f","4be82d96-00a6-42ea-a789-5b9c77113bbd"],"type":"bus"},{"id":"06303de3-98b4-432f-8ed2-1ef00c00b18c","base_price":8295,"date_from":"2023-11-20T07:25:12.137Z","date_to":"2023-11-20T22:40:12.137Z","destination":"3f4fb5bd-a207-42f3-b54f-32cb36e438b0","is_favorite":true,"offers":["d929f152-1ac4-4f1c-9215-e30a94576b76","8f4ce1ac-b734-452c-a319-1533da439e4a"],"type":"flight"},{"id":"c9226b74-9608-40fd-adde-5707a76f0939","base_price":6913,"date_from":"2023-11-22T23:22:12.137Z","date_to":"2023-11-24T11:32:12.137Z","destination":"e4075d80-7af4-4c76-8599-f03d98d4048f","is_favorite":true,"offers":["1c21e069-78ee-4119-bff3-e00008827c7d","2e7f1ea3-48ec-4036-ae71-79ae53576a89","c643f5c1-3a20-4de3-bdfc-f7f5696465f1"],"type":"train"},{"id":"c45d14ca-bd25-4f5e-bdc9-4a96cd42271f","base_price":1254,"date_from":"2023-11-26T00:15:12.137Z","date_to":"2023-11-27T22:57:12.137Z","destination":"88de64f6-8144-4130-8494-380e1431b4ce","is_favorite":true,"offers":["364d413b-6ad0-4cc8-b398-2b3cf8fe72d0"],"type":"drive"},{"id":"4881180c-1b81-4809-bd2b-9107309e731b","base_price":6414,"date_from":"2023-11-29T18:44:12.137Z","date_to":"2023-12-01T04:57:12.137Z","destination":"fca87a37-8a40-40cd-afcb-a188d848de7b","is_favorite":true,"offers":["b4a44fda-f682-4d36-815e-303cd1ee4263","81ef88cf-7399-43fc-b5d0-f5503fef4ab4","ce1490c2-ecb4-4e6c-8419-d83d63cce008","97ce25d0-acbb-45a3-92e6-1b9160a25da0"],"type":"taxi"},{"id":"c0d0870b-47db-41ad-832d-5f84c92f5a6b","base_price":4870,"date_from":"2023-12-02T13:13:12.137Z","date_to":"2023-12-04T10:16:12.137Z","destination":"e4075d80-7af4-4c76-8599-f03d98d4048f","is_favorite":true,"offers":["9f838924-6221-4062-aea4-3a7a9c30659e","364d413b-6ad0-4cc8-b398-2b3cf8fe72d0"],"type":"drive"}]'),j=JSON.parse('[{"id":"ada95d30-aa92-43ea-9149-718cae143e28","description":"Paris - a true asian pearl","name":"Paris","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Paris in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/20.jpg","description":"Paris with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/9.jpg","description":"Paris is a beautiful city"},{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Paris is a beautiful city"},{"src":"https://21.objects.pages.academy/static/destinations/4.jpg","description":"Paris a perfect place to stay with a family"}]},{"id":"fca87a37-8a40-40cd-afcb-a188d848de7b","description":"Munich - a true asian pearl","name":"Munich","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/19.jpg","description":"Munich a true asian pearl"}]},{"id":"88de64f6-8144-4130-8494-380e1431b4ce","description":"Rotterdam - famous for its crowded street markets with the best street food in Asia","name":"Rotterdam","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/17.jpg","description":"Rotterdam with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Rotterdam in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/18.jpg","description":"Rotterdam famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Rotterdam with a beautiful old town"}]},{"id":"c2b34d85-b20e-4d86-a177-392261bc31f2","description":"Vien - famous for its crowded street markets with the best street food in Asia","name":"Vien","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Vien famous for its crowded street markets with the best street food in Asia"}]},{"id":"e4075d80-7af4-4c76-8599-f03d98d4048f","description":"","name":"Kioto","pictures":[]},{"id":"08adc35a-deec-4c3a-b0bf-4709b6b850f7","description":"Oslo - a true asian pearl","name":"Oslo","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/9.jpg","description":"Oslo with an embankment of a mighty river as a centre of attraction"},{"src":"https://21.objects.pages.academy/static/destinations/15.jpg","description":"Oslo famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Oslo middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Oslo with an embankment of a mighty river as a centre of attraction"}]},{"id":"dde3ab4c-5cec-4cb0-b8bf-1695b7b4e190","description":"Amsterdam - full of of cozy canteens where you can try the best coffee in the Middle East","name":"Amsterdam","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/1.jpg","description":"Amsterdam for those who value comfort and coziness"},{"src":"https://21.objects.pages.academy/static/destinations/4.jpg","description":"Amsterdam famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Amsterdam full of of cozy canteens where you can try the best coffee in the Middle East"},{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Amsterdam a perfect place to stay with a family"},{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Amsterdam with a beautiful old town"}]},{"id":"6a95d228-c660-4b73-a04e-c1a9eed4b771","description":"Barcelona - middle-eastern paradise","name":"Barcelona","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/15.jpg","description":"Barcelona with a beautiful old town"}]},{"id":"3f4fb5bd-a207-42f3-b54f-32cb36e438b0","description":"Saint Petersburg - a perfect place to stay with a family","name":"Saint Petersburg","pictures":[]},{"id":"97eba8a3-75dc-4902-80d8-0bba916e1735","description":"Valencia - with a beautiful old town","name":"Valencia","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Valencia in a middle of Europe"}]}]'),O=JSON.parse('[{"type":"taxi","offers":[{"id":"07485cea-1056-4547-a9ee-642c8ab16f7f","title":"Upgrade to a business class","price":75},{"id":"b4a44fda-f682-4d36-815e-303cd1ee4263","title":"Choose the radio station","price":75},{"id":"81ef88cf-7399-43fc-b5d0-f5503fef4ab4","title":"Choose temperature","price":104},{"id":"ce1490c2-ecb4-4e6c-8419-d83d63cce008","title":"Drive quickly, I\'m in a hurry","price":200},{"id":"97ce25d0-acbb-45a3-92e6-1b9160a25da0","title":"Drive slowly","price":131}]},{"type":"bus","offers":[{"id":"23aacd41-df44-4911-9a3a-b89e4363daef","title":"Infotainment system","price":172},{"id":"3cdcbd0f-9236-486b-930e-7930e0073b9f","title":"Order meal","price":187},{"id":"4be82d96-00a6-42ea-a789-5b9c77113bbd","title":"Choose seats","price":54}]},{"type":"train","offers":[{"id":"1c21e069-78ee-4119-bff3-e00008827c7d","title":"Book a taxi at the arrival point","price":94},{"id":"2e7f1ea3-48ec-4036-ae71-79ae53576a89","title":"Order a breakfast","price":43},{"id":"c643f5c1-3a20-4de3-bdfc-f7f5696465f1","title":"Wake up at a certain time","price":116}]},{"type":"flight","offers":[{"id":"2f65ac84-01ce-4bb2-b24b-096dbb33f6a8","title":"Choose meal","price":99},{"id":"ab4014bc-0419-431d-b8b2-3ce614f03685","title":"Choose seats","price":172},{"id":"667714bd-122d-429f-a38e-86b253f431a6","title":"Upgrade to comfort class","price":128},{"id":"e4d68623-0389-44df-b96d-57a5e2d14765","title":"Upgrade to business class","price":70},{"id":"d929f152-1ac4-4f1c-9215-e30a94576b76","title":"Add luggage","price":165},{"id":"8f4ce1ac-b734-452c-a319-1533da439e4a","title":"Business lounge","price":73}]},{"type":"check-in","offers":[{"id":"f455833f-733c-415b-97b8-6738ef74e4fc","title":"Choose the time of check-in","price":190},{"id":"cc7a8678-6fb3-439f-8e82-8aead2d791db","title":"Choose the time of check-out","price":75},{"id":"d86a59e4-9805-4d18-b62d-1b4d5c11ee8a","title":"Add breakfast","price":33},{"id":"df81baa3-46bd-4769-ba3f-c13a4154a09e","title":"Laundry","price":78},{"id":"b03077af-7492-42dd-93f2-bb44a8772c2b","title":"Order a meal from the restaurant","price":101}]},{"type":"sightseeing","offers":[]},{"type":"ship","offers":[{"id":"02313917-7b97-4785-b130-c67e840fa151","title":"Choose meal","price":159},{"id":"4b55fd53-ace5-4df3-83cc-8e497d4d1920","title":"Choose seats","price":33},{"id":"b28fbf78-90e8-4792-a4bd-ce41b2942d5b","title":"Upgrade to comfort class","price":153},{"id":"e60cd786-d607-438f-8baf-f4bffa174164","title":"Upgrade to business class","price":71},{"id":"945be03e-f5de-4eca-8e0d-8bcbee63f398","title":"Add luggage","price":41},{"id":"aa8dec4d-216a-4944-a99c-b74fb4ce3836","title":"Business lounge","price":93}]},{"type":"drive","offers":[{"id":"9f838924-6221-4062-aea4-3a7a9c30659e","title":"With automatic transmission","price":61},{"id":"364d413b-6ad0-4cc8-b398-2b3cf8fe72d0","title":"With air conditioning","price":188}]},{"type":"restaurant","offers":[{"id":"c325cd0b-1af9-4fcd-a412-e2700f5cd368","title":"Choose live music","price":124},{"id":"b0b535f5-a048-428c-b78f-0551f4fee378","title":"Choose VIP area","price":128}]}]'),k=class{constructor(e,t){this.view=e,this.model=t,window.queueMicrotask((()=>this.updateView()))}updateView(){}},C=class extends k{constructor(...e){super(...e)}updateView(){this.view.render()}},E=class extends k{constructor(...e){super(...e)}updateView(){this.view.render()}},P=class extends k{constructor(...e){super(...e)}updateView(){this.view.render()}},B=class extends k{constructor(...e){super(...e)}updateView(){this.view.render()}},F=class extends k{constructor(...e){super(...e)}updateView(){const e=this.model.getPoints(),t=this.model.getDestinations(),i=this.model.getOfferGroups(),s=e.map(((e,s)=>{const{offers:a}=i.find((t=>t.type===e.type));return{id:e.id,types:i.map((t=>({value:t.type,isSelected:t.type===e.type}))),destinations:t.map((t=>({...t,isSelected:t.id===e.destinationId}))),dateFrom:e.dateFrom,dateTo:e.dateTo,basePrice:e.basePrice,offers:a.map((t=>({...t,isSelected:e.offerIds?.includes(t.id)}))),isFavorite:e.isFavorite,isEditable:1===s}}));this.view.setState({items:s})}},Y=new class extends Z{constructor(){super(),this.points=[],this.destinations=[],this.offerGroups=[]}async ready(){this.points=D,this.destinations=j,this.offerGroups=O}getPoints(){return this.points.map((e=>new x(e)))}getDestinations(){return structuredClone(this.destinations)}getOfferGroups(){return structuredClone(this.offerGroups)}};Y.ready().then((()=>{new C(document.querySelector("brief-view"),Y),new E(document.querySelector("filter-view"),Y),new P(document.querySelector("add-button-view"),Y),new B(document.querySelector("sort-view"),Y),new F(document.querySelector("list-view"),Y)}))})()})();
//# sourceMappingURL=bundle.0b56810e64444f151ab6.js.map