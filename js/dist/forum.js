module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=8)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},,,,,,function(t,e,r){"use strict";r.r(e);var n=r(0),i=r.n(n),a=r(1),o=r(2),c=r.n(o),u={vula:"https://fibra.click/vula-slu-nga/",slu:"https://fibra.click/vula-slu-nga/",nga:"https://fibra.click/vula-slu-nga/",bul:"https://fibra.click/piano-bul/","piano bul":"https://fibra.click/piano-bul/",vectoring:"https://fibra.click/vectoring/",vdsl:"https://fibra.click/vdsl/",gpon:"https://fibra.click/gpon/","aree bianche":"https://fibra.click/aree-nere-grigie-bianche/","aree nere":"https://fibra.click/aree-nere-grigie-bianche/","aree grigie":"https://fibra.click/aree-nere-grigie-bianche/"},l=new RegExp("\\b("+Object.keys(u).join("|")+")\\b(?![^<]*>|[^<>]*</[^p])","gi");function p(t){"1"==i.a.forum.attribute("fibraclick.keywords")&&(this.props.post.data.attributes.contentHtml=this.props.post.data.attributes.contentHtml.replace(l,function(t){var e=u[t.toLowerCase()];return e?'<a class="wiki" target="_blank" href="'+e+'">'+t+"</a>":t}))}i.a.initializers.add("botfactoryit/fibraclick",function(){Object(a.extend)(c.a.prototype,"init",p)})}]);
//# sourceMappingURL=forum.js.map