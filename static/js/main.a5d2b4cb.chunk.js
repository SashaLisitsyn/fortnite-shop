(this["webpackJsonpfortnite-shop"]=this["webpackJsonpfortnite-shop"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),a=n(7),s=(n(13),n(0)),r=function(){return Object(s.jsx)("nav",{className:"light-blue accent-1",children:Object(s.jsx)("div",{className:"nav-wrapper",children:Object(s.jsx)("a",{href:"https://sashalisitsyn.github.io/fortnite-shop/",className:"brand-logo",children:"Shop"})})})},o=n(8),l=n(1),u=n(3),d=(n(15),n(16),n(17),function(t){var e=t.id,n=t.name,c=t.description,i=t.price,a=t.full_background,r=t.addToBasket,o=void 0===r?Function.prototype:r;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:a,alt:n})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("span",{className:"card-title",children:n}),Object(s.jsx)("p",{children:c})]}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn light-blue darken-4",onClick:function(){return o({id:e,name:n,price:i})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"price right",children:[i," \u0440\u0443\u0431."]})]})]})}),j=function(t){var e=t.goods,n=void 0===e?[]:e,c=t.addToBasket,i=void 0===c?Function.prototype:c;return n.length?Object(s.jsx)("div",{className:"goods",children:n.map((function(t){return Object(s.jsx)(d,Object(l.a)(Object(l.a)({},t),{},{addToBasket:i}),t.id)}))}):Object(s.jsx)("h3",{children:" "})},b=(n(18),function(t){var e=t.quantity,n=void 0===e?0:e,c=t.handleBasketShow,i=void 0===c?Function.prototype:c;return Object(s.jsxs)("div",{className:"cart light-blue darken-4 white-text",onClick:i,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),n?Object(s.jsx)("span",{className:"cart-quantity",children:n}):null]})}),h=(n(19),n(20),function(t){var e=t.id,n=t.name,c=t.price,i=t.quantity,a=t.removeFromBasket,r=void 0===a?Function.prototype:a,o=t.incQuantity,l=void 0===o?Function.prototype:o,u=t.decQuantity,d=void 0===u?Function.prototype:u;return Object(s.jsxs)("li",{className:"collection-item",children:[n," ",Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return d(e)},children:"remove"})," ","x",i," ",Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return l(e)},children:"add"})," ","= ",c*i," \u0440\u0443\u0431.",Object(s.jsx)("span",{className:"secondary-content",onClick:function(){return r(e)},children:Object(s.jsx)("i",{className:"material-icons basket-delete",children:"close"})})]})}),O=function(t){var e=t.order,n=void 0===e?[]:e,c=t.handleBasketShow,i=void 0===c?Function.prototype:c,a=t.removeFromBasket,r=void 0===a?Function.prototype:a,o=t.incQuantity,u=t.decQuantity,d=n.reduce((function(t,e){return t+e.price*e.quantity}),0);return Object(s.jsxs)("ul",{className:"collection basket-list",children:[Object(s.jsx)("li",{className:"collection-item active light-blue accent-2",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),n.length?n.map((function(t){return Object(s.jsx)(h,Object(l.a)(Object(l.a)({},t),{},{removeFromBasket:r,incQuantity:o,decQuantity:u}),t.id)})):Object(s.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(s.jsxs)("div",{className:"price-btn light-blue accent-2",children:[Object(s.jsxs)("li",{className:"collection-item active light-blue accent-2",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",d," \u0440\u0443\u0431."]}),Object(s.jsx)("button",{className:"btn-small light-blue darken-4",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})]}),Object(s.jsx)("i",{className:"material-icons basket-close",onClick:i,children:"close"})]})},m=(n(21),function(t){var e=t.name,n=void 0===e?"":e,i=t.closeAlert,a=void 0===i?Function.prototype:i;return Object(c.useEffect)((function(){var t=setTimeout(a,3e3);return function(){clearTimeout(t)}}),[n]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast light-blue darken-4 white-text",children:[n," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}),f=function(){return Object(s.jsx)("div",{className:"progress light-blue lighten-1",children:Object(s.jsx)("div",{className:"indeterminate light-blue lighten-5"})})},x=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(!0),r=Object(u.a)(a,2),d=r[0],h=r[1],x=Object(c.useState)([]),p=Object(u.a)(x,2),v=p[0],g=p[1],y=Object(c.useState)(!1),N=Object(u.a)(y,2),k=N[0],F=N[1],q=Object(c.useState)(),B=Object(u.a)(q,2),S=B[0],w=B[1],Q=function(){F(!k)};return Object(c.useEffect)((function(){fetch(" https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:"b48fcc5c-8eddd230-f1f38e2d-d7223a1e"}}).then((function(t){return t.json()})).then((function(t){t.featured&&i(t.featured),h(!1)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(b,{quantity:v.length,handleBasketShow:Q}),d?Object(s.jsx)(f,{}):Object(s.jsx)(j,{goods:n,addToBasket:function(t){var e=v.findIndex((function(e){return e.id===t.id}));if(e<0){var n=Object(l.a)(Object(l.a)({},t),{},{quantity:1});g([].concat(Object(o.a)(v),[n]))}else{var c=v.map((function(t,n){return n===e?Object(l.a)(Object(l.a)({},t),{},{quantity:t.quantity+1}):t}));g(c)}w(t.name)}}),k&&Object(s.jsx)(O,{order:v,handleBasketShow:Q,removeFromBasket:function(t){var e=v.filter((function(e){return e.id!==t}));g(e)},incQuantity:function(t){var e=v.map((function(e){if(e.id===t){var n=e.quantity+1;return Object(l.a)(Object(l.a)({},e),{},{quantity:n})}return e}));g(e)},decQuantity:function(t){var e=v.map((function(e){if(e.id===t){var n=e.quantity-1;return Object(l.a)(Object(l.a)({},e),{},{quantity:n>=0?n:0})}return e}));g(e)}}),S&&Object(s.jsx)(m,{name:S,closeAlert:function(){w("")}})]})},p=function(){return Object(s.jsx)("footer",{className:"page-footer light-blue accent-2",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"footer-copyright light-blue accent-2",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Lisitsyn Alexander",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/SashaLisitsyn/fortnite-shop",children:"Repo"})]})})})})},v=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(r,{}),Object(s.jsx)(x,{}),Object(s.jsx)(p,{})]})};Object(a.render)(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.a5d2b4cb.chunk.js.map