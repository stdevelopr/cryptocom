(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{254:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=254},255:function(e,t){},419:function(e,t){},420:function(e,t){},421:function(e,t){},422:function(e,t){},423:function(e,t){},424:function(e,t){},609:function(e,t,n){"use strict";n.r(t);var i,c,a=n(0),r=n(16),o=n.n(r),d=n(30),s=n(20),l=n(199),j=n(22),p=n(58),b=n(232),u=n.n(b),x=n(319),m=n(706),h=n(611),O=n(39),g=n(40),f=(g.a.div(i||(i=Object(O.a)(["\n    display: flex;\n    justify-content: space-between;\n    font-family: Arial, Helvetica, sans-serif;\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 20px;\n\n    div {\n        flex: 1;\n    }\n\n    .information, \n    .buttons {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    img {\n        max-width: 80px;\n        object-fit: cover;\n        margin-left: 40px;\n    }\n"]))),n(4)),v=Object(a.createContext)();function w(e){var t=e.children,n=Object(a.useState)([]),i=Object(p.a)(n,2),c=i[0],r=i[1];return Object(f.jsx)(v.Provider,{value:{items:c,setItems:r},children:t})}g.a.aside(c||(c=Object(O.a)(["\n    font-family: Arial, Helvetica, sans-serif;\n    width: 500px;\n    padding: 20px;\n\n.checkout{\n    width: 100%;\n}\n"]))),n(418);var y,N=g.a.div(y||(y=Object(O.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Charmonman&display=swap');\n    display: flex;\n    justify-content: center;\n    /* font-family: Arial, Helvetica, sans-serif; */\n    font-size: 30px;\n    height: 200px;\n    color: white;\n    /* font-variant: petite-caps; */\n\n    div {\n        height: 150px;\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n    }\n\n    .logo-container {\n        /* width: 60%; */\n        padding: 10px;\n        display: flex;\n        height: 200px;\n        /* padding: 20px; */\n        /* background: linear-gradient(2deg, black, #da3232); */\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        /* box-shadow: 0px 5px 5px 1px black */\n    }\n\n    .logo-img {\n        z-index: 10\n    }\n    .title {\n        color: black;\n        font-family: 'Charmonman', cursive;\n        /* background: #8e46467a */\n    }\n"]))),k=n(231),C=n.n(k);var S,T=function(e){var t=e.title;return Object(f.jsx)(N,{children:Object(f.jsxs)("div",{className:"logo-container",children:[Object(f.jsx)("div",{className:"logo-img",children:Object(f.jsx)(C.a,{image:"generated.jpg",imageHeight:"150",imageWidth:"150",roundedColor:"darkgoldenrod",roundedSize:"8",borderRadius:"100"})}),Object(f.jsxs)("div",{className:"title",style:{margin:"-5px"},children:[" ",t," "]})]})})},A=n(78),_=n.n(A),P=g.a.div(S||(S=Object(O.a)(["\n    /* display: flex; */\n    justify-content: space-between;\n    font-family: Arial, Helvetica, sans-serif;\n    /* border-bottom: 1px solid lightblue; */\n    padding-top: 20px;\n\n    div {\n        height: 40px;\n        /* background-color: gray; */\n        width: 100%;\n        margin: 0px;\n        padding: 0px;\n        color: black;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    span { \n        padding: 5px;\n    }\n"]))),E=n(327),I=n(2);var D,R,z,H,B,L=function(e){var t=e.description,n=e.contact;return Object(f.jsxs)(P,{children:[Object(f.jsx)("div",{children:t}),Object(f.jsx)("div",{children:Object(f.jsxs)(I.b.Provider,{value:{color:"green"},children:[Object(f.jsx)(E.a,{}),Object(f.jsx)("span",{children:n})]})})]})},F=n(372),M=g.a.div(D||(D=Object(O.a)(["\n   margin: 40px;\n"]))),U=(Object(g.a)(F.a)(R||(R=Object(O.a)(["\n    position: fixed !important;\n    z-index: 100;\n    right: 20px;\n    top: 20px;\n    /* background-color: white;\n    border: 1px solid black;\n    &:hover {\n        background-color: white;\n    } */\n"]))),n(673),n(672)),V=(n(329),n(675),n(235)),W=n(175),J=(n(459),n(460),g.a.div(z||(z=Object(O.a)(["\n\n.p-button-secondary {\n    background-color: #309696;\n}\n.dataview-demo .item-container {\n    padding: .4rem; \n    text-align: center;\n}\n\n.p-dataview-header {\n    background-color: white;\n}\n\n.dataview-demo .p-dropdown {\n    width: 14rem;\n    font-weight: normal;\n}\n\n.dataview-demo .product-name {\n    /* font-size: 1.5rem; */\n    font-weight: 700;\n}\n\n.dataview-demo .product-description {\n    margin: 0 0 1rem 0;\n}\n\n.dataview-demo .product-category-icon {\n    vertical-align: middle;\n    margin-right: .5rem;\n}\n\n.dataview-demo .product-category {\n    font-weight: 600;\n    vertical-align: middle;\n}\n\n.dataview-demo .product-list-item {\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n    width: 100%;\n}\n\n.dataview-demo .product-list-item img {\n    width: 150px;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    margin-right: 2rem;\n}\n\n.dataview-demo .product-list-item .product-list-detail {\n    flex: 1 1 0;\n}\n\n.dataview-demo .product-list-item .p-rating {\n    margin: 0 0 .5rem 0;\n}\n\n.dataview-demo .product-list-item .product-price {\n    /* font-size: 1.5rem; */\n    font-weight: 600;\n    margin-bottom: .5rem;\n    align-self: flex-end;\n}\n\n.dataview-demo .product-list-item .product-list-action {\n    display: flex;\n    flex-direction: column;\n}\n\n.dataview-demo .product-list-item .p-button {\n    margin-bottom: .5rem;\n}\n\n.dataview-demo .product-grid-item {\n    height: 100%;\n    /* margin: .5em; */\n    /* border: 1px solid #dee2e6; */\n    /* padding: 1rem; */\n    padding: .4em;\n}\n\n.dataview-demo .product-grid-item .card {\n    height: 100%;\n    /* margin: .5em; */\n    border: 1px solid #dee2e6;\n    padding: 1rem;\n}\n\n.dataview-demo .product-grid-item .product-grid-item-top,\n    .dataview-demo .product-grid-item .product-grid-item-bottom {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n/* .dataview-demo .product-grid-item .img-container {\n    width: 75%;\n    height: 80%;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    margin: 2rem 0;\n} */\n\n.dataview-demo .product-grid-item img {\n    width: 75%;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    margin: 2rem 0;\n}\n\n.dataview-demo .product-grid-item .product-grid-item-content {\n    text-align: center;\n}\n\n.dataview-demo .product-grid-item .product-price {\n    font-size: 1.5rem;\n    font-weight: 600;\n}\n\n\n.dataview-demo .carousel .product-item .product-item-content {\n    /* border: 1px solid var(--surface-d); */\n    border-radius: 3px;\n    margin: .3rem;\n    text-align: center;\n    padding: 2rem 0;\n}\n\n.dataview-demo .carousel .product-item .product-image {\n    width: 50%;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.p-dataview-layout-options .p-highlight{\n    background: #963030;\n    :hover{\n        background: #BD3C3C;\n    }\n}\n\n@media screen and (max-width: 576px) {\n    .dataview-demo .product-list-item {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .dataview-demo .product-list-item img {\n        width: 75%;\n        margin: 2rem 0;\n    }\n\n    .dataview-demo .product-list-item .product-list-detail {\n        text-align: center;\n    }\n\n    .dataview-demo .product-list-item .product-price {\n        align-self: center;\n    }\n\n    .dataview-demo .product-list-item .product-list-action {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .dataview-demo .product-list-item .product-list-action {\n        margin-top: 2rem;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n        width: 100%;\n    }\n}\n"])))),K=(g.a.div(H||(H=Object(O.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    width: 100%;\n    border: 1px solid lightblue;\n    border-radius: 20px;\n    height: 100%;\n\n    button {\n        border-radius: 0 0 20px 20px;\n    }\n\n    img {\n        /* height: 250px;\n        object-fit: cover; */\n        width: auto;\n        max-height: 200px;\n        /* max-width: 200px; */\n        border-radius: 20px 20px 0 0;\n    }\n\n    div {\n        font-family: Arial, Helvetica, sans-serif;\n        padding: 1rem;\n        height: 100%;\n    }\n\n    /* .content {\n        height: 20%;\n    } */\n"]))),g.a.div(B||(B=Object(O.a)(["\n\n.item{\n    border: 1px solid lightblue;\n    border-radius: 20px;\n    padding: 0px;\n}\n\n.images {\n    text-align: center;\n    /* height: 100px; */\n    padding-bottom: 120%;\n    position: relative;\n    /* background-color: red; */\n}\n\n.img-container {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n\nimg {\n    width: 100%;\n    height: 100%;\n    border-radius: 20px 20px 0 0;\n}\n\n.text {\n    padding: 5%;\n    font-size: 14px;\n}\n\n.title {\n    font-weight: 600;\n    margin: 0px;\n}\n\n.description {\n    font-style: italic;\n    margin: 0px;\n}\n\n.price {\n    margin: 0px;\n}\n\nbutton {\n    border-radius: 0px 0px 20px 20px;\n    width: 100%;\n    :hover {\n        background-color: #30969638\n    }\n}\n"])))),$=function(e){var t=e.data,n=e.handleAddToCart,i=e.viewOnly;return Object(f.jsx)(K,{children:Object(f.jsxs)("div",{className:"item",children:[Object(f.jsx)("div",{className:"images",children:Object(f.jsx)("div",{className:"img-container",children:Object(f.jsx)("picture",{children:Object(f.jsx)("img",{src:"".concat(_.a.get("storage")||"").concat(t.img)})})})}),Object(f.jsxs)("div",{className:"text",children:[Object(f.jsx)("p",{className:"title",children:t.title}),Object(f.jsx)("p",{className:"description",children:t.description}),Object(f.jsxs)("p",{className:"price",children:["R$ ",t.price]})]}),!i&&Object(f.jsx)(h.a,{onClick:function(){return n(t)},children:"Comprar"})]})})},q=(n(462),function(e){var t=e.data,n=e.handleAddToCart,i=e.viewOnly,c=Object(a.useState)(t),r=Object(p.a)(c,2),o=r[0],d=(r[1],Object(a.useState)("grid")),s=Object(p.a)(d,2),l=s[0],j=s[1],b=Object(a.useState)(null),u=Object(p.a)(b,2),x=(u[0],u[1],Object(a.useState)(null)),m=Object(p.a)(x,2),h=m[0],O=(m[1],Object(a.useState)(null)),g=Object(p.a)(O,2),v=g[0],w=(g[1],Object(f.jsxs)("div",{className:"p-grid p-nogutter",children:[Object(f.jsx)("div",{className:"p-col-6",style:{textAlign:"left"}}),Object(f.jsx)("div",{className:"p-col-6",style:{textAlign:"right"},children:Object(f.jsx)(V.DataViewLayoutOptions,{layout:l,onChange:function(e){return j(e.value)}})})]}));return Object(f.jsx)(J,{children:Object(f.jsx)("div",{className:"dataview-demo",children:Object(f.jsx)("div",{className:"card",children:Object(f.jsx)(V.DataView,{value:o,layout:l,header:w,itemTemplate:function(e,t){if(e)return"list"===t?function(e){return Object(f.jsx)("div",{className:"p-col-12",children:Object(f.jsxs)("div",{className:"product-list-item",children:[Object(f.jsx)("img",{src:"".concat(_.a.get("storage")||"").concat(e.img),onError:function(e){return e.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"},alt:e.name}),Object(f.jsxs)("div",{className:"product-list-detail",children:[Object(f.jsx)("div",{className:"product-name",children:e.title}),Object(f.jsx)("div",{className:"product-description",children:e.description})]}),!i&&Object(f.jsxs)("div",{className:"product-list-action",children:[Object(f.jsxs)("span",{className:"product-price",children:["R$",e.price]}),Object(f.jsx)(W.Button,{icon:"pi pi-shopping-cart",className:"p-button-secondary",label:"Comprar",disabled:!1,onClick:function(){return n(e)}})]})]})})}(e):"grid"===t?function(e){return Object(f.jsx)("div",{className:"p-col-12 p-sm-6 p-md-4 p-lg-3 p-xl-2 item-container",children:Object(f.jsx)($,{data:e,handleAddToCart:n,viewOnly:!0})})}(e):void 0},paginator:!0,rows:9,sortOrder:h,sortField:v})})})})}),G=n(129),Q=n.n(G);n(482),n(483),n(484),n(485);_.a.set({storage:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGE});var X=function(){var e=Object(x.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/products");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var Y=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=(t[0],t[1],Object(a.useState)([])),i=Object(p.a)(n,2),c=(i[0],i[1]),r=Object(a.useState)({isLoading:!0,title:"",description:"",contact:""}),o=Object(p.a)(r,2),d=o[0],s=o[1];Object(a.useEffect)((function(){Q.a.get("/api/page_info/1").then((function(e){return s({isLoading:!1,title:e.data.title,description:e.data.description,contact:e.data.contact})}))}),[]);var b=Object(m.a)("products",X),u=b.data,x=b.isLoading,h=b.error,O=function(e){c((function(t){return t.find((function(t){return t.id==e.id}))?t.map((function(t){return t.id===e.id?Object(j.a)(Object(j.a)({},t),{},{amount:t.amount+1}):t})):[].concat(Object(l.a)(t),[Object(j.a)(Object(j.a)({},e),{},{amount:1})])}))};return x?Object(f.jsx)(U.a,{}):h?Object(f.jsx)("div",{children:"Something went wrong..."}):Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(T,{title:d.title}),Object(f.jsxs)(M,{children:[!1,Object(f.jsx)(q,{data:u,handleAddToCart:O,viewOnly:true}),Object(f.jsx)(L,{description:d.description,contact:d.contact})]})]})},Z=n(697),ee=n(698),te=n(691),ne=n(692),ie=n(693),ce=n(700),ae=n(699),re=n(707),oe=n(694),de=n(702),se=n(705),le=n(696),je=n(695),pe=n(362),be=n(701),ue=n(9),xe=n(616),me=n(126),he=n(179),Oe=n(180),ge=n.n(Oe),fe=n(333),ve=n.n(fe),we=function(e){var t=e.onMenuClick,n=e.logout,i=Object(xe.a)((function(e){return e.breakpoints.down("xs")})),c=Object(ue.f)((function(e){return e.admin.ui.sidebarOpen})),a=Object(ue.f)(me.b);return Object(f.jsxs)("div",{children:[a.map((function(e){return Object(f.jsx)(he.a,{to:"/".concat(e.name),primaryText:e.options&&e.options.label||e.name,leftIcon:e.icon?Object(f.jsx)(e.icon,{}):Object(f.jsx)(ge.a,{}),onClick:t,sidebarIsOpen:c},e.name)})),Object(f.jsx)(he.a,{to:"/page_info",primaryText:"page_info",leftIcon:Object(f.jsx)(ve.a,{}),sidebarIsOpen:c}),i&&n]})},ye=n(369),Ne=n(131),ke=n(143),Ce=n(242),Se=n(336),Te=n.n(Se),Ae=function(e){return Object(f.jsx)(Ce.a,Object(j.a)(Object(j.a)({},e),{},{children:Object(f.jsx)(he.a,{to:"/my-profile",primaryText:"My Profile",leftIcon:Object(f.jsx)(Te.a,{})})}))},_e=Object(ke.a)({title:{flex:1,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},spacer:{flex:1}}),Pe=function(e){var t=_e();return Object(f.jsxs)(ye.a,Object(j.a)(Object(j.a)({},e),{},{userMenu:Object(f.jsx)(Ae,{}),children:[Object(f.jsx)(Ne.a,{variant:"h6",color:"inherit",className:t.title,id:"react-admin-title"}),Object(f.jsx)("span",{className:t.spacer})]}))},Ee=function(e){return Object(f.jsx)(be.a,Object(j.a)(Object(j.a)({},e),{},{menu:we,appBar:Pe}))},Ie=n(197),De=function(e){return Object(f.jsx)(Z.a,Object(j.a)(Object(j.a)({},e),{},{children:Object(f.jsxs)(ee.a,{rowClick:"edit",children:[Object(f.jsx)(te.a,{source:"id"}),Object(f.jsx)(te.a,{source:"title"}),Object(f.jsx)(te.a,{source:"description"}),Object(f.jsx)(ne.a,{source:"price"}),Object(f.jsx)(Re,{source:"title",title:"Image"})]})}))},Re=function(e){return e.record.env="".concat(_.a.get("storage")||"").concat(e.record.img),Object(f.jsx)(ie.a,{source:"env",title:e.title})};function ze(e){return e&&"string"!==typeof e?"".concat(_.a.get("storage")||"").concat(e):{url:"".concat(_.a.get("storage")||"").concat(e)}}var He=function(e){return Object(f.jsx)(ce.a,Object(j.a)(Object(j.a)({},e),{},{children:Object(f.jsxs)(ae.a,{children:[Object(f.jsx)(re.a,{disabled:!0,source:"id"}),Object(f.jsx)(re.a,{source:"title"}),Object(f.jsx)(re.a,{source:"description"}),Object(f.jsx)(oe.a,{source:"price"}),Object(f.jsx)(de.a,{format:ze,source:"img",label:"Billede",accept:"image/*",mulitple:!1,children:Object(f.jsx)(ie.a,{source:"url",title:"title"})})]})}))},Be=function(e){return Object(f.jsx)(se.a,Object(j.a)(Object(j.a)({},e),{},{children:Object(f.jsxs)(ae.a,{children:[Object(f.jsx)(re.a,{disabled:!0,source:"id"}),Object(f.jsx)(re.a,{source:"title"}),Object(f.jsx)(re.a,{source:"description"}),Object(f.jsx)(oe.a,{source:"price"}),Object(f.jsx)(de.a,{source:"img",label:"Related pictures",accept:"image/*",children:Object(f.jsx)(ie.a,{source:"src",title:"title"})})]})}))},Le=Object(pe.a)("/api"),Fe=Object(j.a)(Object(j.a)({},Le),{},{create:function(e,t){if("products"!==e||!t.data.img)return Le.create(e,t);var n=new FormData;n.append("file",t.data.img.rawFile),n.append("data",JSON.stringify(t));return Q.a.post("api/products",n,{headers:{Accept:"application/json","content-type":"multipart/form-data"}})}}),Me=function(e){var t=Object(a.useState)(""),n=Object(p.a)(t,2),i=n[0],c=n[1];Object(a.useEffect)((function(){Q.a.get("/api/page_info/1").then((function(e){return c(e.data)}))}),[]);return Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:" T\xedtulo da P\xe1gina"}),Object(f.jsx)("div",{children:Object(f.jsx)(Ie.InputText,{value:i.title,onChange:function(e){return c(Object(j.a)(Object(j.a)({},i),{},{title:e.target.value}))}})}),Object(f.jsx)("br",{}),Object(f.jsx)("label",{children:" Descri\xe7\xe3o "}),Object(f.jsx)("div",{children:Object(f.jsx)(Ie.InputText,{value:i.description,onChange:function(e){return c(Object(j.a)(Object(j.a)({},i),{},{description:e.target.value}))}})}),Object(f.jsx)("br",{}),Object(f.jsx)("label",{children:" Contato "}),Object(f.jsx)("div",{children:Object(f.jsx)(Ie.InputText,{value:i.contatc,onChange:function(e){return c(Object(j.a)(Object(j.a)({},i),{},{contact:e.target.value}))}})}),Object(f.jsx)("div",{children:Object(f.jsx)(W.Button,{onClick:function(){Q.a.put("/api/page_info/1",i).then((function(e){return console.log("RES",e)}))},children:"Salvar"})})]})};function Ue(){return Object(f.jsx)(le.a,{disableTelemetry:!0,dataProvider:Fe,layout:Ee,title:"Admin Page",customRoutes:[Object(f.jsx)(s.b,{path:"/page_info",component:Me},"page_info")],children:Object(f.jsx)(je.a,{name:"products",list:De,edit:He,create:Be,options:{label:"Products"}})})}var Ve=function(){var e=Object(a.useContext)(v),t=(e.items,e.setItems,[{amount:1,description:"Descri\xe7\xe3o77",id:"41",img:"http://localhost:9000/my-bucket/joia.jpg",price:199,title:"Produto7"},{amount:2,description:"Descri\xe7\xe3o4",id:"43",img:"http://localhost:9000/my-bucket/joia.jpg",price:199,title:"Produto3"}]);return Object(f.jsxs)("div",{children:[Object(f.jsx)("header",{style:{height:"50px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(f.jsx)("p",{style:{fontSize:"larger"},children:"Checkout"})}),Object(f.jsx)("div",{className:"main-content",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"p-grid",children:[Object(f.jsx)("div",{className:"p-col-12",children:Object(f.jsx)("div",{className:"row-checkout-box",children:Object(f.jsxs)("table",{style:{width:"100%"},children:[Object(f.jsx)("thead",{style:{backgroundColor:"aliceblue"},children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{className:"p-col-2",children:"Produto"}),Object(f.jsx)("th",{className:"p-col-5"}),Object(f.jsx)("th",{children:"Pre\xe7o"}),Object(f.jsx)("th",{children:"Qtde"}),Object(f.jsx)("th",{children:"Total"})]})}),Object(f.jsx)("tbody",{style:{textAlign:"center"},children:t.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsx)("img",{src:e.img,style:{height:"100px"}})}),Object(f.jsxs)("td",{children:[Object(f.jsx)("p",{children:e.title}),Object(f.jsx)("p",{children:e.description})]}),Object(f.jsx)("td",{children:e.price}),Object(f.jsx)("td",{children:e.amount}),Object(f.jsx)("td",{children:e.price*e.amount})]},e.id)}))})]})})}),Object(f.jsx)("div",{className:"p-col-12",style:{border:"1px solid",textAlign:"-webkit-center"},children:Object(f.jsxs)("table",{style:{width:"300px"},children:[Object(f.jsxs)("thead",{children:[Object(f.jsx)("th",{children:"Resumo"}),Object(f.jsx)("th",{children:"Valor"})]}),Object(f.jsxs)("tbody",{style:{textAlign:"center"},children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Produtos"}),Object(f.jsx)("td",{children:"1000"})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Total"}),Object(f.jsx)("td",{children:"1000"})]})]})]})})]})})})]})},We=n(703),Je=n(328),Ke=new We.a;document.querySelector("body").style.margin="0px",o.a.render(Object(f.jsx)(Je.a,{client:Ke,children:Object(f.jsx)(d.a,{children:Object(f.jsx)(s.d,{children:Object(f.jsxs)(w,{children:[Object(f.jsx)(s.b,{exact:!0,path:"/",children:Object(f.jsx)(Y,{})}),Object(f.jsx)(s.b,{exact:!0,path:"/checkout",children:Object(f.jsx)(Ve,{})}),Object(f.jsx)(s.b,{exact:!0,path:"/admin",children:Object(f.jsx)(Ue,{})})]})})})}),document.getElementById("root"))}},[[609,1,2]]]);
//# sourceMappingURL=main.2ec63d7d.chunk.js.map