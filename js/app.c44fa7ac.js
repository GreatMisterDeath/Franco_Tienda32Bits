(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-018c93d2":"108fb4b2","chunk-0dde7246":"ebf4148a","chunk-1f1b8fe6":"d54dde37","chunk-2d0a4f2f":"b0c7e0c3","chunk-3b276a28":"cd696d24"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-018c93d2":1,"chunk-0dde7246":1,"chunk-1f1b8fe6":1,"chunk-3b276a28":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-018c93d2":"9084588e","chunk-0dde7246":"7af879fe","chunk-1f1b8fe6":"ed7ad75c","chunk-2d0a4f2f":"31d6cfe0","chunk-3b276a28":"f878f558"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/Franco_Tienda32Bits/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"navbar"},[n("router-link",{staticClass:"custom_link",attrs:{to:{name:"inicio"}}},[e._v("Inicio")]),n("router-link",{staticClass:"custom_link",attrs:{to:{name:"busqueda"}}},[e._v("Busqueda")]),n("router-link",{staticClass:"custom_link",attrs:{to:{name:"ventas"}}},[e._v("Ventas")]),n("router-link",{staticClass:"custom_link",attrs:{to:{name:"total"}}},[e._v("Total")])],1),n("transition",{attrs:{name:"vista"}},[n("router-view")],1)],1)},a=[],c={},i=c,u=(n("034f"),n("2877")),s=Object(u["a"])(i,o,a,!1,null,null,null),l=s.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){return n.e("chunk-2d0a4f2f").then(n.bind(null,"092b"))},p=function(){return n.e("chunk-3b276a28").then(n.bind(null,"d248"))},h=function(){return n.e("chunk-018c93d2").then(n.bind(null,"df50"))},m=function(){return n.e("chunk-0dde7246").then(n.bind(null,"d53b"))},g=function(){return n.e("chunk-1f1b8fe6").then(n.bind(null,"be4d"))};r["a"].use(d["a"]);var b=new d["a"]({base:"/Franco_Tienda32Bits/",mode:"history",routes:[{path:"/",name:"inicio",component:f},{path:"/search",name:"busqueda",component:p},{path:"/sales",name:"ventas",component:h},{path:"/total",name:"total",component:m},{path:"*",component:g}]}),v=n("1da1"),k=(n("96cf"),n("159b"),n("4de4"),n("d81d"),n("2f62"));r["a"].use(k["a"]);var y=new k["a"].Store({state:{games:[{id:"0001",nombre:"Sekiro",stock:100,precio:3e4,color:"red",destacado:!0},{id:"0002",nombre:"Fifa 21",stock:100,precio:25e3,color:"blue",destacado:!1},{id:"0003",nombre:"Gears of War 4",stock:100,precio:15e3,color:"green",destacado:!0},{id:"0004",nombre:"Mario Tennis Aces",stock:100,precio:35e3,color:"yellow",destacado:!1},{id:"0005",nombre:"Bloodborne",stock:100,precio:1e4,color:"blue",destacado:!1},{id:"0006",nombre:"Forza Horizon 4",stock:100,precio:2e4,color:"red",destacado:!0}],shop_earnings:"0",shop_total_sales:"0",shop_selling_history:[]},getters:{getterTotalGames:function(e){return e.games.length},getterTotalStock:function(e){var t=0;return e.games.forEach((function(e){t+=e.stock})),t},getterGamesList:function(e){return e.games},getterGamesInStock:function(e){var t=0;return e.games.filter((function(e){e.stock>0&&t++})),t},getterSellingAmount:function(e){var t=0;return e.shop_selling_history.forEach((function(e){t+=e.precio})),t},getterSellingHistory:function(e){return e.shop_selling_history}},mutations:{updateStock:function(e,t){e.games.map((function(e){e.id==t.id&&e.stock--}))},updateSellingHistory:function(e,t){var n={id:"Codigo: ".concat(t.id),nombre:"".concat(t.nombre),precio:t.precio};e.shop_selling_history.push(n)}},actions:{sellGame:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,console.log("%cProcesando venta...","color: #FFFF00"),n.next=4,r("processSelling",t).then((function(){console.log("%cVenta procesada, registrando venta...","color: #FFFF00")})).catch((function(){alert("Venta rechazada, no hay stock o el producto no existe")}));case 4:return n.next=6,r("registerSelling",t).then((function(){console.log("%cRegistro finalizado exitosamente","color: #00FF00"),alert("Venta procesada y registrada exitosamente")})).catch((function(){console.log("%cError en el proceso","color: #FF0000"),alert("Error al registrar la venta")}));case 6:case"end":return n.stop()}}),n)})))()},processSelling:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,n.abrupt("return",new Promise((function(e,n){setTimeout((function(){var o=!1;r.games.forEach((function(e){e.id==t.id&&e.stock>0&&(o=!0)})),o?e():n()}),2e3)})));case 2:case"end":return n.stop()}}),n)})))()},registerSelling:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,o=e.state,n.abrupt("return",new Promise((function(e,n){setTimeout((function(){var a=!1;o.games.forEach((function(e){e.id==t.id&&e.stock>0&&(r("updateSellingHistory",t),r("updateStock",t),a=!0)})),a?e():n()}),1e3)})));case 2:case"end":return n.stop()}}),n)})))()}},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:b,store:y,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.c44fa7ac.js.map