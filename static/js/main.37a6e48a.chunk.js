(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],{36:function(e,t,c){},61:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(10),n=c.n(s),l=(c(74),c(11)),j=c(5),o=(c(61),c(36),c(75),c(7)),r=c(28),i=c(51),b=c.n(i),d=c(49),x=c.n(d),O=c(50),m=c.n(O),h=c(52),u=c.n(h),p=c(46),f=c.n(p),N=c(1),g=function(e){var t=[{index:1,name:"/Home",text:"Home",tag:"<HomeRoundedIcon style={{ fontSize: 40 }} />"},{index:2,name:"/AboutMe",text:"About Me",tag:"<EmojiPeopleIcon style={{ fontSize: 40 }}/>"},{index:3,name:"/Tools",text:"Tools",tag:"<BuildIcon style={{ fontSize: 40 }}/>"},{index:4,name:"/RecentWork",text:"Recent Work",tag:"<SportsHandballRoundedIcon style={{ fontSize: 40 }}/>"},{index:5,name:"/Contact",text:"Contact",tag:"<ContactsRoundedIcon style={{ fontSize: 40 }}/>"}],c=Object(o.f)();"/"===c.pathname&&(t=t.filter((function(e){return"/Home"!==e.name})));var a=t.filter((function(e){return e.name!==c.pathname}));return Object(N.jsx)("div",{className:"loadAnimate containers",children:a.map((function(t){return Object(N.jsx)(r.b,{to:t.name,className:"Navlink ".concat(e.iconC),children:Object(N.jsxs)("div",{className:"link",children:["/Home"===t.name?Object(N.jsx)(f.a,{style:{fontSize:40}}):"","/AboutMe"===t.name?Object(N.jsx)(x.a,{style:{fontSize:40}}):"","/Tools"===t.name?Object(N.jsx)(m.a,{style:{fontSize:40}}):"","/RecentWork"===t.name?Object(N.jsx)(b.a,{style:{fontSize:40}}):"","/Contact"===t.name?Object(N.jsx)(u.a,{style:{fontSize:40}}):"",Object(N.jsx)("div",{className:"text",children:t.text})]})},t.index)}))})},y=function(){return Object(N.jsx)("div",{className:"loadAnimate"})},v=(c(83),function(){return Object(N.jsx)("div",{className:"App-back",children:Object(N.jsx)("h1",{children:Object(N.jsx)("span",{id:"greeting",children:"Hope you are enjoying this beautiful day \ud83d\ude0a"})})})}),M=(c(84),c(67)),S=c.n(M),Z=function(e){var t=[{index:1,name:"/Home",text:"Home",tag:"<HomeRoundedIcon style={{ fontSize: 40 }} />"},{index:2,name:"/AboutMe",text:"About Me",tag:"<EmojiPeopleIcon style={{ fontSize: 40 }}/>"},{index:3,name:"/Tools",text:"Tools",tag:"<BuildIcon style={{ fontSize: 40 }}/>"},{index:4,name:"/RecentWork",text:"Recent Work",tag:"<SportsHandballRoundedIcon style={{ fontSize: 40 }}/>"},{index:5,name:"/Contact",text:"Contact",tag:"<ContactsRoundedIcon style={{ fontSize: 40 }}/>"}],c=Object(o.f)();"/"===c.pathname&&(t=t.filter((function(e){return"/Home"!==e.name})));var a=t.filter((function(e){return e.name!==c.pathname}));return Object(N.jsxs)("div",{className:"loadAnimate content",children:[Object(N.jsx)("div",{className:"close",children:Object(N.jsx)(S.a,{onClick:function(){e.closeDrawer()}})}),a.map((function(e){return Object(N.jsx)(r.b,{to:e.name,className:"Nav",children:Object(N.jsxs)("div",{className:"link",children:["/Home"===e.name?Object(N.jsx)(f.a,{style:{fontSize:30}}):"","/AboutMe"===e.name?Object(N.jsx)(x.a,{style:{fontSize:30}}):"","/Tools"===e.name?Object(N.jsx)(m.a,{style:{fontSize:30}}):"","/RecentWork"===e.name?Object(N.jsx)(b.a,{style:{fontSize:30}}):"","/Contact"===e.name?Object(N.jsx)(u.a,{style:{fontSize:30}}):"",Object(N.jsx)("div",{className:"value",children:e.text})]})},e.index)}))]})},k=c(116),A=c(17),C=c.n(A),w=c(53),I=c.n(w),H=c(54),z=c.n(H);var L=function(){var e=Object(a.useState)({top:!1,left:!1,bottom:!1,right:!1}),t=Object(j.a)(e,2),c=t[0],s=t[1],n=function(e){return function(){s(Object(l.a)(Object(l.a)({},c),{},{true:e}))}},o=Object(a.useState)("App-content"),r=Object(j.a)(o,2),i=r[0],b=r[1];Object(a.useEffect)((function(){setTimeout((function(){b("App-content slide")}),4e3),setTimeout((function(){b("slide"),document.querySelector(".loading").innerHTML=""}),6e3)}),[]);var d=Object(a.useState)("night"===localStorage.getItem("mode")?"white":"black"),x=Object(j.a)(d,2),O=x[0],m=x[1],h=Object(a.useState)("day"===localStorage.getItem("mode")),u=Object(j.a)(h,2),p=u[0],f=u[1],M=Object(a.useState)(localStorage.getItem("mode")?localStorage.getItem("mode"):"night"),S=Object(j.a)(M,2),A=S[0],w=S[1],H=function(){"day"===A?(w("night"),localStorage.setItem("mode","night"),m("white"),f(!0)):(w("day"),localStorage.setItem("mode","day"),f(!1),m("black"))};return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("div",{className:"loading",children:Object(N.jsx)(v,{})}),Object(N.jsx)("div",{className:i,children:Object(N.jsxs)("div",{className:A,children:[Object(N.jsx)("div",{className:"menuIcon",children:Object(N.jsx)(C.a,{onClick:n(!0)})}),Object(N.jsx)(k.a,{open:c[!0],onClose:n(!1),children:Object(N.jsx)(Z,{closeDrawer:n(!1)})}),Object(N.jsx)("div",{className:"menu",children:Object(N.jsx)(g,{iconC:O})}),Object(N.jsx)("div",{className:"mode",children:p?Object(N.jsx)(I.a,{onClick:H}):Object(N.jsx)(z.a,{onClick:H})}),Object(N.jsx)("div",{className:"mode",onClick:H,children:p?"Night Mode":"Day Mode"}),Object(N.jsx)(y,{})]})})]})},R=c(115);var T=function(){var e=Object(a.useState)({top:!1,left:!1,bottom:!1,right:!1}),t=Object(j.a)(e,2),c=t[0],s=t[1],n=function(e){return function(){s(Object(l.a)(Object(l.a)({},c),{},{true:e}))}},o=Object(a.useState)(!1),r=Object(j.a)(o,2),i=r[0],b=r[1],d=Object(a.useState)("night"===localStorage.getItem("mode")?"white":"black"),x=Object(j.a)(d,2),O=x[0],m=x[1],h=Object(a.useState)("day"!==localStorage.getItem("mode")),u=Object(j.a)(h,2),p=u[0],f=u[1],v=Object(a.useState)(localStorage.getItem("mode")?localStorage.getItem("mode"):"night"),M=Object(j.a)(v,2),S=M[0],A=M[1];Object(a.useEffect)((function(){b(!0)}),[]);var w=function(){"day"===S?(A("night"),localStorage.setItem("mode","night"),m("white"),f(!0)):(A("day"),localStorage.setItem("mode","day"),f(!1),m("black"))};return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)("div",{className:"App-content slide",children:Object(N.jsx)(R.a,{in:i,children:Object(N.jsxs)("div",{className:S,children:[Object(N.jsx)("div",{className:"menuIcon",children:Object(N.jsx)(C.a,{onClick:n(!0)})}),Object(N.jsx)(k.a,{open:c[!0],onClose:n(!1),children:Object(N.jsx)(Z,{closeDrawer:n(!1)})}),Object(N.jsx)("div",{className:"menu",children:Object(N.jsx)(g,{iconC:O})}),Object(N.jsx)("div",{className:"mode",children:p?Object(N.jsx)(I.a,{onClick:w}):Object(N.jsx)(z.a,{onClick:w})}),Object(N.jsx)("div",{className:"mode",onClick:w,children:p?"Night Mode":"Day Mode"}),Object(N.jsx)(y,{})]})})})})},D=(c(85),function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){s(!0)}),[]);var n=Object(a.useState)({top:!1,left:!1,bottom:!1,right:!1}),o=Object(j.a)(n,2),r=o[0],i=o[1],b=function(e){return function(){i(Object(l.a)(Object(l.a)({},r),{},{true:e}))}};return Object(N.jsx)(R.a,{in:c,children:Object(N.jsxs)("div",{className:"outerBox",children:[Object(N.jsx)("div",{className:"desktopMenu",children:Object(N.jsx)(g,{iconC:"black"})}),Object(N.jsx)("div",{className:"menuOpen",children:Object(N.jsx)(C.a,{onClick:b(!0)})}),Object(N.jsx)(k.a,{open:r[!0],onClose:b(!1),children:Object(N.jsx)(Z,{closeDrawer:b(!1)})}),"About Me"]})})}),E=(c(86),c(117)),W=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"wrapper",children:[Object(N.jsx)("div",{className:"button",children:Object(N.jsx)(E.a,{variant:"contained",color:"primary",children:Object(N.jsx)(r.b,{to:"/Home",style:{textDecoration:"none"},children:Object(N.jsx)("h4",{className:"linkText",children:"Go Home!!"})})})}),Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 1080",children:[Object(N.jsx)("title",{children:"404"}),Object(N.jsxs)("g",{id:"Layer_12 yellow-back-fig","data-name":"Layer 12",children:[Object(N.jsx)("path",{className:"cls-1",d:"M600.87,872H156a4,4,0,0,0-3.78,4.19h0a4,4,0,0,0,3.78,4.19H600.87a4,4,0,0,0,3.78-4.19h0A4,4,0,0,0,600.87,872Z"}),Object(N.jsx)("rect",{className:"cls-1",x:"680.91",y:"871.98",width:"513.38",height:"8.39",rx:"4.19",ry:"4.19"}),Object(N.jsx)("path",{className:"cls-1",d:"M1480,876.17h0c0,2.32,2.37,4.19,5.3,4.19h350.61c2.93,0,5.3-1.88,5.3-4.19h0c0-2.32-2.37-4.19-5.3-4.19H1485.26C1482.33,872,1480,873.86,1480,876.17Z"}),Object(N.jsx)("rect",{className:"cls-1",x:"492.21",y:"920.64",width:"249.8",height:"8.39",rx:"4.19",ry:"4.19"}),Object(N.jsx)("path",{className:"cls-1",d:"M1549.14,924.84h0a4.19,4.19,0,0,0-4.19-4.19H1067.46a14.66,14.66,0,0,1,.35,3.21v1A4.19,4.19,0,0,0,1072,929h472.94A4.19,4.19,0,0,0,1549.14,924.84Z"}),Object(N.jsx)("path",{className:"cls-1",d:"M865.5,924.84h0a4.19,4.19,0,0,0,4.19,4.19h82.37a12.28,12.28,0,0,1-.19-2v-2.17a4.19,4.19,0,0,0-4.19-4.19h-78A4.19,4.19,0,0,0,865.5,924.84Z"}),Object(N.jsx)("rect",{className:"cls-1",x:"915.6",y:"981.47",width:"54.72",height:"8.39",rx:"4.19",ry:"4.19"}),Object(N.jsx)("path",{className:"cls-1",d:"M730.33,985.67h0c0,2.32,4.23,4.19,9.44,4.19h104.3c5.22,0,9.44-1.88,9.44-4.19h0c0-2.32-4.23-4.19-9.44-4.19H739.78C734.56,981.47,730.33,983.35,730.33,985.67Z"}),Object(N.jsx)("rect",{className:"cls-1",x:"997.06",y:"981.47",width:"78.11",height:"8.39",rx:"4.19",ry:"4.19"}),Object(N.jsxs)("g",{id:"round-conf",children:[Object(N.jsx)("path",{className:"cls-1 circle c1",d:"M536.41,155.14a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,536.41,155.14Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,536.41,183.81Z"}),Object(N.jsx)("path",{className:"cls-1 circle c2",d:"M1345.09,82.44a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1345.09,82.44Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1345.09,111.12Z"}),Object(N.jsx)("path",{className:"cls-1 circle c3",d:"M70.12,363A17.77,17.77,0,1,0,87.89,380.8,17.77,17.77,0,0,0,70.12,363Zm0,28.68A10.9,10.9,0,1,1,81,380.8,10.9,10.9,0,0,1,70.12,391.7Z"}),Object(N.jsx)("path",{className:"cls-1 circle c4",d:"M170.47,751.82a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,170.47,751.82Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,170.47,780.5Z"}),Object(N.jsx)("path",{className:"cls-1 circle c5",d:"M1457.34,762.73a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1457.34,762.73Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1457.34,791.4Z"}),Object(N.jsx)("path",{className:"cls-1 circle c6",d:"M1829.15,407.49a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1829.15,407.49Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1829.15,436.17Z"})]})]}),Object(N.jsxs)("g",{id:"fortyfour","data-name":"Layer 2",children:[Object(N.jsxs)("g",{className:"four a",children:[Object(N.jsx)("rect",{className:"cls-2",x:"233.74",y:"391.14",width:"120.71",height:"466.29",rx:"57.1",ry:"57.1",transform:"translate(918.39 330.19) rotate(90)"}),Object(N.jsx)("rect",{className:"cls-3",x:"333.83",y:"475.1",width:"120.71",height:"396.88",rx:"60.36",ry:"60.36"}),Object(N.jsx)("rect",{className:"cls-3",x:"197.13",y:"122.89",width:"120.71",height:"604.75",rx:"60.36",ry:"60.36",transform:"translate(290.49 -70.78) rotate(35)"})]}),Object(N.jsxs)("g",{className:"four b",children:[Object(N.jsx)("rect",{className:"cls-2",x:"1558.84",y:"391.91",width:"120.71",height:"466.29",rx:"57.1",ry:"57.1",transform:"translate(2244.26 -994.14) rotate(90)"}),Object(N.jsx)("rect",{className:"cls-3",x:"1658.92",y:"475.87",width:"120.71",height:"396.88",rx:"60.36",ry:"60.36"}),Object(N.jsx)("rect",{className:"cls-3",x:"1522.22",y:"123.66",width:"120.71",height:"604.75",rx:"60.36",ry:"60.36",transform:"translate(530.57 -830.68) rotate(35)"})]}),Object(N.jsx)("path",{className:"cls-3",id:"ou",d:"M956.54,168.2c-194.34,0-351.89,157.55-351.89,351.89S762.19,872,956.54,872s351.89-157.55,351.89-351.89S1150.88,168.2,956.54,168.2Zm0,584.49c-128.46,0-232.6-104.14-232.6-232.6s104.14-232.6,232.6-232.6,232.6,104.14,232.6,232.6S1085,752.69,956.54,752.69Z"})]}),Object(N.jsx)("g",{id:"umbrella","data-name":"Layer 3",children:Object(N.jsxs)("g",{children:[Object(N.jsx)("circle",{className:"cls-4",cx:"1187.53",cy:"240.3",r:"7.66",transform:"translate(236.36 990.8) rotate(-49.71)"}),Object(N.jsxs)("g",{children:[Object(N.jsx)("path",{className:"cls-5",d:"M1219.56,359.67l55,100.52c32.7-48.48-6.87-142.43-91.75-214.38-84.41-71.55-183-95.33-225.81-56l114.21,44.14Z"}),Object(N.jsx)("path",{className:"cls-6",d:"M1182.79,245.81c-84.41-71.55-183-95.33-225.81-56l114.21,44.14Z"}),Object(N.jsx)("polygon",{className:"cls-7",points:"1182.79 245.81 1071.19 233.91 1219.56 359.67 1182.79 245.81"})]}),Object(N.jsx)("polygon",{className:"cls-8",points:"1180.91 409.02 1274.54 460.19 1219.56 359.67 1071.19 233.91 956.98 189.76 1021.95 274.29 1180.91 409.02"}),Object(N.jsxs)("g",{children:[Object(N.jsx)("rect",{className:"cls-4",x:"997.45",y:"358.35",width:"175.58",height:"5.1",transform:"translate(108.21 955.38) rotate(-49.71)"}),Object(N.jsx)("rect",{className:"cls-4",x:"1028.09",y:"399.36",width:"21.46",height:"32.27",rx:"10.73",ry:"10.73",transform:"translate(515.04 -573.16) rotate(40.29)"})]})]})}),Object(N.jsxs)("g",{id:"pillow","data-name":"Layer 4",children:[Object(N.jsx)("path",{className:"cls-1",d:"M754,627.07c7,.54,12.92-2.82,13.35-7.59s-4.95-9.24-12-9.87a18.55,18.55,0,0,0-2.17,0l-74.9-81.64c0-.1,0-.19,0-.29,0-7.09-4-12.83-8.8-12.81s-8.75,5.77-8.73,12.87c0,0,0,.09,0,.13l-50.21,46.07h-.09c-7.06-.63-13.14,2.77-13.57,7.59s4.87,9.16,11.85,9.84l76.08,82.92s0,0,0,.06c0,7.09,4,12.83,8.8,12.81s8.65-5.66,8.71-12.65Z"}),Object(N.jsx)("path",{className:"cls-9",d:"M669.46,514.82c-4.77-.83-8.75,5.77-8.73,12.87,0,0,0,.09,0,.13l-50.21,46.07h-.09c-7.06-.63-13.14,2.77-13.57,7.59s4.87,9.16,11.85,9.84l76.08,82.92s0,0,0,.06c0,7.09,4,12.83,8.8,12.81s8.65-5.66,8.71-12.65C570.55,573,702.07,520.47,669.46,514.82Z"})]}),Object(N.jsxs)("g",{id:"cup","data-name":"Layer 7",children:[Object(N.jsx)("polygon",{className:"cls-1",points:"1173.69 748.21 1140.52 715.42 1195.79 647.35 1241.13 692.16 1173.69 748.21"}),Object(N.jsx)("polygon",{className:"cls-8",points:"1173.69 748.21 1140.52 715.42 1143.93 711.27 1177.81 744.75 1173.69 748.21"}),Object(N.jsx)("polygon",{className:"cls-5",points:"1194.68 731.46 1157.04 694.24 1183.8 661.7 1226.91 704.32 1194.68 731.46"}),Object(N.jsxs)("g",{className:"cls-10",children:[Object(N.jsx)("path",{className:"cls-8",d:"M1176.32,667.78h0a4.19,4.19,0,0,1,4.19,4.19v33.54a0,0,0,0,1,0,0h-8.38a0,0,0,0,1,0,0V672a4.19,4.19,0,0,1,4.19-4.19Z",transform:"translate(822.53 -628.67) rotate(44.67)"}),Object(N.jsx)("path",{className:"cls-8",d:"M1172.73,709.7l23.58-23.85a4.19,4.19,0,0,1,5.92,0h0a4.19,4.19,0,0,1,0,5.92l-23.58,23.85Z"}),Object(N.jsx)("path",{className:"cls-8",d:"M1185.11,722.09l23.58-23.85a4.19,4.19,0,0,1,5.92,0h0a4.19,4.19,0,0,1,0,5.92L1191.06,728Z"})]}),Object(N.jsx)("path",{className:"cls-5",d:"M1197.85,660.5h45.69a5.7,5.7,0,0,1,5.7,5.7v8.32a0,0,0,0,1,0,0h-57.09a0,0,0,0,1,0,0v-8.32A5.7,5.7,0,0,1,1197.85,660.5Z",transform:"translate(829.53 -667.66) rotate(45)"}),Object(N.jsx)("path",{className:"cls-8",d:"M1191.49,664.74h53.94a5.25,5.25,0,0,1,5.25,5.25v4.79a0,0,0,0,1,0,0h-64.44a0,0,0,0,1,0,0V670a5.25,5.25,0,0,1,5.25-5.25Z",transform:"translate(822.83 -663.17) rotate(44.67)"})]}),Object(N.jsxs)("g",{id:"clock","data-name":"Layer 8",children:[Object(N.jsx)("circle",{className:"cls-5",cx:"847.7",cy:"247.59",r:"74.66",transform:"translate(-32.91 314.05) rotate(-20.6)"}),Object(N.jsx)("circle",{className:"cls-1",cx:"847.7",cy:"247.59",r:"63.44",transform:"translate(-32.91 314.05) rotate(-20.6)"}),Object(N.jsx)("rect",{className:"cls-3 clock-hand-1",x:"845",y:"189.5",width:"6.04",height:"58",rx:"3.02",ry:"3.02"}),Object(N.jsx)("rect",{className:"cls-3 clock-hand-2",x:"845",y:"209.5",width:"6.04",height:"38",rx:"3.02",ry:"3.02",transform:"translate(1611.22 -230.4) rotate(130.4)"}),Object(N.jsx)("circle",{className:"cls-3",cx:"847.7",cy:"247.59",transform:"translate(-32.91 314.05) rotate(-20.6)",r:"3"})]}),Object(N.jsxs)("g",{id:"box","data-name":"Layer 9",children:[Object(N.jsxs)("g",{id:"box-top",children:[Object(N.jsx)("polygon",{className:"cls-8",points:"569.71 382.28 653.74 329.39 747.13 320.1 679.2 369.85 569.71 382.28"}),Object(N.jsx)("polygon",{className:"cls-5",points:"691.95 367.2 570.87 392.34 565.32 383.35 687.8 357.45 691.95 367.2"}),Object(N.jsx)("polygon",{className:"cls-5",points:"661.54 337.48 570.87 392.34 562.42 378.92 652.25 322.38 658.12 321.34 661.54 337.48"}),Object(N.jsx)("polygon",{className:"cls-7",points:"661.54 337.48 570.87 392.34 562.42 378.92 652.25 322.38 658.12 321.34 661.54 337.48"}),Object(N.jsx)("polygon",{className:"cls-5",points:"747.13 320.1 661.54 337.48 652.25 322.38 738.4 307.1 747.13 320.1"})]}),Object(N.jsx)("path",{className:"cls-5",d:"M588.28,420.26s3.44,5.2,5.19,8l43.1,68.48,158.81-100-43.1-68.48q-2.63-4.17-5.47-8Z"}),Object(N.jsx)("path",{className:"cls-7",d:"M588.28,420.26s3.44,5.2,5.19,8l43.1,68.48,158.81-100-43.1-68.48q-2.63-4.17-5.47-8Z"}),Object(N.jsx)("rect",{className:"cls-5",x:"693.73",y:"335.51",width:"83.99",height:"90.58",transform:"translate(-89.78 450.43) rotate(-32.19)"})]}),Object(N.jsxs)("g",{id:"rucksack","data-name":"Layer 6",children:[Object(N.jsxs)("g",{id:"stripe",children:[Object(N.jsx)("path",{className:"cls-12",d:"M1200.32,473.91h0a13.74,13.74,0,0,0-18.41,7.44l-55,129.86a14.82,14.82,0,0,0,7.13,19.21h0a13.74,13.74,0,0,0,18.41-7.44l55-129.86A14.82,14.82,0,0,0,1200.32,473.91Z"}),Object(N.jsx)("path",{className:"cls-13",d:"M1202.18,606.34h0a14,14,0,0,0-16.18-11.8l-48.83,9c-7.59,1.4-12.66,9-11.31,16.89h0a14,14,0,0,0,16.18,11.8l48.83-9C1198.46,621.82,1203.53,614.26,1202.18,606.34Z"})]}),Object(N.jsx)("path",{className:"cls-8",d:"M1300.86,603l-122.93,22.74-15.44-90.91c-5.75-33.86,15.89-66.17,48.34-72.18l11.58-2.08c32.45-6,57.26,17.66,63,51.51Z"}),Object(N.jsx)("path",{className:"cls-1",d:"M1307,601.91l-112.32,20.78-15.9-93.61c-5.5-32.36,15.19-63.25,46.2-69h0c31-5.74,60.62,15.85,66.12,48.21Z"}),Object(N.jsx)("path",{className:"cls-8",d:"M1296.76,603.8,1215,618.92l-4.89-28.77c-2.11-12.42,5.83-24.27,17.73-26.47l38.67-7.15c11.9-2.2,23.26,6.08,25.37,18.5Z"}),Object(N.jsx)("path",{className:"cls-5",d:"M1296.76,603.8l-73.41,13.58-4.92-29c-2-11.62,5.45-22.72,16.6-24.78l33.07-6.12c11.14-2.06,21.77,5.69,23.75,17.32Z"}),Object(N.jsx)("path",{className:"cls-4",d:"M1231.77,469.69l-13.42,2.48a10.25,10.25,0,0,0-8,11.92l2.38,14a9.9,9.9,0,0,0,11.42,8.33l13.42-2.48a10.25,10.25,0,0,0,8-11.92l-2.38-14A9.9,9.9,0,0,0,1231.77,469.69Zm7.17,20.84a6.39,6.39,0,0,1-5,7.43l-8.36,1.55a6.17,6.17,0,0,1-7.12-5.19l-1.48-8.73a6.39,6.39,0,0,1,5-7.43l8.36-1.55a6.17,6.17,0,0,1,7.12,5.19Z"}),Object(N.jsx)("path",{className:"cls-14",d:"M1233.74,471.13l-13.42,2.48a10.25,10.25,0,0,0-8,11.92l2.38,14a9.9,9.9,0,0,0,11.42,8.33l13.42-2.48a10.25,10.25,0,0,0,8-11.92l-2.38-14A9.9,9.9,0,0,0,1233.74,471.13Zm7.17,20.84a6.39,6.39,0,0,1-5,7.43l-8.36,1.55a6.17,6.17,0,0,1-7.12-5.19L1219,487a6.39,6.39,0,0,1,5-7.43l8.36-1.55a6.17,6.17,0,0,1,7.12,5.19Z"})]}),Object(N.jsxs)("g",{id:"bike","data-name":"Layer 5",children:[Object(N.jsx)("path",{className:"cls-8 wheel",d:"M1139.82,780.44a76.59,76.59,0,1,0-57.9,91.53A76.59,76.59,0,0,0,1139.82,780.44Zm-28.12,6.33a47.59,47.59,0,0,1,.83,15.8c-30.14-6.28-47.68-21.65-54.39-52.52A47.73,47.73,0,0,1,1111.69,786.77Zm-70.46-30.9c10.35,26.88,10.14,50.4-13.73,70.77a47.67,47.67,0,0,1,13.73-70.77Zm34.35,88a47.55,47.55,0,0,1-34.94-5.62c16.8-20.36,41.71-25.94,67.09-19.46A47.66,47.66,0,0,1,1075.58,843.85Z"}),Object(N.jsx)("path",{className:"cls-8 wheel",d:"M864.89,789.69a76.59,76.59,0,1,0-66.13,85.78A76.59,76.59,0,0,0,864.89,789.69Zm-28.59,3.7a47.59,47.59,0,0,1-.64,15.81c-29.43-9-45.47-26-49.3-57.33A47.73,47.73,0,0,1,836.3,793.39ZM769,756.1c7.82,27.72,5.43,51.12-20.22,69.2A47.67,47.67,0,0,1,769,756.1Zm26.06,90.78a47.55,47.55,0,0,1-34.27-8.83c18.61-18.72,43.93-22,68.6-13.16A47.66,47.66,0,0,1,795.06,846.88Z"}),Object(N.jsxs)("g",{children:[Object(N.jsx)("rect",{className:"cls-1",x:"871.39",y:"693.37",width:"12.87",height:"53.21",transform:"translate(-165.97 273.38) rotate(-16.19)"}),Object(N.jsx)("path",{className:"cls-5",d:"M813.93,679.35c-3.72-5.2,2.24-18.5,9.16-16.13,33.43,11.46,73.85,10.45,73.85,10.45,8.84.15,14.44,10.34,7.27,15.48-14.36,8.79-33.13,17-56.35,9.76C830.17,693.41,819.83,687.6,813.93,679.35Z"}),Object(N.jsx)("path",{className:"cls-7",d:"M813.93,679.35c-3.72-5.2,2.24-18.5,9.16-16.13,33.43,11.46,73.85,10.45,73.85,10.45,8.84.15,14.44,10.34,7.27,15.48-14.36,8.79-33.13,17-56.35,9.76C830.17,693.41,819.83,687.6,813.93,679.35Z"}),Object(N.jsx)("path",{className:"cls-5",d:"M817.15,680.06c-3.59-5,1.69-16.51,8.37-14.22,32.3,11.09,71.41,7.83,71.41,7.83,8.54.14,17.45,9.94,7.43,15.88-13.87,8.51-32,16.44-54.44,9.44C832.84,693.67,822.85,688,817.15,680.06Z"})]}),Object(N.jsxs)("g",{children:[Object(N.jsx)("circle",{className:"cls-9",cx:"1022.66",cy:"599.55",r:"11.57",transform:"translate(-4.86 8.38) rotate(-0.47)"}),Object(N.jsx)("path",{className:"cls-1",d:"M1069.76,792.37l-34.89-96.74,1.93-.8-1.71-4.15-1.74.72-13.26-36.76,1.27-.42-2.25-6.76,5.94-2-2.57-7.72-9.7,3.22c-11.55-22.55,2-36.33,15-41.86l-5.57-8.81c-23,10.29-29.61,28.75-19.53,54l-9.38,3.12,2.56,7.72,5.47-1.82,2.25,6.76,2.36-.78,13.62,37.76-2.35,1,1.71,4.15,2.16-.89,34.65,96.09a7.47,7.47,0,0,0,9.56,4.49h0A7.47,7.47,0,0,0,1069.76,792.37Z"}),Object(N.jsx)("circle",{className:"cls-11",cx:"1027.9",cy:"587.94",r:"12.99",transform:"translate(-4.77 8.42) rotate(-0.47)"})]}),Object(N.jsx)("path",{className:"cls-5",d:"M1021.29,654l-17.73,6.15,1.72,5.59-31.41,82.36c-19.35,32.53-66.3,36.72-75.56,16.68l-7.09-21.5L879,747.1l3.28,10.09-94.65,33.95c-11.49,2.29-11.85,15.79-2.61,17.84,0,0,39.11,3.66,103,9.5a92.75,92.75,0,0,0,40.89-5.29c44.32-16.56,57.73-50.67,57.73-50.67l26.82-67.26a1.37,1.37,0,0,1,2.53,0l1.42,3.33,17.75-7.62Z"}),Object(N.jsx)("path",{className:"cls-7",d:"M1021.29,654l-17.73,6.15,1.72,5.59-31.41,82.36c-19.35,32.53-66.3,36.72-75.56,16.68l-7.09-21.5L879,747.1l3.28,10.09-94.65,33.95c-11.49,2.29-11.85,15.79-2.61,17.84,0,0,39.11,3.66,103,9.5a92.75,92.75,0,0,0,40.89-5.29c44.32-16.56,57.73-50.67,57.73-50.67l26.82-67.26a1.37,1.37,0,0,1,2.53,0l1.42,3.33,17.75-7.62Z"})]})]})]})})},B=(c(87),function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){s(!0)}),[]);var n=Object(a.useState)({top:!1,left:!1,bottom:!1,right:!1}),o=Object(j.a)(n,2),r=o[0],i=o[1],b=function(e){return function(){i(Object(l.a)(Object(l.a)({},r),{},{true:e}))}};return Object(N.jsx)(R.a,{in:c,children:Object(N.jsxs)("div",{className:"contactContainer",children:[Object(N.jsx)("div",{className:"desktopMenu",children:Object(N.jsx)(g,{iconC:"black"})}),Object(N.jsx)("div",{className:"menuOpen",children:Object(N.jsx)(C.a,{onClick:b(!0)})}),Object(N.jsx)(k.a,{open:r[!0],onClose:b(!1),children:Object(N.jsx)(Z,{closeDrawer:b(!1)})}),Object(N.jsx)("h1",{children:"Contact"})]})})}),q=(c(88),function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){s(!0)}),[]);var n=Object(a.useState)({top:!1,left:!1,bottom:!1,right:!1}),o=Object(j.a)(n,2),r=o[0],i=o[1],b=function(e){return function(){i(Object(l.a)(Object(l.a)({},r),{},{true:e}))}};return Object(N.jsx)(R.a,{in:c,children:Object(N.jsxs)("div",{className:"recentContainer",children:[Object(N.jsx)("div",{className:"desktopMenu",children:Object(N.jsx)(g,{iconC:"black"})}),Object(N.jsx)("div",{className:"menuOpen",children:Object(N.jsx)(C.a,{onClick:b(!0)})}),Object(N.jsx)(k.a,{open:r[!0],onClose:b(!1),children:Object(N.jsx)(Z,{closeDrawer:b(!1)})}),Object(N.jsx)("h1",{children:"Recent Work"})]})})}),J=(c(89),function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){s(!0)}),[]);var n=Object(a.useState)({top:!1,left:!1,bottom:!1,right:!1}),o=Object(j.a)(n,2),r=o[0],i=o[1],b=function(e){return function(){i(Object(l.a)(Object(l.a)({},r),{},{true:e}))}};return Object(N.jsx)(R.a,{in:c,children:Object(N.jsxs)("div",{className:"contentTools",children:[Object(N.jsx)("div",{className:"desktopMenu",children:Object(N.jsx)(g,{iconC:"black"})}),Object(N.jsx)("div",{className:"menuOpen",children:Object(N.jsx)(C.a,{onClick:b(!0)})}),Object(N.jsx)(k.a,{open:r[!0],onClose:b(!1),children:Object(N.jsx)(Z,{closeDrawer:b(!1)})}),Object(N.jsx)("h1",{children:"Tools"})]})})}),P=function(){return Object(N.jsx)("div",{children:Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{exact:!0,path:"/",children:Object(N.jsx)(L,{})}),Object(N.jsx)(o.a,{exact:!0,path:"/Home",children:Object(N.jsx)(T,{})}),Object(N.jsx)(o.a,{exact:!0,path:"/AboutMe",children:Object(N.jsx)(D,{})}),Object(N.jsx)(o.a,{exact:!0,path:"/Contact",children:Object(N.jsx)(B,{})}),Object(N.jsx)(o.a,{exact:!0,path:"/RecentWork",children:Object(N.jsx)(q,{})}),Object(N.jsx)(o.a,{exact:!0,path:"/Tools",children:Object(N.jsx)(J,{})}),Object(N.jsx)(o.a,{children:Object(N.jsx)(W,{})})]})})};n.a.render(Object(N.jsx)(r.a,{children:Object(N.jsx)(P,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.37a6e48a.chunk.js.map