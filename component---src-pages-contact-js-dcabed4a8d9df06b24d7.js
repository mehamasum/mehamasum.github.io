(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),o=a(0),l=a.n(o),i=a(154),u=a(201),c=(a(148),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){this.props.data;return l.a.createElement(u.a,{location:this.props.location},l.a.createElement(i.a,{article:!1,pathname:this.props.location.pathname}),l.a.createElement("form",{className:"form-wrapper",action:"https://formspree.io/mehamasum@gmail.com",method:"POST"},l.a.createElement("h4",{style:{marginTop:0}},"Contact me"),l.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Your email"}),l.a.createElement("textarea",{name:"message",id:"message",rows:"5",placeholder:"Your message..."}),l.a.createElement("input",{type:"submit",className:"submit",value:"Leave a message"})))},t}(l.a.Component));t.default=c},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return d}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(149),u=a.n(i);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var c=a(152),s=a.n(c);a.d(t,"PageRenderer",function(){return s.a});var m=a(29);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},148:function(e,t,a){},152:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},154:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(164),l=a(0),i=a.n(l),u=a(151),c=a.n(u),s=a(4),m=a.n(s),p=a(147),f=function(e){var t=e.url,a=e.type,n=e.title,r=e.desc,o=e.image,l=e.fbAppId;return i.a.createElement(c.a,null,l&&i.a.createElement("meta",{property:"fb:app_id",content:l}),t&&i.a.createElement("meta",{property:"og:url",content:t}),a&&i.a.createElement("meta",{property:"og:type",content:a}),n&&i.a.createElement("meta",{property:"og:title",content:n}),r&&i.a.createElement("meta",{property:"og:description",content:r}),o&&i.a.createElement("meta",{property:"og:image",content:o}))},d=f;f.propTypes={url:m.a.string,type:m.a.string,title:m.a.string,desc:m.a.string,image:m.a.string},f.defaultProps={url:null,type:null,title:null,desc:null,image:null};var h=function(e){var t=e.type,a=e.username,n=e.title,r=e.desc,o=e.image;return i.a.createElement(c.a,null,i.a.createElement("meta",{name:"twitter:card",content:t}),a&&i.a.createElement("meta",{name:"twitter:site",content:a}),a&&i.a.createElement("meta",{name:"twitter:creator",content:a}),n&&i.a.createElement("meta",{name:"twitter:title",content:n}),r&&i.a.createElement("meta",{name:"twitter:description",content:r}),o&&i.a.createElement("meta",{name:"twitter:image",content:o}),o&&i.a.createElement("meta",{name:"twitter:image:alt",content:n}))},g=h;h.propTypes={type:m.a.string,username:m.a.string,title:m.a.string,desc:m.a.string,image:m.a.string},h.defaultProps={type:"summary_large_image",username:null,title:null,desc:null,image:null},a.d(t,"a",function(){return y});var y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.desc,n=e.banner,r=e.pathname,l=e.article;return i.a.createElement(p.StaticQuery,{query:b,render:function(e){var o=e.site,u=o.buildTime,s=o.siteMetadata,m=s.title,p=s.titleAlt,f=s.shortName,h=s.author,y=s.siteLanguage,b=s.logo,v=s.siteUrl,E=s.pathPrefix,w=s.description,k=s.banner,O=s.twitter,x=s.fbAppId,M={title:t||m,description:w||a,image:""+v+(n||k),url:""+v+(r||"/")},N=[{"@context":"http://schema.org","@type":"WebSite","@id":v,url:v,name:m,alternateName:p||""}];return l&&(N=[{"@context":"http://schema.org","@type":"BlogPosting","@id":M.url,url:M.url,name:t,alternateName:p||"",headline:t,image:{"@type":"ImageObject",url:M.image},description:M.description,datePublished:u,dateModified:u,author:{"@type":"Person",name:h},publisher:{"@type":"Organization",name:h,logo:{"@type":"ImageObject",url:v+("/"===E?"":E)+b}},isPartOf:v,mainEntityOfPage:{"@type":"WebSite","@id":v}}]),i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:M.title},i.a.createElement("html",{lang:y}),i.a.createElement("meta",{name:"description",content:M.description}),i.a.createElement("meta",{name:"image",content:M.image}),i.a.createElement("meta",{name:"apple-mobile-web-app-title",content:f}),i.a.createElement("meta",{name:"application-name",content:f}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(N))),i.a.createElement(d,{desc:M.description,image:M.image,title:M.title,type:l?"article":"website",url:M.url,fbAppId:x}),i.a.createElement(g,{title:M.title,image:M.image,desc:M.description,username:O}))},data:o})},t}(l.Component);y.propTypes={title:m.a.string,desc:m.a.string,banner:m.a.string,pathname:m.a.string,article:m.a.bool},y.defaultProps={title:null,desc:null,banner:null,pathname:null,article:!1};var b="2757271287"},156:function(e,t,a){var n=a(32),r=a(31);a(192)("keys",function(){return function(e){return r(n(e))}})},162:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(52),u=a(2),c=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},163:function(e,t,a){e.exports=a.p+"static/avatar-6a363dcb06efcdb621bda3f525dfda2b.jpg"},164:function(e){e.exports={data:{site:{buildTime:"2018-12-31",siteMetadata:{defaultTitle:"Meha Masum",titleAlt:"Meha Masum",shortName:"Meha Masum",author:"Meha Masum",siteLanguage:"en",logo:"/images/meta/favicon.png",siteUrl:"https://mehamasum.github.io",pathPrefix:"/",defaultDescription:"Meha Masum's Software Portfolio and Blog",defaultBanner:"/images/meta/favicon.png",twitter:"@mehamasum",fbAppId:"575960529519073"}}}}},165:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(0),l=a.n(o),i=a(147),u=a(338),c=(a(148),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("footer",{style:{backgroundColor:"#e6e6e6",paddingTop:"4em",paddingBottom:"4em"}},l.a.createElement("div",{className:"layoutRow"},l.a.createElement(u.a,{xs:12,md:6,className:"footer-left-panel"},l.a.createElement("span",{style:{margin:0}},"Made by ",l.a.createElement(i.Link,{to:"#"}," meha")," ",l.a.createElement("i",{className:"fa fa-heart",style:{color:"red"}}))),l.a.createElement(u.a,{xs:12,md:6,className:"footer-right-panel"},l.a.createElement("a",{href:"https://github.com/mehamasum/gatsby-blog",target:"_blank"},l.a.createElement("i",{className:"fa fa-code-fork",style:{marginRight:"0.5rem"}}),"Fork me on Github"))))},t}(l.a.Component));t.a=c},169:function(e,t,a){var n=a(11),r=a(10),o=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=a(17)(Function.call,a(174).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,a){return o(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:o}},171:function(e,t,a){"use strict";a(172);var n=a(6),r=a.n(n),o=a(0),l=a.n(o),i=a(147),u=a(338),c=a(163),s=a.n(c),m=(a(148),a(155)),p=a.n(m),f=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getClassNames=function(e){var t=this.props.pathname,a=["label"];if("project"===e)a.push("label-project"),"/"===t&&a.push("label-active");else if("about"===e){a.push("label-about"),new RegExp("^/about(/)?$").test(t)&&a.push("label-active")}else if("blog"===e){a.push("label-blog"),new RegExp("^/blog(/)?.*$").test(t)&&a.push("label-active")}return p()(a)},a.render=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"portfolio-cover"}),l.a.createElement("div",{className:"layoutRow"},l.a.createElement(u.a,{xs:12},l.a.createElement("div",{className:"portfolio-user"},l.a.createElement("div",{className:"portfolio-user-photo"},l.a.createElement("img",{alt:"Mehedi Hasan Masum's avatar",className:"user-photo",src:s.a})),l.a.createElement("div",{className:"portfolio-user-info"},this.props.title||l.a.createElement("h1",{className:"portfolio-user-name"},"Mehedi Hasan Masum ",l.a.createElement("small",null,"(@mehamasum)")),l.a.createElement("nav",null,l.a.createElement(i.Link,{to:"/"},l.a.createElement("div",{className:this.getClassNames("project")},"Projects")),l.a.createElement(i.Link,{to:"/about"},l.a.createElement("div",{className:this.getClassNames("about")},"About")),l.a.createElement(i.Link,{to:"/blog"},l.a.createElement("div",{className:this.getClassNames("blog")},"Blog"))))))))},t}(l.a.Component);t.a=f},172:function(e,t,a){var n=a(5),r=a(173),o=a(24).f,l=a(175).f,i=a(50),u=a(176),c=n.RegExp,s=c,m=c.prototype,p=/a/g,f=/a/g,d=new c(p)!==p;if(a(15)&&(!d||a(23)(function(){return f[a(3)("match")]=!1,c(p)!=p||c(f)==f||"/a/i"!=c(p,"i")}))){c=function(e,t){var a=this instanceof c,n=i(e),o=void 0===t;return!a&&n&&e.constructor===c&&o?e:r(d?new s(n&&!o?e.source:e,t):s((n=e instanceof c)?e.source:e,n&&o?u.call(e):t),a?this:m,c)};for(var h=function(e){e in c||o(c,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},g=l(s),y=0;g.length>y;)h(g[y++]);m.constructor=c,c.prototype=m,a(16)(n,"RegExp",c)}a(73)("RegExp")},173:function(e,t,a){var n=a(11),r=a(169).set;e.exports=function(e,t,a){var o,l=t.constructor;return l!==a&&"function"==typeof l&&(o=l.prototype)!==a.prototype&&n(o)&&r&&r(e,o),e}},174:function(e,t,a){var n=a(72),r=a(48),o=a(30),l=a(70),i=a(25),u=a(69),c=Object.getOwnPropertyDescriptor;t.f=a(15)?c:function(e,t){if(e=o(e),t=l(t,!0),u)try{return c(e,t)}catch(a){}if(i(e,t))return r(!n.f.call(e,t),e[t])}},175:function(e,t,a){var n=a(71),r=a(49).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,r)}},176:function(e,t,a){"use strict";var n=a(10);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},191:function(e,t,a){},192:function(e,t,a){var n=a(13),r=a(18),o=a(23);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],l={};l[e]=t(a),n(n.S+n.F*o(function(){a(1)}),"Object",l)}},193:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/2018/12/dear-middlewares/"},frontmatter:{title:"Lets know redux middlewares better",tags:["middleware","reduxjs"]}}}]}}}},194:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(195);Object.defineProperty(t,"TagCloud",{enumerable:!0,get:function(){return n.TagCloud}})},195:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TagCloud=void 0;var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=s(a(0)),o=s(a(4)),l=a(196),i=s(a(197)),u=s(a(198)),c=a(199);function s(e){return e&&e.__esModule?e:{default:e}}function m(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var p=["onClick","onDoubleClick","onMouseMove"],f=["tags","shuffle","renderer","maxSize","minSize","colorOptions","disableRandomColor"],d=function(e,t){var a=t.disableRandomColor,n=t.colorOptions;return e.color?e.color:a?void 0:(0,u.default)(n)},h=t.TagCloud=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),n(t,[{key:"componentWillReceiveProps",value:function(e){var a=(0,c.propertiesEqual)(this.props,e,Object.keys(t.propTypes));(0,c.arraysEqual)(e.tags,this.props.tags)&&a||this._populate(e)}},{key:"componentWillMount",value:function(){this._populate(this.props)}},{key:"render",value:function(){var e=(0,c.omitProps)(this.props,[].concat(f,p)),t=this._attachEventHandlers();return r.default.createElement("div",e,t)}},{key:"_attachEventHandlers",value:function(){var e=this,t=(0,c.includeProps)(this.props,p);return this._data.map(function(a){var n=a.tag,o=a.fontSize,l=a.color,i=e.props.renderer(n,o,l),u=(0,c.includeProps)(i.props,p),s=Object.keys(t).reduce(function(e,a){return e[a]=function(e){t[a](n,e),u[a]&&u(e)},e},{});return r.default.cloneElement(i,s)})}},{key:"_populate",value:function(e){var t=e.tags,a=e.shuffle,n=e.minSize,r=e.maxSize,o=t.map(function(e){return e.count}),l=Math.min.apply(Math,m(o)),u=Math.max.apply(Math,m(o)),s=t.map(function(t){return{tag:t,color:d(t,e),fontSize:(0,c.fontSizeConverter)(t.count,l,u,n,r)}});this._data=a?(0,i.default)(s):s}}]),t}();h.propTypes={tags:o.default.array.isRequired,maxSize:o.default.number.isRequired,minSize:o.default.number.isRequired,shuffle:o.default.bool,colorOptions:o.default.object,disableRandomColor:o.default.bool,renderer:o.default.func,className:o.default.string},h.defaultProps={renderer:l.defaultRenderer,shuffle:!0,className:"tag-cloud",colorOptions:{}}},196:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultRenderer=void 0;var n=o(a(0)),r=o(a(51));function o(e){return e&&e.__esModule?e:{default:e}}t.defaultRenderer=function(e,t,a){var o=t+"px",i=e.key||e.value,u=(0,r.default)({},l,{color:a,fontSize:o});return n.default.createElement("span",{className:"tag-cloud-tag",style:u,key:i},e.value)};var l={margin:"0px 3px",verticalAlign:"middle",display:"inline-block"}},197:function(e,t,a){"use strict";e.exports=function(e){if(!Array.isArray(e))throw new TypeError("Expected Array, got "+typeof e);for(var t,a,n=e.length,r=e.slice();n;)t=Math.floor(Math.random()*n--),a=r[n],r[n]=r[t],r[t]=a;return r}},198:function(e,t,a){var n,r,o;r=[],void 0===(o="function"==typeof(n=function(){var e=null,t={};o("monochrome",null,[[0,0],[100,0]]),o("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),o("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),o("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),o("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),o("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),o("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),o("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var a=function(o){if((o=o||{}).seed&&o.seed===parseInt(o.seed,10))e=o.seed;else if("string"==typeof o.seed)e=function(e){for(var t=0,a=0;a!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);a++)t+=e.charCodeAt(a);return t}(o.seed);else{if(void 0!==o.seed&&null!==o.seed)throw new TypeError("The seed value must be an integer or string");e=null}var u,c,s;if(null!==o.count&&void 0!==o.count){var m=o.count,p=[];for(o.count=null;m>p.length;)e&&o.seed&&(o.seed+=1),p.push(a(o));return o.count=m,p}return u=function(e){var a=r(function(e){if("number"==typeof parseInt(e)){var a=parseInt(e);if(a<360&&a>0)return[a,a]}if("string"==typeof e&&t[e]){var n=t[e];if(n.hueRange)return n.hueRange}return[0,360]}(e.hue));return a<0&&(a=360+a),a}(o),c=function(e,t){if("random"===t.luminosity)return r([0,100]);if("monochrome"===t.hue)return 0;var a=function(e){return n(e).saturationRange}(e),o=a[0],l=a[1];switch(t.luminosity){case"bright":o=55;break;case"dark":o=l-10;break;case"light":l=55}return r([o,l])}(u,o),s=function(e,t,a){var o=function(e,t){for(var a=n(e).lowerBounds,r=0;r<a.length-1;r++){var o=a[r][0],l=a[r][1],i=a[r+1][0],u=a[r+1][1];if(t>=o&&t<=i){var c=(u-l)/(i-o),s=l-c*o;return c*t+s}}return 0}(e,t),l=100;switch(a.luminosity){case"dark":l=o+20;break;case"light":o=(l+o)/2;break;case"random":o=0,l=100}return r([o,l])}(u,c,o),function(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return i(e);case"hsl":var a=i(e);return"hsl("+a[0]+", "+a[1]+"%, "+a[2]+"%)";case"hsla":var n=i(e);return"hsla("+n[0]+", "+n[1]+"%, "+n[2]+"%, "+Math.random()+")";case"rgbArray":return l(e);case"rgb":var r=l(e);return"rgb("+r.join(", ")+")";case"rgba":var o=l(e);return"rgba("+o.join(", ")+", "+Math.random()+")";default:return function(e){var t=l(e);function a(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return"#"+a(t[0])+a(t[1])+a(t[2])}(e)}}([u,c,s],o)};function n(e){for(var a in e>=334&&e<=360&&(e-=360),t){var n=t[a];if(n.hueRange&&e>=n.hueRange[0]&&e<=n.hueRange[1])return t[a]}return"Color not found"}function r(t){if(null===e)return Math.floor(t[0]+Math.random()*(t[1]+1-t[0]));var a=t[1]||1,n=t[0]||0,r=(e=(9301*e+49297)%233280)/233280;return Math.floor(n+r*(a-n))}function o(e,a,n){var r=n[0][0],o=n[n.length-1][0],l=n[n.length-1][1],i=n[0][1];t[e]={hueRange:a,lowerBounds:n,saturationRange:[r,o],brightnessRange:[l,i]}}function l(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var a=e[1]/100,n=e[2]/100,r=Math.floor(6*t),o=6*t-r,l=n*(1-a),i=n*(1-o*a),u=n*(1-(1-o)*a),c=256,s=256,m=256;switch(r){case 0:c=n,s=u,m=l;break;case 1:c=i,s=n,m=l;break;case 2:c=l,s=n,m=u;break;case 3:c=l,s=i,m=n;break;case 4:c=u,s=l,m=n;break;case 5:c=n,s=l,m=i}var p=[Math.floor(255*c),Math.floor(255*s),Math.floor(255*m)];return p}function i(e){var t=e[0],a=e[1]/100,n=e[2]/100,r=(2-a)*n;return[t,Math.round(a*n/(r<1?r:2-r)*1e4)/100,r/2*100]}return a})?n.apply(t,r):n)||(e.exports=o)},199:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.omitProps=function(e,t){return Object.keys(e).reduce(function(a,n){return~t.indexOf(n)||(a[n]=e[n]),a},{})},t.includeProps=function(e,t){return Object.keys(e).reduce(function(a,n){return~t.indexOf(n)&&n in e&&(a[n]=e[n]),a},{})},t.fontSizeConverter=function(e,t,a,n,r){return a-t==0?Math.round((n+r)/2):Math.round((e-t)*(r-n)/(a-t)+n)},t.arraysEqual=function(e,t){return e.length===t.length&&e.every(function(e,a){return e===t[a]})},t.propertiesEqual=function(e,t,a){return a.every(function(a){return e[a]===t[a]})}},200:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/2018/12/dear-middlewares/"},frontmatter:{title:"Lets know redux middlewares better",tags:["middleware","reduxjs"],category:"General"}}}]}}}},201:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(0),l=a.n(o),i=a(224),u=a(338),c=(a(148),a(154)),s=a(171),m=a(165),p=a(147),f=function(e){return l.a.createElement("div",null,l.a.createElement("h4",null,"Interested in talking?"),l.a.createElement(p.Link,{to:"/contact",style:{color:"#fff"}},l.a.createElement("button",{className:"btn"},"Leave a message")))},d=(a(191),function(e){return l.a.createElement("div",{className:"AboutBlogWidget"},l.a.createElement("p",null,"Hi, I am Meha. I am a Full Stack developer based in Dhaka."),l.a.createElement("p",null,"After spending some time in software industry I felt I should start writing about things I do, as well as about things I learn everyday. Because one day it might be very helpful to someone out there. If you find any inconsistency feel free to"," ",l.a.createElement("a",{href:"https://github.com/mehamasum/gatsby-blog",target:"_blank",style:{color:"#fff",textDecoration:"underline"}},"send a PR"),"  :)"))}),h=a(19),g=function(e){return l.a.createElement("div",null,l.a.createElement("h4",null,"RSS"),l.a.createElement("ul",{className:"unorderedList"},l.a.createElement("li",{className:"inlineListItem"},l.a.createElement(h.Link,{to:"/rss.xml"},l.a.createElement("i",{className:"fa fa-rss",style:{marginRight:"0.5rem"}}),"All Posts"))))},y=(a(28),a(47),a(156),a(68),a(193)),b=a(194),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t={};return e.forEach(function(e){e.node.frontmatter.tags.forEach(function(e){t[e]?t[e]++:t[e]=1})}),l.a.createElement("div",null,l.a.createElement("h4",null,"Blog topics"),l.a.createElement(b.TagCloud,{minSize:12,maxSize:35,tags:Object.keys(t).map(function(e,a){return{value:e,count:t[e],url:"/blog/tags/"+e,key:a}}),renderer:function(e,t,a){var n=t+"px",r=e.key||e.value,o=Object.assign({},{margin:"0px 3px",verticalAlign:"middle",display:"inline-block"},{color:a,fontSize:n});return l.a.createElement("span",{key:r,className:"tag-cloud-tag",style:o},l.a.createElement(p.Link,{to:e.url},e.value))}}))},t}(l.a.Component),E=function(e){return l.a.createElement(p.StaticQuery,{query:"3679399047",render:function(t){return l.a.createElement(v,Object.assign({data:t},e))},data:y})},w=function(e){return l.a.createElement("div",null,l.a.createElement("h4",null,"Social"),l.a.createElement("ul",{className:"unorderedList"},l.a.createElement("li",{className:"inlineListItem"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-github",style:{marginRight:"0.5rem"}}),"Github")),l.a.createElement("li",{className:"inlineListItem"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-twitter",style:{marginRight:"0.5rem"}}),"Twitter")),l.a.createElement("li",{className:"inlineListItem"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-linkedin",style:{marginRight:"0.5rem"}}),"LinkedIn"))))},k=a(200),O=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t={};return e.forEach(function(e){var a=e.node.frontmatter.category;t[a]?t[a]++:t[a]=1}),l.a.createElement("div",null,l.a.createElement("h4",null,"Blog Posts by category"),l.a.createElement("ul",null,Object.keys(t).map(function(e){return l.a.createElement("li",{key:e},l.a.createElement(p.Link,{to:"/blog/categories/"+e},e+" ("+t[e]+")"))})))},t}(l.a.Component),x=function(e){return l.a.createElement(p.StaticQuery,{query:"3623635794",render:function(t){return l.a.createElement(O,Object.assign({data:t},e))},data:k})},M=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",null,l.a.createElement(c.a,null),this.props.header?l.a.createElement("header",null,this.props.header):l.a.createElement(s.a,{title:this.props.title,pathname:this.props.location.pathname}),l.a.createElement("section",{className:"midSection"},l.a.createElement(i.a,null,l.a.createElement(u.a,{xs:12,md:7,mdOffset:1,className:"layoutColumn"},this.props.children),l.a.createElement(u.a,{xs:12,md:3,className:"layoutColumn"},l.a.createElement(d,null),l.a.createElement("hr",null),l.a.createElement(x,null),l.a.createElement("hr",null),l.a.createElement(E,null),l.a.createElement("hr",null),l.a.createElement(g,null),l.a.createElement("hr",null),l.a.createElement(w,null),l.a.createElement("hr",null),l.a.createElement(f,null)))),l.a.createElement(m.a,null))},t}(l.a.Component);t.a=M},224:function(e,t,a){"use strict";var n=a(181),r=a(202),o=a(203),l=a(155),i=a.n(l),u=a(0),c=a.n(u),s=a(204),m=a.n(s),p=a(205),f={componentClass:m.a},d=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,a=e.className,o=Object(r.a)(e,["componentClass","className"]),l=Object(p.d)(o),u=l[0],s=l[1],m=Object(p.b)(u);return c.a.createElement(t,Object(n.a)({},s,{className:i()(a,m)}))},t}(c.a.Component);d.propTypes=f,d.defaultProps={componentClass:"div"},t.a=Object(p.a)("row",d)}}]);
//# sourceMappingURL=component---src-pages-contact-js-dcabed4a8d9df06b24d7.js.map