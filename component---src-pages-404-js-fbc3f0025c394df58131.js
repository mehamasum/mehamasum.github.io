(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{138:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),i=a(0),l=a.n(i),o=(a(141),a(153)),m=a(164),c=a(168),s=a(398),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("section",{style:{paddingTop:"1em",paddingBottom:"1em",minHeight:"300px"}},l.a.createElement("div",{className:"layoutRow"},l.a.createElement(s.a,{sm:12},this.props.children)))},t}(l.a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",null,l.a.createElement(o.a,null),l.a.createElement(m.a,this.props.location),l.a.createElement(p,null,this.props.children),l.a.createElement(c.a,null))},t}(l.a.Component),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(u,{location:this.props.location},l.a.createElement("h1",null,"Not Found"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(l.a.Component);t.default=g},153:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(161),l=a(0),o=a.n(l),m=a(148),c=a.n(m),s=a(4),p=a.n(s),u=a(140),g=function(e){var t=e.url,a=e.type,n=e.title,r=e.desc,i=e.image;return o.a.createElement(c.a,null,t&&o.a.createElement("meta",{property:"og:url",content:t}),a&&o.a.createElement("meta",{property:"og:type",content:a}),n&&o.a.createElement("meta",{property:"og:title",content:n}),r&&o.a.createElement("meta",{property:"og:description",content:r}),i&&o.a.createElement("meta",{property:"og:image",content:i}))},d=g;g.propTypes={url:p.a.string,type:p.a.string,title:p.a.string,desc:p.a.string,image:p.a.string},g.defaultProps={url:null,type:null,title:null,desc:null,image:null};var h=function(e){var t=e.type,a=e.username,n=e.title,r=e.desc,i=e.image;return o.a.createElement(c.a,null,o.a.createElement("meta",{name:"twitter:card",content:t}),a&&o.a.createElement("meta",{name:"twitter:site",content:a}),a&&o.a.createElement("meta",{name:"twitter:creator",content:a}),n&&o.a.createElement("meta",{name:"twitter:title",content:n}),r&&o.a.createElement("meta",{name:"twitter:description",content:r}),i&&o.a.createElement("meta",{name:"twitter:image",content:i}),i&&o.a.createElement("meta",{name:"twitter:image:alt",content:n}))},y=h;h.propTypes={type:p.a.string,username:p.a.string,title:p.a.string,desc:p.a.string,image:p.a.string},h.defaultProps={type:"summary_large_image",username:null,title:null,desc:null,image:null},a.d(t,"a",function(){return f});var f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.desc,n=e.banner,r=e.pathname,l=e.article;return console.log(this.props),o.a.createElement(u.StaticQuery,{query:E,render:function(e){var i=e.site,m=i.buildTime,s=i.siteMetadata,p=s.defaultTitle,u=s.titleAlt,g=s.shortName,h=s.author,f=s.siteLanguage,E=s.logo,b=s.siteUrl,w=s.pathPrefix,v=s.defaultDescription,M=s.defaultBanner,P=s.twitter,T={title:t||p,description:v||a,image:""+b+(n||M),url:""+b+(r||"/")},x=[{"@context":"http://schema.org","@type":"WebSite","@id":b,url:b,name:p,alternateName:u||""}];return l&&(x=[{"@context":"http://schema.org","@type":"BlogPosting","@id":T.url,url:T.url,name:t,alternateName:u||"",headline:t,image:{"@type":"ImageObject",url:T.image},description:T.description,datePublished:m,dateModified:m,author:{"@type":"Person",name:h},publisher:{"@type":"Organization",name:h,logo:{"@type":"ImageObject",url:b+("/"===w?"":w)+E}},isPartOf:b,mainEntityOfPage:{"@type":"WebSite","@id":b}}]),o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:T.title},o.a.createElement("html",{lang:f}),o.a.createElement("meta",{name:"description",content:T.description}),o.a.createElement("meta",{name:"image",content:T.image}),o.a.createElement("meta",{name:"apple-mobile-web-app-title",content:g}),o.a.createElement("meta",{name:"application-name",content:g}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(x))),o.a.createElement(d,{desc:T.description,image:T.image,title:T.title,type:l?"article":"website",url:T.url}),o.a.createElement(y,{title:T.title,image:T.image,desc:T.description,username:P}))},data:i})},t}(l.Component);f.propTypes={title:p.a.string,desc:p.a.string,banner:p.a.string,pathname:p.a.string,article:p.a.bool},f.defaultProps={title:null,desc:null,banner:null,pathname:null,article:!1};var E="2288919696"},161:function(e){e.exports={data:{site:{buildTime:"2018-12-20",siteMetadata:{defaultTitle:"Meha Masum",titleAlt:"Meha Masum",shortName:"Meha Masum",author:"Meha Masum",siteLanguage:"en",logo:"/images/meta/favicon.png",siteUrl:"https://860a836e.ngrok.io",pathPrefix:"/gatsby-blog",defaultDescription:"Meha Masum's Software Portfolio and Blog",defaultBanner:"/images/meta/favicon.png",twitter:"@mehamasum"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-fbc3f0025c394df58131.js.map