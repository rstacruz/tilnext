(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{135:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.pageQuery=t.default=void 0;var l=n(a(9)),r=a(140),u=n(a(0)),i=n(a(147)),o=n(a(178)),s=n(a(210)),d=n(a(143)),c=a(212),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.default)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=e.excerpt,n=this.props.pageContext,l=n.previous,f=n.next,m=e.frontmatter,p=m.title,v=m.date,h=e.fields.slug;return u.default.createElement(d.default,{location:this.props.location},u.default.createElement(i.default,{meta:[{name:"description",content:a}],title:p+" | "+t}),u.default.createElement(c.MainHeading,{title:p,slug:h}),u.default.createElement(s.default,{title:p,date:v}),u.default.createElement(o.default,{title:p,date:v,htmlAst:e.htmlAst}),l&&u.default.createElement(r.Link,{to:l.fields.slug,rel:"prev"},"← ",l.frontmatter.title),f&&u.default.createElement(r.Link,{to:f.fields.slug,rel:"next"},f.frontmatter.title," →"))},t}(u.default.Component);t.default=f;t.pageQuery="3886422025"},140:function(e,t,a){"use strict";var n=a(26),l=a(1);a(17),t.__esModule=!0,t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},t.StaticQuery=t.StaticQueryContext=void 0;var r=l(a(0)),u=l(a(8)),i=n(a(148));t.Link=i.default,t.withPrefix=i.withPrefix,t.navigate=i.navigate,t.push=i.push,t.replace=i.replace,t.navigateTo=i.navigateTo;var o=l(a(141));t.PageRenderer=o.default;var s=l(a(66));t.parsePath=s.default;var d=r.default.createContext({});t.StaticQueryContext=d;var c=function(e){return r.default.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=c,c.propTypes={data:u.default.object,query:u.default.string.isRequired,render:u.default.func,children:u.default.func}},141:function(e,t,a){var n;e.exports=(n=a(142))&&n.default||n},142:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0,a(27);var l=n(a(0)),r=n(a(8)),u=n(a(67)),i=n(a(11)),o=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return l.default.createElement(u.default,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:r.default.shape({pathname:r.default.string.isRequired}).isRequired};var s=o;t.default=s},143:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(144)),r=n(a(0)),u=n(a(147)),i=a(140);a(151),a(145);var o=function(e){var t=e.children;return r.default.createElement(i.StaticQuery,{query:"755544856",render:function(e){var a=e.site.siteMetadata.title;return r.default.createElement(r.default.Fragment,null,r.default.createElement(u.default,{title:a,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.default.createElement("html",{lang:"en"})),r.default.createElement("div",null,t))},data:l.default})};t.default=o},144:function(e){e.exports={data:{site:{siteMetadata:{title:"TIL"}}}}},145:function(e,t,a){},152:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.PostTitleSnip=void 0;var l=n(a(150)),r=n(a(0));a(153);t.PostTitleSnip=function(e){var t=e.slug,a=e.title;return r.default.createElement("span",{className:"post-title-snip-c"},r.default.createElement(l.default,{id:"post-"+t},r.default.createElement("strong",{className:"post-title-snip"},a)))}},153:function(e,t,a){},178:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(0)),r=n(a(179));n(a(150));a(209);var u=function(e){var t=e.htmlAst;return l.default.createElement("div",{className:"blog-post-content"},l.default.createElement(r.default,{htmlAst:t}))};t.default=u},179:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(0)),r=n(a(180)),u=n(a(182)),i=n(a(184)),o=n(a(201)),s=n(a(203)),d=n(a(207)),c=function(e){var t=e.htmlAst,a=new i.default({createElement:l.default.createElement,components:{"next-block":o.default,"h2-section":s.default,"h3-section":d.default}}).Compiler,n=t;return n=(0,r.default)(n),a(n=(0,u.default)(n,{h2:{sectionTag:"h2-section"},h3:{sectionTag:"h3-section"}}))};t.default=c},201:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(0));a(202);var r=function(e){var t=e.title;return l.default.createElement("blockquote",{className:"next-block"},l.default.createElement("strong",null,"Next:")," ",t)};t.default=r},202:function(e,t,a){},203:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(9)),r=n(a(0)),u=n(a(204));a(206);var i=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={entered:!1},t.onEnter=function(){t.setState({entered:!0})},t.onLeave=function(){t.setState({entered:!1})},t}return(0,l.default)(t,e),t.prototype.render=function(){var e=[this.props.className,this.state.entered?"-active":"-inactive"].join(" "),t=this.props.children;return r.default.createElement(u.default,{onEnter:this.onEnter,onLeave:this.onLeave,topOffset:"60%",bottomOffset:"40%"},r.default.createElement("section",{className:e},t))},t}(r.default.Component);t.default=i},206:function(e,t,a){},207:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(0));a(208);var r=function(e){var t=e.children,a=e.className;return l.default.createElement("section",{className:a},t)};t.default=r},208:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(0));a(211);var r=function(e){var t=e.title,a=e.date;return l.default.createElement("div",{className:"blog-post-title"},l.default.createElement("h1",null,t," ",l.default.createElement("span",{className:"blinker"})),l.default.createElement("p",{className:"byline"},"Written by Rico Sta. Cruz / ",a),l.default.createElement("hr",null))};t.default=r},211:function(e,t,a){},212:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.MainHeading=void 0;var l=a(140),r=n(a(0));n(a(150));a(213);var u=a(152);t.MainHeading=function(e){var t=e.title,a=e.slug;return r.default.createElement("div",{className:"main-heading"},r.default.createElement(l.Link,{to:"/"},"TIL")," / ",r.default.createElement(u.PostTitleSnip,{slug:a,title:t}))}},213:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-115fa41c04a63c80fdb8.js.map