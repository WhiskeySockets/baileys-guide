"use strict";(self.webpackChunkbaileys_wiki=self.webpackChunkbaileys_wiki||[]).push([[44607],{28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(96540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}},72926:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"socket/configuration","title":"Configuration","description":"The first step into getting anywhere with Baileys is configuring the socket.","source":"@site/docs/socket/configuration.md","sourceDirName":"socket","slug":"/socket/configuration","permalink":"/docs/socket/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/WhiskeySockets/baileys.wiki/tree/main/docs/docs/socket/configuration.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Socket","permalink":"/docs/category/socket"},"next":{"title":"Connecting","permalink":"/docs/socket/connecting"}}');var o=s(74848),i=s(28453);const a={sidebar_position:1},r="Configuration",c={},l=[{value:"logger",id:"logger",level:3},{value:"auth",id:"auth",level:3},{value:"getMessage",id:"getmessage",level:3},{value:"browser",id:"browser",level:3},{value:"version",id:"version",level:3},{value:"syncFullHistory",id:"syncfullhistory",level:3},{value:"markOnlineOnConnect",id:"markonlineonconnect",level:3},{value:"cachedGroupMetadata",id:"cachedgroupmetadata",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"configuration",children:"Configuration"})}),"\n",(0,o.jsx)(n.p,{children:"The first step into getting anywhere with Baileys is configuring the socket."}),"\n",(0,o.jsx)(n.p,{children:"Baileys is very open by default and allows you to configure various options."}),"\n",(0,o.jsxs)(n.p,{children:["All configuration is passed through the makeWASocket function. The config presents itself as the type ",(0,o.jsx)(n.a,{href:"../api/type-aliases/UserFacingSocketConfig",children:"UserFacingSocketConfig"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You can take a look at the type, I won't bore you here. The only required properties here strictly speaking are ",(0,o.jsx)(n.code,{children:"auth"}),", ",(0,o.jsx)(n.code,{children:"logger"}),", and ",(0,o.jsx)(n.code,{children:"getMessage"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"logger",children:"logger"}),"\n",(0,o.jsxs)(n.p,{children:["Baileys uses the ",(0,o.jsx)(n.code,{children:"pino"})," library to log by default, but after a recent change (",(0,o.jsx)(n.a,{href:"https://github.com/WhiskeySockets/Baileys/pull/1153",children:"#1153"}),"), as long as you define a similar type, you'll be OK.\nAs for pino, you can stream the logs into ",(0,o.jsx)(n.a,{href:"https://getpino.io/#/docs/api?id=pinodestinationopts-gt-sonicboom",children:"a file"})," or even consume them as a realtime ",(0,o.jsx)(n.a,{href:"https://getpino.io/#/docs/transports",children:"data stream"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"auth",children:"auth"}),"\n",(0,o.jsx)(n.p,{children:"You should always implement your own auth state.\nWhether you decide a SQL, no-SQL or Redis auth state fits you best, that depends on your needs."}),"\n",(0,o.jsx)(n.p,{children:"As of now, there are no actively maintained 3rd-party auth states, but if there are any I'll add them here."}),"\n",(0,o.jsx)(n.h3,{id:"getmessage",children:"getMessage"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["It is important to note the ",(0,o.jsx)(n.a,{href:"../api/type-aliases/SocketConfig#getmessage",children:(0,o.jsx)(n.code,{children:"getMessage"})})," function. This functionality is needed for resending missing messages or decrypting poll votes."]}),"\n",(0,o.jsx)(n.li,{children:"This should be implemented by making a call to your database or wherever the message is stored, using the message key as an index."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"With that in mind, your configuration should look like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import makeWASocket from 'baileys'\nimport P from 'pino'\nconst sock = makeWASocket({\n  auth: any, // auth state of your choosing,\n  logger: P() // you can configure this as much as you want, even including streaming the logs to a ReadableStream for upload or saving to a file\n})\n"})}),"\n",(0,o.jsx)(n.h3,{id:"browser",children:"browser"}),"\n",(0,o.jsxs)(n.p,{children:["The only consideration is when logging in using ",(0,o.jsx)(n.a,{href:"./connecting#pairing-code-login",children:"pairing code"}),".\nIn that case you should only set a valid/logical browser config (e.g. ",(0,o.jsx)(n.a,{href:"../api/variables/Browsers",children:(0,o.jsx)(n.code,{children:"Browsers"})}),(0,o.jsx)(n.code,{children:'.macOS("Google Chrome")'}),"), otherwise the pair will fail.\nOnce you are fully paired, you can switch the browser config back to normal."]}),"\n",(0,o.jsx)(n.h3,{id:"version",children:"version"}),"\n",(0,o.jsx)(n.p,{children:"It is recommended to leave the version settings to their default options.\nIn future releases, the WhatsApp version will be actively locked to the library to insure maximum compatibility, under the ProtoCocktail project."}),"\n",(0,o.jsxs)(n.p,{children:["Also, It is ",(0,o.jsx)(n.strong,{children:"not recommended"})," to set the latest version on your socket every time you connect (e.g. using ",(0,o.jsx)(n.a,{href:"../api/functions/fetchLatestWaWebVersion",children:(0,o.jsx)(n.code,{children:"fetchLatestWaWebVersion"})}),"), as you may face incompabitility.\nIf you want to set a custom version, make sure your protobufs are up to date and that you are a few versions behind."]}),"\n",(0,o.jsx)(n.h3,{id:"syncfullhistory",children:"syncFullHistory"}),"\n",(0,o.jsxs)(n.p,{children:["Baileys emulates a web browser by default (in the connection headers).\nIf you want to emulate a desktop to get full chat history events, use the ",(0,o.jsx)(n.a,{href:"../api/type-aliases/SocketConfig#syncfullhistory",children:(0,o.jsx)(n.code,{children:"syncFullHistory"})})," option."]}),"\n",(0,o.jsx)(n.p,{children:"Also, your browser string should be a desktop:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'browser: Browsers.macOS("Desktop") // can be Windows/Ubuntu instead of macOS\n'})}),"\n",(0,o.jsx)(n.h3,{id:"markonlineonconnect",children:"markOnlineOnConnect"}),"\n",(0,o.jsxs)(n.p,{children:["By default, Baileys sets your presence as online on connect. This will stop sending notifications to your phone.\nTo counter this, you can set the ",(0,o.jsx)(n.a,{href:"../api/type-aliases/SocketConfig#markonlineonconnect",children:(0,o.jsx)(n.code,{children:"markOnlineOnConnect"})})," option to ",(0,o.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you are still facing missing notifications, check the Presence ",(0,o.jsx)(n.strong,{children:"[reference missing]"})," page."]}),"\n",(0,o.jsx)(n.h3,{id:"cachedgroupmetadata",children:"cachedGroupMetadata"}),"\n",(0,o.jsxs)(n.p,{children:["When sending messages to a group, the ",(0,o.jsx)(n.a,{href:"../api/functions/makeWASocket#sendmessage",children:(0,o.jsx)(n.code,{children:"sendMessage"})})," function will try to get the group participant list (to encrypt the message to each participant)."]}),"\n",(0,o.jsxs)(n.p,{children:["This is a problem and causes a ratelimit and potential bans from WhatsApp. To counter this, you should provide the socket with a ",(0,o.jsx)(n.code,{children:"cachedGroupMetadata"})," cache."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const groupCache = new NodeCache({ /* ... */ })\n\nconst sock = makeWASocket({\n    cachedGroupMetadata: async (jid) => groupCache.get(jid)\n})\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);