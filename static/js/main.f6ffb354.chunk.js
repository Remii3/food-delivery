(this["webpackJsonpfood-delivery"]=this["webpackJsonpfood-delivery"]||[]).push([[0],[,,,,function(e,t,a){e.exports={titleSpace:"CartForm_titleSpace__3Dk8z",titleSpace_title:"CartForm_titleSpace_title__2JunI",titleSpace_desc:"CartForm_titleSpace_desc__2ByNv",orderForm:"CartForm_orderForm__1qBxL",inputSpace:"CartForm_inputSpace__28FBw",inputSpace_title:"CartForm_inputSpace_title__1IISG",inputSpace_orderInput:"CartForm_inputSpace_orderInput__pXa2_",buttonSpace:"CartForm_buttonSpace__2m5EH",inputSpace_errorInput:"CartForm_inputSpace_errorInput__3VPeB",inputSpace_errorMessage:"CartForm_inputSpace_errorMessage__mSmtQ"}},,function(e,t,a){e.exports={filterSection:"StoreFilterLook_filterSection__14cpN",filterSection_burgerStyle:"StoreFilterLook_filterSection_burgerStyle__2ZTpO",filtersSpace_filterInput:"StoreFilterLook_filtersSpace_filterInput___47kM",list_listTag:"StoreFilterLook_list_listTag__3VDoW",selected:"StoreFilterLook_selected__zbGm-",filterSection_filtersSpace:"StoreFilterLook_filterSection_filtersSpace__DnCNK",filtersSpace_list:"StoreFilterLook_filtersSpace_list__iPi9x"}},function(e,t,a){e.exports={productDetailsSpace:"ProductDetails_productDetailsSpace__20iIW",navigationBar:"ProductDetails_navigationBar__3MOrn",navigationBar_back:"ProductDetails_navigationBar_back__3uUhv",itemDetailsSpace:"ProductDetails_itemDetailsSpace__3mHy_",itemDetailsSpace_image:"ProductDetails_itemDetailsSpace_image__s4g-p",itemDetailsSpace_informationSpace:"ProductDetails_itemDetailsSpace_informationSpace__7SB28",informationSpace_title:"ProductDetails_informationSpace_title__3crcj",informationSpace_type:"ProductDetails_informationSpace_type__3upb6",itemWindow_buyInterface:"ProductDetails_itemWindow_buyInterface__1bXw6",buyButton_icon:"ProductDetails_buyButton_icon__3FNMU",buyButton_text:"ProductDetails_buyButton_text__Ivps-"}},function(e,t,a){e.exports={itemSpace_itemWindow:"StoreItem_itemSpace_itemWindow__34a0V",itemWindow_titleSpace:"StoreItem_itemWindow_titleSpace__2zRGJ",titleSpace_title:"StoreItem_titleSpace_title__SQ35t",titleSpace_desc:"StoreItem_titleSpace_desc__1Fco_","titleSpace_title-hover":"StoreItem_titleSpace_title-hover__29cuo","titleSpace_desc-hover":"StoreItem_titleSpace_desc-hover__3CoFS",itemWindow_buyInterface:"StoreItem_itemWindow_buyInterface__3hbu3",buyButton_icon:"StoreItem_buyButton_icon__2hoOc",buyButton_text:"StoreItem_buyButton_text__3gdp4"}},,,function(e,t,a){e.exports={headerContainer_navContainer:"Nav_headerContainer_navContainer__2shvJ",navContainer_title:"Nav_navContainer_title__26RYt","navContainer_title-hover":"Nav_navContainer_title-hover__1AnCW",navContainer_cart:"Nav_navContainer_cart__3CblE",cart_title:"Nav_cart_title__1fvQD",cart_productCount:"Nav_cart_productCount__2npkQ",cart_icon:"Nav_cart_icon__1VwEe"}},function(e,t,a){e.exports={cartItemsList:"CartItem_cartItemsList__16PyR",itemSpace_itemName:"CartItem_itemSpace_itemName__1Pgoa",cartItemsList_itemSpace:"CartItem_cartItemsList_itemSpace__13wrE",itemSpace_amountSpace:"CartItem_itemSpace_amountSpace__3sNRB",amount_buttonsSpace:"CartItem_amount_buttonsSpace__3z-UE"}},function(e,t,a){e.exports={sentMessage:"Cart_sentMessage__KRvTi",buttonSpace:"Cart_buttonSpace__3GehT",cartInteractiveSpace:"Cart_cartInteractiveSpace__5U-RK",cartInteractiveSpace_price:"Cart_cartInteractiveSpace_price__1SF8H",cartInteractiveSpace_buttonSpace:"Cart_cartInteractiveSpace_buttonSpace__3yYEy"}},,,function(e,t,a){e.exports={defaultButton:"Button_defaultButton__1Y8d-","defaultButton-cart":"Button_defaultButton-cart__3x9g1","defaultButton-unavailable":"Button_defaultButton-unavailable__1rS40"}},,,function(e,t,a){e.exports={headerContainer_photoContainer:"Header_headerContainer_photoContainer__282kR",photoContainer_titleSpace:"Header_photoContainer_titleSpace__2oQRr",titleSpace_title:"Header_titleSpace_title__2wZe_",titleSpace_desc:"Header_titleSpace_desc__scSv_"}},,,function(e,t,a){e.exports={priceContainer:"StoreItemForm_priceContainer__2bCSJ",priceContainer_price:"StoreItemForm_priceContainer_price__N5_0P",priceContainer_quantity:"StoreItemForm_priceContainer_quantity__1OezU"}},,function(e,t,a){e.exports={shopSpace:"StoreContent_shopSpace__3O6Pc",shopSpace_itemSpace:"StoreContent_shopSpace_itemSpace__3kzp6"}},function(e,t,a){e.exports={backdrop:"Modal_backdrop__1qKBz",modal:"Modal_modal__3Dgmi"}},function(e,t,a){e.exports={card:"Card_card__2A-AS"}},,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(17),i=a.n(r),s=(a(31),a(3)),o=a(9),l=a.n(o),u=a(15),d=a(6),p=a.n(d),_=a(0),m=function(e){var t=Object(c.useState)(!1),a=Object(s.a)(t,2),n=a[0],r=a[1],i=Object(c.useRef)(""),o=function(t){l(t),e.onFilteredType(t.target.innerText)},l=function(e){e.target.classList.contains(p.a.selected)||(document.querySelectorAll(".".concat(p.a.list_listTag)).forEach((function(e){return e.classList.remove(p.a.selected)})),e.target.classList.add(p.a.selected))};return Object(_.jsxs)("section",{className:p.a.filterSection,children:[Object(_.jsx)("button",{className:" hamburger hamburger--spin ".concat(n&&"is-active"," ").concat(p.a.filterSection_burgerStyle),onClick:function(){r(!n)},type:"button",children:Object(_.jsx)("span",{className:"hamburger-box",children:Object(_.jsx)("span",{className:"hamburger-inner"})})}),n&&Object(_.jsxs)("div",{className:p.a.filterSection_filtersSpace,children:[Object(_.jsx)("h2",{className:p.a.filtersSpace_searchTitle,children:"Search"}),Object(_.jsx)("input",{className:p.a.filtersSpace_filterInput,ref:i,type:"text",onChange:function(){e.onFilteredLetters(i.current.value)}}),Object(_.jsx)("h3",{className:p.a.filtersSpace_categoriesTitle,children:"Categories"}),Object(_.jsxs)("ul",{className:p.a.filtersSpace_list,children:[Object(_.jsx)("li",{className:"".concat(p.a.list_listTag," ").concat(p.a.selected),onClick:o,children:"All"}),Object(_.jsx)("li",{className:"".concat(p.a.list_listTag),onClick:o,children:"Fruits"}),Object(_.jsx)("li",{className:"".concat(p.a.list_listTag),onClick:o,children:"Vegetables"})]})]})]})},j=(a(34),a(24)),b=a.n(j),h=n.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),S=a(26),O=a.n(S),f=function(e){return Object(_.jsx)("div",{className:O.a.card,children:e.children})},x=a(8),v=a.n(x),C=a(22),N=a.n(C),y=function(e){var t=Object(c.useRef)(1),a=e.price.toFixed(2)+"z\u0142";return Object(_.jsxs)("div",{className:N.a.priceContainer,children:[Object(_.jsx)("p",{className:N.a.priceContainer_price,children:a}),Object(_.jsx)("input",{ref:t,type:"number",onChange:function(){e.itemsQuantity(t.current.value)},min:"1",max:"5",defaultValue:"1",className:N.a.priceContainer_quantity})]})},g=a(16),I=a.n(g),k=function(e){var t=e.closeClass;return Object(_.jsx)("button",{type:e.type,className:"".concat(I.a.defaultButton," ").concat(I.a["defaultButton-cart"]," ").concat(t&&I.a["defaultButton-unavailable"]),disabled:e.disabled,onClick:e.onClick,children:e.children})},B=function(e){return Object(_.jsx)("button",{type:e.type,className:"".concat(I.a.defaultButton," ").concat(e.closeClass&&I.a.closeClass),disabled:e.disabled,onClick:e.onClick,children:e.children})},F=a(2),w=function(e){var t=Object(c.useState)(1),a=Object(s.a)(t,2),n=a[0],r=a[1],i=Object(c.useContext)(h),o=e.item,l=Object(F.g)();return Object(_.jsx)(f,{children:Object(_.jsxs)("div",{className:v.a.itemSpace_itemWindow,children:[Object(_.jsxs)("div",{className:v.a.itemWindow_titleSpace,onClick:function(){l("/details/".concat(o.id))},children:[Object(_.jsx)("h1",{className:"".concat(v.a.titleSpace_title," ").concat(v.a["titleSpace_title-hover"]),children:o.name}),Object(_.jsx)("h4",{className:"".concat(v.a.titleSpace_desc," ").concat(v.a["titleSpace_desc-hover"]),children:o.summary})]}),Object(_.jsxs)("div",{className:v.a.itemWindow_buyInterface,children:[Object(_.jsxs)(B,{onClick:function(){i.addItem({id:o.id,name:o.name,amount:+n,price:o.price})},className:v.a.buyInterface_buyButton,children:[Object(_.jsx)("i",{className:"fas fa-shopping-cart".concat(" ",v.a.buyButton_icon)}),Object(_.jsx)("p",{className:v.a.buyButton_text,children:"Add to cart"})]}),Object(_.jsx)(y,{itemsQuantity:function(e){r(e)},price:o.price})]})]})})},D=a(19),A=a.n(D),E=function(){return Object(_.jsx)("section",{className:A.a.headerContainer_photoContainer,children:Object(_.jsxs)("div",{className:A.a.photoContainer_titleSpace,children:[Object(_.jsx)("h3",{className:A.a.titleSpace_title,children:"Title"}),Object(_.jsx)("p",{className:A.a.titleSpace_desc,children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium itaque sunt nisi odit sequi, quidem corporis facere cupiditate non possimus saepe beatae consectetur officiis. Culpa nesciunt suscipit velit vero quam."})]})})},H=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),i=Object(s.a)(r,2),o=i[0],d=i[1],p=Object(c.useState)(!0),j=Object(s.a)(p,2),h=j[0],S=j[1],O=Object(c.useState)(null),f=Object(s.a)(O,2),x=f[0],v=f[1],C=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,fetch("https://shop-items-aa240-default-rtdb.europe-west1.firebasedatabase.app/store.json");case 4:return t=e.sent,e.next=7,t.json();case 7:if(a=e.sent,c=[],t.ok){e.next=11;break}throw new Error("Something went wrong");case 11:for(r in a)c.push({key:r,id:r,name:a[r].name,summary:a[r].summary,price:a[r].price,type:a[r].type});n(c),d(c),S(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),S(!1),v(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){C()}),[]);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(E,{}),Object(_.jsxs)("div",{className:b.a.shopSpace,children:[x&&Object(_.jsx)("div",{children:x}),h&&!x&&Object(_.jsx)("div",{children:"Loading..."}),!h&&!x&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(m,{onFilteredLetters:function(e){d(a.filter((function(t){return t.name.toLowerCase().match(e)})))},onFilteredType:function(e){"All"===e?d(a):(e=e.substring(0,e.length-1),d(a.filter((function(t){return t.type.match(e.toLowerCase())}))))}}),Object(_.jsx)("section",{className:b.a.shopSpace_itemSpace,children:o.map((function(e){return Object(_.jsx)(w,{item:e},e.id)}))})]})]})]})},L=a(25),P=a.n(L),M=function(e){return Object(_.jsx)("div",{className:P.a.backdrop,onClick:e.onHideCart})},V=function(e){return Object(_.jsx)("div",{className:P.a.modal,children:e.children})},T=document.getElementById("shopCartModal"),W=function(e){return Object(_.jsxs)(n.a.Fragment,{children:[Object(r.createPortal)(Object(_.jsx)(M,{onHideCart:e.onHideCart}),T),Object(r.createPortal)(Object(_.jsx)(V,{children:e.children}),T)]})},R=a(12),q=a.n(R),z=function(){var e=Object(c.useContext)(h);return Object(_.jsx)("div",{className:q.a.cartItemsList,children:e.items.map((function(t){return Object(_.jsxs)("div",{className:q.a.cartItemsList_itemSpace,children:[Object(_.jsx)("h2",{className:q.a.itemSpace_itemName,children:t.name}),Object(_.jsxs)("div",{className:q.a.itemSpace_amountSpace,children:[Object(_.jsxs)("h4",{className:q.a.amountSpace_amount,children:["Amount: ",t.amount]}),Object(_.jsxs)("div",{className:q.a.amount_buttonsSpace,children:[Object(_.jsx)("button",{onClick:function(){e.removeItem({itemId:t.id,amount:t.amount})},children:"-"}),Object(_.jsx)("button",{onClick:function(){e.addItem({id:t.id,amount:1,price:t.price})},children:"+"})]})]})]},t.id)}))})},Q=a(4),J=a.n(Q),U=function(e){var t=Object(c.useState)(""),a=Object(s.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(!1),o=Object(s.a)(i,2),l=o[0],u=o[1],d=e(n);return{enteredValue:n,isValid:d,hasError:l&&!d,changeHandler:function(e){r(e.target.value)},blurHandler:function(){u(!0)},reset:function(){u(!1),r("")}}},G=function(e){return""!==e.trim()},K=function(e){var t=U(G),a=t.enteredValue,c=t.hasError,n=t.isValid,r=t.changeHandler,i=t.blurHandler,s=t.reset,o=U(G),l=o.enteredValue,u=o.hasError,d=o.isValid,p=o.changeHandler,m=o.blurHandler,j=o.reset,b=U(G),h=b.enteredValue,S=b.hasError,O=b.isValid,f=b.changeHandler,x=b.blurHandler,v=b.reset,C=U(G),N=C.enteredValue,y=C.hasError,g=C.isValid,I=C.changeHandler,B=C.blurHandler,F=C.reset,w=!1;n&&d&&O&&g&&(w=!0);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:J.a.titleSpace,children:[Object(_.jsx)("h1",{className:J.a.titleSpace_title,children:"Order"}),Object(_.jsx)("p",{className:J.a.titleSpace_desc,children:"Please fill in the blank spots to finish your order."})]}),Object(_.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n||d||O||g||(w=!1),e.onSendOrder({enteredName:a,enteredStreet:l,enteredAddress:h,enteredCity:N}),s(),j(),v(),F()},className:J.a.orderForm,children:[Object(_.jsxs)("div",{className:J.a.inputSpace,children:[Object(_.jsx)("label",{htmlFor:"name",className:J.a.inputSpace_title,children:"Name"}),Object(_.jsx)("input",{type:"text",id:"name",className:"".concat(J.a.inputSpace_orderInput," ").concat(c?J.a.inputSpace_errorInput:""," "),value:a,onChange:r,onBlur:i}),c&&Object(_.jsx)("p",{className:J.a.inputSpace_errorMessage,children:"Error"})]}),Object(_.jsxs)("div",{className:J.a.inputSpace,children:[Object(_.jsx)("label",{htmlFor:"street",className:J.a.inputSpace_title,children:"Street"}),Object(_.jsx)("input",{type:"text",id:"street",className:"".concat(J.a.inputSpace_orderInput," ").concat(u?J.a.inputSpace_errorInput:""),value:l,onChange:p,onBlur:m}),u&&Object(_.jsx)("p",{className:J.a.inputSpace_errorMessage,children:"Error"})]}),Object(_.jsxs)("div",{className:J.a.inputSpace,children:[Object(_.jsx)("label",{htmlFor:"address",className:J.a.inputSpace_title,children:"Address"}),Object(_.jsx)("input",{type:"text",id:"address",className:"".concat(J.a.inputSpace_orderInput," ").concat(S?J.a.inputSpace_errorInput:""),value:h,onChange:f,onBlur:x}),S&&Object(_.jsx)("p",{className:J.a.inputSpace_errorMessage,children:"Error"})]}),Object(_.jsxs)("div",{className:J.a.inputSpace,children:[Object(_.jsx)("label",{htmlFor:"city",className:J.a.inputSpace_title,children:"City"}),Object(_.jsx)("input",{type:"text",id:"city",className:"".concat(J.a.inputSpace_orderInput," ").concat(y?J.a.inputSpace_errorInput:""),value:N,onChange:I,onBlur:B}),y&&Object(_.jsx)("p",{className:J.a.inputSpace_errorMessage,children:"Error"})]}),Object(_.jsxs)("div",{className:J.a.buttonSpace,children:[Object(_.jsx)(k,{type:"button",className:"".concat(J.a.defaultButton),onClick:function(){return e.onHideForm()},closeClass:!0,children:"Close"}),Object(_.jsx)(k,{type:"submit",className:"".concat(w?J.a.availableButton:J.a.unavailableButton),disabled:!w,children:"Accept"})]})]})]})},Y=a(13),X=a.n(Y),Z=function(e){var t=Object(c.useState)(!1),a=Object(s.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(!1),o=Object(s.a)(i,2),d=o[0],p=o[1],m=Object(c.useState)(!1),j=Object(s.a)(m,2),b=j[0],S=j[1],O=Object(c.useState)(null),f=Object(s.a)(O,2),x=f[0],v=f[1],C=Object(c.useContext)(h),N=C.totalAmount.toFixed(2)+"z\u0142",y=function(e){r(e)},g=function(){e.onHideCart(),y(!1)},I=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!1),p(!0),e.next=5,fetch("https://shop-items-aa240-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:C.items})});case 5:if(e.sent.ok){e.next=8;break}throw new Error("Something went wrong");case 8:p(!1),S(!0),C.clearCart(),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),p(!1),S(!0),v(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)(W,{className:X.a.modal,onHideCart:g,children:[x&&Object(_.jsx)("p",{children:x}),b&&!x&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h4",{className:X.a.sentMessage,children:"Successfully sent."}),Object(_.jsx)("div",{className:X.a.buttonSpace,children:Object(_.jsx)(k,{onClick:g,closeClass:!0,children:"Close"})})]}),d&&Object(_.jsx)("p",{children:"Sending..."}),!d&&!b&&n&&Object(_.jsx)(K,{onSendOrder:I,onHideForm:g}),!n&&Object(_.jsx)(z,{}),!d&&!b&&!n&&Object(_.jsxs)("div",{className:X.a.cartInteractiveSpace,children:[Object(_.jsx)("h2",{className:X.a.cartInteractiveSpace_price,children:N}),Object(_.jsxs)("div",{className:X.a.cartInteractiveSpace_buttonSpace,children:[Object(_.jsx)(k,{onClick:g,closeClass:!0,children:"Close"}),Object(_.jsx)(k,{onClick:function(){return y(!0)},disabled:C.items.length<1,children:"Order"})]})]})]})},$=a(21),ee=a(20),te={items:[],totalAmount:0},ae=function(e,t){if("ADD"===t.type){var a,c=e.totalAmount+t.item.amount*t.item.price,n=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[n];return r?(a=Object(ee.a)(e.items))[n]=Object($.a)(Object($.a)({},a[n]),{},{amount:r.amount+t.item.amount}):a=[].concat(Object(ee.a)(e.items),[t.item]),{items:a,totalAmount:c}}if("REMOVE"===t.type){var i,s,o=e.items.findIndex((function(e){return e.id===t.idAmount.itemId})),l=e.items[o];return t.idAmount.amount>1?(s=Object(ee.a)(e.items),i=e.totalAmount-1*l.price,s[o]=Object($.a)(Object($.a)({},s[o]),{},{amount:l.amount-1})):(s=(s=Object(ee.a)(e.items)).filter((function(e){return e.id!==l.id})),i=e.totalAmount-1*l.price,i+=0),{items:s,totalAmount:+i}}return t.type,te},ce=function(e){var t=Object(c.useReducer)(ae,te),a=Object(s.a)(t,2),n=a[0],r=a[1],i={items:n.items,totalAmount:n.totalAmount,addItem:function(e){r({type:"ADD",item:e})},removeItem:function(e){r({type:"REMOVE",idAmount:e})},clearCart:function(){r({type:"CLEAR"})}};return Object(_.jsx)(h.Provider,{value:i,children:e.children})},ne=a(10),re=a(7),ie=a.n(re),se=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(1),i=Object(s.a)(r,2),o=i[0],d=i[1],p=Object(c.useContext)(h),m=Object(F.h)(),j=Object(c.useCallback)(Object(u.a)(l.a.mark((function e(){var t,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://shop-items-aa240-default-rtdb.europe-west1.firebasedatabase.app/store.json");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,c=[],t.ok){e.next=9;break}throw new Error("Something went wrong");case 9:for(r in a)c.push({key:r,id:r,name:a[r].name,summary:a[r].summary,price:a[r].price,type:a[r].type});i=c.find((function(e){return e.id===m.itemId})),n(i);case 12:case"end":return e.stop()}}),e)}))),[m.itemId]);Object(c.useEffect)((function(){j()}),[j]);return a?Object(_.jsxs)("div",{className:ie.a.productDetailsSpace,children:[Object(_.jsxs)("section",{className:ie.a.navigationBar,children:[Object(_.jsx)("span",{children:">"})," ",Object(_.jsx)(ne.b,{to:"/",className:ie.a.navigationBar_back,children:Object(_.jsx)("span",{children:"Back"})})]}),Object(_.jsxs)("section",{className:ie.a.itemDetailsSpace,children:[Object(_.jsx)("img",{className:ie.a.itemDetailsSpace_image,src:"#",alt:"some_photo"}),Object(_.jsxs)("div",{className:ie.a.itemDetailsSpace_informationSpace,children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{className:ie.a.informationSpace_title,children:a.name}),Object(_.jsxs)("p",{className:ie.a.informationSpace_type,children:[Object(_.jsx)("span",{children:"Type:"})," ",Object(_.jsx)("span",{children:a.type})]}),Object(_.jsx)("p",{className:ie.a.informationSpace_des,children:a.summary})]}),Object(_.jsxs)("div",{className:ie.a.itemWindow_buyInterface,children:[Object(_.jsxs)(k,{onClick:function(){p.addItem({id:a.id,name:a.name,amount:+o,price:a.price})},children:[Object(_.jsx)("i",{className:"fas fa-shopping-cart".concat(" ",ie.a.buyButton_icon)}),Object(_.jsx)("p",{className:ie.a.buyButton_text,children:"Add to cart"})]}),Object(_.jsx)(y,{itemsQuantity:function(e){d(e)},price:a.price})]})]})]})]}):Object(_.jsx)("p",{children:"Not found"})},oe=a(11),le=a.n(oe),ue=function(e){var t=Object(c.useContext)(h),a=0;return t.items.map((function(e){return a+=e.amount})),Object(_.jsxs)("nav",{className:le.a.headerContainer_navContainer,children:[Object(_.jsx)(ne.b,{to:"/",children:Object(_.jsx)("h1",{className:"".concat(le.a.navContainer_title," ").concat(le.a["navContainer_title-hover"]),children:"OnlineShop"})}),Object(_.jsxs)("button",{className:le.a.navContainer_cart,onClick:e.onShowCart,children:[Object(_.jsx)("i",{className:"fas fa-shopping-cart ".concat(le.a.cart_icon)}),Object(_.jsx)("span",{className:le.a.cart_title,children:"Cart"}),Object(_.jsx)("span",{className:le.a.cart_productCount,children:a})]})]})};var de=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(ce,{children:[a&&Object(_.jsx)(Z,{onHideCart:function(){n(!1)}}),Object(_.jsx)(ue,{onShowCart:function(){n(!0)}}),Object(_.jsxs)(F.d,{children:[Object(_.jsx)(F.b,{path:"/",element:Object(_.jsx)(H,{})}),Object(_.jsx)(F.b,{path:"/details/:itemId",element:Object(_.jsx)(se,{})}),Object(_.jsx)(F.b,{path:"/*",element:Object(_.jsx)(F.a,{to:"/",replace:!0})})]})]})})};i.a.render(Object(_.jsx)(ne.a,{basename:"/food-delivery",children:Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(de,{})})}),document.getElementById("root"))}],[[35,1,2]]]);
//# sourceMappingURL=main.f6ffb354.chunk.js.map