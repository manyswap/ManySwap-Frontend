(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[11],{923:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return b}));var c=n(2),r=n.n(c),a=n(6),i=n(99),s=n.n(i),u=n(81),o=function(e,t){return new(new s.a(e).eth.Contract)(u,t)},j=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.allowance(c,n.options.address).call();case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","0");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,c){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o(t,n),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},924:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return x}));var c=n(2),r=n.n(c),a=n(6),i=n(18),s=n(0),u=n(9),o=n.n(u),j=n(53),b=n(247),l=n(41),d=n(923),p=n(19),f=n(172),O=function(){var e=Object(f.a)().slowRefresh,t=Object(s.useState)(),n=Object(i.a)(t,2),c=n[0],u=n[1];return Object(s.useEffect)((function(){function e(){return(e=Object(a.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)(b,Object(p.d)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,u(new o.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},x=function(e){var t=Object(s.useState)(new o.a(0)),n=Object(i.a)(t,2),c=n[0],u=n[1],b=Object(j.j)(),l=b.account,p=b.ethereum,O=Object(f.a)().slowRefresh;return Object(s.useEffect)((function(){l&&p&&function(){var t=Object(a.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.c)(p,e,"0x000000000000000000000000000000000000dEaD");case 2:n=t.sent,u(new o.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[l,p,e,O]),c};t.a=function(e){var t=Object(s.useState)(new o.a(0)),n=Object(i.a)(t,2),c=n[0],u=n[1],b=Object(j.j)(),l=b.account,p=b.ethereum,O=Object(f.a)().fastRefresh;return Object(s.useEffect)((function(){l&&p&&function(){var t=Object(a.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.c)(p,e,l);case 2:n=t.sent,u(new o.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[l,p,e,O]),c}},964:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return re}));var c,r,a,i,s,u,o,j,b,l,d,p=n(13),f=n(0),O=n(3),x=n(11),h=n(38),m=n(138),v=n(2),g=n.n(v),w=n(6),k=n(18),y=n(53),S=n(256),z=n(17),M=n(9),N=n.n(M),A=n(50),H=n(19),U=n(86),B=n(244),R=n(172),E=function(){var e=Object(f.useState)([]),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(y.j)().account,a=Object(R.a)().fastRefresh;return Object(f.useEffect)((function(){r&&function(){var e=Object(w.a)(g.a.mark((function e(){var t,n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B.b.map((function(e){return{address:Object(H.h)(),name:"pendingMany",params:[e.pid,r]}})),e.next=3,Object(A.a)(U,t);case 3:n=e.sent,a=B.b.map((function(e,t){return Object(z.a)(Object(z.a)({},e),{},{balance:new N.a(n[t])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),n},Y=n(243),C=function(){var e=Object(f.useState)([]),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(y.j)().account,a=Object(R.a)().fastRefresh;return Object(f.useEffect)((function(){r&&function(){var e=Object(w.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B.b.map((function(e){return{address:Object(H.h)(),name:"pendingMany",params:[e.pid,r]}})),e.next=3,Object(A.a)(U,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),n},Q=n(58),D=n(415),L=n(1),T=function(e){var t=e.value,n=e.decimals,c=e.fontSize,r=void 0===c?"40px":c,a=e.lineHeight,i=void 0===a?"1":a,s=e.prefix,u=void 0===s?"":s,o=e.bold,j=void 0===o||o,b=e.color,l=void 0===b?"text":b,d=Object(D.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),p=d.countUp,O=d.update,h=Object(f.useRef)(O);return Object(f.useEffect)((function(){h.current(t)}),[t,h]),Object(L.jsxs)(x.U,{bold:j,fontSize:r,style:{lineHeight:i},color:l,children:[u,p]})},W=function(e){return Object(L.jsx)(T,Object(z.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))},_=O.e.div(c||(c=Object(p.a)(["\n  margin-bottom: 24px;\n}\n"]))),F=function(){var e=Object(h.a)(),t=Object(y.j)().account,n=C().reduce((function(e,t){return e+new N.a(t).div(new N.a(10).pow(18)).toNumber()}),0),c=new N.a(n).multipliedBy(Object(Q.j)()).toNumber();return t?Object(L.jsxs)(_,{children:[Object(L.jsx)(T,{value:n,lineHeight:"1.5"}),Object(L.jsx)(W,{value:c})]}):Object(L.jsx)(x.U,{color:"textDisabled",style:{lineHeight:"76px"},children:e(298,"Locked")})},J=n(924),$=n(59),q=function(){var e=Object(h.a)(),t=Object(J.a)(Object(H.d)()),n=new M.BigNumber(Object($.a)(t)).multipliedBy(Object(Q.j)()).toNumber();return Object(y.j)().account?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(T,{value:Object($.a)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),Object(L.jsx)(W,{value:n})]}):Object(L.jsx)(x.U,{color:"textDisabled",style:{lineHeight:"54px"},children:e(298,"Locked")})},G=Object(O.e)(x.m)(r||(r=Object(p.a)(["\n  \n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n  \n"]))),I=O.e.div(a||(a=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),K=O.e.img(i||(i=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),P=O.e.div(s||(s=Object(p.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),V=O.e.div(u||(u=Object(p.a)(["\n  margin-top: 24px;\n"]))),X=function(){var e=Object(f.useState)(!1),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(y.j)().account,a=Object(h.a)(),i=E().filter((function(e){return e.balance.toNumber()>0})),s=Object(S.a)(i.map((function(e){return e.pid}))).onReward,u=Object(f.useCallback)(Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,s();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[s]);return Object(L.jsx)(G,{children:Object(L.jsxs)(x.n,{children:[Object(L.jsx)(x.A,{size:"xl",mb:"24px",children:a(542,"Farms & Staking")}),Object(L.jsx)(K,{src:"/images/logo.png",alt:"cake logo",width:64,height:64}),Object(L.jsxs)(I,{children:[Object(L.jsxs)(P,{children:[a(544,"MANY to Harvest"),":"]}),Object(L.jsx)(F,{})]}),Object(L.jsxs)(I,{children:[Object(L.jsxs)(P,{children:[a(546,"MANY in Wallet"),":"]}),Object(L.jsx)(q,{})]}),Object(L.jsx)(V,{children:r?Object(L.jsx)(x.i,{id:"harvest-all",disabled:i.length<=0||n,onClick:u,fullWidth:!0,children:n?a(548,"Collecting MANY"):a(532,"Harvest all (".concat(i.length,")"))}):Object(L.jsx)(Y.a,{fullWidth:!0})})]})})},Z=Object(O.e)(x.m)(o||(o=Object(p.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ee=O.e.div(j||(j=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),te=function(){var e=Object(h.a)(),t=Object(J.c)(),n=Object(J.b)(Object(H.d)()),c=t?Object($.a)(t)-Object($.a)(n):0;return Object(L.jsx)(Z,{children:Object(L.jsxs)(x.n,{children:[Object(L.jsx)(x.A,{size:"xl",mb:"24px",children:e(534,"MANY Stats")}),Object(L.jsxs)(ee,{children:[Object(L.jsx)(x.U,{fontSize:"14px",children:e(536,"Total MANY Supply")}),c&&Object(L.jsx)(T,{fontSize:"14px",value:c})]}),Object(L.jsxs)(ee,{children:[Object(L.jsx)(x.U,{fontSize:"14px",children:e(538,"Total MANY Burned")}),Object(L.jsx)(T,{fontSize:"14px",value:Object($.a)(n)})]}),Object(L.jsxs)(ee,{children:[Object(L.jsx)(x.U,{fontSize:"14px",children:e(540,"New MANY/block")}),Object(L.jsx)(T,{fontSize:"14px",decimals:0,value:20})]})]})})},ne=O.e.div(b||(b=Object(p.a)(["\n  align-items: center;\n  background-image: url('/images/space_Banner Mobile.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/space_Banner Left.svg'), url('/images/space_Banner Right.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ce=Object(O.e)(x.d)(l||(l=Object(p.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),re=(Object(O.e)(x.d)(d||(d=Object(p.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),function(){var e=Object(h.a)();return Object(L.jsxs)(m.a,{children:[Object(L.jsxs)(ne,{children:[Object(L.jsx)(x.A,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"ManySwap")}),Object(L.jsx)(x.U,{children:e(578,"The #1 AMM and yield farm to give affiliate comissions  on Binance Smart Chain.")})]}),Object(L.jsx)("div",{children:Object(L.jsxs)(ce,{children:[Object(L.jsx)(X,{}),Object(L.jsx)(te,{})]})})]})})}}]);
//# sourceMappingURL=11.4fe279be.chunk.js.map