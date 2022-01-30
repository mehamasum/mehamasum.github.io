(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",a="day",u="week",o="month",c="quarter",f="year",h="date",d="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},M=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:M,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+M(r,2,"0")+":"+M(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,a=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:u,d:a,D:h,h:s,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=m;var g=function(t){return t instanceof Y},p=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},S=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new Y(n)},w=y;w.l=p,w.i=g,w.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var Y=function(){function m(t){this.$L=p(t.locale,null,!0),this.parse(t)}var M=m.prototype;return M.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return w},M.isValid=function(){return!(this.$d.toString()===d)},M.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},M.isAfter=function(t,e){return S(t)<this.startOf(e)},M.isBefore=function(t,e){return this.endOf(e)<S(t)},M.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,e){var n=this,c=!!w.u(e)||e,d=w.p(t),l=function(t,e){var r=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(a)},$=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,M=this.$M,y=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case f:return c?l(1,0):l(31,11);case o:return c?l(1,M):l(0,M+1);case u:var v=this.$locale().weekStart||0,g=(m<v?m+7:m)-v;return l(c?y-g:y+(6-g),M);case a:case h:return $(D+"Hours",0);case s:return $(D+"Minutes",1);case i:return $(D+"Seconds",2);case r:return $(D+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,e){var u,c=w.p(t),d="set"+(this.$u?"UTC":""),l=(u={},u[a]=d+"Date",u[h]=d+"Date",u[o]=d+"Month",u[f]=d+"FullYear",u[s]=d+"Hours",u[i]=d+"Minutes",u[r]=d+"Seconds",u[n]=d+"Milliseconds",u)[c],$=c===a?this.$D+(e-this.$W):e;if(c===o||c===f){var m=this.clone().set(h,1);m.$d[l]($),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},M.set=function(t,e){return this.clone().$set(t,e)},M.get=function(t){return this[w.p(t)]()},M.add=function(n,c){var h,d=this;n=Number(n);var l=w.p(c),$=function(t){var e=S(d);return w.w(e.date(e.date()+Math.round(t*n)),d)};if(l===o)return this.set(o,this.$M+n);if(l===f)return this.set(f,this.$y+n);if(l===a)return $(1);if(l===u)return $(7);var m=(h={},h[i]=t,h[s]=e,h[r]=1e3,h)[l]||1,M=this.$d.getTime()+n*m;return w.w(M,this)},M.subtract=function(t,e){return this.add(-1*t,e)},M.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},h=function(t){return w.s(s%12||12,t,"0")},l=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:w.s(u+1,2,"0"),MMM:f(n.monthsShort,u,c,3),MMMM:f(c,u),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,o,2),ddd:f(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:w.s(s,2,"0"),h:h(1),hh:h(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,e){return e||m[t]||i.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(n,h,d){var l,$=w.p(h),m=S(n),M=(m.utcOffset()-this.utcOffset())*t,y=this-m,D=w.m(this,m);return D=(l={},l[f]=D/12,l[o]=D,l[c]=D/3,l[u]=(y-M)/6048e5,l[a]=(y-M)/864e5,l[s]=y/e,l[i]=y/t,l[r]=y/1e3,l)[$]||y,d?D:w.a(D)},M.daysInMonth=function(){return this.endOf(o).$D},M.$locale=function(){return v[this.$L]},M.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=p(t,e,!0);return r&&(n.$L=r),n},M.clone=function(){return w.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},m}(),O=Y.prototype;return S.prototype=O,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",a],["$M",o],["$y",f],["$D",h]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,Y,S),t.$i=!0),S},S.locale=p,S.isDayjs=g,S.unix=function(t){return S(1e3*t)},S.en=v[D],S.Ls=v,S.p={},S}()}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(484),e=n.n(t);window.onload=function(){document.querySelector("#first-name"),document.getElementsByClassName("cryptedmail")[0].outerHTML='<a class="subtext" href="mailto:mehamasum@gmail.com" title="Send Email">mehamasum@gmail.com</a>',document.getElementsByClassName("cryptedtel")[0].outerHTML='<a class="subtext" href="tel:+8801521112085" title="Phone">+880 152 111 2085</a>',document.querySelector(".mode-switch").addEventListener("click",(function(){document.documentElement.classList.toggle("dark"),document.querySelector(".mode-switch-icon").classList.toggle("fa-sun")})),document.querySelectorAll(".tenure").forEach((function(t){var n={startDate:t.dataset.start,endDate:t.dataset.end},r=e()(n.startDate,"YYYY-MM-DD"),i=n.endDate?e()(n.endDate,"YYYY-MM-DD"):e()(),s=r.format("MMM YYYY"),a=i.format("MMM YYYY"),u=n.endDate?"".concat(s," to ").concat(a):"Since ".concat(s),o=Math.ceil(i.diff(r,"month",!0)),c=Math.floor(i.diff(r,"year",!0)),f=c>0?"".concat(c," year").concat(1===c?"":"s",", ").concat(o%12," month").concat(o%12==1?"":"s"):"".concat(o," month").concat(1===o?"":"s");t.innerHTML="".concat(u," (").concat(f,")")}))}})()})();