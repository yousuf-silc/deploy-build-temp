"use strict";(self.webpackChunksilc=self.webpackChunksilc||[]).push([[418],{9427:function(e,n,a){a.d(n,{Z:function(){return s}});var l=a(885),o=a(2791),t=a(4483),i=a(3174),r=a(184),c=function(e){var n,a=e.onSelectOption,l=e.dropdownOptions,o=void 0===l?[]:l,t=e.addClass,i=e.renderLabel;return(0,r.jsx)("div",{className:"dropdown__main--options ".concat(t),children:(n=o,n.map((function(e){return function(e){var n=e.label,l=e.value;return(0,r.jsx)("p",{onClick:function(){return a({label:n,value:l})},children:i({label:n,value:l})},"".concat(l))}({label:e[1],value:e[0]})})))})},s=function(e){var n=e.dropdownOptions,a=e.selectedOption,s=e.updateSelectedOption,d=e.addClass,u=void 0===d?"":d,f=e.extraLabel,p=void 0===f?"":f,v=e.doNotShowExtraLabelSpecial,m=void 0===v?[]:v,h=(0,o.useState)(!1),x=(0,l.Z)(h,2),j=x[0],b=x[1],g=function(){return b((function(e){return!e}))},N=function(e){var n=(null===e||void 0===e?void 0:e.label)||"";return m.includes(null===e||void 0===e?void 0:e.value)?n:null!==e&&void 0!==e&&e.label&&p?"".concat(e.label," ").concat(p):n};return(0,r.jsxs)("div",{className:"dropdown__main",children:[(0,r.jsxs)("div",{className:"dropdown__main--selected",onClick:g,children:[(0,r.jsx)("label",{children:N(a)}),(0,r.jsx)(t.G,{icon:j?i.l1h:i.eW2})]}),j&&(0,r.jsx)(c,{onSelectOption:function(e){var n=e.label,a=e.value;s({label:n,value:a}),g()},dropdownOptions:n,addClass:u,renderLabel:N})]})}},2273:function(e,n,a){a(2791);var l=a(4233),o=a(3985),t=a(2657),i=a(184);n.Z=function(e){var n=e.placeholder,a=e.id,r=e.label,c=e.type,s=e.asterisk,d=e.belowText,u=e.inputType,f=e.name,p=e.value,v=e.onChangeFn,m=e.formErrors,h=void 0===m?{}:m,x=e.maxDate,j=(0,l.v9)((function(e){return e.invFormStatus}));return(0,i.jsxs)("div",{className:"form-input ".concat(c||""," ").concat(function(){var e,n;return!!h[f]&&((0,o.kJ)(h[f])?!(null===(e=h[f][0])||void 0===e||!e.length):!(null===(n=h[f])||void 0===n||!n.length))}()?"incorrect":""),children:[(0,i.jsxs)("label",{htmlFor:a,children:[r," ",""!==s?(0,i.jsx)("span",{children:"*"}):null]}),(0,i.jsx)("input",{className:"form-input-common",type:u||"text",placeholder:n,id:a,required:""!==s,name:f,value:p||"",onChange:function(e){var n=e.target,a=n.name,l=n.value;v({name:a,value:l})},disabled:!!j.loader,max:x||null}),d?(0,i.jsx)("div",{className:"input__desc",children:(0,i.jsx)("p",{className:"input__desc--p",children:d})}):null,h[f]?(0,o.kJ)(h[f])?(0,t.O)(h[f]):(0,t.O)([h[f]]):null]})}},3864:function(e,n,a){var l=a(2791),o=a(4483),t=a(3174),i=a(5122),r=a(6437),c=a(188),s=a(184);n.Z=function(e){var n=e.uploadedDocs,a=void 0===n?[]:n,d=e.onAddFiles,u=e.onClickRemove,f=e.onClickDel,p=e.multiple,v=void 0===p||p,m=e.accept,h=void 0===m?"application/pdf, image/*":m,x=e.uniqId,j=["image/jpg","image/jpeg","image/png","application/pdf"],b=function(e){for(var n=new DataTransfer,a=document.getElementById("file-doc-in-".concat(x)),l=a.files,o=0;o<l.length;o++){var t=l[o];e!==t.name&&n.items.add(t)}a.files=n.files},g=function(e){var n=e.fileName,a=e.fileData;return null!==a&&void 0!==a&&a.delLoader?(0,s.jsxs)("span",{style:{marginLeft:10},children:[" ",(0,s.jsx)(r.o_,{})," "]}):(0,s.jsx)("span",{style:{marginLeft:10},onClick:function(){return function(e){var n=e.fileName,a=e.fileData;f({fileName:n,docData:a}),b(n)}({fileName:n,fileData:a})},children:(0,s.jsx)(o.G,{className:"docPreviewDelIcon",icon:t.I7k})})},N=function(e,n,a){return e===c.MR?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.G,{icon:t.LEp}),g({fileName:n,fileData:a})]}):e===c.ig?(0,s.jsxs)("button",{className:"link-button",onClick:function(){return function(e){u(e),b(e)}(n)},children:["upload failed ",(0,s.jsx)(o.G,{icon:i.NBC})]}):e===c.br?(0,s.jsx)(r.o_,{}):void 0},y=function(e){var n,a,l,o;return null!==e&&void 0!==e&&null!==(n=e.type)&&void 0!==n&&n.label&&null!==e&&void 0!==e&&null!==(a=e.extraDetails)&&void 0!==a&&a.label?"(".concat(e.type.label," - ").concat(null===e||void 0===e||null===(o=e.extraDetails)||void 0===o?void 0:o.label,")"):null!==e&&void 0!==e&&null!==(l=e.type)&&void 0!==l&&l.label?"(".concat(e.type.label,")"):""};return(0,s.jsxs)(l.Fragment,{children:[(0,s.jsx)("div",{className:"docPlaceholder",children:(0,s.jsxs)("div",{className:"docPlaceholder__container",children:[(0,s.jsx)("input",{type:"file",id:"file-doc-in-".concat(x),className:"docPlaceholder__container--input ".concat(""),onChange:function(e){var n=(Array.prototype.slice.call(e.target.files)||[]).filter((function(e){return j.includes(e.type)}));d(n)},multiple:v,accept:h}),(0,s.jsx)("label",{htmlFor:"file-doc-in-".concat(x),id:"uploadDocLabel",className:"docPlaceholder__container--p",children:"Drag your documents here to start uploading"})]})}),(0,s.jsx)("div",{className:"docPlaceholder__uploaded",children:a.map((function(e){return(0,s.jsxs)("div",{className:"docPlaceholder__uploaded--responses",children:[(0,s.jsx)("a",{className:"link-button",target:"_blank",href:null!==e&&void 0!==e&&e.docUrl?null===e||void 0===e?void 0:e.docUrl:null,rel:"noreferrer",children:e.file.name}),(0,s.jsx)("span",{className:"uploaded-file-label",children:y(e)}),(0,s.jsx)("span",{style:{marginLeft:5},children:N(e.loader,e.file.name,e)})]},e.file.name)}))})]})}},6418:function(e,n,a){a.r(n),a.d(n,{default:function(){return g}});var l=a(885),o=a(2791),t=a(4233),i=a(1413),r=a(4165),c=a(5861),s=a(188),d=(a(2819),a(2273),a(184)),u=a(3864),f=a(2104);a(2657);a(9452);var p=a(9427),v=a(7035),m=a(5577),h=function(e){e.onFormChange;var n=e.investorFormId,a=(0,m.p)(),h=((0,t.v9)((function(e){return e.secH})),(0,t.v9)((function(e){return e.invFormStatus})),(0,o.useState)({label:"Select type of document",value:""})),x=(0,l.Z)(h,2),j=x[0],b=x[1],g=(0,o.useState)([]),N=(0,l.Z)(g,2),y=N[0],D=N[1],_=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(a){var l,o,t,i,c,d,u,p,m=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=m.length>1&&void 0!==m[1]?m[1]:{label:"",value:""},!a){e.next=16;break}return o=a.name,(t=new FormData).append("file",a),t.append("type",l.value),t.append("section","h"),t.append("investor_form_id",n),e.next=10,(0,f.IL)(t);case 10:i=e.sent,c=i.success,d=i.url,u=i.data,p={loader:c?s.MR:s.ig,docUrl:d,resData:u},(0,v.j5)({setUploadedDocs:D,fileName:o,extradata:p});case 16:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Z=function(e){(0,v.nW)({fileName:e,uploadedDocs:y,setUploadedDocs:D})},C=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n){var l,o,t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=n.fileName,o=n.docData,(0,v.j5)({setUploadedDocs:D,fileName:l,extradata:{delLoader:!0}}),e.next=4,(0,f._I)(null===o||void 0===o?void 0:o.resData);case 4:t=e.sent,(i=t.success)&&Z(l),i&&a.success("Deleted successfully!"),i||(0,v.j5)({setUploadedDocs:D,fileName:l,extradata:{delLoader:!1}}),i||a.error("Please try again!");case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:"section__container--box",children:[(0,d.jsx)("h6",{className:"u-padding-y",children:"Please upload your certificate below. Certificates must not issued more than 2 years before the date of this application and must include the accountant signature, information of the accountant membership of an eligible professional body."}),(0,d.jsx)(p.Z,{dropdownOptions:s.mP,selectedOption:j,updateSelectedOption:function(e){b((0,i.Z)({},e))}}),null!==j&&void 0!==j&&j.value?(0,d.jsx)("div",{className:"u-padding-y",children:(0,d.jsx)(u.Z,{onAddFiles:function(e){(0,v.B1)({files:e,uploadedDocs:y,setUploadedDocs:D,onUploadFile:_,selectedDocType:(0,i.Z)({},j)})},uploadedDocs:y,onClickRemove:Z,onClickDel:C,uniqId:"qualifiedaccountantcert_h"})}):null,(0,d.jsx)("div",{className:"note__box u-padding-y u-margin-bottom",children:(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:"Note:"})," For information on this certificate or a list of accountant qualifications, please refer to ",(0,d.jsx)("a",{href:"https://asic.gov.au/regulatory-resources/financial-services/financial-product-disclosure/certificates-issued-by-a-qualified-accountant/",target:"_blank",rel:"noreferrer",children:"https://asic.gov.au/regulatory-resources/financial-services/financial-product-disclosure/certificates-issued-by-a-qualified-accountant/"})]})})]})},x=a(6437),j=a(3985),b=o.lazy((function(){return a.e(159).then(a.bind(a,3159))})),g=function(e){var n,a=e.onFormChange,i=e.investorFormId,r=e.removeDocFromArr,c=(0,t.v9)((function(e){return e.secH})),u=((0,t.v9)((function(e){return e.invFormStatus})),[s.Ly,s.C4,s.X2]),f=(0,o.useState)(!1),p=(0,l.Z)(f,2),v=p[0],m=p[1];return(0,o.useEffect)((function(){var e,n=null===c||void 0===c||null===(e=c.category_details)||void 0===e?void 0:e.some((function(e,n){if(u.includes(null===e||void 0===e?void 0:e.category))return!0}));m(n)}),[c]),(0,d.jsxs)("div",{className:"section",children:[(0,d.jsx)("h2",{className:"section__heading",children:"Section H: Certificate by Qualified Accountant"}),(0,d.jsx)("ul",{className:"u-margin-bottom-0",children:(0,d.jsx)("li",{children:"Chapters 6D or 7 of the Corporations Act 2001."})}),(0,d.jsxs)("div",{className:"section__container",children:[(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)(x.DU,{}),children:(0,d.jsx)(b,{onFormChange:a,investorFormId:i})}),v?(0,d.jsx)(h,{onFormChange:a,investorFormId:i}):null]}),(null===c||void 0===c||null===(n=c.documents)||void 0===n?void 0:n.length)>0?(0,j.zW)(null===c||void 0===c?void 0:c.documents,r):null]})}},7035:function(e,n,a){a.d(n,{B1:function(){return i},j5:function(){return r},nW:function(){return c}});var l=a(1413),o=a(2982),t=a(188),i=function(e){var n=e.files,a=e.uploadedDocs,i=e.setUploadedDocs,r=e.onUploadFile,c=e.selectedDocType,s=e.selectedEntityNum,d=void 0===s?{}:s,u=e.doNotShowExtraLabel,f=void 0===u?[]:u,p=(0,o.Z)(a);n.some((function(e){-1===p.findIndex((function(n){return n.file.name===e.name}))&&(r(e,(0,l.Z)({},c),(0,l.Z)({},d)),p.push((0,l.Z)({file:e,loader:t.br,docUrl:"",type:(0,l.Z)({},c)},!(null===f||void 0===f||!f.length)&&(!f.includes(c.value)&&{extraDetails:(0,l.Z)({},d)}))))})),i(p)},r=function(e){var n=e.setUploadedDocs,a=e.fileName,o=e.extradata,t=void 0===o?{}:o;n((function(e){return e.map((function(e){return e.file.name===a?(0,l.Z)((0,l.Z)({},e),t):e}))}))},c=function(e){var n=e.fileName,a=e.uploadedDocs,l=e.setUploadedDocs,t=(0,o.Z)(a).filter((function(e){return e.file.name!==n}));l((0,o.Z)(t))}}}]);
//# sourceMappingURL=418.93cb9abf.chunk.js.map