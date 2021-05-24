(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{241:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=241},242:function(e,t){},405:function(e,t){},406:function(e,t){},407:function(e,t){},408:function(e,t){},409:function(e,t){},410:function(e,t){},589:function(e,t,n){"use strict";n.r(t);var i,c,r=n(0),a=n(15),d=n.n(a),o=n(28),s=n(20),l=n(186),j=n(47),p=n(73),u=n(221),b=n.n(u),m=n(305),x=n(684),h=n(591),g=n(37),O=n(38),f=O.a.div(i||(i=Object(g.a)(["\n    display: flex;\n    justify-content: space-between;\n    font-family: Arial, Helvetica, sans-serif;\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 20px;\n\n    div {\n        flex: 1;\n    }\n\n    .information, \n    .buttons {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    img {\n        max-width: 80px;\n        object-fit: cover;\n        margin-left: 40px;\n    }\n"]))),v=n(3),w=function(e){var t=e.item,n=e.addToCart,i=e.removeFromCart;return Object(v.jsxs)(f,{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:t.title}),Object(v.jsxs)("div",{className:"information",children:[Object(v.jsxs)("p",{children:["Price: $",t.price]}),Object(v.jsxs)("p",{children:["Total: $",(t.amount*t.price).toFixed(2)]})]}),Object(v.jsxs)("div",{className:"buttons",children:[Object(v.jsx)(h.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return i(t.id)},children:"-"}),Object(v.jsx)("p",{children:t.amount}),Object(v.jsx)(h.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return n(t)},children:"+"})]})]}),Object(v.jsx)("img",{src:t.img,alt:t.title})]})},y=Object(r.createContext)();function N(e){var t=e.children,n=Object(r.useState)([]),i=Object(p.a)(n,2),c=i[0],a=i[1];return Object(v.jsx)(y.Provider,{value:{items:c,setItems:a},children:t})}var C,k=O.a.aside(c||(c=Object(g.a)(["\n    font-family: Arial, Helvetica, sans-serif;\n    width: 500px;\n    padding: 20px;\n\n.checkout{\n    width: 100%;\n}\n"]))),A=function(e){var t=e.cartItems,n=e.addToCart,i=e.removeFromCart,c=Object(r.useContext)(y),a=(c.items,c.setItems),d=Object(s.g)();return Object(v.jsxs)(k,{children:[Object(v.jsx)("h2",{children:"Suas compras"}),0===t.length?Object(v.jsx)("p",{children:"Sem items no carrinho"}):null,t.map((function(e){return Object(v.jsx)(w,{item:e,addToCart:n,removeFromCart:i},e.id)})),Object(v.jsx)(h.a,{className:"checkout",onClick:function(){return function(e){d.push("/checkout"),a(e)}(t)},children:"Finalizar"})]})},S=(n(404),O.a.div(C||(C=Object(g.a)(["\n    display: flex;\n    justify-content: center;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 30px;\n    height: 200px;\n    color: white;\n    font-variant: petite-caps;\n\n    div {\n        height: 150px;\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n    }\n\n    .logo-container {\n        width: 60%;\n        padding: 10px;\n        display: flex;\n        height: 200px;\n        /* padding: 20px; */\n        background: linear-gradient(2deg, black, #da3232);\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        box-shadow: 0px 5px 5px 1px black\n    }\n\n    .logo-img {\n        z-index: 10\n    }\n    .title {\n        background: #8e46467a\n    }\n"])))),T=n(313),z=n.n(T);var F,I=function(){return Object(v.jsx)(S,{children:Object(v.jsxs)("div",{className:"logo-container",children:[Object(v.jsx)("div",{className:"logo-img",children:Object(v.jsx)(z.a,{image:"generated.jpg",imageHeight:"150",imageWidth:"150",roundedColor:"darkgoldenrod",roundedSize:"8",borderRadius:"100"})}),Object(v.jsx)("div",{className:"title",style:{margin:"-5px"},children:" L&A Com\xe9rcio de J\xf3ias "})]})})},D=O.a.div(F||(F=Object(g.a)(["\n    /* display: flex; */\n    justify-content: space-between;\n    font-family: Arial, Helvetica, sans-serif;\n    border-bottom: 1px solid lightblue;\n    padding-top: 20px;\n\n    div {\n        height: 40px;\n        background-color: gray;\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n        color: white;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n"])));var P,E,H,X,R,B=function(){return Object(v.jsxs)(D,{children:[Object(v.jsx)("div",{children:"Informa\xe7\xf5es da loja..."}),Object(v.jsx)("div",{children:"Contato: XXX-XXX"})]})},J=n(359),L=O.a.div(P||(P=Object(g.a)(["\n   margin: 40px;\n"]))),$=Object(O.a)(J.a)(E||(E=Object(g.a)(["\n    position: fixed !important;\n    z-index: 100;\n    right: 20px;\n    top: 20px;\n    /* background-color: white;\n    border: 1px solid black;\n    &:hover {\n        background-color: white;\n    } */\n"]))),V=n(653),U=n(652),_=n(316),q=n.n(_),M=n(655),Q=n(224),W=n(314),G=(n(437),n(438),O.a.div(H||(H=Object(g.a)(["\n\n.p-button-secondary {\n    background-color: #309696;\n}\n.dataview-demo .item-container {\n    padding: .4rem; \n    text-align: center;\n}\n\n.dataview-demo .p-dropdown {\n    width: 14rem;\n    font-weight: normal;\n}\n\n.dataview-demo .product-name {\n    /* font-size: 1.5rem; */\n    font-weight: 700;\n}\n\n.dataview-demo .product-description {\n    margin: 0 0 1rem 0;\n}\n\n.dataview-demo .product-category-icon {\n    vertical-align: middle;\n    margin-right: .5rem;\n}\n\n.dataview-demo .product-category {\n    font-weight: 600;\n    vertical-align: middle;\n}\n\n.dataview-demo .product-list-item {\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n    width: 100%;\n}\n\n.dataview-demo .product-list-item img {\n    width: 150px;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    margin-right: 2rem;\n}\n\n.dataview-demo .product-list-item .product-list-detail {\n    flex: 1 1 0;\n}\n\n.dataview-demo .product-list-item .p-rating {\n    margin: 0 0 .5rem 0;\n}\n\n.dataview-demo .product-list-item .product-price {\n    /* font-size: 1.5rem; */\n    font-weight: 600;\n    margin-bottom: .5rem;\n    align-self: flex-end;\n}\n\n.dataview-demo .product-list-item .product-list-action {\n    display: flex;\n    flex-direction: column;\n}\n\n.dataview-demo .product-list-item .p-button {\n    margin-bottom: .5rem;\n}\n\n.dataview-demo .product-grid-item {\n    height: 100%;\n    /* margin: .5em; */\n    /* border: 1px solid #dee2e6; */\n    /* padding: 1rem; */\n    padding: .4em;\n}\n\n.dataview-demo .product-grid-item .card {\n    height: 100%;\n    /* margin: .5em; */\n    border: 1px solid #dee2e6;\n    padding: 1rem;\n}\n\n.dataview-demo .product-grid-item .product-grid-item-top,\n    .dataview-demo .product-grid-item .product-grid-item-bottom {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n/* .dataview-demo .product-grid-item .img-container {\n    width: 75%;\n    height: 80%;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    margin: 2rem 0;\n} */\n\n.dataview-demo .product-grid-item img {\n    width: 75%;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    margin: 2rem 0;\n}\n\n.dataview-demo .product-grid-item .product-grid-item-content {\n    text-align: center;\n}\n\n.dataview-demo .product-grid-item .product-price {\n    font-size: 1.5rem;\n    font-weight: 600;\n}\n\n\n.dataview-demo .carousel .product-item .product-item-content {\n    /* border: 1px solid var(--surface-d); */\n    border-radius: 3px;\n    margin: .3rem;\n    text-align: center;\n    padding: 2rem 0;\n}\n\n.dataview-demo .carousel .product-item .product-image {\n    width: 50%;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.p-dataview-layout-options .p-highlight{\n    background: #963030;\n    :hover{\n        background: #BD3C3C;\n    }\n}\n\n@media screen and (max-width: 576px) {\n    .dataview-demo .product-list-item {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .dataview-demo .product-list-item img {\n        width: 75%;\n        margin: 2rem 0;\n    }\n\n    .dataview-demo .product-list-item .product-list-detail {\n        text-align: center;\n    }\n\n    .dataview-demo .product-list-item .product-price {\n        align-self: center;\n    }\n\n    .dataview-demo .product-list-item .product-list-action {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .dataview-demo .product-list-item .product-list-action {\n        margin-top: 2rem;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n        width: 100%;\n    }\n}\n"])))),K=(O.a.div(X||(X=Object(g.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    width: 100%;\n    border: 1px solid lightblue;\n    border-radius: 20px;\n    height: 100%;\n\n    button {\n        border-radius: 0 0 20px 20px;\n    }\n\n    img {\n        /* height: 250px;\n        object-fit: cover; */\n        width: auto;\n        max-height: 200px;\n        /* max-width: 200px; */\n        border-radius: 20px 20px 0 0;\n    }\n\n    div {\n        font-family: Arial, Helvetica, sans-serif;\n        padding: 1rem;\n        height: 100%;\n    }\n\n    /* .content {\n        height: 20%;\n    } */\n"]))),O.a.div(R||(R=Object(g.a)(["\n\n.item{\n    border: 1px solid lightblue;\n    border-radius: 20px;\n    padding: 0px;\n}\n\n.images {\n    text-align: center;\n    /* height: 100px; */\n    padding-bottom: 120%;\n    position: relative;\n    /* background-color: red; */\n}\n\n.img-container {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n\nimg {\n    width: 100%;\n    height: 100%;\n    border-radius: 20px 20px 0 0;\n}\n\n.text {\n    padding: 5%;\n    font-size: 14px;\n}\n\n.title {\n    font-weight: 600;\n    margin: 0px;\n}\n\n.description {\n    font-style: italic;\n    margin: 0px;\n}\n\n.price {\n    margin: 0px;\n}\n\nbutton {\n    border-radius: 0px 0px 20px 20px;\n    width: 100%;\n    :hover {\n        background-color: #30969638\n    }\n}\n"])))),Y=function(e){var t=e.data,n=e.handleAddToCart;return Object(v.jsx)(K,{children:Object(v.jsxs)("div",{className:"item",children:[Object(v.jsx)("div",{className:"images",children:Object(v.jsx)("div",{className:"img-container",children:Object(v.jsx)("picture",{children:Object(v.jsx)("img",{src:t.img})})})}),Object(v.jsxs)("div",{className:"text",children:[Object(v.jsx)("p",{className:"title",children:t.title}),Object(v.jsx)("p",{className:"description",children:t.description}),Object(v.jsxs)("p",{className:"price",children:["R$ ",t.price]})]}),Object(v.jsx)(h.a,{onClick:function(){return n(t)},children:"Comprar"})]})})},Z=(n(440),function(e){var t=e.data,n=e.handleAddToCart,i=Object(r.useState)(t),c=Object(p.a)(i,2),a=c[0],d=(c[1],Object(r.useState)("grid")),o=Object(p.a)(d,2),s=o[0],l=o[1],j=Object(r.useState)(null),u=Object(p.a)(j,2),b=(u[0],u[1],Object(r.useState)(null)),m=Object(p.a)(b,2),x=m[0],h=(m[1],Object(r.useState)(null)),g=Object(p.a)(h,2),O=g[0],f=(g[1],Object(v.jsxs)("div",{className:"p-grid p-nogutter",children:[Object(v.jsx)("div",{className:"p-col-6",style:{textAlign:"left"}}),Object(v.jsx)("div",{className:"p-col-6",style:{textAlign:"right"},children:Object(v.jsx)(Q.DataViewLayoutOptions,{layout:s,onChange:function(e){return l(e.value)}})})]}));return Object(v.jsx)(G,{children:Object(v.jsx)("div",{className:"dataview-demo",children:Object(v.jsx)("div",{className:"card",children:Object(v.jsx)(Q.DataView,{value:a,layout:s,header:f,itemTemplate:function(e,t){if(e)return"list"===t?function(e){return Object(v.jsx)("div",{className:"p-col-12",children:Object(v.jsxs)("div",{className:"product-list-item",children:[Object(v.jsx)("img",{src:e.img,onError:function(e){return e.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"},alt:e.name}),Object(v.jsxs)("div",{className:"product-list-detail",children:[Object(v.jsx)("div",{className:"product-name",children:e.title}),Object(v.jsx)("div",{className:"product-description",children:e.description})]}),Object(v.jsxs)("div",{className:"product-list-action",children:[Object(v.jsxs)("span",{className:"product-price",children:["R$",e.price]}),Object(v.jsx)(W.Button,{icon:"pi pi-shopping-cart",className:"p-button-secondary",label:"Comprar",disabled:!1,onClick:function(){return n(e)}})]})]})})}(e):"grid"===t?function(e){return Object(v.jsx)("div",{className:"p-col-12 p-sm-6 p-md-4 p-lg-3 p-xl-2 item-container",children:Object(v.jsx)(Y,{data:e,handleAddToCart:n})})}(e):void 0},paginator:!0,rows:9,sortOrder:x,sortField:O})})})})}),ee=(n(443),n(444),n(445),n(446),function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/products");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());var te=function(){var e,t=Object(r.useState)(!1),n=Object(p.a)(t,2),i=n[0],c=n[1],a=Object(r.useState)([]),d=Object(p.a)(a,2),o=d[0],s=d[1],u=Object(x.a)("products",ee),b=u.data,m=u.isLoading,h=u.error,g=function(e){s((function(t){return t.find((function(t){return t.id==e.id}))?t.map((function(t){return t.id===e.id?Object(j.a)(Object(j.a)({},t),{},{amount:t.amount+1}):t})):[].concat(Object(l.a)(t),[Object(j.a)(Object(j.a)({},e),{},{amount:1})])}))};return m?Object(v.jsx)(U.a,{}):h?Object(v.jsx)("div",{children:"Something went wrong..."}):Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(I,{}),Object(v.jsxs)(L,{children:[Object(v.jsx)(V.a,{anchor:"right",open:i,onClose:function(){return c(!1)},children:Object(v.jsx)(A,{cartItems:o,addToCart:g,removeFromCart:function(e){s((function(t){return t.reduce((function(t,n){return n.id==e?1==n.amount?t:[].concat(Object(l.a)(t),[Object(j.a)(Object(j.a)({},n),{},{amount:n.amount-1})]):[].concat(Object(l.a)(t),[n])}),[])}))}})}),Object(v.jsx)($,{onClick:function(){return c(!0)},children:Object(v.jsx)(M.a,{badgeContent:(e=o,e.reduce((function(e,t){return e+t.amount}),0)),color:"error",children:Object(v.jsx)(q.a,{})})}),Object(v.jsx)(Z,{data:b,handleAddToCart:g}),Object(v.jsx)(B,{})]})]})},ne=n(676),ie=n(677),ce=n(669),re=n(670),ae=n(671),de=n(679),oe=n(678),se=n(685),le=n(673),je=n(680),pe=n(683),ue=n(675),be=n(674),me=n(342),xe=n(317),he=n.n(xe),ge=function(e){return Object(v.jsx)(ne.a,Object(j.a)(Object(j.a)({},e),{},{children:Object(v.jsxs)(ie.a,{rowClick:"edit",children:[Object(v.jsx)(ce.a,{source:"id"}),Object(v.jsx)(ce.a,{source:"title"}),Object(v.jsx)(ce.a,{source:"description"}),Object(v.jsx)(re.a,{source:"price"}),Object(v.jsx)(ae.a,{source:"img",title:"Image"})]})}))};function Oe(e){return e&&"string"!==typeof e?e:{url:e}}var fe=function(e){return Object(v.jsx)(de.a,Object(j.a)(Object(j.a)({},e),{},{children:Object(v.jsxs)(oe.a,{children:[Object(v.jsx)(se.a,{disabled:!0,source:"id"}),Object(v.jsx)(se.a,{source:"title"}),Object(v.jsx)(se.a,{source:"description"}),Object(v.jsx)(le.a,{source:"price"}),Object(v.jsx)(je.a,{format:Oe,source:"img",label:"Billede",accept:"image/*",mulitple:!1,children:Object(v.jsx)(ae.a,{source:"url",title:"title"})})]})}))},ve=function(e){return Object(v.jsx)(pe.a,Object(j.a)(Object(j.a)({},e),{},{children:Object(v.jsxs)(oe.a,{children:[Object(v.jsx)(se.a,{disabled:!0,source:"id"}),Object(v.jsx)(se.a,{source:"title"}),Object(v.jsx)(se.a,{source:"description"}),Object(v.jsx)(le.a,{source:"price"}),Object(v.jsx)(je.a,{source:"img",label:"Related pictures",accept:"image/*",children:Object(v.jsx)(ae.a,{source:"src",title:"title"})})]})}))},we=Object(me.a)("http://localhost:3000"),ye=Object(j.a)(Object(j.a)({},we),{},{create:function(e,t){if("products"!==e||!t.data.img)return we.create(e,t);var n=new FormData;n.append("file",t.data.img.rawFile),n.append("data",JSON.stringify(t));return he.a.post("http://localhost:3000/products",n,{headers:{Accept:"application/json","content-type":"multipart/form-data"}})}});function Ne(){return Object(v.jsx)(ue.a,{dataProvider:ye,children:Object(v.jsx)(be.a,{name:"products",list:ge,edit:fe,create:ve})})}var Ce=function(){var e=Object(r.useContext)(y),t=(e.items,e.setItems,[{amount:1,description:"Descri\xe7\xe3o7",id:"41",img:"http://localhost:9000/my-bucket/joia.jpg",price:199,title:"Produto7"},{amount:2,description:"Descri\xe7\xe3o4",id:"43",img:"http://localhost:9000/my-bucket/joia.jpg",price:199,title:"Produto3"}]);return Object(v.jsxs)("div",{children:[Object(v.jsx)("header",{style:{height:"50px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(v.jsx)("p",{style:{fontSize:"larger"},children:"Checkout"})}),Object(v.jsx)("div",{className:"main-content",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"p-grid",children:[Object(v.jsx)("div",{className:"p-col-12",children:Object(v.jsx)("div",{className:"row-checkout-box",children:Object(v.jsxs)("table",{style:{width:"100%"},children:[Object(v.jsx)("thead",{style:{backgroundColor:"aliceblue"},children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{className:"p-col-2",children:"Produto"}),Object(v.jsx)("th",{className:"p-col-5"}),Object(v.jsx)("th",{children:"Pre\xe7o"}),Object(v.jsx)("th",{children:"Qtde"}),Object(v.jsx)("th",{children:"Total"})]})}),Object(v.jsx)("tbody",{style:{textAlign:"center"},children:t.map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("img",{src:e.img,style:{height:"100px"}})}),Object(v.jsxs)("td",{children:[Object(v.jsx)("p",{children:e.title}),Object(v.jsx)("p",{children:e.description})]}),Object(v.jsx)("td",{children:e.price}),Object(v.jsx)("td",{children:e.amount}),Object(v.jsx)("td",{children:e.price*e.amount})]},e.id)}))})]})})}),Object(v.jsx)("div",{className:"p-col-12",style:{border:"1px solid",textAlign:"-webkit-center"},children:Object(v.jsxs)("table",{style:{width:"300px"},children:[Object(v.jsxs)("thead",{children:[Object(v.jsx)("th",{children:"Resumo"}),Object(v.jsx)("th",{children:"Valor"})]}),Object(v.jsxs)("tbody",{style:{textAlign:"center"},children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Produtos"}),Object(v.jsx)("td",{children:"1000"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Total"}),Object(v.jsx)("td",{children:"1000"})]})]})]})})]})})})]})},ke=n(681),Ae=n(315),Se=new ke.a;document.querySelector("body").style.margin="0px",d.a.render(Object(v.jsx)(Ae.a,{client:Se,children:Object(v.jsx)(o.a,{children:Object(v.jsxs)(s.d,{children:[Object(v.jsxs)(N,{children:[Object(v.jsx)(s.b,{exact:!0,path:"/",children:Object(v.jsx)(te,{})}),Object(v.jsx)(s.b,{exact:!0,path:"/checkout",children:Object(v.jsx)(Ce,{})})]}),Object(v.jsx)(s.b,{exact:!0,path:"/admin",children:Object(v.jsx)(Ne,{})})]})})}),document.getElementById("root"))}},[[589,1,2]]]);
//# sourceMappingURL=main.0bee7d39.chunk.js.map