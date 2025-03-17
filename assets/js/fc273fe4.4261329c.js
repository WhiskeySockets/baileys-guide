"use strict";(self.webpackChunkbaileys_wiki=self.webpackChunkbaileys_wiki||[]).push([[11211],{28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>r});var a=t(96540);const n={},i=a.createContext(n);function d(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(i.Provider,{value:s},e.children)}},90434:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"socket/receiving-updates","title":"Receiving Updates","description":"After getting the initial \\"history\\" messages, let\'s get real-time messages and updates.","source":"@site/docs/socket/receiving-updates.md","sourceDirName":"socket","slug":"/socket/receiving-updates","permalink":"/docs/socket/receiving-updates","draft":false,"unlisted":false,"editUrl":"https://github.com/WhiskeySockets/baileys.wiki/tree/main/docs/docs/socket/receiving-updates.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"History Sync","permalink":"/docs/socket/history-sync"},"next":{"title":"Handling Messages","permalink":"/docs/socket/handling-messages"}}');var n=t(74848),i=t(28453);const d={sidebar_position:4},r="Receiving Updates",l={},c=[{value:"Message events",id:"message-events",level:2},{value:"messages.upsert",id:"messagesupsert",level:3},{value:"messages.update",id:"messagesupdate",level:3},{value:"messages.delete",id:"messagesdelete",level:3},{value:"messages.reaction",id:"messagesreaction",level:3},{value:"message-receipt.update",id:"message-receiptupdate",level:3},{value:"Chat events",id:"chat-events",level:2},{value:"chats.upsert",id:"chatsupsert",level:3},{value:"chats.update",id:"chatsupdate",level:3},{value:"chats.delete",id:"chatsdelete",level:3},{value:"blocklist.set",id:"blocklistset",level:3},{value:"blocklist.update",id:"blocklistupdate",level:3},{value:"call",id:"call",level:3},{value:"Contact events",id:"contact-events",level:2},{value:"contacts.upsert",id:"contactsupsert",level:3},{value:"contacts.update",id:"contactsupdate",level:3},{value:"Group events",id:"group-events",level:2},{value:"groups.upsert",id:"groupsupsert",level:3},{value:"groups.update",id:"groupsupdate",level:3},{value:"group-participants.update",id:"group-participantsupdate",level:3}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"receiving-updates",children:"Receiving Updates"})}),"\n",(0,n.jsx)(s.p,{children:'After getting the initial "history" messages, let\'s get real-time messages and updates.'}),"\n",(0,n.jsx)(s.p,{children:"Baileys exposes these updates via the event emitter as well."}),"\n",(0,n.jsx)(s.h2,{id:"message-events",children:"Message events"}),"\n",(0,n.jsx)(s.h3,{id:"messagesupsert",children:"messages.upsert"}),"\n",(0,n.jsx)(s.p,{children:"This event provides you with messages that you get either on offline sync or in real time."}),"\n",(0,n.jsxs)(s.p,{children:["The type of upsert is provided as either ",(0,n.jsx)(s.code,{children:"notify"})," or ",(0,n.jsx)(s.code,{children:"append"}),".\nNotify messages are usually the new messages, meanwhile append messages are everything else."]}),"\n",(0,n.jsxs)(s.p,{children:["This event provides an array of ",(0,n.jsx)(s.a,{href:"../api/namespaces/proto/interfaces/IMessage",children:(0,n.jsx)(s.code,{children:"proto.IMessage"})}),"s, so make sure to handle every item in the array."]}),"\n",(0,n.jsxs)(s.p,{children:["Look into the ",(0,n.jsx)(s.a,{href:"./handling-messages",children:"Handling Messages"})," page to handle the IMessage properly."]}),"\n",(0,n.jsx)(s.p,{children:"As an example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"sock.ev.on('messages.upsert', ({type, messages}) => {\n  if (type == \"notify\") { // new messages\n    for (const message of messages) {\n      // messages is an array, do not just handle the first message, you will miss messages\n    }\n  } else { // old already seen / handled messages\n    // handle them however you want to\n  }\n})\n"})}),"\n",(0,n.jsx)(s.h3,{id:"messagesupdate",children:"messages.update"}),"\n",(0,n.jsx)(s.p,{children:"Whether the message got edited, deleted or something else happened (change of receipt /ack state), a message update will be fired."}),"\n",(0,n.jsx)(s.h3,{id:"messagesdelete",children:"messages.delete"}),"\n",(0,n.jsx)(s.p,{children:"This event exists to declare the deletion of messages."}),"\n",(0,n.jsx)(s.h3,{id:"messagesreaction",children:"messages.reaction"}),"\n",(0,n.jsx)(s.p,{children:"Whether a reaction was added or removed to a message"}),"\n",(0,n.jsx)(s.h3,{id:"message-receiptupdate",children:"message-receipt.update"}),"\n",(0,n.jsx)(s.p,{children:"This runs in groups and other contexts, where it tells you updates on who received/viewed/played messages."}),"\n",(0,n.jsx)(s.h2,{id:"chat-events",children:"Chat events"}),"\n",(0,n.jsx)(s.h3,{id:"chatsupsert",children:"chats.upsert"}),"\n",(0,n.jsx)(s.p,{children:"This is triggered whenever a new chat is opened with you."}),"\n",(0,n.jsx)(s.h3,{id:"chatsupdate",children:"chats.update"}),"\n",(0,n.jsx)(s.p,{children:"This is triggered on every message (to change the unread count), and to put the latest message / latest message timestamp in the chat object."}),"\n",(0,n.jsx)(s.h3,{id:"chatsdelete",children:"chats.delete"}),"\n",(0,n.jsx)(s.p,{children:"This is triggered when the chat is deleted only."}),"\n",(0,n.jsx)(s.h3,{id:"blocklistset",children:"blocklist.set"}),"\n",(0,n.jsx)(s.h3,{id:"blocklistupdate",children:"blocklist.update"}),"\n",(0,n.jsx)(s.p,{children:"Self-explanatory"}),"\n",(0,n.jsx)(s.h3,{id:"call",children:"call"}),"\n",(0,n.jsx)(s.p,{children:"Universal event for call data (accept/decline/offer/timeout etc.)"}),"\n",(0,n.jsx)(s.h2,{id:"contact-events",children:"Contact events"}),"\n",(0,n.jsx)(s.h3,{id:"contactsupsert",children:"contacts.upsert"}),"\n",(0,n.jsx)(s.p,{children:"Upon the addition of a new contact to the main device's address book"}),"\n",(0,n.jsx)(s.h3,{id:"contactsupdate",children:"contacts.update"}),"\n",(0,n.jsx)(s.p,{children:"Upon the change of a saved contact's details"}),"\n",(0,n.jsx)(s.h2,{id:"group-events",children:"Group events"}),"\n",(0,n.jsx)(s.h3,{id:"groupsupsert",children:"groups.upsert"}),"\n",(0,n.jsx)(s.p,{children:"When you are joined in a new group."}),"\n",(0,n.jsx)(s.h3,{id:"groupsupdate",children:"groups.update"}),"\n",(0,n.jsx)(s.p,{children:"When metadata about the group changes."}),"\n",(0,n.jsx)(s.h3,{id:"group-participantsupdate",children:"group-participants.update"}),"\n",(0,n.jsx)(s.p,{children:"When the participants of group change or their ranks change"})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);