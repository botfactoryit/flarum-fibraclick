module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["components/WelcomeHero"]},,,,,function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(3),c=n(5),o=n.n(c),s=n(4),l=n.n(s),f=n(6),u=n.n(f);var p=n(2),b=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i.init=function(){this.links=[{icon:"fas fa-align-left",text:"WIKI",link:"https://fibra.click/?utm_source=fibraclick&utm_medium=referral&utm_campaign=mobilelinks"},{icon:"far fa-newspaper",text:"NEWSLETTER",link:"https://fibra.click/newsletter/?utm_source=fibraclick&utm_medium=referral&utm_campaign=mobilelinks"},{icon:"fab fa-telegram-plane",text:"TELEGRAM",link:"https://t.me/FibraClick"},{icon:"fab fa-twitter",text:"TWITTER",link:"https://twitter.com/fibraclick"},{icon:"fab fa-facebook-f",text:"FACEBOOK",link:"https://www.facebook.com/FibraClick/"}]},i.view=function(){var t=this;return m("div[class='container quicklinks']",this.links.map(function(e){return m("a",{href:e.link,config:e.isInternal?m.route:"",target:e.isInternal?"":"_blank"},m.trust(t.linkText(e)))}))},i.linkText=function(t){var e="";return t.icon&&(e+='<i class="'+t.icon+'"></i>',t.text&&(e+=" ")),t.text&&(e+=t.text),e},r}(n.n(p).a),g={vula:"https://fibra.click/vula-slu-nga/#vula-virtual-unbundled-local-access",slu:"https://fibra.click/vula-slu-nga/#slu-sub-loop-unbundling","bs-nga":"https://fibra.click/vula-slu-nga/#nga-next-generation-access",bul:"https://fibra.click/piano-bul/","piano bul":"https://fibra.click/piano-bul/",vectoring:"https://fibra.click/vectoring/",vdsl:"https://fibra.click/vdsl/",diafonia:"https://fibra.click/vdsl/#diafonia-e-vectoring",gpon:"https://fibra.click/gpon/","aree bianche":"https://fibra.click/aree-nere-grigie-bianche/","area bianca":"https://fibra.click/aree-nere-grigie-bianche/","aree nere":"https://fibra.click/aree-nere-grigie-bianche/","area nera":"https://fibra.click/aree-nere-grigie-bianche/","aree grigie":"https://fibra.click/aree-nere-grigie-bianche/","area grigia":"https://fibra.click/aree-nere-grigie-bianche/",dns:"https://fibra.click/dns/",assestamento:"https://fibra.click/assestamento/",assesti:"https://fibra.click/assestamento/",assestarsi:"https://fibra.click/assestamento/",snr:"https://fibra.click/snr-sra-sos/",sra:"https://fibra.click/snr-sra-sos/",sos:"https://fibra.click/snr-sra-sos/","12db":"https://fibra.click/snr-sra-sos/","12 db":"https://fibra.click/snr-sra-sos/",sinfi:"https://fibra.click/bul-sinfi/",speedtest:"https://fibra.click/speedtest/"},k=new RegExp("\\b("+Object.keys(g).join("|")+")\\b(?![^<]*>|[^<>]*</[^p])","gi"),d=function(t){"1"==i.a.forum.attribute("fibraclick.keywords")&&(this.props.post.data.attributes.contentHtml=this.props.post.data.attributes.contentHtml.replace(k,function(t){var e=g[t.toLowerCase()];return e?'<a class="wiki" target="_blank" href="'+e+'">'+t+"</a>":t}))},h=n(1),v=n.n(h),x=function(t){t.add("wiki",v.a.component({href:"https://fibra.click/?utm_source=fibraclick&utm_medium=referral&utm_campaign=navlinks",children:"Wiki",icon:"fas fa-align-left",config:function(t){return t.target="_blank"}})),t.add("newsletter",v.a.component({href:"https://fibra.click/newsletter/?utm_source=fibraclick&utm_medium=referral&utm_campaign=navlinks",children:"Newsletter",icon:"far fa-newspaper",config:function(t){return t.target="_blank"}})),t.add("telegram",v.a.component({href:"https://t.me/FibraClick",children:"Telegram",icon:"fab fa-telegram-plane",config:function(t){return t.target="_blank"}})),t.add("twitter",v.a.component({href:"https://twitter.com/FibraClick",children:"Twitter",icon:"fab fa-twitter",config:function(t){return t.target="_blank"}})),t.add("facebook",v.a.component({href:"https://www.facebook.com/FibraClick",children:"Facebook",icon:"fab fa-facebook-f",config:function(t){return t.target="_blank"}}))};i.a.initializers.add("botfactoryit/fibraclick",function(){Object(a.extend)(o.a.prototype,"init",d),Object(a.override)(l.a.prototype,"hero",function(){return[u.a.component(),b.component()]}),Object(a.extend)(l.a.prototype,"navItems",x),Object(a.extend)(i.a,"mount",function(t){i.a.data.googleTrackingCode&&gtag&&(gtag("config",i.a.data.googleTrackingCode,{custom_map:{dimension1:"isLoggedIn"}}),gtag("event","isLoggedInEvent",{isLoggedIn:!!i.a.session.user}))})})}]);
//# sourceMappingURL=forum.js.map