"use strict";(self.webpackChunksilc=self.webpackChunksilc||[]).push([[77],{3077:function(e,n,i){i.r(n),i.d(n,{default:function(){return u}});var s=i(4233),t=i(9452),a=i(2657),o=i(6437),r=i(184),c=function(e){var n=e.onFormChange,i=e.fundDetails,c=e.formErrors,l=e.loading,m=void 0===l?"":l,d=(0,s.v9)((function(e){return e.secA})),u=m?(0,r.jsx)(o.o_,{}):"",h=i.asset_title?i.asset_title:u,_=i.bsb?i.bsb:u,x=i.account_number?i.account_number:u,b=i.bank_name?i.bank_name:u,v=i.swift?i.swift:u;return(0,r.jsxs)("div",{className:"section__container",children:[(0,r.jsx)("h4",{className:"section__container--subtitle",title:"A.1 Investment Details",children:"A.1 Investment Details"}),(0,r.jsxs)("div",{className:"section__container--box",children:[(0,r.jsx)("h5",{className:"u-margin-bottom-xl",children:"Your Commitment"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"u-margin-bottom-lg",children:[(0,r.jsx)("label",{children:"Firm Commitment Amount* (AUD)"}),(0,r.jsxs)("div",{className:"input__holder ".concat(null!==c&&void 0!==c&&c.firm_commitment_amount?"incorrect":""),children:[(0,r.jsx)("span",{className:"input__holder--icon",children:"$"}),(0,r.jsx)("input",{type:"text",className:"custom-input",placeholder:"Firm Commitment Amount",name:"firm_commitment_amount",value:(0,t.Pu)(d.firm_commitment_amount)||"",onChange:function(e){var i,s,a=e.target,o=a.name,r=a.value,c=(0,t.Pu)(r),l=null===c||void 0===c||null===(i=c.toString())||void 0===i?void 0:i.replaceAll(",",""),m=""===l||(0,t.hj)(l);m&&l&&(s=parseFloat(l)),m&&n({name:o,value:s||l})},disabled:!!m})]}),null!==c&&void 0!==c&&c.firm_commitment_amount?(0,r.jsx)("div",{className:"input__desc",children:(0,a.O)(null===c||void 0===c?void 0:c.firm_commitment_amount)}):null]}),(0,r.jsx)("div",{className:"note__box u-padding-10y bold",children:(0,r.jsx)("p",{className:"note__box--p",children:"This amount does not need to be paid upfront. You will be issued with a Capital Call notice when the monies are required."})})]}),(0,r.jsx)("div",{className:"note__box u-padding-10y",children:(0,r.jsx)("p",{className:"note__box--p u-margin-bottom-xxl",children:"*By selecting this Firm Commitment option and executing this Application Form, you make a legally binding commitment to invest the nominated Firm Commitment amount in the Fund on the terms set out in the IM and the relevant SIM. Failure to pay the Firm Commitment amount when called constitutes a breach of contract and you will be liable to the Trustee and Investment Manager for any losses suffered by one or more of them arising from the breach as well as possible forfeiture of your investments in the Fund pursuant to the terms of the Trust Deed, IM and SIM."})})]}),(0,r.jsxs)("div",{className:"section__container--box",children:[(0,r.jsx)("h5",{className:"section__container--box--subtitle",children:"Direct Credit / EFT Instructions:"}),(0,r.jsx)("div",{className:"note__box",children:(0,r.jsx)("p",{className:"note__box--p",children:"Please transfer investor funds amount to:"})}),(0,r.jsxs)("div",{className:"box__container",children:[(0,r.jsxs)("h6",{className:"box__container--subheading",children:["Fund Name: ",(0,r.jsx)("span",{className:"fund-name",children:h})]}),(0,r.jsxs)("div",{className:"box__container--row",children:[(0,r.jsx)("h6",{className:"box__container--subheading",children:"BSB:"}),(0,r.jsx)("p",{className:"u-margin-bottom-0",children:_})]}),(0,r.jsxs)("div",{className:"box__container--row",children:[(0,r.jsx)("h6",{className:"box__container--subheading",children:"Account Number:"}),(0,r.jsx)("p",{className:"u-margin-bottom-0",children:x})]}),(0,r.jsxs)("div",{className:"box__container--row",children:[(0,r.jsx)("h6",{className:"box__container--subheading",children:"Bank Name:"}),(0,r.jsx)("p",{className:"u-margin-bottom-0",children:b})]}),(0,r.jsxs)("div",{className:"box__container--row",children:[(0,r.jsx)("h6",{className:"box__container--subheading",children:"SWIFT:"}),(0,r.jsx)("p",{className:"u-margin-bottom-0",children:v})]}),(0,r.jsx)("div",{className:"note__box u-padding-10y u-padding-bottom-0",children:(0,r.jsx)("p",{className:"note__box--p",children:"Please note the Applicant's name in the reference when transferring the funds. The amount transferred must be the exact amount of the investment. Please ensure amounts transferred are net of all bank charges."})})]})]})]})},l=i(2819),m=i(188),d=function(e){var n=e.onFormChange,i=e.formErrors,t=(0,s.v9)((function(e){return e.secA})),o=function(e){var i=e.name,s=e.value,t=s&&parseInt(s);n({name:i,value:t})};return(0,r.jsxs)("div",{className:"section__container",children:[(0,r.jsx)("h4",{className:"section__container--subtitle",children:"A.2 Distributions"}),(0,r.jsx)("div",{className:"section__container--box",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("h6",{children:["Please indicate what you would like to do with your distributions",(0,r.jsx)("span",{children:"*"})]}),(0,r.jsx)(l.Z,{name:"distribution_choice",id:"pay-into-nominated-bank-account",content:"Pay into nominated bank account (see section B.3)",val:m.dJ,checked:t.distribution_choice===m.dJ,onChangeFn:o}),(0,r.jsx)(l.Z,{name:"distribution_choice",id:"reinvest-into-the-same-units",content:"Reinvest into the same Units (if available)",val:m.cE,checked:t.distribution_choice===m.cE,onChangeFn:o}),null!==i&&void 0!==i&&i.distribution_choice?(0,r.jsx)("div",{className:"input__desc",children:(0,a.O)(null===i||void 0===i?void 0:i.distribution_choice)}):null,(0,r.jsx)("div",{className:"note__box",children:(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{children:"Note:"})," Unless otherwise stipulated in the IM, if no selection is made, the distributions will be paid to your nominated account by default."]})})]})})]})},u=function(e){var n=e.onFormChange,i=e.fundDetails,s=e.formErrors,t=e.loading;return(0,r.jsxs)("div",{className:"section",children:[(0,r.jsx)("h2",{className:"section__heading",children:"Section A: Your Investment"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"All investors must complete this section."}),(0,r.jsx)("li",{children:"All fields in Section A MUST be completed."})]}),(0,r.jsx)(c,{onFormChange:n,fundDetails:i,formErrors:s,loading:t}),(0,r.jsx)(d,{onFormChange:n,formErrors:s})]})}}}]);
//# sourceMappingURL=77.e33818fe.chunk.js.map