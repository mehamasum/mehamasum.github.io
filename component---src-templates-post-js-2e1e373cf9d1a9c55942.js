(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{144:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),o=n(0),l=n.n(o),i=n(146),s=n(179),c=n.n(s),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{style:{display:"flex",marginBottom:"2.5rem"}},l.a.createElement("img",{src:c.a,alt:"Meha Masum",style:{marginRight:"1rem",marginBottom:0,width:"60px",height:"60px",borderRadius:"5%"}}),l.a.createElement("div",null,"Personal blog by"," ",l.a.createElement("strong",null,l.a.createElement("a",{href:"/"},"Mehedi Hasan Masum"),". "),l.a.createElement("br",null),"Software engineer based in Dhaka",l.a.createElement("br",null),l.a.createElement("span",{style:{fontSize:"80%"}},l.a.createElement("a",{href:"https://twitter.com/mehamasum",target:"_blank"},l.a.createElement("i",{className:"fa fa-twitter",style:{color:"#1da1f2",marginRight:"0.25em"}}),"@mehamasum"))))},t}(l.a.Component),u=n(316),p=n(315),d=n(153),g=n(180),h=(n(150),n(176),n(52)),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.theme;return l.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n          /**\n           * GHColors theme by Avi Aryan (http://aviaryan.in)\n           * Inspired by Github syntax coloring\n           */\n          \n          code[class*='language-'],\n          pre[class*='language-'] {\n            color: #393a34;\n            font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier,\n              monospace;\n            direction: ltr;\n            text-align: left;\n            white-space: pre;\n            word-spacing: normal;\n            word-break: normal;\n            font-size: 0.95em;\n            line-height: 1.2em;\n          \n            -moz-tab-size: 4;\n            -o-tab-size: 4;\n            tab-size: 4;\n          \n            -webkit-hyphens: none;\n            -moz-hyphens: none;\n            -ms-hyphens: none;\n            hyphens: none;\n          }\n          \n          pre[class*='language-']::-moz-selection,\n          pre[class*='language-'] ::-moz-selection,\n          code[class*='language-']::-moz-selection,\n          code[class*='language-'] ::-moz-selection {\n            background: #b3d4fc;\n          }\n          \n          pre[class*='language-']::selection,\n          pre[class*='language-'] ::selection,\n          code[class*='language-']::selection,\n          code[class*='language-'] ::selection {\n            background: #b3d4fc;\n          }\n          \n          /* Code blocks */\n          pre[class*='language-'] {\n            padding: 1em;\n            margin: 0.5em 0;\n            overflow: auto;\n            border: 1px solid #dddddd;\n            background-color: white;\n          }\n          \n          :not(pre) > code[class*='language-'],\n          pre[class*='language-'] {\n          }\n          \n          /* Inline code */\n          :not(pre) > code[class*='language-'] {\n            padding: 0.2em;\n            padding-top: 1px;\n            padding-bottom: 1px;\n            background: "+e.inlineCode.background+";\n            color: "+e.inlineCode.color+";\n            border: 1px solid #e1e1e8;\n            border-radius: 5px;\n          }\n          \n          .token.comment,\n          .token.prolog,\n          .token.doctype,\n          .token.cdata {\n            color: #999988;\n            font-style: italic;\n          }\n          \n          .token.namespace {\n            opacity: 0.7;\n          }\n          \n          .token.string,\n          .token.attr-value {\n            color: #e3116c;\n          }\n          .token.punctuation,\n          .token.operator {\n            color: #393a34; /* no highlight */\n          }\n          \n          .token.entity,\n          .token.url,\n          .token.symbol,\n          .token.number,\n          .token.boolean,\n          .token.variable,\n          .token.constant,\n          .token.property,\n          .token.regex {\n            color: #36acaa;\n          }\n          \n          .token.inserted {\n            color: green;\n          }\n          \n          .token.atrule,\n          .token.keyword,\n          .token.attr-name,\n          .language-autohotkey .token.selector {\n            color: #00a4db;\n          }\n          \n          .token.function,\n          .token.deleted,\n          .language-autohotkey .token.tag {\n            color: #9a050f;\n          }\n          \n          .token.tag,\n          .token.selector,\n          .language-autohotkey .token.keyword {\n            color: #00009f;\n          }\n          \n          .token.important,\n          .token.function,\n          .token.bold {\n            font-weight: bold;\n          }\n          \n          .token.italic {\n            font-style: italic;\n          }\n          \n          /* custom */\n          \n          .gatsby-highlight-code-line {\n            background-color: rgba(240, 240, 240, 0.486);\n            display: block;\n            margin-right: -1em;\n            margin-left: -1em;\n            padding-right: 1em;\n            padding-left: 0.75em;\n            border-left: 0.25em solid #00c3ff;\n          }\n          \n          .gatsby-highlight {\n            margin-bottom: 1.75rem;\n            border-radius: 10px;\n            -webkit-overflow-scrolling: touch;\n            overflow: auto;\n          }\n          \n          .gatsby-highlight pre[class*='language-'] {\n            float: left;\n            min-width: 100%;\n          }\n          \n        "}})},t}(l.a.Component),y=n(192),b=n(195),E=n.n(b),k=n(197),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(h.a.Consumer,null,function(t){var n=t.theme,a=t.setTheme;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null),l.a.createElement(y.a,{theme:n}),l.a.createElement(f,{theme:n}),l.a.createElement("div",{className:"indexRoot",style:{background:n.primary.background,color:n.primary.text.normal,transition:"color 0.5s ease-out, background 0.5s ease-out"}},l.a.createElement("div",{className:"container"},l.a.createElement(u.a,null,l.a.createElement(p.a,{xs:12,md:3,mdOffset:1,className:"stickySidebar"},l.a.createElement(E.a,{onColor:"#222",checked:"dark"===n.id,onChange:function(e){a(e?"dark":"light")},uncheckedIcon:l.a.createElement(k.a,{symbol:"☀️",style:{lineHeight:"28px",marginLeft:"7px"}}),checkedIcon:l.a.createElement(k.a,{symbol:"🌙",style:{lineHeight:"28px",marginLeft:"7px"}}),boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)"}),l.a.createElement("h1",{style:{fontSize:"2.5em"}},l.a.createElement(i.Link,{to:"/blog",style:{color:"inherit"}},"<Learning in",l.a.createElement("br",null),"public/>")),l.a.createElement("h3",null,"Personal Blog by ",l.a.createElement(i.Link,{to:"/"},"Meha Masum")),l.a.createElement("hr",null),e.props.sidebar),l.a.createElement(p.a,{xs:12,md:7},e.props.children)))),l.a.createElement(g.a,{style:{background:n.primary.background,color:n.primary.text.normal}}))})},t}(l.a.Component),w=n(177),x=n(198),_=n(317),N=n(318),C=n(319),M=n(320),S=n(321),P=n(322),T=n(323),z=n(324),L=n(325),R=n(326),I=(n(258),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url,t=this.props.text;return l.a.createElement("div",{className:"Demo__container"},l.a.createElement("div",{className:"Demo__some-network"},l.a.createElement(_.a,{url:e,quote:t,className:"Demo__some-network__share-button"},l.a.createElement(N.a,{size:32,round:!0}))),l.a.createElement("div",{className:"Demo__some-network"},l.a.createElement(C.a,{url:e,title:t,className:"Demo__some-network__share-button"},l.a.createElement(M.a,{size:32,round:!0}))),l.a.createElement("div",{className:"Demo__some-network"},l.a.createElement(S.a,{url:e,title:t,windowWidth:550,windowHeight:350,className:"Demo__some-network__share-button"},l.a.createElement(P.a,{size:32,round:!0}))),l.a.createElement("div",{className:"Demo__some-network"},l.a.createElement(T.a,{url:e,title:t,windowWidth:660,windowHeight:460,className:"Demo__some-network__share-button"},l.a.createElement(z.a,{size:32,round:!0}))),l.a.createElement("div",{className:"Demo__some-network"},l.a.createElement(L.a,{url:e,subject:t,body:"body",className:"Demo__some-network__share-button"},l.a.createElement(R.a,{size:32,round:!0}))))},t}(o.Component));n.d(t,"pageQuery",function(){return H});n(299);var D={padding:"1rem"},q=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata,n=t.blogTitle,a=(t.blogSlogan,t.author),r=this.props.pageContext,o=r.previousPage,s=r.nextPage,c=r.slug,g={url:""+this.props.location.href,identifier:c,title:e.frontmatter.title};return l.a.createElement(v,{location:this.props.location,sidebar:l.a.createElement("div",null,l.a.createElement("h4",null,"Content"),l.a.createElement("div",{className:"postTOC",dangerouslySetInnerHTML:{__html:e.tableOfContents}}))},l.a.createElement(d.a,{article:!0,title:e.frontmatter.title+" - "+a+" - "+n,desc:""+e.frontmatter.spoiler,pathname:this.props.location.pathname,banner:e.frontmatter.thumbnail}),l.a.createElement("div",null,l.a.createElement("h1",{style:{marginBottom:"0"}},e.frontmatter.title),l.a.createElement("div",{style:{display:"block",margin:"1em 0 2em"}},e.frontmatter.date," in"," ",l.a.createElement(i.Link,{to:"/blog/categories/"+e.frontmatter.category},e.frontmatter.category)," • "+e.timeToRead+" min read")),l.a.createElement("div",{style:{fontSize:"1.2em"}},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),l.a.createElement("div",{style:{margin:"2rem 0"}},l.a.createElement("i",{className:"fa fa-tag fa-flip-horizontal",style:{marginRight:"0.5em",color:"grey"}}),e.frontmatter.tags.map(function(e){return l.a.createElement(w.a,{tag:e,key:e})})),l.a.createElement("div",null,l.a.createElement("div",{style:{float:"left"}},l.a.createElement(I,{url:g.url,text:g.title}))),l.a.createElement("div",{style:{clear:"both",marginTop:"7rem"}},l.a.createElement("hr",null),l.a.createElement(m,null)),s||o?l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("h4",null,"Read more stories..."),l.a.createElement(u.a,null,s&&l.a.createElement(p.a,{xs:12,lg:6,style:D},l.a.createElement(x.a,{post:s})),o&&l.a.createElement(p.a,{xs:12,lg:6,style:D},l.a.createElement(x.a,{post:o})))):null,l.a.createElement("div",null))},t}(l.a.Component),H=(t.default=q,"609086262")},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(145),s=n.n(i);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var c=n(149),m=n.n(c);n.d(t,"PageRenderer",function(){return m.a});var u=n(30);n.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},149:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},150:function(e,t,n){},153:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(155),l=n(0),i=n.n(l),s=n(147),c=n.n(s),m=n(4),u=n.n(m),p=n(146),d=function(e){var t=e.url,n=e.type,a=e.title,r=e.desc,o=e.image,l=e.fbAppId;return i.a.createElement(c.a,null,l&&i.a.createElement("meta",{property:"fb:app_id",content:l}),t&&i.a.createElement("meta",{property:"og:url",content:t}),n&&i.a.createElement("meta",{property:"og:type",content:n}),a&&i.a.createElement("meta",{property:"og:title",content:a}),r&&i.a.createElement("meta",{property:"og:description",content:r}),o&&i.a.createElement("meta",{property:"og:image",content:o}))},g=d;d.propTypes={url:u.a.string,type:u.a.string,title:u.a.string,desc:u.a.string,image:u.a.string},d.defaultProps={url:null,type:null,title:null,desc:null,image:null};var h=function(e){var t=e.type,n=e.username,a=e.title,r=e.desc,o=e.image;return i.a.createElement(c.a,null,i.a.createElement("meta",{name:"twitter:card",content:t}),n&&i.a.createElement("meta",{name:"twitter:site",content:n}),n&&i.a.createElement("meta",{name:"twitter:creator",content:n}),a&&i.a.createElement("meta",{name:"twitter:title",content:a}),r&&i.a.createElement("meta",{name:"twitter:description",content:r}),o&&i.a.createElement("meta",{name:"twitter:image",content:o}),o&&i.a.createElement("meta",{name:"twitter:image:alt",content:a}))},f=h;h.propTypes={type:u.a.string,username:u.a.string,title:u.a.string,desc:u.a.string,image:u.a.string},h.defaultProps={type:"summary_large_image",username:null,title:null,desc:null,image:null},n.d(t,"a",function(){return y});var y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.desc,a=e.banner,r=e.pathname,l=e.article;return i.a.createElement(p.StaticQuery,{query:b,render:function(e){var o=e.site,s=o.buildTime,m=o.siteMetadata,u=m.title,p=m.titleAlt,d=m.shortName,h=m.author,y=m.siteLanguage,b=m.logo,E=m.siteUrl,k=m.pathPrefix,v=m.description,w=m.banner,x=m.twitter,_=m.fbAppId,N={title:t||u,description:v||n,image:""+E+(a||w),url:""+E+(r||"/")},C=[{"@context":"http://schema.org","@type":"WebSite","@id":E,url:E,name:u,alternateName:p||""}];return l&&(C=[{"@context":"http://schema.org","@type":"BlogPosting","@id":N.url,url:N.url,name:t,alternateName:p||"",headline:t,image:{"@type":"ImageObject",url:N.image},description:N.description,datePublished:s,dateModified:s,author:{"@type":"Person",name:h},publisher:{"@type":"Organization",name:h,logo:{"@type":"ImageObject",url:E+("/"===k?"":k)+b}},isPartOf:E,mainEntityOfPage:{"@type":"WebSite","@id":E}}]),i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:N.title},i.a.createElement("html",{lang:y}),i.a.createElement("meta",{name:"description",content:N.description}),i.a.createElement("meta",{name:"image",content:N.image}),i.a.createElement("meta",{name:"apple-mobile-web-app-title",content:d}),i.a.createElement("meta",{name:"application-name",content:d}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(C))),i.a.createElement(g,{desc:N.description,image:N.image,title:N.title,type:l?"article":"website",url:N.url,fbAppId:_}),i.a.createElement(f,{title:N.title,image:N.image,desc:N.description,username:x}))},data:o})},t}(l.Component);y.propTypes={title:u.a.string,desc:u.a.string,banner:u.a.string,pathname:u.a.string,article:u.a.bool},y.defaultProps={title:null,desc:null,banner:null,pathname:null,article:!1};var b="2757271287"},154:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(48),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},155:function(e){e.exports={data:{site:{buildTime:"2019-03-22",siteMetadata:{defaultTitle:"Meha Masum",titleAlt:"Meha Masum",shortName:"Meha Masum",author:"Meha Masum",siteLanguage:"en",logo:"/images/meta/favicon.png",siteUrl:"https://mehamasum.github.io",pathPrefix:"/",defaultDescription:"Meha Masum's Software Portfolio and Blog",defaultBanner:"/images/meta/favicon.png",twitter:"@mehamasum",fbAppId:"575960529519073"}}}}},176:function(e,t,n){},177:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),l=n.n(o),i=(n(150),n(146)),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("span",{className:"badge tag"},this.props.external?l.a.createElement("a",{href:this.props.url,target:"_blank",style:{textDecoration:"none",color:"inherit"}},this.props.tag):l.a.createElement(i.Link,{to:this.props.url||"/blog/tags/"+this.props.tag,style:{textDecoration:"none",color:"inherit"}},this.props.tag))},t}(l.a.Component);t.a=s},179:function(e,t,n){e.exports=n.p+"static/avatar-a6e512818f4a219ac8465adb739d71fb.jpg"},180:function(e,t,n){"use strict";n(29);var a=n(5),r=n.n(a),o=n(0),l=n.n(o),i=n(146),s=n(315),c=(n(181),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("footer",{style:Object.assign({},this.props.style,{paddingTop:"4em",paddingBottom:"4em"})},l.a.createElement("div",{className:"container"},l.a.createElement(s.a,{xs:12,md:6,className:"footer-left-panel"},l.a.createElement("span",{style:{margin:0,fontSize:"0.8em",textTransform:"uppercase",letterSpacing:"2px"}},"Made by ",l.a.createElement(i.Link,{to:"#"}," meha")," ",l.a.createElement("i",{className:"fa fa-heart",style:{color:"red"}}))),l.a.createElement(s.a,{xs:12,md:6,className:"footer-right-panel"},l.a.createElement("a",{href:"https://github.com/mehamasum/gatsby-blog",target:"_blank"},l.a.createElement("i",{className:"fa fa-code-fork",style:{marginRight:"0.5rem"}}),"Fork me on Github"))))},t}(l.a.Component));t.a=c},181:function(e,t,n){},192:function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(193);var a=n(5),r=n.n(a),o=n(0),l=n.n(o),i=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.theme;return l.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n          a {\n            color: "+e.primary.link.normal+";\n          }\n          a:hover,\n          a:focus {\n            color: "+e.secondary.link.hover+";\n            text-decoration: underline;\n            text-decoration-color: inherit;\n          }\n\n          .badge {\n            color: "+e.badge.color+";\n            background: "+e.badge.background+";\n          }\n        "}})},t}(l.a.Component)},197:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true",style:e.style},e.symbol)}},198:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),l=n.n(o),i=(n(177),n(146)),s=(n(176),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.post,t=e.frontmatter.title||e.fields.slug;return l.a.createElement("div",{className:"postPreview"},l.a.createElement("div",{className:"flex1"},l.a.createElement("h1",{className:"postPreviewHeading"},l.a.createElement(i.Link,{to:e.fields.slug},t)),l.a.createElement("small",null,e.frontmatter.date," in"," ",l.a.createElement(i.Link,{to:"/blog/categories/"+e.frontmatter.category},e.frontmatter.category)," • "+e.timeToRead+" min read"),l.a.createElement("p",null,e.frontmatter.spoiler),l.a.createElement("div",{style:{margin:"1rem 0"}},l.a.createElement(i.Link,{to:e.fields.slug},"Read More "),"▸")),l.a.createElement("div",{className:"postPreviewThumbnail leftRoundedImage flex0"},l.a.createElement(i.Link,{to:e.fields.slug},l.a.createElement("div",{className:"backgroundCover sizeFull",style:{backgroundImage:"url("+e.frontmatter.thumbnail+")"}}))))},t}(l.a.Component));t.a=s},258:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-js-2e1e373cf9d1a9c55942.js.map