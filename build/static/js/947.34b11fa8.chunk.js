"use strict";(self.webpackChunksilc=self.webpackChunksilc||[]).push([[947],{2947:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var o=t(2791),a=t(4233),i=t(2819),r=t(2273),l=t(184),s=function(e){var n=e.id,t=e.afsl,a=e.onChangeIn,i=e.errMsgs;return(0,o.useEffect)((function(){return function(){a({name:"afsl",value:""})}}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.Z,{type:"form-input-full-width u-margin-bottom-0 u-padding-y",label:"AFSL Number",asterisk:"*",id:n,placeholder:"AFSL Number",name:"afsl",value:t,onChangeFn:a,formErrors:i})})},c=t(188),d=t(2657),u=function(e){var n=e.id,t=e.name_of_listed_entity,a=e.onChangeIn,i=e.errMsgs;return(0,o.useEffect)((function(){return function(){a({name:"name_of_listed_entity",value:""})}}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.Z,{type:"form-input-full-width u-margin-bottom-0 u-padding-y",label:"Please advise a name of listed entity",placeholder:"Please advise a name of listed entity",id:n,asterisk:"*",name:"name_of_listed_entity",value:t,onChangeFn:a,formErrors:i})})},v=function(e){var n=e.id,t=e.name_of_exempt_public_authority,a=e.onChangeIn,i=e.errMsgs;return(0,o.useEffect)((function(){return function(){a({name:"name_of_exempt_public_authority",value:""})}}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.Z,{type:"form-input-full-width u-margin-bottom-0 u-padding-y",label:"Please advise name of exempt public authority",placeholder:"Please advise name of exempt public authority",id:n,asterisk:"*",name:"name_of_exempt_public_authority",value:t,onChangeFn:a,formErrors:i})})},m=function(e){var n,t,o,r,m,f,y,h,g,_=e.investorData,p=e.invId,x=e.investorIndex,b=e.onChangeInvstrData,C=e.itemIndex,j=(0,a.v9)((function(e){return e.invFormStatus})),I={category:null!==(n=j.errors)&&void 0!==n&&n.category?null===(t=j.errors)||void 0===t?void 0:t.category[C]:[],afsl:null!==(o=j.errors)&&void 0!==o&&o.afsl?null===(r=j.errors)||void 0===r?void 0:r.afsl[C]:[],name_of_exempt_public_authority:null!==(m=j.errors)&&void 0!==m&&m.name_of_exempt_public_authority?null===(f=j.errors)||void 0===f?void 0:f.name_of_exempt_public_authority[C]:[],name_of_listed_entity:null!==(y=j.errors)&&void 0!==y&&y.name_of_listed_entity?null===(h=j.errors)||void 0===h?void 0:h.name_of_listed_entity[C]:[]},F=function(e){e.name;var n=e.value,t=parseInt(n);b({name:"category",value:t,investorId:p})},k=function(e){var n=e.name,t=e.value;b({name:n,value:t,investorId:p})};return(0,l.jsxs)("div",{className:"section__container--box",children:[(0,l.jsx)("h5",{className:"u-padding-10y",children:"Investor ".concat(x)}),(0,l.jsxs)("div",{children:[(0,l.jsx)(i.Z,{name:"investor-".concat(x,"-category"),id:"investor-".concat(x,"-5L-units"),content:"I am applying for AU$500,000 or more worth of Units individually",val:c.s4,checked:(null===_||void 0===_?void 0:_.category)===c.s4,onChangeFn:F}),(0,l.jsx)(i.Z,{type:"",name:"investor-".concat(x,"-category"),id:"investor-".concat(x,"-25m-units"),content:"I have net assets of at least AU$2.5 million (Please upload Qualified Accountant Certificate)",val:c.Ly,checked:(null===_||void 0===_?void 0:_.category)===c.Ly,onChangeFn:F}),(0,l.jsx)(i.Z,{type:"row-input",name:"investor-".concat(x,"-category"),id:"investor-".concat(x,"-25L-income"),content:"I have earned at least AU$250,000 per annum gross income for each of the last two (2) financial years  (Please upload Qualified Accountant Certificate)",val:c.C4,checked:(null===_||void 0===_?void 0:_.category)===c.C4,onChangeFn:F}),(0,l.jsx)(i.Z,{type:"",name:"investor-".concat(x,"-category"),id:"investor-".concat(x,"-10m-assets"),content:"I have or control gross assets of at least AU$10 million (Please upload Qualified Accountant Certificate)",val:c.X2,checked:(null===_||void 0===_?void 0:_.category)===c.X2,onChangeFn:F}),(0,l.jsx)(i.Z,{name:"investor-".concat(x,"-category"),id:"investor-".concat(x,"-listed-rel-body"),content:"We are a listed entity or a related body corporate of a listed entity",val:c.Rq,checked:(null===_||void 0===_?void 0:_.category)===c.Rq,onChangeFn:F}),(null===_||void 0===_?void 0:_.category)===c.Rq?(0,l.jsx)(u,{id:p,name_of_listed_entity:null===_||void 0===_?void 0:_.name_of_listed_entity,onChangeIn:k,errMsgs:I},p):null,(0,l.jsx)(i.Z,{name:"investor-".concat(x,"-category"),id:"investor-".concat(x,"-exemp-public"),content:"I/we are an exempt public authority (or a wholly owned subsidiary of one)",val:c.y$,checked:(null===_||void 0===_?void 0:_.category)===c.y$,onChangeFn:F}),(null===_||void 0===_?void 0:_.category)===c.y$?(0,l.jsx)(v,{id:p,name_of_exempt_public_authority:null===_||void 0===_?void 0:_.name_of_exempt_public_authority,onChangeIn:k,errMsgs:I},p):null,(0,l.jsx)(i.Z,{name:"investor-".concat(x,"-category"),id:"investor-".concat(x,"-afs-licence"),content:"I hold a Australian Financial Services Licence (AFSL) or a subsidiary of an AFSL holder",val:c.WU,checked:(null===_||void 0===_?void 0:_.category)===c.WU,onChangeFn:F}),(null===_||void 0===_?void 0:_.category)===c.WU?(0,l.jsx)(s,{id:p,afsl:null===_||void 0===_?void 0:_.afsl,onChangeIn:k,errMsgs:I},p):null,null!==I&&void 0!==I&&null!==(g=I.category)&&void 0!==g&&g.length?(0,l.jsx)("div",{className:"input__desc",children:(0,d.O)(I.category)}):null]})]},x)}}}]);
//# sourceMappingURL=947.34b11fa8.chunk.js.map