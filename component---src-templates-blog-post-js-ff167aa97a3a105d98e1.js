(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{135:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.pageQuery=t.default=void 0;var l=n(a(9)),r=a(140),u=n(a(0)),i=n(a(147)),o=n(a(181)),d=(n(a(170)),n(a(208))),s=n(a(210)),c=n(a(143)),f=a(212),m=a(214);var v=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.default)(t,e),t.prototype.render=function(){var e,t=this.props.data.markdownRemark,a=this.props.data.site.siteMetadata.title,n=t.excerpt,l=this.props.pageContext,v=l.previous,p=l.next,g=t.frontmatter,h=g.title,E=g.date,y=t.fields.slug,b=(e=t.htmlAst,e=(0,d.default)(e),e=(0,s.default)(e,{h2:{sectionTag:"h2-section"},h3:{sectionTag:"h3-section"}})).children||[],_=b[0]&&b[0].children||[];return u.default.createElement(c.default,{location:this.props.location},u.default.createElement(i.default,{meta:[{name:"description",content:n}],title:h+" | "+a}),u.default.createElement(f.MainHeading,{title:h,slug:y}),u.default.createElement("div",null,u.default.createElement(m.BlogNav,{title:h,slug:y}),u.default.createElement(o.default,{title:h,date:E,titleBody:_,body:b.slice(1)})),v&&u.default.createElement(r.Link,{to:v.fields.slug,rel:"prev"},"← ",v.frontmatter.title),p&&u.default.createElement(r.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →"))},t}(u.default.Component);t.default=v;t.pageQuery="3886422025"},140:function(e,t,a){"use strict";var n=a(26),l=a(1);a(17),t.__esModule=!0,t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},t.StaticQuery=t.StaticQueryContext=void 0;var r=l(a(0)),u=l(a(8)),i=n(a(148));t.Link=i.default,t.withPrefix=i.withPrefix,t.navigate=i.navigate,t.push=i.push,t.replace=i.replace,t.navigateTo=i.navigateTo;var o=l(a(141));t.PageRenderer=o.default;var d=l(a(66));t.parsePath=d.default;var s=r.default.createContext({});t.StaticQueryContext=s;var c=function(e){return r.default.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=c,c.propTypes={data:u.default.object,query:u.default.string.isRequired,render:u.default.func,children:u.default.func}},141:function(e,t,a){var n;e.exports=(n=a(142))&&n.default||n},142:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0,a(27);var l=n(a(0)),r=n(a(8)),u=n(a(67)),i=n(a(11)),o=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return l.default.createElement(u.default,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:r.default.shape({pathname:r.default.string.isRequired}).isRequired};var d=o;t.default=d},143:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(144)),r=n(a(0)),u=n(a(147)),i=a(140);a(151),a(145);var o=function(e){var t=e.children;return r.default.createElement(i.StaticQuery,{query:"755544856",render:function(e){var a=e.site.siteMetadata.title;return r.default.createElement(r.default.Fragment,null,r.default.createElement(u.default,{title:a,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.default.createElement("html",{lang:"en"})),r.default.createElement("div",null,t))},data:l.default})};t.default=o},144:function(e){e.exports={data:{site:{siteMetadata:{title:"TIL"}}}}},145:function(e,t,a){},152:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.PostTitleSnip=void 0;var l=n(a(150)),r=n(a(0));a(153);t.PostTitleSnip=function(e){var t=e.slug,a=e.title,n=e.variant||"";return r.default.createElement("span",{className:"post-title-snip-c "+n},r.default.createElement(l.default,{id:"post-"+t},r.default.createElement("strong",{className:"post-title-snip "+n},a)))}},153:function(e,t,a){},156:function(e,t,a){"use strict";var n=a(1),l=a(26);t.__esModule=!0,t.default=void 0;var r=l(a(0)),u=n(a(182)),i=n(a(199)),o=n(a(201)),d=n(a(205)),s=function(e){var t=e.body,a=new u.default({createElement:r.createElement,components:{"next-block":i.default,"h2-section":o.default,"h3-section":d.default}}).Compiler;return t.map(function(e,t){return r.createElement(r.Fragment,{key:t},a(e))})};t.default=s},169:function(e,t,a){},170:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(0)),r=n(a(156));a(207),a(169);var u=function(e){var t=e.title,a=e.date,n=e.body;return l.default.createElement("div",{className:"blog-post-title"},l.default.createElement("h1",null,t," ",l.default.createElement("span",{className:"blinker"})),l.default.createElement("p",{className:"byline"},"Written by Rico Sta. Cruz / ",a),l.default.createElement("div",{className:"MarkdownBody"},l.default.createElement(r.default,{body:n})))};t.default=u},181:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(0)),r=n(a(156));n(a(150));a(169);var u=n(a(170)),i=function(e){var t=e.body,a=e.titleBody,n=e.title,i=e.date;return l.default.createElement("div",{className:"blog-post-content"},l.default.createElement(u.default,{title:n,date:i,body:a}),l.default.createElement(r.default,{body:t}))};t.default=i},199:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(0));a(200);var r=function(e){var t=e.title;return l.default.createElement("blockquote",{className:"next-block"},l.default.createElement("strong",null,"Next:")," ",t)};t.default=r},200:function(e,t,a){},201:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(9)),r=n(a(0)),u=n(a(202));a(204);var i=function(e){function t(t){var a;return(a=e.call(this,t)||this).onEnter=function(){a.setState({entered:!0}),console.log("onEnter")},a.onLeave=function(){a.setState({entered:!1}),console.log("onLeave")},a.state={entered:!1},console.log("ctor"),a}return(0,l.default)(t,e),t.prototype.render=function(){var e=[this.props.className,this.state.entered?"-active":"-inactive"].join(" "),t=this.props.children;return r.default.createElement(u.default,{onEnter:this.onEnter,onLeave:this.onLeave,onPositionChange:function(e){console.log("onPositionChange",e)},topOffset:"50%",bottomOffset:"30%"},r.default.createElement("section",{className:e},t))},t}(r.default.Component);t.default=i},204:function(e,t,a){},205:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(0));a(206);var r=function(e){var t=e.children,a=e.className;return l.default.createElement("section",{className:a},t)};t.default=r},206:function(e,t,a){},207:function(e,t,a){},212:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.MainHeading=void 0,a(27);var l=a(140),r=n(a(0));n(a(150));a(213);var u=a(152);t.MainHeading=function(e){var t=e.title,a=e.slug;return r.default.createElement("div",{className:"main-heading"},r.default.createElement("div",{className:"left"},r.default.createElement(l.Link,{to:"/",className:"brandlink"})),r.default.createElement("div",{className:"right"},r.default.createElement("span",{className:"line"}),r.default.createElement("br",null),r.default.createElement(u.PostTitleSnip,Object.assign({slug:a,title:t},{variant:"-small"}))))}},213:function(e,t,a){},214:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.BlogNav=void 0;var l=n(a(0));a(140);a(215);t.BlogNav=function(e){var t=e.title;e.slug;return l.default.createElement("div",{className:"blog-nav"},l.default.createElement("div",{className:"area"},l.default.createElement("div",{className:"bar"},l.default.createElement("strong",null,"TIL"),l.default.createElement("span",null,t))))}},215:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ff167aa97a3a105d98e1.js.map