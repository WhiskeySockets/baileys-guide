"use strict";(self.webpackChunkbaileys_wiki=self.webpackChunkbaileys_wiki||[]).push([[55900],{28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var i=s(96540);const c={},t=i.createContext(c);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),i.createElement(t.Provider,{value:n},e.children)}},77375:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"api/functions/decodePatches","title":"Function: decodePatches()","description":"decodePatches(name, syncds, initial, getAppStateSyncKey, options, minimumVersionNumber?, logger?, validateMacs?): Promise\\\\","source":"@site/docs/api/functions/decodePatches.md","sourceDirName":"api/functions","slug":"/api/functions/decodePatches","permalink":"/docs/api/functions/decodePatches","draft":false,"unlisted":false,"editUrl":"https://github.com/WhiskeySockets/baileys.wiki/tree/main/docs/docs/api/functions/decodePatches.md","tags":[],"version":"current","frontMatter":{},"sidebar":"refSidebar","previous":{"title":"Function: decodeMessageNode()","permalink":"/docs/api/functions/decodeMessageNode"},"next":{"title":"Function: decodeSyncdMutations()","permalink":"/docs/api/functions/decodeSyncdMutations"}}');var c=s(74848),t=s(28453);const d={},a="Function: decodePatches()",o={},r=[{value:"Parameters",id:"parameters",level:2},{value:"name",id:"name",level:3},{value:"syncds",id:"syncds",level:3},{value:"initial",id:"initial",level:3},{value:"getAppStateSyncKey",id:"getappstatesynckey",level:3},{value:"options",id:"options",level:3},{value:"minimumVersionNumber?",id:"minimumversionnumber",level:3},{value:"logger?",id:"logger",level:3},{value:"validateMacs?",id:"validatemacs",level:3},{value:"Returns",id:"returns",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"function-decodepatches",children:"Function: decodePatches()"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"decodePatches"}),"(",(0,c.jsx)(n.code,{children:"name"}),", ",(0,c.jsx)(n.code,{children:"syncds"}),", ",(0,c.jsx)(n.code,{children:"initial"}),", ",(0,c.jsx)(n.code,{children:"getAppStateSyncKey"}),", ",(0,c.jsx)(n.code,{children:"options"}),", ",(0,c.jsx)(n.code,{children:"minimumVersionNumber"}),"?, ",(0,c.jsx)(n.code,{children:"logger"}),"?, ",(0,c.jsx)(n.code,{children:"validateMacs"}),"?): ",(0,c.jsx)(n.code,{children:"Promise"}),"<{ ",(0,c.jsx)(n.code,{children:"mutationMap"}),": ",(0,c.jsx)(n.a,{href:"/docs/api/type-aliases/ChatMutationMap",children:(0,c.jsx)(n.code,{children:"ChatMutationMap"})}),"; ",(0,c.jsx)(n.code,{children:"state"}),": ",(0,c.jsx)(n.a,{href:"/docs/api/type-aliases/LTHashState",children:(0,c.jsx)(n.code,{children:"LTHashState"})}),"; }>"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Defined in: ",(0,c.jsx)(n.a,{href:"https://github.com/WhiskeySockets/Baileys/blob/add437047abff2f19751da574c099d155f91a01b/src/Utils/chat-utils.ts#L406",children:"src/Utils/chat-utils.ts:406"})]}),"\n",(0,c.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:'"critical_block"'})," | ",(0,c.jsx)(n.code,{children:'"critical_unblock_low"'})," | ",(0,c.jsx)(n.code,{children:'"regular_high"'})," | ",(0,c.jsx)(n.code,{children:'"regular_low"'})," | ",(0,c.jsx)(n.code,{children:'"regular"'})]}),"\n",(0,c.jsx)(n.h3,{id:"syncds",children:"syncds"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,c.jsx)(n.code,{children:"ISyncdPatch"})}),"[]"]}),"\n",(0,c.jsx)(n.h3,{id:"initial",children:"initial"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/api/type-aliases/LTHashState",children:(0,c.jsx)(n.code,{children:"LTHashState"})})}),"\n",(0,c.jsx)(n.h3,{id:"getappstatesynckey",children:"getAppStateSyncKey"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"FetchAppStateSyncKey"})}),"\n",(0,c.jsx)(n.h3,{id:"options",children:"options"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"AxiosRequestConfig"}),"<{}>"]}),"\n",(0,c.jsx)(n.h3,{id:"minimumversionnumber",children:"minimumVersionNumber?"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"number"})}),"\n",(0,c.jsx)(n.h3,{id:"logger",children:"logger?"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"ILogger"})}),"\n",(0,c.jsx)(n.h3,{id:"validatemacs",children:"validateMacs?"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"boolean"})," = ",(0,c.jsx)(n.code,{children:"true"})]}),"\n",(0,c.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Promise"}),"<{ ",(0,c.jsx)(n.code,{children:"mutationMap"}),": ",(0,c.jsx)(n.a,{href:"/docs/api/type-aliases/ChatMutationMap",children:(0,c.jsx)(n.code,{children:"ChatMutationMap"})}),"; ",(0,c.jsx)(n.code,{children:"state"}),": ",(0,c.jsx)(n.a,{href:"/docs/api/type-aliases/LTHashState",children:(0,c.jsx)(n.code,{children:"LTHashState"})}),"; }>"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}}}]);