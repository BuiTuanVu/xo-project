(window["webpackJsonpbtcn03-refactor"]=window["webpackJsonpbtcn03-refactor"]||[]).push([[0],{110:function(e,t,r){e.exports=r(263)},116:function(e,t,r){},252:function(e,t,r){},253:function(e,t,r){},255:function(e,t,r){},263:function(e,t,r){"use strict";r.r(t);r(111);var n=r(0),a=r.n(n),o=r(21),s=r.n(o),c=(r(116),r(37)),l=r(41),i=r(104),u=r.n(i),m=r(105);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){Object(m.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={history:[{squares:Array(400).fill(null),location:""}],xIsNext:!0,stepNumber:0,isReverse:!1},d=function(e){for(var t=Math.sqrt(e.length),r=0;r<t;r+=1)for(var n=0;n<t;n+=1){var a=r*t+n;if(a<(r+1)*t-4&&(null===e[a-1]||null===e[a+5])&&e[a]&&e[a]===e[a+1]&&e[a]===e[a+2]&&e[a]===e[a+3]&&e[a]===e[a+4])return{winLocation:[a,a+1,a+2,a+3,a+4],winPlayer:e[a]};if((null===e[a-t]||null===e[a+5*t])&&e[a]&&e[a]===e[a+1*t]&&e[a]===e[a+2*t]&&e[a]===e[a+3*t]&&e[a]===e[a+4*t])return{winLocation:[a,a+1*t,a+2*t,a+3*t,a+4*t],winPlayer:e[a]};if((null===e[a-1*t-1]||null===e[a+5*t+5])&&e[a]&&e[a]===e[a+1*t+1]&&e[a]===e[a+2*t+2]&&e[a]===e[a+3*t+3]&&e[a]===e[a+4*t+4])return{winLocation:[a,a+1*t+1,a+2*t+2,a+3*t+3,a+4*t+4],winPlayer:e[a]};if((null===e[a-1*t+1]||null===e[a+5*t-5])&&e[a]&&e[a]===e[a+1*t-1]&&e[a]===e[a+2*t-2]&&e[a]===e[a+3*t-3]&&e[a]===e[a+4*t-4])return{winLocation:[a,a+1*t-1,a+2*t-2,a+3*t-3,a+4*t-4],winPlayer:e[a]}}return null},h=function(e,t){var r=e.history.slice(0,e.stepNumber+1),n=r[r.length-1].squares.slice();if(!d(n)&&!n[t]){var a=Math.sqrt(r[0].squares.length),o=[Math.floor(t/a)+1,t%a+1].join(",");return n[t]=e.xIsNext?"X":"O",{history:r.concat([{squares:n,location:o}]),xIsNext:!e.xIsNext,stepNumber:r.length}}},E=function(e){return{history:[{squares:e.history.slice()[0].squares.slice()}],stepNumber:0,xIsNext:!0,isReverse:!1}},v=function(e){return document.querySelectorAll(".chosen-btn").forEach((function(e){e.classList.remove("chosen-btn")})),document.getElementById("".concat(e)).classList.add("chosen-btn"),{stepNumber:e,xIsNext:e%2===0}},y=r(22),w=r(23),N=r(25),O=r(24),g=r(26),k=function(e){var t=e.value,r=e.onClick,n=e.winner,o="square ".concat(n);return a.a.createElement("button",{type:"button",className:o,"data-pro":t,onClick:r},t)},j=function(e){function t(){return Object(y.a)(this,t),Object(N.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(w.a)(t,[{key:"renderSquare",value:function(e){var t=this.props.winner,r=this.props.squares,n=this.props.onClick;return a.a.createElement(k,{value:r[e],onClick:function(){return n(e)},winner:t&&t.includes(e)?"winner":""})}},{key:"renderBoard",value:function(){for(var e=this.props.squares,t=Math.sqrt(e.length),r=Array(t).fill(null),n=0;n<t;n+=1){for(var o=Array(t).fill(null),s=0;s<t;s+=1){var c=n*t+s;o.push(a.a.createElement("span",{key:c},this.renderSquare(c)))}r.push(a.a.createElement("div",{key:n},o))}return r}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",null,this.renderBoard()))}}]),t}(a.a.Component),x=(r(252),function(e){function t(){return Object(y.a)(this,t),Object(N.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e,t=this,r=this.props.history,n=this.props.stepNumber,o=this.props.xIsNext,s=this.props.isReverse,c=this.props.restart,l=r[n].squares.slice(),i=d(l);e=i?"Winner is: ".concat(i.winPlayer):"Next player is: ".concat(o?"X":"O");var u=r.map((function(e,r){var n=r?"Go to move #".concat(r," (").concat(e.location,")"):"Go to game start!";return a.a.createElement("li",{key:r.id},a.a.createElement("button",{type:"button",style:{marginTop:5},className:"btn btn-sm btn-outline-dark",id:r,onClick:function(){return t.props.jumpTo(r)}},n))}));return a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"game-board"},a.a.createElement(j,{squares:l,onClick:function(e){return t.props.clickSquare(e)},winner:i&&i.winLocation})),a.a.createElement("div",{className:"game-info"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-6 status"},e),a.a.createElement("div",{className:"col-3"},a.a.createElement("button",{className:"btn btn-sm btn-outline-success",type:"button",onClick:function(){return c()}},"Restart")),a.a.createElement("div",{className:"col-3"},a.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-primary",onClick:function(){return t.props.sort()}},"Sort step"))),a.a.createElement("ol",{reversed:s?"reverse":""},s?u.reverse():u)))}}]),t}(a.a.PureComponent)),q=function(e){function t(){return Object(y.a)(this,t),Object(N.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.history,t=this.props.xIsNext,r=this.props.stepNumber,n=this.props.isReverse,o=this.props.clickSquare,s=this.props.jumpTo,c=this.props.sort,l=this.props.restart;return a.a.createElement(x,{history:e,xIsNext:t,stepNumber:r,isReverse:n,clickSquare:o,jumpTo:s,sort:c,restart:l})}}]),t}(a.a.PureComponent),P=Object(l.b)((function(e){return{history:e.history,xIsNext:e.xIsNext,stepNumber:e.stepNumber,isReverse:e.isReverse}}),(function(e){return{clickSquare:function(t){return e(function(e){return{type:"CLICK_SQUARE",id:e}}(t))},jumpTo:function(t){return e(function(e){return{type:"JUMP_TO",id:e}}(t))},sort:function(){return e({type:"SORT"})},restart:function(){return e({type:"RESTART"})}}}))(q),C=r(27),I=r(15),L=r(267),S=r(266),T=r(265);r(253);function R(){return a.a.createElement(T.a,{className:"login-form"},a.a.createElement("h1",null,a.a.createElement("span",{className:"font-weight-bold"},"TicTacToe"),".com"),a.a.createElement("h2",{className:"text-center"},"Welcome"),a.a.createElement("br",null),a.a.createElement(T.a.Group,{controlId:"formGroupUsername"},a.a.createElement(T.a.Label,null,"Username"),a.a.createElement(T.a.Control,{placeholder:"Username",required:!0})),a.a.createElement(T.a.Group,{controlId:"formGroupPassword"},a.a.createElement(T.a.Label,null,"Password"),a.a.createElement(T.a.Control,{type:"password",placeholder:"Password",required:!0})),a.a.createElement("button",{type:"submit",className:"btn btn-dark btn-block"},"Log in"))}r(255);function G(){return a.a.createElement(T.a,{className:"register-form"},a.a.createElement("h1",null,a.a.createElement("span",{className:"font-weight-bold"},"TicTacToe"),".com"),a.a.createElement("h2",{className:"text-center"},"Sign up"),a.a.createElement("br",null),a.a.createElement(T.a.Group,{controlId:"formGroupUsername"},a.a.createElement(T.a.Label,null,"Username"),a.a.createElement(T.a.Control,{placeholder:"Username",required:!0})),a.a.createElement(T.a.Group,{controlId:"formGroupPassword"},a.a.createElement(T.a.Label,null,"Password"),a.a.createElement(T.a.Control,{type:"password",placeholder:"Password",required:!0})),a.a.createElement(T.a.Group,{controlId:"formGroupPassword"},a.a.createElement(T.a.Label,null,"Confirm Password"),a.a.createElement(T.a.Control,{type:"password",placeholder:"Confirm Password",required:!0})),a.a.createElement("button",{type:"submit",className:"btn btn-dark btn-block"},"Sign up"))}var U=Object(c.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLICK_SQUARE":return b({},e,{},h(e,t.id));case"RESTART":return b({},E(e));case"JUMP_TO":return b({},e,{},v(t.id));case"SORT":return b({},e,{isReverse:!e.isReverse});default:return e}}),u()());s.a.render(a.a.createElement(l.a,{store:U},a.a.createElement((function(){return a.a.createElement(C.a,null,a.a.createElement(L.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},a.a.createElement(L.a.Brand,{as:C.b,to:"/"},"Home"),a.a.createElement(L.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),a.a.createElement(L.a.Collapse,{id:"responsive-navbar-nav"},a.a.createElement(S.a,{className:"mr-auto"},a.a.createElement(S.a.Link,{as:C.b,to:"/features"},"Features"),a.a.createElement(S.a.Link,{href:"/about"},"About")),a.a.createElement(S.a,null,a.a.createElement(S.a.Link,{as:C.b,to:"/login"},"Log in"),a.a.createElement(S.a.Link,{eventKey:2,as:C.b,to:"/register"},"Sign up")))),a.a.createElement("div",null,a.a.createElement(I.c,null,a.a.createElement(I.a,{exact:!0,path:"/",component:P}),a.a.createElement(I.a,{path:"/login",component:R}),a.a.createElement(I.a,{path:"/register",component:G}),a.a.createElement(I.a,{render:function(){return a.a.createElement("p",null,"Not found")}}))))}),null)),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.ff1da581.chunk.js.map