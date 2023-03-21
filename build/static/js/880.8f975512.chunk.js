"use strict";(self.webpackChunksilc=self.webpackChunksilc||[]).push([[880],{2273:function(e,n,i){i(2791);var a=i(4233),o=i(3985),t=i(2657),r=i(184);n.Z=function(e){var n=e.placeholder,i=e.id,l=e.label,s=e.type,c=e.asterisk,d=e.belowText,u=e.inputType,v=e.name,f=e.value,m=e.onChangeFn,h=e.formErrors,p=void 0===h?{}:h,g=e.maxDate,x=(0,a.v9)((function(e){return e.invFormStatus}));return(0,r.jsxs)("div",{className:"form-input ".concat(s||""," ").concat(function(){var e,n;return!!p[v]&&((0,o.kJ)(p[v])?!(null===(e=p[v][0])||void 0===e||!e.length):!(null===(n=p[v])||void 0===n||!n.length))}()?"incorrect":""),children:[(0,r.jsxs)("label",{htmlFor:i,children:[l," ",""!==c?(0,r.jsx)("span",{children:"*"}):null]}),(0,r.jsx)("input",{className:"form-input-common",type:u||"text",placeholder:n,id:i,required:""!==c,name:v,value:f||"",onChange:function(e){var n=e.target,i=n.name,a=n.value;m({name:i,value:a})},disabled:!!x.loader,max:g||null}),d?(0,r.jsx)("div",{className:"input__desc",children:(0,r.jsx)("p",{className:"input__desc--p",children:d})}):null,p[v]?(0,o.kJ)(p[v])?(0,t.O)(p[v]):(0,t.O)([p[v]]):null]})}},3864:function(e,n,i){var a=i(2791),o=i(4483),t=i(3174),r=i(5122),l=i(6437),s=i(188),c=i(184);n.Z=function(e){var n=e.uploadedDocs,i=void 0===n?[]:n,d=e.onAddFiles,u=e.onClickRemove,v=e.onClickDel,f=e.multiple,m=void 0===f||f,h=e.accept,p=void 0===h?"application/pdf, image/*":h,g=e.uniqId,x=["image/jpg","image/jpeg","image/png","application/pdf"],_=function(e){for(var n=new DataTransfer,i=document.getElementById("file-doc-in-".concat(g)),a=i.files,o=0;o<a.length;o++){var t=a[o];e!==t.name&&n.items.add(t)}i.files=n.files},j=function(e){var n=e.fileName,i=e.fileData;return null!==i&&void 0!==i&&i.delLoader?(0,c.jsxs)("span",{style:{marginLeft:10},children:[" ",(0,c.jsx)(l.o_,{})," "]}):(0,c.jsx)("span",{style:{marginLeft:10},onClick:function(){return function(e){var n=e.fileName,i=e.fileData;v({fileName:n,docData:i}),_(n)}({fileName:n,fileData:i})},children:(0,c.jsx)(o.G,{className:"docPreviewDelIcon",icon:t.I7k})})},b=function(e,n,i){return e===s.MR?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.G,{icon:t.LEp}),j({fileName:n,fileData:i})]}):e===s.ig?(0,c.jsxs)("button",{className:"link-button",onClick:function(){return function(e){u(e),_(e)}(n)},children:["upload failed ",(0,c.jsx)(o.G,{icon:r.NBC})]}):e===s.br?(0,c.jsx)(l.o_,{}):void 0},C=function(e){var n,i,a,o;return null!==e&&void 0!==e&&null!==(n=e.type)&&void 0!==n&&n.label&&null!==e&&void 0!==e&&null!==(i=e.extraDetails)&&void 0!==i&&i.label?"(".concat(e.type.label," - ").concat(null===e||void 0===e||null===(o=e.extraDetails)||void 0===o?void 0:o.label,")"):null!==e&&void 0!==e&&null!==(a=e.type)&&void 0!==a&&a.label?"(".concat(e.type.label,")"):""};return(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)("div",{className:"docPlaceholder",children:(0,c.jsxs)("div",{className:"docPlaceholder__container",children:[(0,c.jsx)("input",{type:"file",id:"file-doc-in-".concat(g),className:"docPlaceholder__container--input ".concat(""),onChange:function(e){var n=(Array.prototype.slice.call(e.target.files)||[]).filter((function(e){return x.includes(e.type)}));d(n)},multiple:m,accept:p}),(0,c.jsx)("label",{htmlFor:"file-doc-in-".concat(g),id:"uploadDocLabel",className:"docPlaceholder__container--p",children:"Drag your documents here to start uploading"})]})}),(0,c.jsx)("div",{className:"docPlaceholder__uploaded",children:i.map((function(e){return(0,c.jsxs)("div",{className:"docPlaceholder__uploaded--responses",children:[(0,c.jsx)("a",{className:"link-button",target:"_blank",href:null!==e&&void 0!==e&&e.docUrl?null===e||void 0===e?void 0:e.docUrl:null,rel:"noreferrer",children:e.file.name}),(0,c.jsx)("span",{className:"uploaded-file-label",children:C(e)}),(0,c.jsx)("span",{style:{marginLeft:5},children:b(e.loader,e.file.name,e)})]},e.file.name)}))})]})}},1440:function(e,n,i){var a=i(2791),o=i(1276),t=i.n(o),r=i(4483),l=i(3174),s=i(5122),c=i(6437),d=i(188),u=i(184);n.Z=function(e){var n,i=e.investorId,o=e.onAddSignature,v=e.signCreate,f=(0,a.useRef)(),m=function(e){return e===d.br};return(0,u.jsx)("div",{className:"signature__wrapper",children:(0,u.jsxs)("div",{className:"signature__wrapper--container",children:[(0,u.jsx)(t(),{ref:f,canvasProps:{id:{investorId:i}},clearOnResize:!1}),(0,u.jsxs)("div",{className:"signature__wrapper--container--btn",children:[(0,u.jsx)("button",{id:"btn-".concat(i),className:"btn-to-link",onClick:function(){return f.current.clear()},disabled:m(null===v||void 0===v?void 0:v.loader),children:"clear"}),(0,u.jsx)("button",{id:"btn2-".concat(i),className:"btn-to-link",onClick:function(){o({sign:f.current.toDataURL("image/png"),investorId:i})},disabled:m(null===v||void 0===v?void 0:v.loader),children:(n=null===v||void 0===v?void 0:v.loader,n===d.MR?(0,u.jsx)(r.G,{icon:l.LEp}):n===d.ig?(0,u.jsx)(r.G,{icon:s.tmN}):n===d.br?(0,u.jsx)(c.o_,{}):"save")})]})]})})}},8880:function(e,n,i){i.r(n),i.d(n,{default:function(){return q}});var a=i(2982),o=i(2791),t=i(4233),r=i(200),l=i(6901),s=i(1413),c=i(2819),d=i(2273),u=i(188),v=i(184),f=function(e){var n,i,a=e.investorId,o=e.itemIndex,r=e.investorDetails,l=e.onChangeinvestor,s=(0,t.v9)((function(e){return e.wholesaleClientCertificate})),c=(null===s||void 0===s?void 0:s.category)===u.EK?o+1:"",f=(0,t.v9)((function(e){return e.invFormStatus})),m=u.A4.get(null===s||void 0===s?void 0:s.category),h={investor_name:null!==(n=f.errors)&&void 0!==n&&n.investor_name?null===(i=f.errors)||void 0===i?void 0:i.investor_name[o]:""};return(0,v.jsx)("div",{children:(0,v.jsx)(d.Z,{placeholder:"Name of ".concat(m),id:"name-of-investor-entity-".concat(c),label:"Name of ".concat(m," ").concat(c),asterisk:"*",type:"form-input-full-width",name:"investor_name",value:null===r||void 0===r?void 0:r.investor_name,onChangeFn:function(e){var n=e.name,i=e.value;l({name:n,value:i,investorId:a})},formErrors:h})},"investorId-".concat(c))},m=i(7994),h=i(2657),p=function(e){var n,i,a=e.onChangeRadioFn,r=(0,t.v9)((function(e){return e.wholesaleClientCertificate})),l=(0,t.v9)((function(e){return e.invFormStatus}));return(0,o.useEffect)((function(){return function(){a({name:"no_of_individuals",value:0})}}),[]),(0,v.jsxs)("div",{className:"section__container--box u-margin-bottom-xl",children:[(0,v.jsxs)("h5",{className:"section__container--box--subtitle",children:["How many individuals? ",(0,v.jsx)("span",{children:"*"})]}),(0,v.jsxs)("div",{className:"row-space-between",children:[(0,v.jsx)(c.Z,{name:"no_of_individuals",id:"one-number-of-individual",content:"1",val:1,checked:1===(null===r||void 0===r?void 0:r.no_of_individuals),onChangeFn:a}),(0,v.jsx)(c.Z,{name:"no_of_individuals",id:"two-number-of-individual",content:"2",val:2,checked:2===(null===r||void 0===r?void 0:r.no_of_individuals),onChangeFn:a}),(0,v.jsx)(c.Z,{name:"no_of_individuals",id:"three-number-of-individual",content:"3",val:3,checked:3===(null===r||void 0===r?void 0:r.no_of_individuals),onChangeFn:a})]}),null!==l&&void 0!==l&&null!==(n=l.errors)&&void 0!==n&&n.no_of_individuals?(0,v.jsx)("div",{className:"input__desc",children:(0,h.O)(null===l||void 0===l||null===(i=l.errors)||void 0===i?void 0:i.no_of_individuals)}):null,(0,v.jsx)("div",{className:"text__box u-padding-10y",children:(0,v.jsx)("p",{className:"text__box--p",children:"Please note that each individual must be certified as a wholesale client."})})]})},g=function(e){var n=e.onChangeInputFn,i=(0,t.v9)((function(e){return e.wholesaleClientCertificate})),a=(0,t.v9)((function(e){return e.invFormStatus}));return(0,o.useEffect)((function(){return function(){n({name:"controlling_person_of_investor_entity",value:""})}}),[]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(d.Z,{placeholder:"Controlling Person of Investor Entity",id:"controlling-person-of-investor-entity",label:"Controlling Person of Investor Entity",asterisk:"*",type:"form-input-full-width",name:"controlling_person_of_investor_entity",value:(null===i||void 0===i?void 0:i.controlling_person_of_investor_entity)||"",onChangeFn:n,formErrors:a.errors})})},x=function(e){var n,i,o=e.onFormChange,r=e.onChangeInvestorFn,l=(0,t.v9)((function(e){return e.wholesaleClientCertificate})),x=(0,t.v9)((function(e){return e.invFormStatus})),_=u.A4.get(null===l||void 0===l?void 0:l.category),j=function(e){var n,i,t=[],r=(null===l||void 0===l||null===(n=l.investor_details)||void 0===n?void 0:n.length)||0;if(r>e)return t=null===l||void 0===l||null===(i=l.investor_details)||void 0===i?void 0:i.filter((function(n,i){return i+1<=e})),void o({name:"investor_details",value:(0,a.Z)(t)});if(r!==e){var c=e-r;t=(0,a.Z)(null===l||void 0===l?void 0:l.investor_details);var d=Array.from({length:c},(function(){return(0,s.Z)({},m.o)}));o({name:"investor_details",value:[].concat((0,a.Z)(t),d)})}},b=function(e){var n=e.name,i=e.value,a=i&&parseInt(i);o({name:n,value:a}),"no_of_individuals"===n?a&&j(a):"category"===n&&(r({name:"investor_name",value:"",investorId:1}),j(1))},C=function(e){var n=e.name,i=e.value;o({name:n,value:i})};return(0,v.jsxs)("div",{className:"section__container",children:[(0,v.jsxs)("div",{className:"section__container--box u-margin-bottom-xl",children:[(0,v.jsxs)("h5",{className:"section__container--box--subtitle",children:["Category ",(0,v.jsx)("span",{children:"*"})]}),(0,v.jsx)(c.Z,{name:"category",id:"individual-investor",content:"Individual Investor(s)",val:u.EK,checked:(null===l||void 0===l?void 0:l.category)===u.EK,onChangeFn:b}),(0,v.jsx)(c.Z,{name:"category",id:"non-individual-investor",content:"Non-individual Investor",val:u.nF,checked:(null===l||void 0===l?void 0:l.category)===u.nF,onChangeFn:b}),(0,v.jsx)(c.Z,{name:"category",id:"controlling-person-of-investor-entity",content:"Controlling Person of Investor Entity",val:u.KM,checked:(null===l||void 0===l?void 0:l.category)===u.KM,onChangeFn:b}),null!==x&&void 0!==x&&null!==(n=x.errors)&&void 0!==n&&n.category?(0,v.jsx)("div",{className:"input__desc",children:(0,h.O)(null===x||void 0===x||null===(i=x.errors)||void 0===i?void 0:i.category)}):null]}),(null===l||void 0===l?void 0:l.category)===u.EK?(0,v.jsx)(p,{onChangeRadioFn:b}):null,(0,v.jsxs)("div",{className:"section__container--box",children:[(null===l||void 0===l?void 0:l.category)===u.EK||(null===l||void 0===l?void 0:l.category)===u.nF?function(){var e;return null===l||void 0===l||null===(e=l.investor_details)||void 0===e?void 0:e.map((function(e,n){var i=n+1;return(0,v.jsx)(f,{investorId:i,investorDetails:e,onChangeinvestor:r,itemIndex:n},i)}))}():null,(null===l||void 0===l?void 0:l.category)===u.KM?(0,v.jsx)(g,{onChangeInputFn:C}):null,(0,v.jsx)(d.Z,{placeholder:"Address of ".concat(_),id:"investor-address",label:"Address of ".concat(_),asterisk:"*",type:"form-input-full-width",name:"investor_address",value:(null===l||void 0===l?void 0:l.investor_address)||"",onChangeFn:C,formErrors:x.errors})]})]})},_=function(e){var n,i,a=e.investorId,o=e.itemIndex,r=e.investorDetails,l=e.onChangeInvestorFn,s=o+1,d=(0,t.v9)((function(e){return e.invFormStatus})),f=(0,t.v9)((function(e){return e.wholesaleClientCertificate})),m=u.A4.get(null===f||void 0===f?void 0:f.category),p={investor_category:null!==(n=d.errors)&&void 0!==n&&n.investor_category?null===(i=d.errors)||void 0===i?void 0:i.investor_category[o]:""},g=function(e){e.name;var n=e.value,i=n&&parseInt(n);l({name:"investor_category",value:i,investorId:a})};return(0,v.jsxs)("div",{className:"section__container--box u-margin-bottom-lg",children:[(0,v.jsx)("h5",{className:"section__container--box--subtitle",children:"".concat(m," ").concat(s)}),(0,v.jsxs)("div",{children:[(0,v.jsx)(c.Z,{name:"investor-category-".concat(s),id:"investor-one-".concat(s),content:"This ".concat(m," has net assets of at least AU$2.5 million"),val:u.Hr,checked:(null===r||void 0===r?void 0:r.investor_category)===u.Hr,onChangeFn:g}),(0,v.jsx)(c.Z,{name:"investor-category-".concat(s),id:"investor-two-".concat(s),type:"",content:"This ".concat(m," has earned at least AU$250,000 per annum gross income for each of the last two (2) financial years"),val:u.zb,checked:(null===r||void 0===r?void 0:r.investor_category)===u.zb,onChangeFn:g}),(0,v.jsx)(c.Z,{name:"investor-category-".concat(s),id:"investor-three-".concat(s),content:"This ".concat(m," has  or controls gross assets of at least AU$10 million"),val:u.qU,checked:(null===r||void 0===r?void 0:r.investor_category)===u.qU,onChangeFn:g}),null!==p&&void 0!==p&&p.investor_category?(0,v.jsx)("div",{className:"input__desc",children:(0,h.O)(null===p||void 0===p?void 0:p.investor_category)}):null]})]},"investorId-".concat(s))},j=function(e){var n=e.onChangeInvestorFn,i=(0,t.v9)((function(e){return e.wholesaleClientCertificate})),a=u.A4.get(null===i||void 0===i?void 0:i.category);return(0,v.jsxs)("div",{className:"section__container",children:[(0,v.jsxs)("h4",{className:"section__container--subtitle",children:[a," Category"]}),function(){var e;return null===i||void 0===i||null===(e=i.investor_details)||void 0===e?void 0:e.map((function(e,i){var a=i+1;return(0,v.jsx)(_,{investorId:a,investorDetails:e,onChangeInvestorFn:n,itemIndex:i},a)}))}()]})},b=i(4165),C=i(5861),y=i(885),N=i(3864),F=i(2426),I=i.n(F),Z=i(2104),D=i(2906),k=i(1440);var w=function(e){var n=e.signatureUrl,i=e.onSaveSignature,t=e.uploadedDocs,r=e.setUploadedDocs,l=e.signCreate,d=e.setSignCreate,f=e.investorId,m=void 0===f?1:f,h="",p=(0,o.useState)(""),g=(0,y.Z)(p,2),x=g[0],_=g[1],j=function(e){var n=e.value,i=parseInt(n);_(i)},b=function(e){var n=e.sign,a=e.investorId,o=n.replace("data:","").replace(/^.+,/,"");d((function(e){return(0,s.Z)((0,s.Z)({},e),{},{file:o,loader:u.br})})),i({sign:o,investorId:a,fileName:""})},C=function(e){var n=(0,a.Z)(t);e.some((function(e){-1===n.findIndex((function(n){return n.file.name===e.name}))&&(!function(e){var n=e.name,a=new FileReader;a.onload=function(){h=a.result.replace("data:","").replace(/^.+,/,""),i({sign:h,investorId:m,fileName:n})},a.readAsDataURL(e)}(e),n.push({file:e,loader:u.br}))})),r(n)},N=function(e){var n=(0,a.Z)(t).filter((function(n){return n.file.name!==e}));r((0,a.Z)(n))};return n?(0,v.jsx)("img",{src:n,alt:"accountant signature",style:{objectFit:"contain",maxWidth:"100%"}}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"u-padding-y radio-inputs-row",children:[(0,v.jsx)(c.Z,{name:"signatory-signature",id:"signatory-signature-upload",content:"Upload signature",val:1,checked:1===x,onChangeFn:j}),(0,v.jsx)(c.Z,{name:"signatory-signature",id:"signatory-signature-create",content:"Create signature",val:2,checked:2===x,onChangeFn:j})]}),1===x?(0,v.jsx)(D.Z,{onAddFiles:C,uploadedDocs:t,onClickRemove:N,uniqId:"sectionisignatureupload",multiple:!1,accept:"image/*"}):2===x?(0,v.jsx)(k.Z,{investorId:m,onAddSignature:b,signCreate:l}):null]})};var A=function(e){var n,i,a=e.onChangeInputFn,r=I()().format(),l=(0,t.v9)((function(e){return e.wholesaleClientCertificate})),c=(0,t.v9)((function(e){return e.invFormStatus})),f=(0,o.useState)([]),m=(0,y.Z)(f,2),p=m[0],g=m[1],x=(0,o.useState)({file:"",loader:""}),_=(0,y.Z)(x,2),j=_[0],N=_[1],F=function(e){var n=e.name,i=e.value;a({name:n,value:i})},D=function(){var e=(0,C.Z)((0,b.Z)().mark((function e(n){var i,a,o,t,r,l,c;return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.sign,n.investorId,a=n.fileName,o=void 0===a?"":a,!i){e.next=12;break}return(t=new FormData).append("file",i),e.next=6,(0,Z.dA)(t);case 6:r=e.sent,l=r.success,c=r.url,l&&F({name:"accountant_signature_url",value:c}),o&&g((function(e){return e.map((function(e){return e.file.name===o?(0,s.Z)((0,s.Z)({},e),{},{loader:l?u.MR:u.ig}):e}))})),o||N((function(e){return{file:null===e||void 0===e?void 0:e.file,loader:l?u.MR:u.ig}}));case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:"u-padding-y u-margin-bottom-lg",children:[(0,v.jsxs)("h6",{children:["Accountant's Signature ",(0,v.jsx)("span",{children:"*"})]}),(0,v.jsx)(w,{signatureUrl:null===l||void 0===l?void 0:l.accountant_signature_url,onSaveSignature:D,uploadedDocs:p,setUploadedDocs:g,signCreate:j,setSignCreate:N,investorId:1}),null!==c&&void 0!==c&&null!==(n=c.errors)&&void 0!==n&&n.accountant_signature_url?(0,v.jsx)("div",{className:"input__desc",children:(0,h.O)(null===c||void 0===c||null===(i=c.errors)||void 0===i?void 0:i.accountant_signature_url)}):null]}),(0,v.jsx)(d.Z,{placeholder:"DD/MM/YYYY",inputType:"date",label:"Date",asterik:"*",name:"date_of_signature",value:null===l||void 0===l?void 0:l.date_of_signature,onChangeFn:a,maxDate:null===r||void 0===r?void 0:r.split("T")[0],formErrors:c.errors})]})};var S=function(e){var n=e.onChangeInputFn,i=(0,t.v9)((function(e){return e.wholesaleClientCertificate})),a=(0,t.v9)((function(e){return e.invFormStatus}));return(0,v.jsxs)("div",{className:"sub__form",children:[(0,v.jsx)(d.Z,{placeholder:"Membership No.",id:"membership-no.",label:"Membership No.",asterisk:"*",name:"membership_number",value:null===i||void 0===i?void 0:i.membership_number,onChangeFn:n,formErrors:a.errors}),(0,v.jsx)(d.Z,{placeholder:"e.g. CPA, IPA, CA",id:"membership-designation",label:"Membership Designation",asterisk:"*",name:"membership_designation",value:null===i||void 0===i?void 0:i.membership_designation,onChangeFn:n,formErrors:a.errors})]})},E=i(6149);var U=function(e){var n,i,a=e.onChangeProfessionalbodyFn,o=(0,t.v9)((function(e){return e.wholesaleClientCertificate})),r=(0,t.v9)((function(e){return e.invFormStatus}));return(0,v.jsxs)("div",{className:"u-margin-bottom-lg select-dropdown-width",children:[(0,v.jsxs)("label",{htmlFor:"sec-g-1-professional-body",children:["Professional Body ",(0,v.jsx)("span",{children:"*"})]}),(0,v.jsxs)(E.Z.Control,{className:"u-margin-bottom-lg",as:"select",id:"sec-g-1-professional-body",name:"professional_body",value:null===o||void 0===o?void 0:o.professional_body,onChange:a,children:[(0,v.jsx)("option",{}),(0,v.jsx)("option",{value:u.GN,children:"Chartered Accountants Australia and New Zealand"}),(0,v.jsx)("option",{value:u.CK,children:"CPA Australia"}),(0,v.jsx)("option",{value:u.FA,children:"Institute of Public Accountants"}),(0,v.jsx)("option",{value:u.KI,children:"The American Institute of Certified Public Accountants"}),(0,v.jsx)("option",{value:u.Xy,children:"Association of Certified Chartered Accountants (United Kingdom)"}),(0,v.jsx)("option",{value:u.L2,children:"Canadian Institute of Chartered Accountants"}),(0,v.jsx)("option",{value:u.ls,children:"Institute of Chartered Accountants of New Zealand"}),(0,v.jsx)("option",{value:u.Lz,children:"The Institute of Chartered Accountants in England and Wales"}),(0,v.jsx)("option",{value:u.se,children:"The Institute of Chartered Accountants in Ireland"}),(0,v.jsx)("option",{value:u.Gg,children:"The Institute of Chartered Accountants of Scotland"})]}),null!==r&&void 0!==r&&null!==(n=r.errors)&&void 0!==n&&n.professional_body?(0,v.jsx)("div",{className:"input__desc",children:(0,h.O)(null===r||void 0===r||null===(i=r.errors)||void 0===i?void 0:i.professional_body)}):null]})},P=i(7035),R=i(5577),T=function(e){var n=e.onChangeInputFn,i=e.onChangeProfessionalbodyFn,a=(0,t.v9)((function(e){return e.wholesaleClientCertificate})),r=(0,t.v9)((function(e){return e.invFormStatus})),l=(0,o.useCallback)((function(){for(var e=["accountant_email","accountant_full_name","address_1","phone","membership_number","membership_designation"],i=0;i<e.length;i++)n({name:e[i],value:""});n({name:"professional_body",value:0})}),[]);return(0,o.useEffect)((function(){return function(){l()}}),[l]),(0,v.jsxs)("div",{className:"section__container--box",children:[(0,v.jsxs)("div",{className:"u-padding-y",children:[(0,v.jsx)(d.Z,{placeholder:"Accountant's Email",id:"accountant-email",label:"Accountant's Email",asterisk:"*",name:"accountant_email",value:null===a||void 0===a?void 0:a.accountant_email,type:"form-input-full-width",onChangeFn:n,formErrors:r.errors}),(0,v.jsx)(d.Z,{placeholder:"Full Name of Qualified Accountant",id:"fullname-of-qualified-accountant",label:"Full Name of Qualified Accountant",asterisk:"*",name:"accountant_full_name",value:null===a||void 0===a?void 0:a.accountant_full_name,type:"form-input-full-width",onChangeFn:n,formErrors:r.errors}),(0,v.jsx)(d.Z,{placeholder:"Address",id:"address",label:"Address",asterisk:"",type:"form-input-full-width",name:"address_1",value:null===a||void 0===a?void 0:a.address_1,onChangeFn:n,formErrors:r.errors}),(0,v.jsx)(d.Z,{placeholder:"Phone",id:"phone",label:"Phone",inputType:"tel",asterisk:"",type:"form-input-full-width u-margin-bottom-0",name:"phone",value:null===a||void 0===a?void 0:a.phone,onChangeFn:n,formErrors:r.errors})]}),(0,v.jsx)(U,{onChangeProfessionalbodyFn:i}),(0,v.jsx)(S,{onChangeInputFn:n}),(0,v.jsx)("hr",{})]})},L=function(e){var n,i,a,r=e.onAddFiles,l=e.uploadedDocs,s=e.onClickRemove,c=e.onClickDel,d=(0,t.v9)((function(e){return e.invFormStatus}));return(0,v.jsxs)(o.Fragment,{children:[(0,v.jsx)("h6",{className:"u-padding-y",children:"Please upload the Certificate"}),(0,v.jsx)(N.Z,{onAddFiles:r,uploadedDocs:l,onClickRemove:s,onClickDel:c,uniqId:"wholesaleinvestoraccountantdocs"}),null!==d&&void 0!==d&&null!==(n=d.errors)&&void 0!==n&&null!==(i=n.document_url)&&void 0!==i&&i.length?(0,v.jsx)("div",{className:"input__desc",children:(0,h.O)(null===d||void 0===d||null===(a=d.errors)||void 0===a?void 0:a.document_url)}):null,(0,v.jsx)("hr",{})]})},M=function(e){var n,i,a=e.onFormChange,r=(0,R.p)(),l=(0,t.v9)((function(e){return e.wholesaleClientCertificate})),s=(0,t.v9)((function(e){return e.invFormStatus})),d=(0,o.useState)([]),f=(0,y.Z)(d,2),m=f[0],p=f[1],g=function(e){var n=e.name,i=e.value,o=i&&parseInt(i);a({name:n,value:o})},x=function(e){var n=e.name,i=e.value;a({name:n,value:i})},_=function(e){var n=e.name,i=e.value;a({name:n,value:i,level:"document-add"})},j=function(e){e.fileName;var n=e.docData;a({value:null===n||void 0===n?void 0:n.docUrl,level:"document-remove"})},N=function(){var e=(0,C.Z)((0,b.Z)().mark((function e(n){var i,a,o,t,r,l,s;return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=13;break}return i=n.name,(a=new FormData).append("file",n),e.next=6,(0,Z.dA)(a);case 6:o=e.sent,t=o.success,r=o.url,l=o.data,t&&_({name:"document_url",value:r}),s={loader:t?u.MR:u.ig,docUrl:r,resData:l},(0,P.j5)({setUploadedDocs:p,fileName:i,extradata:s});case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),F=function(e){(0,P.nW)({fileName:e,uploadedDocs:m,setUploadedDocs:p})},I=function(){var e=(0,C.Z)((0,b.Z)().mark((function e(n){var i,a,o,t;return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.fileName,a=n.docData,(0,P.j5)({setUploadedDocs:p,fileName:i,extradata:{delLoader:!0}}),e.next=4,(0,Z.AB)(null===a||void 0===a?void 0:a.resData);case 4:o=e.sent,(t=o.success)&&F(i),t&&j({docData:a}),t&&r.success("Deleted successfully!"),t||(0,P.j5)({setUploadedDocs:p,fileName:i,extradata:{delLoader:!1}}),t||r.error("Please try again!");case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsxs)("div",{className:"section__container",children:[(0,v.jsx)("h4",{className:"section__container--subtitle",children:"Qualified Accountant Certification"}),(0,v.jsxs)("div",{className:"section__container--box",children:[(0,v.jsxs)("h5",{className:"section__container--box--subtitle",children:["Do you have a separate Certificate available? ",(0,v.jsx)("span",{children:"*"})]}),(0,v.jsxs)("div",{className:"row-space-between",children:[(0,v.jsx)(c.Z,{name:"certificate_availability",id:"certificate_availability_yes",content:"Yes",val:u.z7,type:"",checked:(null===l||void 0===l?void 0:l.certificate_availability)===u.z7,onChangeFn:g}),(0,v.jsx)(c.Z,{name:"certificate_availability",id:"certificate_availability_no",content:"No",val:u.nC,type:"",checked:(null===l||void 0===l?void 0:l.certificate_availability)===u.nC,onChangeFn:g})]}),null!==s&&void 0!==s&&null!==(n=s.errors)&&void 0!==n&&n.certificate_availability?(0,v.jsx)("div",{className:"input__desc",children:(0,h.O)(null===s||void 0===s||null===(i=s.errors)||void 0===i?void 0:i.certificate_availability)}):null]}),(null===l||void 0===l?void 0:l.certificate_availability)===u.nC?(0,v.jsx)(T,{onChangeInputFn:x,onChangeProfessionalbodyFn:function(e){var n=e.target,i=n.name,o=n.value,t=o&&parseInt(o);a({name:i,value:t})}}):null,(0,v.jsxs)("div",{className:"section__container--box",children:[(null===l||void 0===l?void 0:l.certificate_availability)===u.z7?(0,v.jsx)(L,{onAddFiles:function(e){(0,P.B1)({files:e,uploadedDocs:m,setUploadedDocs:p,onUploadFile:N,selectedDocType:{}})},uploadedDocs:m,onClickRemove:F,onClickDel:I}):null,(null===l||void 0===l?void 0:l.certificate_availability)===u.nC?(0,v.jsx)("div",{className:"text__box u-margin-bottom",children:(0,v.jsx)("p",{className:"text__box--p u-padding-y",children:"I, the above named Qualified Accountant, confirm that I comply with this body's continuing professional education requirements. I certify that the above named person/entity is a Qualifying Investor in accordance with the category indicated in Section H.1 above."})}):null,(0,v.jsx)(A,{onChangeInputFn:x}),(0,v.jsx)("div",{className:"note__box",children:(0,v.jsxs)("p",{className:"note__box--p",children:[(0,v.jsx)("span",{children:"Note:"})," For information on this certificate or a list of accountant qualifications, please refer to ",(0,v.jsx)("a",{href:"https://asic.gov.au/regulatory-resources/financial-services/financial-product-disclosure/certificates-issued-by-a-qualified-accountant/",children:"https://asic.gov.au/regulatory-resources/financial-services/financial-product-disclosure/certificates-issued-by-a-qualified-accountant/"})]})})]})]})},q=function(e){var n=e.onFormChange,i=e.onSubmit,o=(0,t.v9)((function(e){return e.wholesaleClientCertificate})),s=function(e){var i=e.name,t=e.value,r=e.investorId-1,l=(0,a.Z)(null===o||void 0===o?void 0:o.investor_details);l[r][i]=t,n({name:"investor_details",value:(0,a.Z)(l)})};return(0,v.jsxs)("div",{className:"indp__section",children:[(0,v.jsxs)("div",{className:"indp__header",children:[(0,v.jsxs)("div",{className:"indp__header--textContent",children:[(0,v.jsx)("h1",{children:"Certificate by Qualified Accountant"}),(0,v.jsx)("div",{className:"note__box",children:(0,v.jsx)("ul",{className:"normal-text u-margin-bottom-0",children:(0,v.jsx)("li",{children:"Chapters 6D or 7 of the Corporations Act 2001."})})})]}),(0,v.jsx)("div",{className:"indp__header--logo",children:(0,v.jsx)("img",{src:r,alt:"The SILC Group",role:"presentation"})})]}),(0,v.jsxs)("div",{className:"section",children:[(0,v.jsx)(x,{onFormChange:n,onChangeInvestorFn:s}),(0,v.jsx)(j,{onChangeInvestorFn:s}),(0,v.jsx)(M,{onFormChange:n}),(0,v.jsx)(l.Z,{onSubmit:i,onFormChange:n})]})]})}},7035:function(e,n,i){i.d(n,{B1:function(){return r},j5:function(){return l},nW:function(){return s}});var a=i(1413),o=i(2982),t=i(188),r=function(e){var n=e.files,i=e.uploadedDocs,r=e.setUploadedDocs,l=e.onUploadFile,s=e.selectedDocType,c=e.selectedEntityNum,d=void 0===c?{}:c,u=e.doNotShowExtraLabel,v=void 0===u?[]:u,f=(0,o.Z)(i);n.some((function(e){-1===f.findIndex((function(n){return n.file.name===e.name}))&&(l(e,(0,a.Z)({},s),(0,a.Z)({},d)),f.push((0,a.Z)({file:e,loader:t.br,docUrl:"",type:(0,a.Z)({},s)},!(null===v||void 0===v||!v.length)&&(!v.includes(s.value)&&{extraDetails:(0,a.Z)({},d)}))))})),r(f)},l=function(e){var n=e.setUploadedDocs,i=e.fileName,o=e.extradata,t=void 0===o?{}:o;n((function(e){return e.map((function(e){return e.file.name===i?(0,a.Z)((0,a.Z)({},e),t):e}))}))},s=function(e){var n=e.fileName,i=e.uploadedDocs,a=e.setUploadedDocs,t=(0,o.Z)(i).filter((function(e){return e.file.name!==n}));a((0,o.Z)(t))}}}]);
//# sourceMappingURL=880.8f975512.chunk.js.map