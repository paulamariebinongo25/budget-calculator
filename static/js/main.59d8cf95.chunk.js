(this["webpackJsonppractice-one"]=this["webpackJsonppractice-one"]||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(3),s=t.n(c),i=(t(11),t(12),t(4)),m=t(5),r=t(1),o=(t(13),function(e){var a=e.charge,t=e.amount,l=e.handleChargeInputChange,c=e.handleAmountInputChange,s=e.handleSubmit,i=e.isEditActive;return n.a.createElement("form",{onSubmit:s},n.a.createElement("div",{className:"container is-fluid"},n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"level"},n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"level-left"},n.a.createElement("div",{className:"level-item"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("label",{className:"label"},"Item"),n.a.createElement("input",{className:"input-field",type:"text",id:"charge",name:"charge",value:a,onChange:l})))))),n.a.createElement("div",{className:"level"},n.a.createElement("div",{className:"level-item"})),n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"level-right"},n.a.createElement("div",{className:"level-item"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Amount"),n.a.createElement("input",{className:"input-field",type:"number",id:"amount",name:"amount",value:t,onChange:c}))))))),n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"level"},n.a.createElement("button",{className:"button is-success is-rounded is-fullwidth",type:"submit"},i?"Save Changes":"Submit"))))))}),d=function(e){var a=e.id,t=e.setIsDeleteModalOpen,l=e.isDeleteModalOpen,c=e.handleClickDelete;return n.a.createElement("div",null,n.a.createElement("div",{className:"modal ".concat(l?"is-active":"")},n.a.createElement("div",{className:"modal-background"}),n.a.createElement("div",{className:"columns is-mobile is-tablet is-desktop is-centered"},n.a.createElement("div",{className:"modal-card"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("div",{className:"modal-card-title has-text-white has-text-centered"},"Delete Budget Expense"),n.a.createElement("button",{className:"modal-close is-large",onClick:function(){t(!1)}})),n.a.createElement("section",{className:"modal-body has-text-white has-text-centered"},"Are you sure you want to delete this?"),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"level"},n.a.createElement("div",{className:"level-item"},n.a.createElement("button",{className:"button is-white has-text-black",onClick:function(){return c(a)}},"Yes")))))))))},u=function(e){var a=e.id,t=e.setIsEditModalOpen,l=e.isEditModalOpen,c=e.handleClickEdit,s=function(){t(!1)};return n.a.createElement("div",{className:"modal ".concat(l?"is-active":"")},n.a.createElement("div",{className:"modal-background"}),n.a.createElement("div",{className:"columns is-mobile is-tablet is-desktop"},n.a.createElement("div",{className:"modal-card"},n.a.createElement("header",{className:"modal-header"},n.a.createElement("p",{className:"modal-card-title has-text-centered has-text-white"},"Edit Modal")),n.a.createElement("section",{className:"modal-body"},n.a.createElement("div",{className:"field has-text-centered"},n.a.createElement("label",{className:"subtitle is-6 has-text-centered has-text-white"},"Are you sure you want to edit this?"))),n.a.createElement("footer",{className:"modal-footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"level"},n.a.createElement("div",{className:"level-item"},n.a.createElement("div",{className:"buttons"},n.a.createElement("div",{className:"button",onClick:function(){c(a),s()}},"Yes"),n.a.createElement("div",{className:"button",onClick:s},"No")))))))))},v=function(e){var a=e.expense,t=a.id,c=a.charge,s=a.amount,i=e.handleClickDelete,m=e.handleClickEdit,o=Object(l.useState)(!1),v=Object(r.a)(o,2),E=v[0],N=v[1],h=Object(l.useState)(!1),b=Object(r.a)(h,2),f=b[0],p=b[1];return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"level is-mobile"},n.a.createElement("div",{className:"level-left"},n.a.createElement("div",{className:"list-item"},n.a.createElement("label",{className:"text"},c),n.a.createElement("label",null,"P ",s))),n.a.createElement("div",{className:"level-right"},n.a.createElement("div",{className:"list-item"},n.a.createElement("div",{className:"buttons"},n.a.createElement("button",{className:"button is-info",onClick:function(){p(!0)}},n.a.createElement("span",{className:"icons"},n.a.createElement("i",{className:"fas fa-pen"}))),n.a.createElement("button",{className:"button is-danger",onClick:function(){N(!0)}},n.a.createElement("span",{className:"icons"},n.a.createElement("i",{className:"fas fa-trash"}))))))),n.a.createElement(d,{setIsDeleteModalOpen:N,isDeleteModalOpen:E,handleClickDelete:i,id:t}),n.a.createElement(u,{setIsEditModalOpen:p,isEditModalOpen:f,handleClickEdit:m,id:t}))},E=function(e){var a=e.expenses,t=e.handleClickDelete,l=e.handleClickEdit,c=e.clearItems;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"level is-block"},n.a.createElement("div",{className:"level is-mobile is-tablet is-desktop"},n.a.createElement("div",{className:"level-item"},n.a.createElement("div",{className:"column"},a.map((function(e){return n.a.createElement(v,{key:e.id,expense:e,handleClickEdit:l,handleClickDelete:t})}))))),a.length>0&&n.a.createElement("div",{className:"column"},n.a.createElement("button",{className:"button is-black is-fullwidth",onClick:c},"Clear"))))},N=function(e){var a=e.type,t=e.text;return n.a.createElement("div",{className:"alert alert-".concat(a)},t)},h=function(e){var a=e.setIsDeleteModalOpen,t=e.setIsEditOpen,c=localStorage.getItem("expenses")?JSON.parse(localStorage.getItem("expenses")):[],s=Object(l.useState)(c),d=Object(r.a)(s,2),u=d[0],v=d[1],h=Object(l.useState)(""),b=Object(r.a)(h,2),f=b[0],p=b[1],g=Object(l.useState)(""),O=Object(r.a)(g,2),k=O[0],x=O[1],C=Object(l.useState)({show:!1}),w=Object(r.a)(C,2),y=w[0],I=w[1],j=Object(l.useState)(!1),S=Object(r.a)(j,2),D=S[0],M=S[1],A=Object(l.useState)(0),J=Object(r.a)(A,2),B=J[0],T=J[1];Object(l.useEffect)((function(){localStorage.setItem("expenses",JSON.stringify(u))}),[u]);var P=function(e){var a=e.type,t=e.text;I({show:!0,type:a,text:t}),setTimeout((function(){I({show:!1})}),5e3)};return n.a.createElement("div",null,y.show&&n.a.createElement(N,{type:y.type,text:y.text}),n.a.createElement("div",{className:"square column"},n.a.createElement("div",{className:"level"},n.a.createElement("div",{className:"level-left"},n.a.createElement("div",{className:"level-item"},n.a.createElement(o,{handleSubmit:function(e){if(e.preventDefault(),""!==f&&k>0){if(D){var a=u.map((function(e){return e.id===B?Object(m.a)({},e,{charge:f,amount:k}):e}));v(a),M(!1)}else{var t={id:(new Date).getTime(),charge:f,amount:k};v([].concat(Object(i.a)(u),[t])),P({type:"success",text:"Item was added!"})}p(""),x("")}else P({type:"danger",text:"Don't leave the field empty"})},charge:f,amount:k,isEditActive:D,handleChargeInputChange:function(e){p(e.target.value)},handleAmountInputChange:function(e){var a=e.target.value;x(""===a?a:parseInt(a))}}))),n.a.createElement("div",{className:"level-right"},n.a.createElement("div",{className:"level-item"},n.a.createElement(E,{expenses:u,handleClickEdit:function(e){var a=u.find((function(a){return a.id===e})),l=a.charge,n=a.amount;t={setIsEditOpen:t},p(l),x(n),M(!0),T(e)},handleClickDelete:function(e){var t=u.filter((function(a){return a.id!==e}));v(t),a={setIsDeleteModalOpen:a},P({type:"danger",text:"Item was deleted"})},clearItems:function(){v([])}})))),n.a.createElement("div",{className:"footer-container"},n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"level"},n.a.createElement("div",{className:"level-item"},n.a.createElement("label",{className:"title is-5"},"Total Expense:"),n.a.createElement("label",{className:"footer-text"},"Php"),u.reduce((function(e,a){return e+a.amount}),0)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports=t(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.59d8cf95.chunk.js.map