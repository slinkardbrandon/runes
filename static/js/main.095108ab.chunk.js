(this.webpackJsonprunes=this.webpackJsonprunes||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),o=a.n(r),l=(a(16),a(17),a(18),a(2)),c=a(7),s=a(9),u=function e(t,a){Object(l.a)(this,e),this.name=t,this.imageUrl=a},m=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this,"Elder Futhark",[new u("fehu","https://upload.wikimedia.org/wikipedia/commons/0/07/Runic_letter_fehu.png"),new u("uruz","https://upload.wikimedia.org/wikipedia/commons/8/8e/Runic_letter_uruz.png"),new u("thurisaz","https://upload.wikimedia.org/wikipedia/commons/e/ee/Runic_letter_thurisaz.png"),new u("ansuz","https://upload.wikimedia.org/wikipedia/commons/3/35/Runic_letter_ansuz.png"),new u("raido","https://upload.wikimedia.org/wikipedia/commons/c/cf/Runic_letter_raido.png"),new u("kauna","https://upload.wikimedia.org/wikipedia/commons/a/a3/Runic_letter_kauna.png"),new u("gebo","https://upload.wikimedia.org/wikipedia/commons/2/23/Runic_letter_gebo.png"),new u("wunjo","https://upload.wikimedia.org/wikipedia/commons/3/3f/Runic_letter_wunjo.png"),new u("haglaz","https://upload.wikimedia.org/wikipedia/commons/2/25/Runic_letter_haglaz.png"),new u("naudiz","https://upload.wikimedia.org/wikipedia/commons/b/b9/Runic_letter_naudiz.png"),new u("isaz","https://upload.wikimedia.org/wikipedia/commons/b/bc/Runic_letter_isaz.png"),new u("jeran","https://upload.wikimedia.org/wikipedia/commons/0/01/Runic_letter_jeran.png"),new u("iwaz","https://upload.wikimedia.org/wikipedia/commons/3/3e/Runic_letter_iwaz.png"),new u("pertho","https://upload.wikimedia.org/wikipedia/commons/b/bf/Runic_letter_pertho.png"),new u("algiz","https://upload.wikimedia.org/wikipedia/commons/1/14/Runic_letter_algiz.png"),new u("sowilo","https://upload.wikimedia.org/wikipedia/commons/c/c8/Runic_letter_sowilo.png"),new u("tiwaz","https://upload.wikimedia.org/wikipedia/commons/a/a3/Runic_letter_tiwaz.png"),new u("berkanan","https://upload.wikimedia.org/wikipedia/commons/c/ca/Runic_letter_berkanan.png"),new u("ehwaz","https://upload.wikimedia.org/wikipedia/commons/2/2e/Runic_letter_ehwaz.png"),new u("mannaz","https://upload.wikimedia.org/wikipedia/commons/0/0c/Runic_letter_mannaz.png"),new u("laukaz","https://upload.wikimedia.org/wikipedia/commons/a/a9/Runic_letter_laukaz.png"),new u("ingwaz","https://upload.wikimedia.org/wikipedia/commons/6/6d/Runic_letter_ingwaz.png"),new u("dagaz","https://upload.wikimedia.org/wikipedia/commons/c/c6/Runic_letter_dagaz.png"),new u("othalan","https://upload.wikimedia.org/wikipedia/commons/1/16/Runic_letter_othalan.png")])).name="Elder Futhark",e}return a}((function e(t,a){Object(l.a)(this,e),this.name=t,this.runes=a})),p=a(1),d=a(10),w=function(e){var t=e.flipped,a=e.rune,n={display:t?"none":void 0};return i.a.createElement("img",{style:Object(d.a)({},n,{maxHeight:"125px"}),alt:a.name,src:a.imageUrl})},g=function(e){var t=e.flipped,a=e.rune,n={display:t?void 0:"none"};return console.log(a),i.a.createElement("div",{style:n,className:"font-semibold text-xl"},a.name)},h=function(e){var t=e.rune,a=i.a.useState(!1),n=Object(p.a)(a,2),r=n[0],o=n[1];return i.a.createElement("div",{role:"button",style:{minHeight:"350px"},onClick:function(){return o(!r)},className:"bg-white border border-solid border-gray-300 flex items-center content-center justify-center cursor-pointer shadow-md hover:shadow-lg"},i.a.createElement(w,{rune:t,flipped:r}),i.a.createElement(g,{rune:t,flipped:r}))},f=function(e){for(var t=JSON.parse(JSON.stringify(e)),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),i=[t[n],t[a]];t[a]=i[0],t[n]=i[1]}return t},k=a(8),b=function(e){var t=e.variant,a=void 0===t?"primary":t,r=e.text,o=e.onClick,l=e.classes,c=void 0===l?[]:l,s=Object(n.useState)(),u=Object(p.a)(s,2),m=u[0],d=u[1];return i.a.useEffect((function(){var e=["font-semibold","py-2","px-4","rounded-full"].concat(Object(k.a)(c));"primary"===a?e.push("bg-green-800","hover:bg-green-900","text-white"):e.push("bg-transparent","hover:bg-green-800","hover:text-white","text-green-900","border","border-solid","border-green-900"),d(e.join(" "))}),[a]),i.a.createElement("button",{onClick:o,className:m},r)},v=function(e){var t,a=["inline-block","relative"].concat(null!==(t=e.wrapperClasses)&&void 0!==t?t:[]).join(" ");return i.a.createElement("div",{className:a},i.a.createElement("select",{className:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-700",onChange:e.onChange},e.options.map((function(e){var t=e.value,a=e.name;return i.a.createElement("option",{key:t,value:t},a)}))),i.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},i.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},i.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))},_=i.a.createContext([]),x=function(){var e=Object(n.useContext)(_),t=i.a.useState(e.find((function(e){return"Elder Futhark"===e.name}))),a=Object(p.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)((function(){return f(r.runes)})),c=Object(p.a)(l,2),s=c[0],u=c[1];i.a.useEffect((function(){u(f(r.runes))}),[r.runes]);var d=Object(n.useState)(0),w=Object(p.a)(d,2),g=w[0],k=w[1],x=s[g],E=s.length-1;return i.a.createElement("div",{className:"p-4 bg-gray-200 h-full"},i.a.createElement("span",{className:"flex flex-grow"},i.a.createElement("h1",{className:"flex w-full flex-grow pb-4 text-2xl"},"Flash Cards"),i.a.createElement("span",{className:"block"},i.a.createElement(v,{options:e.map((function(e){return{name:e.name,value:e.name}})),onChange:function(e){var t=new m;switch(e.target.value){case t.name:default:return o(t)}},wrapperClasses:["w-40"]}))),i.a.createElement(h,{key:x.name,rune:x}),i.a.createElement("span",{className:"flex pt-4 justify-between items-center"},i.a.createElement(b,{variant:"outlined",text:"Back",onClick:function(){k(0===g?E:g-1)},classes:["w-2/5"]}),i.a.createElement("div",null,"".concat(g+1," of ").concat(s.length)),i.a.createElement(b,{variant:"primary",text:"Next",onClick:function(){k(g===E?0:g+1)},classes:["w-2/5"]})))},E=function(){return i.a.createElement("div",null,i.a.createElement("nav",{className:"flex items-center justify-between flex-wrap bg-green-800 p-6"},i.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mr-6"},i.a.createElement("img",{src:"https://arbor-software.nyc3.digitaloceanspaces.com/runes/rune-study-logo-white-130x200.png",alt:"Rune Study Logo",className:"h-10 mr-2"}),i.a.createElement("span",{className:"font-semibold text-xl tracking-tight"},"RuneStudy")),i.a.createElement("div",{className:"block lg:hidden"},i.a.createElement("button",{className:"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"},i.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Menu"),i.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))))))};var z=function(){var e=[new m];return i.a.createElement(_.Provider,{value:e},i.a.createElement("div",{className:"App h-full flex flex-col"},i.a.createElement(E,null),i.a.createElement(x,null)))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(z,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.095108ab.chunk.js.map