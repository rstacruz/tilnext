(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var r=n(a(0)),l=a(142),u=n(a(144)),i=function(){return r.default.createElement(u.default,null,r.default.createElement("h1",null,"Hi from the second page"),r.default.createElement("p",null,"Welcome to page 2"),r.default.createElement(l.Link,{to:"/"},"Go back to the homepage"))};t.default=i},142:function(e,t,a){"use strict";var n=a(26),r=a(1);a(19),t.__esModule=!0,t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},t.StaticQuery=t.StaticQueryContext=void 0;var l=r(a(0)),u=r(a(8)),i=n(a(156));t.Link=i.default,t.withPrefix=i.withPrefix,t.navigate=i.navigate,t.push=i.push,t.replace=i.replace,t.navigateTo=i.navigateTo;var o=r(a(146));t.PageRenderer=o.default;var d=r(a(66));t.parsePath=d.default;var c=l.default.createContext({});t.StaticQueryContext=c;var s=function(e){return l.default.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=s,s.propTypes={data:u.default.object,query:u.default.string.isRequired,render:u.default.func,children:u.default.func}},144:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var r=n(a(145)),l=n(a(0)),u=n(a(151)),i=a(142);a(157),a(148);var o=function(e){var t=e.children;return l.default.createElement(i.StaticQuery,{query:"3092934963",render:function(e){var a=e.site.siteMetadata,n=a.fullTitle,r=a.shortDescription;return l.default.createElement(l.default.Fragment,null,l.default.createElement(u.default,{title:n,meta:[{name:"description",content:r},{name:"robots",content:"noindex"}]},l.default.createElement("html",{lang:"en"})),l.default.createElement("div",null,t))},data:r.default})};t.default=o},145:function(e){e.exports={data:{site:{siteMetadata:{title:"TIL",fullTitle:"Today I Learned — web development musings semi-daily",shortDescription:"TIL - a collection of things I learned on my day-to-day web development work."}}}}},146:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},147:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0,a(27);var r=n(a(0)),l=n(a(8)),u=n(a(67)),i=n(a(11)),o=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.default.createElement(u.default,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:l.default.shape({pathname:l.default.string.isRequired}).isRequired};var d=o;t.default=d},148:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-page-2-js-2caf7732dcd9ecd910ba.js.map