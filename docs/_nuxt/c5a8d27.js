(window.webpackJsonp=window.webpackJsonp||[]).push([[23,24],{362:function(e,t,l){"use strict";l.r(t);var n=l(408),r=l.n(n),d=l(411),o={components:{DownComponent:l(477).default},data:function(){return{logo:r.a,NavMenus:d.a.NavMenus}}},c=(l(481),l(42)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("header",[l("a",{staticClass:"logo",attrs:{href:"/"}},[l("img",{attrs:{src:e.logo,alt:""}})]),e._v(" "),l("div",{staticClass:"auto"}),e._v(" "),l("nav",[e._l(e.NavMenus,(function(t,i){return[l("div",{key:i,staticClass:"item"},[t.url?["/"==t.url[0]?[l("nuxt-link",{staticClass:"link",attrs:{to:t.url,title:t.title}},[e._v("\n                            "+e._s(t.title)+"\n                        ")])]:[l("a",{staticClass:"link",attrs:{href:t.url,target:"_blank",title:t.title,rel:"noopener noreferrer"}},[e._v("\n                            "+e._s(t.title)+"\n\n                        ")])]]:[l("a",{staticClass:"link",attrs:{title:t.title}},[e._v("\n                        "+e._s(t.title)+"\n                        "),l("DownComponent")],1)],e._v(" "),t.child&&t.child.length>0?l("ul",{staticClass:"child"},[e._l(t.child,(function(t,n){return[l("li",{key:n,staticClass:"child-item"},[t.url?["/"==t.url[0]?[l("nuxt-link",{staticClass:"child-link",attrs:{to:t.url,title:t.title}},[e._v("\n                                        "+e._s(t.title)+"\n                                    ")])]:[l("a",{staticClass:"child-link",attrs:{href:t.url,target:"_blank",title:t.title,rel:"noopener noreferrer"}},[e._v("\n                                        "+e._s(t.title)+"\n                                    ")])]]:[l("a",{staticClass:"child-link",attrs:{title:t.title}},[e._v("\n                                    "+e._s(t.title)+"\n                                ")])]],2)]}))],2):e._e()],2)]}))],2)])}),[],!1,null,"ce7960ba",null);t.default=component.exports;installComponents(component,{Header:l(362).default})},408:function(e,t,l){e.exports=l.p+"img/logo.04dbfec.png"},411:function(e,t,l){"use strict";var n={};l.r(n),l.d(n,"NavMenus",(function(){return o})),l.d(n,"Banners",(function(){return C}));var r={};l.r(r),l.d(r,"InputSearchModel",(function(){return R}));l(44),l(35),l(43),l(75),l(36),l(76);for(var d=l(29),o=[{title:"首页",url:"/"},{title:"设备支持",url:"/device"},{title:"文档",url:"https://doc.linkease.com/zh/guide/istoreos/"},{title:"付费服务",url:"https://www.koolcenter.com/posts/219"},{title:"固件下载",url:"https://fw.koolcenter.com/iStoreOS/"},{title:"开源地址",url:"https://github.com/istoreos/istoreos"},{title:"关于我们",url:"/about"}],c=["#top","https://easepi.linkease.com","https://www.ddnsto.com","https://app.linkease.com"],v="/images/banner",h=[],f=1;f<5;++f){var m=v+f+"_fg.png",x=v+f+"_fg2x.png",A=v+f+"_bg.svg",w=c[f-1];h.push({image:m,srcset:m+", "+x+" 2x",bg:A,url:w})}var C=h,R=[{label:"华硕系列",children:[{value:"RT-AC56U",label:"RT-AC56U"},{value:"RT-AC56R",label:"RT-AC56R"},{value:"RT-AC56S",label:"RT-AC56S"},{value:"RT-AC66U-B1",label:"RT-AC66U-B1"},{value:"RT-AC68U",label:"RT-AC68U"},{value:"RT-AC68P",label:"RT-AC68P"},{value:"RT-AC68UF",label:"RT-AC68UF"},{value:"RT-AC85P",label:"RT-AC85P"},{value:"RT-AC85P",label:"RT-AC85P"},{value:"RT-AC86U",label:"RT-AC86U"},{value:"RT-AC87U",label:"RT-AC87U"},{value:"RT-AC88U",label:"RT-AC88U"},{value:"RT-AC1750_B1",label:"RT-AC1750_B1"},{value:"RT-AC1900",label:"RT-AC1900"},{value:"RT-AC1900P",label:"RT-AC1900P"},{value:"RT-AC3100",label:"RT-AC3100"},{value:"RT-AC3200",label:"RT-AC3200"},{value:"RT-AC5300",label:"RT-AC5300"},{value:"GT-AC5300",label:"GT-AC5300"},{value:"RT-AC2900",label:"RT-AC2900"},{value:"GT-AC2900",label:"GT-AC2900"},{value:"GT-AX11000",label:"GT-AX11000"},{value:"TUF-AX3000",label:"TUF-AX3000"},{value:"RT-AX86U",label:"RT-AX86U"},{value:"RT-AX82U",label:"RT-AX82U"},{value:"RT-AX88U",label:"RT-AX88U"},{value:"RT-AX92U",label:"RT-AX92U"}]},{label:"华为系列",children:[{label:"WS880",value:"WS880"}]},{label:"网件系列",children:[{label:"R6300V2",value:"R6300V2"},{label:"R6400",value:"R6400"},{label:"R6900",value:"R6900"},{label:"R7000",value:"R7000"},{label:"R8000",value:"R8000"},{label:"R8500",value:"R8500"}]},{label:"领势系列",children:[{label:"EA6200",value:"EA6200"},{label:"EA6400",value:"EA6400"},{label:"EA6700",value:"EA6700"},{label:"EA6500v2",value:"EA6500v2"},{label:"EA6900",value:"EA6900"}],value:[]},{label:"其他",children:[{}]}];function T(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?T(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):T(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=k(k({},n),r)},412:function(e,t,l){var content=l(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(73).default)("f4c3a076",content,!0,{sourceMap:!1})},477:function(e,t,l){"use strict";l.r(t);var n={},r=l(42),component=Object(r.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"icon",attrs:{t:"1631175493814",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2144",width:"512",height:"512"}},[t("path",{attrs:{d:"M543.744 647.68c-7.168 7.168-16.896 13.824-26.112 11.776-9.216 1.536-17.92-5.632-25.088-11.77599999l-221.696-222.72000001c-11.264-11.264-11.264-29.696 0-40.96s29.696-11.264 40.96 0L518.144 595.968 724.992 384c11.264-11.264 29.696-11.264 40.96 0s11.264 29.696 0 40.96l-222.208 222.72z","p-id":"2145"}})])}),[],!1,null,"fc3bdd3e",null);t.default=component.exports},481:function(e,t,l){"use strict";l(412)},482:function(e,t,l){var n=l(72)(!1);n.push([e.i,'.max-width[data-v-ce7960ba]{max-width:1440px;margin:0 auto;width:100%}@media screen and (min-width:1301px){.max-width[data-v-ce7960ba]{max-width:1260px}}@media screen and (min-width:1500px){.max-width[data-v-ce7960ba]{max-width:1440px}}@media screen and (max-width:1300px){.max-width[data-v-ce7960ba]{max-width:1180px}}@media screen and (max-width:1100px){.max-width[data-v-ce7960ba]{max-width:960px}}@media screen and (max-width:940px){.max-width[data-v-ce7960ba]{max-width:100%;padding:0 1rem}}header[data-v-ce7960ba]{position:fixed;top:0;left:0;right:0;height:70px;z-index:99;display:flex;flex-wrap:wrap;align-items:center;padding:0 5%}header .logo[data-v-ce7960ba]{width:137px}header .logo img[data-v-ce7960ba]{max-width:100%}header .auto[data-v-ce7960ba]{flex:auto}header nav[data-v-ce7960ba]{display:flex;flex-wrap:wrap;align-items:center;height:100%}header nav div.item:hover ul.child[data-v-ce7960ba]{visibility:visible;transform:scaleX(1);opacity:1;transition:.4s}header nav div.item[data-v-ce7960ba]{min-width:32px;position:relative}header nav div.item[data-v-ce7960ba],header nav div.item a.link[data-v-ce7960ba]{height:100%;display:flex;flex-wrap:wrap;align-items:center}header nav div.item a.link[data-v-ce7960ba]{color:hsla(0,0%,100%,.8);font-size:16px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;width:100%;padding:0 15px;justify-content:center}header nav div.item a.link svg[data-v-ce7960ba]{width:16px;height:16px}header nav div.item a.link:hover svg[data-v-ce7960ba] path,header nav div.item a.link svg[data-v-ce7960ba] path{fill:#fff}header nav div.item a[data-v-ce7960ba]:hover{color:#fff}header nav div.item a.link.nuxt-link-exact-active.nuxt-link-active[data-v-ce7960ba]{color:#fff;font-weight:800}header nav div.item ul.child[data-v-ce7960ba]{position:absolute;background-color:hsla(0,0%,100%,.99);visibility:hidden;top:100%;right:-100%;margin:0 auto;box-shadow:0 15px 30px 5px rgba(0,0,0,.15);opacity:0;z-index:1;text-align:center;border-radius:2px;transform-origin:top left;transform:scale3d(.9,.7,1);padding:10px 0;min-width:15rem}header nav div.item ul.child li.child-item[data-v-ce7960ba]{width:100%;display:block;font-size:16px;padding:0 15px;margin:2.5px 0;height:32px;line-height:32px;cursor:pointer;text-align:left}header nav div.item ul.child li.child-item a.child-link[data-v-ce7960ba]{font-family:PingFangSC-Regular,PingFang SC;display:block;width:100%;height:100%;color:#6f6c6c}header nav div.item ul.child li.child-item[data-v-ce7960ba]:hover{background-color:rgba(0,0,0,.7)}header nav div.item ul.child li.child-item:hover a.child-link[data-v-ce7960ba]{font-family:PingFangSC-Regular,PingFang SC;color:#fff}header[data-v-ce7960ba]:before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);z-index:-1;background-color:rgba(0,0,0,.7)}',""]),e.exports=n}}]);