(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{135:function(e,t,a){"use strict";var l=a(1);t.__esModule=!0,t.pageQuery=t.default=void 0;var n=l(a(9)),o=l(a(0)),r=l(a(147)),i=l(a(181)),u=l(a(212)),d=l(a(214)),s=l(a(141)),c=a(218),f=a(220),m=a(222),v=a(225);var p=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.default)(t,e),t.prototype.render=function(){var e,t=this.props.data.markdownRemark,a=t.excerpt,l=this.props.pageContext,n=l.previous,p=l.next,g=t.frontmatter,E=g.title,h=g.date,y=g.description,b=t.fields.slug,N=(e=t.htmlAst,e=(0,u.default)(e),e=(0,d.default)(e,{h2:{sectionTag:"h2-section"},h3:{sectionTag:"h3-section"}})).children||[],_=N[0]&&N[0].children||[];return o.default.createElement(s.default,{location:this.props.location},o.default.createElement(r.default,{meta:[{name:"description",content:y||a}],title:""+E}),o.default.createElement(c.MainHeading,{title:E,slug:b}),o.default.createElement("div",null,o.default.createElement(f.BlogNav,{title:E,slug:b}),o.default.createElement(i.default,{title:E,date:h,titleBody:_,body:N.slice(1)})),o.default.createElement(m.PostPagination,{previous:n,next:p}),o.default.createElement(v.ColophonSection,null))},t}(o.default.Component);t.default=p;t.pageQuery="1369179208"},140:function(e,t,a){"use strict";var l=a(26),n=a(1);a(17),t.__esModule=!0,t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},t.StaticQuery=t.StaticQueryContext=void 0;var o=n(a(0)),r=n(a(8)),i=l(a(150));t.Link=i.default,t.withPrefix=i.withPrefix,t.navigate=i.navigate,t.push=i.push,t.replace=i.replace,t.navigateTo=i.navigateTo;var u=n(a(143));t.PageRenderer=u.default;var d=n(a(66));t.parsePath=d.default;var s=o.default.createContext({});t.StaticQueryContext=s;var c=function(e){return o.default.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=c,c.propTypes={data:r.default.object,query:r.default.string.isRequired,render:r.default.func,children:r.default.func}},141:function(e,t,a){"use strict";var l=a(1);t.__esModule=!0,t.default=void 0;var n=l(a(142)),o=l(a(0)),r=l(a(147)),i=a(140);a(151),a(145);var u=function(e){var t=e.children;return o.default.createElement(i.StaticQuery,{query:"3092934963",render:function(e){var a=e.site.siteMetadata,l=a.fullTitle,n=a.shortDescription;return o.default.createElement(o.default.Fragment,null,o.default.createElement(r.default,{title:l,meta:[{name:"description",content:n},{name:"robots",content:"noindex"}]},o.default.createElement("html",{lang:"en"})),o.default.createElement("div",null,t))},data:n.default})};t.default=u},142:function(e){e.exports={data:{site:{siteMetadata:{title:"TIL",fullTitle:"Today I Learned — web development musings semi-daily",shortDescription:"TIL - a collection of things I learned on my day-to-day web development work."}}}}},143:function(e,t,a){var l;e.exports=(l=a(144))&&l.default||l},144:function(e,t,a){"use strict";var l=a(1);t.__esModule=!0,t.default=void 0,a(27);var n=l(a(0)),o=l(a(8)),r=l(a(67)),i=l(a(11)),u=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return n.default.createElement(r.default,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.default.shape({pathname:o.default.string.isRequired}).isRequired};var d=u;t.default=d},145:function(e,t,a){},152:function(e,t,a){"use strict";var l=a(1);t.__esModule=!0,t.PostTitleSnip=void 0;var n=l(a(173)),o=l(a(0)),r=l(a(153)),i=l(a(149));t.PostTitleSnip=function(e){var t=e.slug,a=e.title,l="-small"===e.variant?r.default.isSmall:"";return o.default.createElement("span",{className:(0,i.default)(r.default.root,l)},o.default.createElement(n.default,{id:"post-"+t},o.default.createElement("strong",{className:(0,i.default)(r.default.title,l)},a)))}},153:function(e,t,a){e.exports={root:"PostTitleSnip-module--root--46GwP",title:"PostTitleSnip-module--title--Mw7Fk",isSmall:"PostTitleSnip-module--isSmall--1_EFd"}},157:function(e,t,a){"use strict";var l=a(1),n=a(26);t.__esModule=!0,t.default=void 0;var o=n(a(0)),r=l(a(182)),i=l(a(199)),u=l(a(201)),d=l(a(205)),s=function(e){var t=e.body,a=new r.default({createElement:o.createElement,components:{"next-block":i.default,"h2-section":u.default,"h3-section":d.default}}).Compiler;return t.map(function(e,t){return o.createElement(o.Fragment,{key:t},a(e))})};t.default=s},170:function(e,t,a){"use strict";var l=a(26),n=a(1);t.__esModule=!0,t.default=void 0;var o=n(a(9)),r=l(a(0)),i=n(a(202)),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).onEnter=function(){a.setState({entered:!0,dirty:!0})},a.onLeave=function(){a.setState({entered:!1,dirty:!0})},a.state={entered:!0,dirty:!1},a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState(function(e){return e.dirty?e:{entered:!1,dirty:!0}})},a.render=function(){var e=this.props.children;return r.createElement(i.default,{onEnter:this.onEnter,onLeave:this.onLeave,topOffset:"61%",bottomOffset:"35%"},r.createElement("span",null,e(this.state||{})))},t}(r.Component);t.default=u},171:function(e,t,a){},181:function(e,t,a){"use strict";var l=a(1);t.__esModule=!0,t.default=void 0;var n=l(a(0)),o=l(a(157)),r=l(a(207)),i=l(a(209)),u=l(a(211)),d=l(a(149));a(171);var s=function(e){var t=e.body,a=e.titleBody,l=e.title,s=e.date;return n.default.createElement("div",{className:(0,d.default)(u.default.root,"MarkdownBody")},n.default.createElement(r.default,{title:l,date:s,body:a}),n.default.createElement(o.default,{body:t}),n.default.createElement(i.default,{title:l,date:s}))};t.default=s},199:function(e,t,a){"use strict";var l=a(1);t.__esModule=!0,t.default=void 0;var n=l(a(0)),o=l(a(200)),r=function(e){var t=e.title;return n.default.createElement("blockquote",{className:o.default.root},n.default.createElement("strong",{className:o.default.prefix},"Next:")," ",t)};t.default=r},200:function(e,t,a){e.exports={root:"NextBlock-module--root--1-rL5",prefix:"NextBlock-module--prefix--3zNZl"}},201:function(e,t,a){"use strict";var l=a(1),n=a(26);t.__esModule=!0,t.default=void 0;var o=n(a(0)),r=l(a(170));a(204);var i=function(e){var t=e.children,a=e.className;return o.createElement(r.default,null,function(e){var l=e.entered;Array.isArray(a)&&(a=a.join(" "));var n=[a,l?"-active":"-inactive"].join(" ");return o.createElement("section",{className:n},t)})};t.default=i},204:function(e,t,a){},205:function(e,t,a){"use strict";var l=a(1);t.__esModule=!0,t.default=void 0;var n=l(a(0));a(206);var o=function(e){var t=e.children,a=e.className;return n.default.createElement("section",{className:a},t)};t.default=o},206:function(e,t,a){},207:function(e,t,a){"use strict";var l=a(1);t.__esModule=!0,t.default=void 0;var n=l(a(0)),o=l(a(157)),r=l(a(170)),i=l(a(208));a(171);var u=l(a(149)),d=function(e){var t=e.title,a=e.date,l=e.body;return n.default.createElement(r.default,null,function(e){var r=e.entered;return n.default.createElement("div",{className:(0,u.default)(i.default.root,r?i.default.isActive:i.default.isInactive)},n.default.createElement("h1",{className:i.default.title},t," ",n.default.createElement("span",{className:i.default.blinker})),n.default.createElement("p",{className:i.default.byline},"Written by Rico Sta. Cruz / ",a),n.default.createElement("div",{className:"MarkdownBody"},n.default.createElement(o.default,{body:l})))})};t.default=d},208:function(e,t,a){e.exports={root:"BlogPostTitle-module--root--8WtlL",Inactive:"BlogPostTitle-module---inactive--2fp4O",isActive:"BlogPostTitle-module--isActive--2hTGB",isInactive:"BlogPostTitle-module--isInactive--2wBgl",title:"BlogPostTitle-module--title--FnLR1",byline:"BlogPostTitle-module--byline--3q4m8",blinker:"BlogPostTitle-module--blinker--Dq-lC",cursorBlink:"BlogPostTitle-module--cursor-blink--21tHi"}},209:function(e,t,a){"use strict";var l=a(1);t.__esModule=!0,t.default=void 0;var n=l(a(0)),o=l(a(210)),r=function(e){var t=e.title,a=e.date;return n.default.createElement("div",{className:o.default.root},n.default.createElement("div",{className:o.default.body},n.default.createElement("h3",null,"Thank you for reading"),n.default.createElement("p",null,"You have just read ",n.default.createElement("em",null,t),", written on ",n.default.createElement("em",null,a),".")))};t.default=r},210:function(e,t,a){e.exports={root:"PostFooter-module--root--10uMc",body:"PostFooter-module--body--_-Hny"}},211:function(e,t,a){e.exports={root:"BlogPostContent-module--root--3Q8hU"}},218:function(e,t,a){"use strict";var l=a(1);t.__esModule=!0,t.MainHeading=void 0,a(27);var n=a(140),o=l(a(0));a(219);var r=a(152);t.MainHeading=function(e){var t=e.title,a=e.slug;return o.default.createElement("div",{className:"main-heading"},o.default.createElement("div",{className:"left"},o.default.createElement(n.Link,{to:"/",className:"brandlink"})),o.default.createElement("div",{className:"right"},o.default.createElement("span",{className:"line"}),o.default.createElement("br",null),o.default.createElement(r.PostTitleSnip,Object.assign({slug:a,title:t},{variant:"-small"}))))}},219:function(e,t,a){},220:function(e,t,a){"use strict";var l=a(1);t.__esModule=!0,t.BlogNav=void 0;var n=l(a(0)),o=l(a(221));t.BlogNav=function(e){var t=e.title;return n.default.createElement("div",{className:o.default.root},n.default.createElement("div",{className:o.default.area},n.default.createElement("div",{className:o.default.bar},n.default.createElement("strong",{className:o.default.prefix},"TIL"),n.default.createElement("span",{className:o.default.title},t))))}},221:function(e,t,a){e.exports={root:"BlogNav-module--root--8ait8",area:"BlogNav-module--area--1qoRt",bar:"BlogNav-module--bar--1Ob6o",prefix:"BlogNav-module--prefix--2Vh9M",title:"BlogNav-module--title--3TqDS"}},222:function(e,t,a){"use strict";var l=a(1);t.__esModule=!0,t.PostPagination=void 0,a(154);var n=l(a(0)),o=a(140),r=l(a(224));t.PostPagination=function(e){var t=e.previous,a=e.next;return n.default.createElement("div",{className:r.default.root},t&&n.default.createElement(o.Link,{to:t.fields.slug,rel:"prev",className:r.default.link},"← ",t.frontmatter.title),a&&n.default.createElement(o.Link,{to:a.fields.slug,rel:"next",className:r.default.link},a.frontmatter.title," →"))}},224:function(e,t,a){e.exports={root:"PostPagination-module--root--mxUIU",link:"PostPagination-module--link--2LHow"}},225:function(e,t,a){"use strict";var l=a(1);t.__esModule=!0,t.ColophonSection=void 0,a(154);var n=l(a(0)),o=a(140),r=l(a(226));t.ColophonSection=function(){return n.default.createElement("div",{className:r.default.root},n.default.createElement(o.Link,{to:"/",className:r.default.link},"←"))}},226:function(e,t,a){e.exports={root:"ColophonSection-module--root--36lFJ",link:"ColophonSection-module--link--3U_iw"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-77e43b24960af6470d81.js.map