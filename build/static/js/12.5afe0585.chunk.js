(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[12],{927:function(e,n,t){"use strict";var i,c=t(13),r=t(3).e.div(i||(i=Object(c.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle}));n.a=r},933:function(e,n,t){"use strict";t(0);var i=t(11),c=t(58),r=t(38),s=t(927),a=t(60),l=t(1),o=function(){var e=Object(r.a)();return Object(l.jsx)(i.m,{mb:"32px",isActive:!0,children:Object(l.jsx)(i.n,{children:Object(l.jsxs)(i.z,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(i.A,{size:"lg",mb:"8px",children:e(1052,"You haven't set up your profile yet!")}),Object(l.jsx)(i.U,{children:e(1054,"You can do this at any time by clicking on your profile picture in the menu")})]}),Object(l.jsx)(i.i,{as:a.a,to:"/profile",mt:["16px",null,0],children:e(1050,"Set up now")})]})})})};n.a=function(){var e=Object(r.a)(),n=Object(c.m)(),t=n.isInitialized,a=n.profile,d=t&&!a;return Object(l.jsxs)(l.Fragment,{children:[d&&Object(l.jsx)(o,{}),Object(l.jsxs)(s.a,{children:[Object(l.jsx)(i.A,{as:"h1",size:"xxl",color:"secondary",children:e(1082,"Teams & Profiles")}),Object(l.jsx)(i.U,{bold:!0,children:e(999,"Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}},966:function(e,n,t){"use strict";t.r(n);t(0);var i,c,r,s,a,l,o,d,j=t(11),x=t(160),b=t.n(x),u=t(58),p=t(138),m=t(38),h=t(13),O=t(3),f=t(60),g=t(1),v=O.e.div(i||(i=Object(h.a)(["\n  align-self: stretch;\n  background: ",";\n  flex: none;\n  padding: 16px 0;\n  text-align: center;\n  width: 56px;\n"])),(function(e){return function(e){return e.isDark?"linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)":"linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)"}(e.theme)})),y=O.e.div(c||(c=Object(h.a)(["\n  align-items: start;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 24px;\n\n  "," {\n    align-items: center;\n    flex-direction: row;\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),z=O.e.div(r||(r=Object(h.a)(["\n  flex: 1;\n"]))),w=O.e.img(s||(s=Object(h.a)(["\n  border-radius: 50%;\n"]))),F=Object(O.e)(j.A).attrs({as:"h3"})(a||(a=Object(h.a)(["\n  font-size: 24px;\n\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),S=O.e.div(l||(l=Object(h.a)(["\n  flex: none;\n  margin-right: 8px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n\n  "," {\n    display: none;\n  }\n"])),w,(function(e){return e.theme.mediaQueries.md})),k=O.e.div(o||(o=Object(h.a)(["\n  display: none;\n\n  "," {\n    display: block;\n    margin-left: 24px;\n\n    "," {\n      height: 128px;\n      width: 128px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),w),U=Object(O.e)(j.m)(d||(d=Object(h.a)(["\n  display: flex;\n  margin-bottom: 16px;\n"]))),A=function(e){var n=e.rank,t=e.team,i=Object(m.a)(),c=Object(g.jsx)(w,{src:"/images/teams/".concat(t.images.md),alt:"team avatar"});return Object(g.jsxs)(U,{children:[Object(g.jsx)(v,{children:Object(g.jsx)(j.U,{bold:!0,fontSize:"24px",children:n})}),Object(g.jsxs)(y,{children:[Object(g.jsxs)(z,{children:[Object(g.jsxs)(j.z,{alignItems:"center",mb:"16px",children:[Object(g.jsx)(S,{children:c}),Object(g.jsx)(F,{children:t.name})]}),Object(g.jsx)(j.U,{as:"p",color:"textSubtle",pr:"24px",mb:"16px",children:t.description}),Object(g.jsxs)(j.z,{children:[Object(g.jsxs)(j.z,{children:[Object(g.jsx)(j.O,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.U,{fontSize:"24px",bold:!0,children:t.points.toLocaleString()})]}),Object(g.jsxs)(j.z,{ml:"24px",children:[Object(g.jsx)(j.y,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.U,{fontSize:"24px",bold:!0,children:t.users.toLocaleString()})]})]})]}),Object(g.jsx)(j.i,{as:f.a,to:"/teams/".concat(null===t||void 0===t?void 0:t.id),variant:"secondary",size:"sm",children:i(1042,"See More")}),Object(g.jsx)(k,{children:c})]})]})},D=t(933);n.default=function(){var e=Object(m.a)(),n=Object(u.o)(),t=n.teams,i=n.isLoading,c=Object.values(t),r=b()(c,["points","id","name"],["desc","asc","asc"]);return Object(g.jsxs)(p.a,{children:[Object(g.jsx)(D.a,{}),Object(g.jsxs)(j.z,{alignItems:"center",justifyContent:"space-between",mb:"32px",children:[Object(g.jsx)(j.A,{size:"xl",children:e(1040,"Teams")}),i&&Object(g.jsx)(j.c,{spin:!0})]}),r.map((function(e,n){return Object(g.jsx)(A,{rank:n+1,team:e},e.id)}))]})}}}]);
//# sourceMappingURL=12.5afe0585.chunk.js.map