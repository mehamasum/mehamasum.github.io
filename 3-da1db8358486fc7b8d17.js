(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{164:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(34),s=n.n(l);n.d(t,"a",function(){return s.a});n(166);var c=a.a.createContext({}),u=function(e){return a.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},166:function(e,t,n){var r;e.exports=(r=n(171))&&r.default||r},169:function(e,t,n){"use strict";var r=n(5),a=n.n(r),o=n(0),i=n.n(o),l=n(164),s=(n(149),[{to:"/",title:"About",icon:"fa-info-circle"},{to:"/blog",title:"Blog",icon:"fa-rss"},{to:"/resume",title:"Resume",icon:"fa-print"}]),c=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.location;return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"nav-links"},s.map(function(t){return i.a.createElement(l.a,{key:t.to,to:t.to,title:t.title,className:e&&e.pathname===t.to?"active":null},t.title)}))))},t}(i.a.Component);t.a=c},170:function(e,t,n){"use strict";var r=n(5),a=n.n(r),o=n(172),i=n(0),l=n.n(i),s=n(165),c=n.n(s),u=n(4),p=n.n(u),d=n(164),h=function(e){var t=e.url,n=e.type,r=e.title,a=e.desc,o=e.image,i=e.fbAppId;return l.a.createElement(c.a,null,i&&l.a.createElement("meta",{property:"fb:app_id",content:i}),t&&l.a.createElement("meta",{property:"og:url",content:t}),n&&l.a.createElement("meta",{property:"og:type",content:n}),r&&l.a.createElement("meta",{property:"og:title",content:r}),a&&l.a.createElement("meta",{property:"og:description",content:a}),o&&l.a.createElement("meta",{property:"og:image",content:o}))},m=h;h.propTypes={url:p.a.string,type:p.a.string,title:p.a.string,desc:p.a.string,image:p.a.string},h.defaultProps={url:null,type:null,title:null,desc:null,image:null};var f=function(e){var t=e.type,n=e.username,r=e.title,a=e.desc,o=e.image;return l.a.createElement(c.a,null,l.a.createElement("meta",{name:"twitter:card",content:t}),n&&l.a.createElement("meta",{name:"twitter:site",content:n}),n&&l.a.createElement("meta",{name:"twitter:creator",content:n}),r&&l.a.createElement("meta",{name:"twitter:title",content:r}),a&&l.a.createElement("meta",{name:"twitter:description",content:a}),o&&l.a.createElement("meta",{name:"twitter:image",content:o}),o&&l.a.createElement("meta",{name:"twitter:image:alt",content:r}))},g=f;f.propTypes={type:p.a.string,username:p.a.string,title:p.a.string,desc:p.a.string,image:p.a.string},f.defaultProps={type:"summary_large_image",username:null,title:null,desc:null,image:null},n.d(t,"a",function(){return y});var y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.desc,r=e.banner,a=e.pathname,i=e.article;return l.a.createElement(d.b,{query:b,render:function(e){var o=e.site,s=o.buildTime,u=o.siteMetadata,p=u.title,d=u.titleAlt,h=u.shortName,f=u.author,y=u.siteLanguage,b=u.logo,v=u.siteUrl,E=u.pathPrefix,k=u.description,w=u.banner,x=u.twitter,M=u.fbAppId,S={title:t||p,description:k||n,image:""+v+(r||w),url:""+v+(a||"/")},C=[{"@context":"http://schema.org","@type":"WebSite","@id":v,url:v,name:p,alternateName:d||""}];return i&&(C=[{"@context":"http://schema.org","@type":"BlogPosting","@id":S.url,url:S.url,name:t,alternateName:d||"",headline:t,image:{"@type":"ImageObject",url:S.image},description:S.description,datePublished:s,dateModified:s,author:{"@type":"Person",name:f},publisher:{"@type":"Organization",name:f,logo:{"@type":"ImageObject",url:v+("/"===E?"":E)+b}},isPartOf:v,mainEntityOfPage:{"@type":"WebSite","@id":v}}]),l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{title:S.title},l.a.createElement("html",{lang:y}),l.a.createElement("meta",{name:"description",content:S.description}),l.a.createElement("meta",{name:"image",content:S.image}),l.a.createElement("meta",{name:"apple-mobile-web-app-title",content:h}),l.a.createElement("meta",{name:"application-name",content:h}),l.a.createElement("script",{type:"application/ld+json"},JSON.stringify(C))),l.a.createElement(m,{desc:S.description,image:S.image,title:S.title,type:i?"article":"website",url:S.url,fbAppId:M}),l.a.createElement(g,{title:S.title,image:S.image,desc:S.description,username:x}))},data:o})},t}(i.Component);y.propTypes={title:p.a.string,desc:p.a.string,banner:p.a.string,pathname:p.a.string,article:p.a.bool},y.defaultProps={title:null,desc:null,banner:null,pathname:null,article:!1};var b="2757271287"},171:function(e,t,n){"use strict";n.r(t);n(35);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(55),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},172:function(e){e.exports={data:{site:{buildTime:"2019-08-11",siteMetadata:{defaultTitle:"Meha Masum",titleAlt:"Meha Masum",shortName:"Meha Masum",author:"Meha Masum",siteLanguage:"en",logo:"/images/meta/favicon.png",siteUrl:"https://mehamasum.github.io",pathPrefix:"/",defaultDescription:"Meha Masum's Software Portfolio and Blog",defaultBanner:"/images/meta/favicon.png",twitter:"@mehamasum",fbAppId:"575960529519073"}}}}},193:function(e,t,n){"use strict";var r=n(5),a=n.n(r),o=n(0),i=n.n(o),l=(n(148),n(164)),s=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement("span",{className:"badge tag"},this.props.external?i.a.createElement("a",{href:this.props.url,target:"_blank",style:{textDecoration:"none",color:"inherit"}},this.props.tag):i.a.createElement(l.a,{to:this.props.url||"/blog/tags/"+this.props.tag,style:{textDecoration:"none",color:"inherit"}},this.props.tag))},t}(i.a.Component);t.a=s},196:function(e,t,n){"use strict";n(35);var r=n(5),a=n.n(r),o=n(0),i=n.n(o),l=n(164),s=n(324),c=(n(151),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{style:Object.assign({},this.props.style,{paddingTop:"4em",paddingBottom:"4em"})},i.a.createElement("div",{className:"container"},i.a.createElement(s.a,{xs:12,md:6,className:"footer-left-panel"},i.a.createElement("span",{style:{margin:0,fontSize:"0.8em",textTransform:"uppercase",letterSpacing:"2px"}},"Made by ",i.a.createElement(l.a,{to:"#"}," meha")," ",i.a.createElement("i",{className:"fa fa-heart",style:{color:"red"}}))),i.a.createElement(s.a,{xs:12,md:6,className:"footer-right-panel"},i.a.createElement("a",{href:"https://github.com/mehamasum/gatsby-blog",target:"_blank"},i.a.createElement("i",{className:"fa fa-code-fork",style:{marginRight:"0.5rem"}}),"Fork me on Github"))))},t}(i.a.Component));t.a=c},207:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(208);var r=n(5),a=n.n(r),o=n(0),i=n.n(o),l=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.theme;return i.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n          a {\n            color: "+e.primary.link.normal+";\n          }\n          a:hover,\n          a:focus {\n            color: "+e.secondary.link.hover+";\n            text-decoration: underline;\n            text-decoration-color: inherit;\n          }\n\n          .badge {\n            color: "+e.badge.color+";\n            background: "+e.badge.background+";\n          }\n        "}})},t}(i.a.Component)},208:function(e,t,n){"use strict";n(209)("link",function(e){return function(t){return e(this,"a","href",t)}})},209:function(e,t,n){var r=n(11),a=n(20),o=n(21),i=/"/g,l=function(e,t,n,r){var a=String(o(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),l+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),r(r.P+r.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},210:function(e,t,n){e.exports=n(211)},211:function(e,t,n){var r=n(0),a=r.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},r.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),o=r.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},r.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function i(e){if(7===e.length)return e;for(var t="#",n=1;n<4;n+=1)t+=e[n]+e[n];return t}function l(e,t,n,r,a){return function(e,t,n,r,a){var o=(e-n)/(t-n);if(0===o)return r;if(1===o)return a;for(var i="#",l=1;l<6;l+=2){var s=parseInt(r.substr(l,2),16),c=parseInt(a.substr(l,2),16),u=Math.round((1-o)*s+o*c).toString(16);1===u.length&&(u="0"+u),i+=u}return i}(e,t,n,i(r),i(a))}var s=function(e){function t(t){e.call(this,t);var n=t.height,r=t.width,a=t.checked;this.t=t.handleDiameter||n-2,this.i=Math.max(r-n,r-(n+this.t)/2),this.s=Math.max(0,(n-this.t)/2),this.state={o:a?this.i:this.s},this.n=0,this.h=0,this.e=this.e.bind(this),this.a=this.a.bind(this),this.r=this.r.bind(this),this.c=this.c.bind(this),this.l=this.l.bind(this),this.u=this.u.bind(this),this.f=this.f.bind(this),this.p=this.p.bind(this),this.b=this.b.bind(this),this.g=this.g.bind(this),this.v=this.v.bind(this),this.w=this.w.bind(this)}return e&&(t.__proto__=e),((t.prototype=Object.create(e&&e.prototype)).constructor=t).prototype.componentWillReceiveProps=function(e){this.setState({o:e.checked?this.i:this.s})},t.prototype.k=function(e){this.y.focus(),this.setState({m:e,M:!0,R:Date.now()})},t.prototype.C=function(e){var t=this.state,n=t.m,r=t.o,a=(this.props.checked?this.i:this.s)+e-n;t.T||e===n||this.setState({T:!0});var o=Math.min(this.i,Math.max(this.s,a));o!==r&&this.setState({o:o})},t.prototype.S=function(e){var t=this.state,n=t.o,r=t.T,a=t.R,o=this.props.checked,i=(this.i+this.s)/2,l=Date.now()-a;!r||l<250?this.$(e):o?i<n?this.setState({o:this.i}):this.$(e):n<i?this.setState({o:this.s}):this.$(e),this.setState({T:!1,M:!1}),this.n=Date.now()},t.prototype.e=function(e){e.preventDefault(),"number"==typeof e.button&&0!==e.button||(this.k(e.clientX),window.addEventListener("mousemove",this.a),window.addEventListener("mouseup",this.r))},t.prototype.a=function(e){e.preventDefault(),this.C(e.clientX)},t.prototype.r=function(e){this.S(e),window.removeEventListener("mousemove",this.a),window.removeEventListener("mouseup",this.r)},t.prototype.c=function(e){this.x=null,this.k(e.touches[0].clientX)},t.prototype.l=function(e){this.C(e.touches[0].clientX)},t.prototype.u=function(e){e.preventDefault(),this.S(e)},t.prototype.p=function(e){50<Date.now()-this.n&&(this.$(e),50<Date.now()-this.h&&this.setState({M:!1}))},t.prototype.b=function(){this.h=Date.now()},t.prototype.g=function(){this.setState({M:!0})},t.prototype.v=function(){this.setState({M:!1})},t.prototype.w=function(e){this.y=e},t.prototype.f=function(e){e.preventDefault(),this.y.focus(),this.$(e),this.setState({M:!1})},t.prototype.$=function(e){var t=this.props;(0,t.onChange)(!t.checked,e,t.id)},t.prototype.render=function(){var e=this.props,t=e.checked,n=e.disabled,a=e.className,o=e.offColor,i=e.onColor,s=e.offHandleColor,c=e.onHandleColor,u=e.checkedIcon,p=e.uncheckedIcon,d=e.boxShadow,h=e.activeBoxShadow,m=e.height,f=e.width,g=e.id,y=e.name,b=e["aria-labelledby"],v=e["aria-label"],E=e.tabIndex,k=this.state,w=k.o,x=k.T,M=k.M,S={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,borderRadius:m/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},C={height:m,width:f,margin:Math.max(0,(this.t-m)/2),position:"relative",background:l(w,this.i,this.s,o,i),borderRadius:m/2,cursor:n?"default":"pointer",WebkitTransition:x?null:"background 0.25s",MozTransition:x?null:"background 0.25s",transition:x?null:"background 0.25s"},T={height:m,width:Math.min(1.5*m,f-(this.t+m)/2+1),position:"relative",opacity:(w-this.s)/(this.i-this.s),pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"},R={height:m,width:Math.min(1.5*m,f-(this.t+m)/2+1),position:"absolute",opacity:1-(w-this.s)/(this.i-this.s),right:0,top:0,pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"},O={height:this.t,width:this.t,background:l(w,this.i,this.s,s,c),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"50%",position:"absolute",transform:"translateX("+w+"px)",top:Math.max(0,(m-this.t)/2),outline:0,boxShadow:M?h:d,border:0,WebkitTransition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"};return r.createElement("div",{className:a,style:S},r.createElement("div",{className:"react-switch-bg",style:C,onClick:n?null:this.f,onMouseDown:function(e){return e.preventDefault()}},u&&r.createElement("div",{style:T},u),p&&r.createElement("div",{style:R},p)),r.createElement("div",{className:"react-switch-handle",style:O,onClick:function(e){return e.preventDefault()},onMouseDown:n?null:this.e,onTouchStart:n?null:this.c,onTouchMove:n?null:this.l,onTouchEnd:n?null:this.u,onTouchCancel:n?null:this.v}),r.createElement("input",{type:"checkbox",role:"switch",id:g,name:y,checked:t,disabled:n,tabIndex:E,onFocus:this.g,onBlur:this.v,onKeyUp:this.b,onChange:this.p,"aria-labelledby":b,"aria-label":v,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1},ref:this.w}))},t}(r.Component);s.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:a,checkedIcon:o,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.exports=s},212:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true",style:e.style},e.symbol)}},213:function(e,t,n){"use strict";var r=n(5),a=n.n(r),o=n(0),i=n.n(o),l=(n(193),n(164)),s=(n(150),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.post,t=e.frontmatter.title||e.fields.slug;return i.a.createElement("div",null,i.a.createElement("h1",{className:"postPreviewHeading"},i.a.createElement(l.a,{to:e.fields.slug},t)),i.a.createElement("small",null,e.frontmatter.date," in"," ",i.a.createElement(l.a,{to:"/blog/categories/"+e.frontmatter.category},e.frontmatter.category)," • "+e.timeToRead+" min read"),i.a.createElement("p",null,e.frontmatter.spoiler))},t}(i.a.Component));t.a=s},220:function(e,t,n){"use strict";var r=n(18),a=n.n(r),o=n(5),i=n.n(o),l=n(0),s=n.n(l),c=n(170),u=n(164),p=(n(148),n(213)),d=n(325),h=n(324),m=n(19),f=function(e){return s.a.createElement("div",null,s.a.createElement("h4",null,"RSS"),s.a.createElement("ul",{className:"unorderedList"},s.a.createElement("li",{className:"inlineListItem"},s.a.createElement(m.Link,{to:"/rss.xml"},s.a.createElement("i",{className:"fa fa-rss",style:{marginRight:"0.5rem"}}),"All Posts"))))},g=(n(35),n(76),n(57),n(36),n(243),n(312)),y=n(313),b=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t={};return e.forEach(function(e){e.node.frontmatter.tags.forEach(function(e){t[e]?t[e]++:t[e]=1})}),s.a.createElement("div",null,s.a.createElement("h4",null,"Posts by topics"),s.a.createElement(y.TagCloud,{minSize:12,maxSize:35,tags:Object.keys(t).map(function(e,n){return{value:e,count:t[e],url:"/blog/tags/"+e,key:n}}),renderer:function(e,t,n){var r=t+"px",a=e.key||e.value,o=Object.assign({},{margin:"0px 3px",verticalAlign:"middle",display:"inline-block"},{color:n,fontSize:r});return s.a.createElement("span",{key:a,className:"tag-cloud-tag",style:o},s.a.createElement(u.a,{to:e.url},e.value))}}))},t}(s.a.Component),v=function(e){return s.a.createElement(u.b,{query:"3679399047",render:function(t){return s.a.createElement(b,Object.assign({data:t},e))},data:g})},E=n(58),k=n(210),w=n.n(k),x=n(207),M=n(319),S=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t={};return e.forEach(function(e){var n=e.node.frontmatter.category;t[n]?t[n]++:t[n]=1}),s.a.createElement("div",null,s.a.createElement("h4",null,"Posts by category"),s.a.createElement("ul",null,Object.keys(t).map(function(e){return s.a.createElement("li",{key:e},s.a.createElement(u.a,{to:"/blog/categories/"+e},e+" ("+t[e]+")"))})))},t}(s.a.Component),C=function(e){return s.a.createElement(u.b,{query:"3623635794",render:function(t){return s.a.createElement(S,Object.assign({data:t},e))},data:M})},T=n(196),R=n(212),O=n(169),N=function(e){function t(t){var n;n=e.call(this,t)||this;var r=!1;try{r=localStorage.getItem("nativeHidden")}catch(o){}return n.state={nativeHidden:"true"===r},n.toggleNative=n.toggleNative.bind(a()(n)),n}i()(t,e);var n=t.prototype;return n.toggleNative=function(){this.setState(function(e){var t=!e.nativeHidden;try{localStorage.setItem("nativeHidden",t)}catch(n){}return{nativeHidden:t}})},n.render=function(){var e=this,t=this.props.data,n=t.site.siteMetadata,r=n.blogTitle,a=n.blogSlogan,o=(n.author,t.allMarkdownRemark.edges);return s.a.createElement(E.a.Consumer,null,function(t){var n=t.theme,i=t.setTheme;return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{article:!1,title:r+" - "+a,desc:""+a,pathname:e.props.location.pathname}),s.a.createElement(x.a,{theme:n}),s.a.createElement(O.a,{location:e.props.location}),s.a.createElement("div",null,s.a.createElement("div",{className:"indexRoot",style:{background:n.primary.background,color:n.primary.text.normal,transition:"color 0.5s ease-out, background 0.5s ease-out"}},s.a.createElement("div",null,s.a.createElement(d.a,null,s.a.createElement(h.a,{xs:12,md:3,mdOffset:1},s.a.createElement("div",{style:{display:"none"}},s.a.createElement(w.a,{onColor:"#222",checked:"dark"===n.id,onChange:function(e){i(e?"dark":"light")},uncheckedIcon:s.a.createElement(R.a,{symbol:"☀️",style:{lineHeight:"28px",marginLeft:"7px"}}),checkedIcon:s.a.createElement(R.a,{symbol:"🌙",style:{lineHeight:"28px",marginLeft:"7px"}}),boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)"})),s.a.createElement(C,null),s.a.createElement("hr",null),s.a.createElement(v,null),s.a.createElement("hr",null),s.a.createElement(f,null),s.a.createElement("hr",null)),s.a.createElement(h.a,{xs:12,md:7},s.a.createElement("section",{style:{margin:"2em 0"}},e.props.topContent?e.props.topContent:null,s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",checked:e.state.nativeHidden,onChange:e.toggleNative})," ","Hide non-english posts"),e.props.topContent?s.a.createElement("hr",null):null,o.filter(function(t){return e.state.nativeHidden?"Native"!==t.node.frontmatter.category:t}).map(function(e){return s.a.createElement("article",{key:e.node.id,style:{margin:"0 0 4em 0"}},s.a.createElement(p.a,{post:e.node}))}))))))),s.a.createElement(T.a,{style:{background:n.primary.background,color:n.primary.text.normal}}))})},t}(s.a.Component);t.a=N},243:function(e,t,n){var r=n(27),a=n(37);n(311)("keys",function(){return function(e){return a(r(e))}})},311:function(e,t,n){var r=n(11),a=n(22),o=n(20);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*o(function(){n(1)}),"Object",i)}},312:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/2019/5/first-class-functions/"},frontmatter:{title:"First-Class Functions - পাইথনে ক্লিন কোড",tags:["python"]}}},{node:{fields:{slug:"/blog/2018/12/dear-middlewares/"},frontmatter:{title:"Lets know redux middlewares better",tags:["middleware","reduxjs"]}}},{node:{fields:{slug:"/blog/2016/06/paintshop-solution/"},frontmatter:{title:"OS/161: Paint Shop Synchronization Problem",tags:["os161"]}}}]}}}},313:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(314);Object.defineProperty(t,"TagCloud",{enumerable:!0,get:function(){return r.TagCloud}})},314:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TagCloud=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=u(n(0)),o=u(n(4)),i=n(315),l=u(n(316)),s=u(n(317)),c=n(318);function u(e){return e&&e.__esModule?e:{default:e}}function p(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var d=["onClick","onDoubleClick","onMouseMove"],h=["tags","shuffle","renderer","maxSize","minSize","colorOptions","disableRandomColor","randomNumberGenerator"],m=function(e,t){var n=t.disableRandomColor,r=t.colorOptions;return e.color?e.color:n?void 0:(0,s.default)(r)},f=t.TagCloud=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"componentWillReceiveProps",value:function(e){var n=(0,c.propertiesEqual)(this.props,e,Object.keys(t.propTypes));(0,c.arraysEqual)(e.tags,this.props.tags)&&n||this._populate(e)}},{key:"componentWillMount",value:function(){this._populate(this.props)}},{key:"render",value:function(){var e=(0,c.omitProps)(this.props,[].concat(h,d)),t=this._attachEventHandlers();return a.default.createElement("div",e,t)}},{key:"_attachEventHandlers",value:function(){var e=this,t=(0,c.includeProps)(this.props,d);return this._data.map(function(n){var r=n.tag,o=n.fontSize,i=n.color,l=e.props.renderer(r,o,i),s=(0,c.includeProps)(l.props,d),u=Object.keys(t).reduce(function(e,n){return e[n]=function(e){t[n](r,e),s[n]&&s(e)},e},{});return a.default.cloneElement(l,u)})}},{key:"_populate",value:function(e){var t=e.tags,n=e.shuffle,r=e.minSize,a=e.maxSize,o=e.randomNumberGenerator,i=t.map(function(e){return e.count}),s=Math.min.apply(Math,p(i)),u=Math.max.apply(Math,p(i)),d=t.map(function(t){return{tag:t,color:m(t,e),fontSize:(0,c.fontSizeConverter)(t.count,s,u,r,a)}});this._data=n?(0,l.default)(d,{copy:!0,rng:o}):d}}]),t}();f.propTypes={tags:o.default.array.isRequired,maxSize:o.default.number.isRequired,minSize:o.default.number.isRequired,shuffle:o.default.bool,colorOptions:o.default.object,disableRandomColor:o.default.bool,renderer:o.default.func,className:o.default.string,randomNumberGenerator:o.default.func},f.defaultProps={renderer:i.defaultRenderer,shuffle:!0,className:"tag-cloud",colorOptions:{}}},315:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultRenderer=void 0;var r=o(n(0)),a=o(n(56));function o(e){return e&&e.__esModule?e:{default:e}}t.defaultRenderer=function(e,t,n){var o=t+"px",l=e.key||e.value,s=(0,a.default)({},i,{color:n,fontSize:o});return r.default.createElement("span",{className:"tag-cloud-tag",style:s,key:l},e.value)};var i={margin:"0px 3px",verticalAlign:"middle",display:"inline-block"}},316:function(e,t,n){"use strict";function r(e,t){if(!Array.isArray(e))throw new Error("shuffle expect an array as parameter.");t=t||{};var n,r,a=e,o=e.length,i=t.rng||Math.random;for(!0===t.copy&&(a=e.slice());o;)n=Math.floor(i()*o),r=a[o-=1],a[o]=a[n],a[n]=r;return a}r.pick=function(e,t){if(!Array.isArray(e))throw new Error("shuffle.pick() expect an array as parameter.");var n=(t=t||{}).rng||Math.random,r=t.picks||1;if("number"==typeof r&&1!==r){for(var a,o=e.length,i=e.slice(),l=[];r&&o;)a=Math.floor(n()*o),l.push(i[a]),i.splice(a,1),o-=1,r-=1;return l}return e[Math.floor(n()*e.length)]},e.exports=r},317:function(e,t,n){var r,a,o;a=[],void 0===(o="function"==typeof(r=function(){var e=null,t={};o("monochrome",null,[[0,0],[100,0]]),o("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),o("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),o("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),o("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),o("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),o("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),o("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var n=function(o){if((o=o||{}).seed&&o.seed===parseInt(o.seed,10))e=o.seed;else if("string"==typeof o.seed)e=function(e){for(var t=0,n=0;n!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);n++)t+=e.charCodeAt(n);return t}(o.seed);else{if(void 0!==o.seed&&null!==o.seed)throw new TypeError("The seed value must be an integer or string");e=null}var s,c,u;if(null!==o.count&&void 0!==o.count){var p=o.count,d=[];for(o.count=null;p>d.length;)e&&o.seed&&(o.seed+=1),d.push(n(o));return o.count=p,d}return s=function(e){var n=a(function(e){if("number"==typeof parseInt(e)){var n=parseInt(e);if(n<360&&n>0)return[n,n]}if("string"==typeof e&&t[e]){var r=t[e];if(r.hueRange)return r.hueRange}return[0,360]}(e.hue));return n<0&&(n=360+n),n}(o),c=function(e,t){if("random"===t.luminosity)return a([0,100]);if("monochrome"===t.hue)return 0;var n=function(e){return r(e).saturationRange}(e),o=n[0],i=n[1];switch(t.luminosity){case"bright":o=55;break;case"dark":o=i-10;break;case"light":i=55}return a([o,i])}(s,o),u=function(e,t,n){var o=function(e,t){for(var n=r(e).lowerBounds,a=0;a<n.length-1;a++){var o=n[a][0],i=n[a][1],l=n[a+1][0],s=n[a+1][1];if(t>=o&&t<=l){var c=(s-i)/(l-o),u=i-c*o;return c*t+u}}return 0}(e,t),i=100;switch(n.luminosity){case"dark":i=o+20;break;case"light":o=(i+o)/2;break;case"random":o=0,i=100}return a([o,i])}(s,c,o),function(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return l(e);case"hsl":var n=l(e);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var r=l(e);return"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+Math.random()+")";case"rgbArray":return i(e);case"rgb":var a=i(e);return"rgb("+a.join(", ")+")";case"rgba":var o=i(e);return"rgba("+o.join(", ")+", "+Math.random()+")";default:return function(e){var t=i(e);function n(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return"#"+n(t[0])+n(t[1])+n(t[2])}(e)}}([s,c,u],o)};function r(e){for(var n in e>=334&&e<=360&&(e-=360),t){var r=t[n];if(r.hueRange&&e>=r.hueRange[0]&&e<=r.hueRange[1])return t[n]}return"Color not found"}function a(t){if(null===e)return Math.floor(t[0]+Math.random()*(t[1]+1-t[0]));var n=t[1]||1,r=t[0]||0,a=(e=(9301*e+49297)%233280)/233280;return Math.floor(r+a*(n-r))}function o(e,n,r){var a=r[0][0],o=r[r.length-1][0],i=r[r.length-1][1],l=r[0][1];t[e]={hueRange:n,lowerBounds:r,saturationRange:[a,o],brightnessRange:[i,l]}}function i(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var n=e[1]/100,r=e[2]/100,a=Math.floor(6*t),o=6*t-a,i=r*(1-n),l=r*(1-o*n),s=r*(1-(1-o)*n),c=256,u=256,p=256;switch(a){case 0:c=r,u=s,p=i;break;case 1:c=l,u=r,p=i;break;case 2:c=i,u=r,p=s;break;case 3:c=i,u=l,p=r;break;case 4:c=s,u=i,p=r;break;case 5:c=r,u=i,p=l}var d=[Math.floor(255*c),Math.floor(255*u),Math.floor(255*p)];return d}function l(e){var t=e[0],n=e[1]/100,r=e[2]/100,a=(2-n)*r;return[t,Math.round(n*r/(a<1?a:2-a)*1e4)/100,a/2*100]}return n})?r.apply(t,a):r)||(e.exports=o)},318:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.omitProps=function(e,t){return Object.keys(e).reduce(function(n,r){return~t.indexOf(r)||(n[r]=e[r]),n},{})},t.includeProps=function(e,t){return Object.keys(e).reduce(function(n,r){return~t.indexOf(r)&&r in e&&(n[r]=e[r]),n},{})},t.fontSizeConverter=function(e,t,n,r,a){return n-t==0?Math.round((r+a)/2):Math.round((e-t)*(a-r)/(n-t)+r)},t.arraysEqual=function(e,t){return e.length===t.length&&e.every(function(e,n){return e===t[n]})},t.propertiesEqual=function(e,t,n){return n.every(function(n){return e[n]===t[n]})}},319:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/2019/5/first-class-functions/"},frontmatter:{title:"First-Class Functions - পাইথনে ক্লিন কোড",tags:["python"],category:"Native"}}},{node:{fields:{slug:"/blog/2018/12/dear-middlewares/"},frontmatter:{title:"Lets know redux middlewares better",tags:["middleware","reduxjs"],category:"General"}}},{node:{fields:{slug:"/blog/2016/06/paintshop-solution/"},frontmatter:{title:"OS/161: Paint Shop Synchronization Problem",tags:["os161"],category:"Academic"}}}]}}}}}]);
//# sourceMappingURL=3-da1db8358486fc7b8d17.js.map