!function(e){function t(t){for(var n,a,c=t[0],i=t[1],l=t[2],p=0,g=[];p<c.length;p++)a=c[p],s[a]&&g.push(s[a][0]),s[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);g.length;)g.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==s[i]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={2:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;o.push([522,0]),r()}({11:function(e,t,r){"use strict";r.d(t,"a",function(){return c});r(54);var n=r(17),s=r.n(n),o=r(4);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}const c=e=>{const t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(r,!0).forEach(function(t){s()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({googleIdToken:(()=>window.auth2.currentUser.get())().Zi.id_token},e);return fetch("https://midiana.lv:8086/?f="+t.func,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>{if(e)return e.json();throw Error("Something bad is happening with server.")}).then(t=>{if((t.error||!t.hasOwnProperty("message"))&&e.hasOwnProperty("componentDispatch")){const r={isError:!0,errorMsg:t.error||"Something went wrong :/"};return e.componentDispatch(Object(o.A)(r)),Promise.reject(t.error)}return t}).catch(e=>{console.error(e)})}},305:function(e,t,r){"use strict";(function(e){var n=r(0),s=r(7),o=r(306),a=r(308),c=r(311);t.a=Object(s.b)(e=>({currentDialog:e.currentDialog}))(class extends n.Component{render(){return e.createElement("div",{className:"pm-container"},e.createElement(o.a,null),e.createElement("div",{className:"pm-body"},e.createElement(a.a,null),e.createElement("div",{className:"pm-text-field"},e.createElement(c.a,null))))}})}).call(this,r(0))},306:function(e,t,r){"use strict";(function(e){var n=r(0),s=r(11),o=r(7),a=r(4),c=r(307);t.a=Object(o.b)(e=>({dialogs:e.dialogs}))(class extends n.Component{constructor(e){super(e)}componentDidMount(){Object(s.a)({func:"getUserList"}).then(e=>{this.props.dispatch(Object(a.w)({dialogs:e.records}))}),Object(s.a)({func:"getPrivateMessages",encryption:"CryptHelper_v001"}).then(e=>{this.props.dispatch(Object(a.x)(e.records))})}render(){const t=[];return this.props.dialogs&&this.props.dialogs.map(r=>{t.push(e.createElement(c.a,{key:r.rowId,user:r}))}),e.createElement("div",{className:"pm-dialogs"},t)}})}).call(this,r(0))},307:function(e,t,r){"use strict";(function(e){var n=r(0),s=r(7),o=r(4);t.a=Object(s.b)(e=>({dialogs:e.dialogs,currentDialog:e.currentDialog,myMessages:e.myMessages}))(class extends n.Component{constructor(e){super(e),this.onClick=this.onClick.bind(this)}onClick(){return this.props.dispatch(Object(o.z)(this.props.user))}render(){let t="";return this.props.currentDialog&&this.props.currentDialog.rowId===this.props.user.rowId&&(t=" active"),e.createElement("div",{onClick:this.onClick,className:"dialog-wrapper"+t},e.createElement("div",{className:"dialog-inner"},e.createElement("div",{className:"dialog-user"},this.props.user.displayName," (",this.props.user.email,")")))}})}).call(this,r(0))},308:function(e,t,r){"use strict";(function(e){r(54),r(508),r(80);var n=r(0),s=r(7),o=r(309),a=r(50),c=r(4);const i=window.localStorage;t.a=Object(s.b)(e=>({currentDialog:e.currentDialog,currentDialogMessages:e.currentDialogMessages,user:e.user,keysChecking:e.keysChecking}))(class extends n.Component{constructor(e){super(e)}componentDidMount(){const e=e=>{const t=e.substring(0,e.length/2).replace(/[\/]/g,"@").replace(/[+]/g,"_"),r=e.substring(e.length/2,e.length).replace(/[\/]/g,"@").replace(/[+]/g,"_");fetch("https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/7p6a4g00/".concat(btoa(this.props.user.getBasicProfile().getEmail()+"_1"),"/").concat(t),{method:"POST"}).then(e=>{200===e.status&&fetch("https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/7p6a4g00/".concat(btoa(this.props.user.getBasicProfile().getEmail()+"_2"),"/").concat(r),{method:"POST"}).then(e=>{200===e.status&&console.log("VALUES SENT SUCCESSFULLY!")})})};i.getItem("myMessages")&&i.getItem("myMessages").length>3&&this.props.dispatch(Object(c.C)(JSON.parse(i.getItem("myMessages")))),i.getItem("privateKey")&&i.getItem("publicKey")?(e(i.getItem("publicKey")),this.props.dispatch(Object(c.B)({publicKeyB64:i.getItem("publicKey"),privateKeyB64:i.getItem("privateKey")}))):a.a.generateKeyB64().then(t=>{let{privateKeyB64:r,publicKeyB64:n}=t;i.setItem("publicKey",n),i.setItem("privateKey",r),e(n),this.props.dispatch(Object(c.B)({publicKeyB64:n,privateKeyB64:r}))}),(()=>{const e=this.props.user.getBasicProfile().getEmail(),t=i.getItem("publicKey");this.props.dispatch(Object(c.t)(!0)),clearInterval(window.chatUpdateIntervalId),window.chatUpdateIntervalId=setInterval(()=>{fetch("https://keyvalue.immanuel.co/api/KeyVal/GetValue/7p6a4g00/".concat(btoa(e+"_1"),"/"),{method:"GET"}).then(e=>e.text()).then(r=>{fetch("https://keyvalue.immanuel.co/api/KeyVal/GetValue/7p6a4g00/".concat(btoa(e+"_2"),"/"),{method:"GET"}).then(e=>e.text()).then(e=>{JSON.parse(r).replace(/[@]/g,"/").replace(/[_]/g,"+").trim()+JSON.parse(e).replace(/[@]/g,"/").replace(/[_]/g,"+").trim()===t?console.log("keys check successful, you can chat safely"):(console.log("wtf???? FBI?? CIA??? ITS NOT UR PUBLIC KEY, GGWP!#242DELETE"),clearInterval(window.chatUpdateIntervalId))})})},1e4)})()}componentWillUpdate(e){e.currentDialog&&fetch("https://keyvalue.immanuel.co/api/KeyVal/GetValue/7p6a4g00/".concat(btoa(e.currentDialog.email+"_1"),"/"),{method:"GET"}).then(e=>e.text()).then(t=>{t&&fetch("https://keyvalue.immanuel.co/api/KeyVal/GetValue/7p6a4g00/".concat(btoa(e.currentDialog.email+"_2"),"/"),{method:"GET"}).then(e=>e.text()).then(e=>{let r=JSON.parse(t).replace(/[@]/g,"/").replace(/[_]/g,"+").trim()+JSON.parse(e).replace(/[@]/g,"/").replace(/[_]/g,"+").trim();this.props.dispatch(Object(c.u)(r))})})}render(){return e.createElement("div",{className:"pm-messages"},e.createElement(o.a,null))}})}).call(this,r(0))},309:function(e,t,r){"use strict";(function(e){r(44),r(54),r(279),r(58);var n=r(0),s=r(7),o=r(310),a=r(50);const c=window.localStorage;t.a=Object(s.b)(e=>({currentDialog:e.currentDialog,currentDialogPublicKey:e.currentDialogPublicKey,myMessages:e.myMessages,messages:e.messages,privateKey:e.privateKey}))(class extends n.Component{constructor(e){super(e),this.state={asyncMessages:[]}}componentWillUpdate(e){this.props.currentDialog!==e.currentDialog&&this.setState({asyncMessages:[]})}async getAsyncMessages(){const e=[];if(this.props.currentDialogPublicKey)for(let[t,r]of Object.entries(this.props.messages))if(r.sender===this.props.currentDialog.email&&r.message&&r.message.split(":").length>1){let n;try{n=await a.a.decryptMessageB64(c.getItem("privateKey"),r.message)}catch(e){console.log("Invalid private key for these messages, eh.")}if(n){const s={author:r.sender,userMessage:!1,msg:n,date:r.dt,key:r.sender+t};e.push(s)}}return e}render(){let t=[];this.props.currentDialog&&this.props.myMessages.length&&this.props.myMessages.map((e,r)=>{if(e.recipient===this.props.currentDialog.email){const n={author:e.author,userMessage:!0,msg:e.message,date:e.date,key:e.author+r};t.push(n)}}),this.getAsyncMessages().then(e=>{e.length>0&&!this.state.asyncMessages.length&&this.setState({asyncMessages:e})});const r=(t=t.concat(this.state.asyncMessages).sort((e,t)=>new Date(e.date)-new Date(t.date))).map(t=>e.createElement(o.a,{userMessage:t.userMessage,key:t.key,data:t}));return e.createElement("div",null,r)}})}).call(this,r(0))},310:function(e,t,r){"use strict";(function(e){var n=r(0),s=r(7);t.a=Object(s.b)(e=>({currentDialog:e.currentDialog}))(class extends n.Component{constructor(e){super(e)}render(){return e.createElement("div",{className:this.props.userMessage?"pm-msg-right":"pm-msg-left"},e.createElement("div",{className:"pm-msg"},e.createElement("span",null,this.props.data.author),e.createElement("p",null,this.props.data.msg)))}})}).call(this,r(0))},311:function(e,t,r){"use strict";(function(e){var n=r(17),s=r.n(n),o=r(0),a=r(7),c=r(11),i=r(4),l=r(50);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}const p=window.localStorage;t.a=Object(a.b)(e=>({currentDialog:e.currentDialog,currentDialogPublicKey:e.currentDialogPublicKey,myMessages:e.myMessages,publicKey:e.publicKey,privateKey:e.privateKey,user:e.user}))(class extends o.Component{constructor(e){super(e),this.state={text:""},this.onKeyDown=this.onKeyDown.bind(this),this.onInput=this.onInput.bind(this)}onInput(e){this.setState(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach(function(t){s()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},this.state,{text:e.target.value}))}onKeyDown(e){if(13===e.keyCode){const t={message:this.state.text,author:this.props.user.getBasicProfile().getEmail(),recipient:this.props.currentDialog.email,date:new Date};if(e.target.value="",!p.getItem("myMessages")||p.getItem("myMessages").length<3)p.setItem("myMessages",JSON.stringify([t]));else{const e=JSON.parse(p.getItem("myMessages"));e.push(t),p.setItem("myMessages",JSON.stringify(e))}l.a.encryptMessageB64(this.props.currentDialogPublicKey,this.state.text).then(e=>{console.log("ENCRYPTED",e),Object(c.a)({func:"sendPrivateMessage",message:e,recipient:this.props.currentDialog.email,encryption:"CryptHelper_v001"})}),this.props.dispatch(Object(i.C)(JSON.parse(p.getItem("myMessages"))))}}render(){return e.createElement("textarea",{className:"pm-send-msg",onKeyDown:this.onKeyDown,onInput:this.onInput,disabled:!this.props.currentDialog})}})}).call(this,r(0))},4:function(e,t,r){"use strict";r.d(t,"d",function(){return n}),r.d(t,"b",function(){return s}),r.d(t,"j",function(){return o}),r.d(t,"k",function(){return a}),r.d(t,"r",function(){return c}),r.d(t,"l",function(){return i}),r.d(t,"f",function(){return l}),r.d(t,"h",function(){return u}),r.d(t,"i",function(){return p}),r.d(t,"n",function(){return g}),r.d(t,"m",function(){return y}),r.d(t,"a",function(){return d}),r.d(t,"g",function(){return h}),r.d(t,"q",function(){return m}),r.d(t,"c",function(){return f}),r.d(t,"p",function(){return b}),r.d(t,"o",function(){return O}),r.d(t,"e",function(){return v}),r.d(t,"y",function(){return w}),r.d(t,"s",function(){return E}),r.d(t,"v",function(){return D}),r.d(t,"D",function(){return S}),r.d(t,"E",function(){return j}),r.d(t,"w",function(){return K}),r.d(t,"x",function(){return P}),r.d(t,"z",function(){return I}),r.d(t,"t",function(){return M}),r.d(t,"B",function(){return k}),r.d(t,"u",function(){return C}),r.d(t,"C",function(){return A}),r.d(t,"A",function(){return T});r(80);const n="FETCH POSTS",s="ADD POST",o="LOGGED IN",a="LOG_OUT",c="SET SESSION",i="POSTS TO SHOW",l="INITIAL POSTS STATUS",u="LOAD DIALOGS",p="LOAD MESSAGES",g="SET DIALOG KEY",y="SET CURRENT DIALOG",d="ADD MY MESSAGES",h="INIT MY MESSAGES",m="SET MY MESSAGES",f="CHECK KEYS",b="SET KEYS",O="SET ERROR",v="GET_LIKES",w=()=>({type:a,loggedIn:!1,user:{}}),E=e=>({type:s,post:e}),D=e=>({type:v,likes:e}),S=e=>{let{postsLength:t}=e;return{type:l,postsLength:t}},j=e=>{let{session:t,user:r}=e;return{session:t,user:r,type:c,loggedIn:!0}},K=e=>{let{dialogs:t}=e;return{type:u,dialogs:t}},P=e=>({type:p,messages:e}),I=e=>({type:y,currentDialog:e}),M=e=>({type:f,keysChecking:e}),k=e=>{let{publicKeyB64:t,privateKeyB64:r}=e;return{type:b,publicKey:t.trim(),privateKey:r.trim()}},C=e=>({type:g,string:e}),A=e=>({type:m,myMessages:e}),T=e=>({type:O,error:e})},50:function(e,t,r){"use strict";r(44),r(510),r(54),r(279),r(512),r(520),r(58);let n={name:"AES-CTR",length:128,counter:new Uint8Array(16)},s={name:"RSA-OAEP",modulusLength:1408,publicExponent:new Uint8Array([1,0,1]),hash:{name:"SHA-256"}},o=e=>{let t="",r=new Uint8Array(e),n=r.byteLength;for(let e=0;e<n;e++)t+=String.fromCharCode(r[e]);return window.btoa(t)},a=e=>{let t=atob(e),r=t.length,n=new Uint8Array(new ArrayBuffer(r));for(let e=0;e<r;e++)n[e]=t.charCodeAt(e);return n.buffer},c={base64toArrayBuffer:a,generateKey:()=>window.crypto.subtle.generateKey(s,!0,["encrypt","decrypt"]).then(e=>Promise.all([window.crypto.subtle.exportKey("pkcs8",e.privateKey),window.crypto.subtle.exportKey("spki",e.publicKey)])).then(e=>{let[t,r]=e;return{privateKey:t,publicKey:r}}),generateKeyB64:()=>c.generateKey().then(e=>{let{privateKey:t,publicKey:r}=e;return{privateKeyB64:o(t),publicKeyB64:o(r)}}),encryptMessage:(e,t)=>crypto.subtle.importKey("spki",e,s,!0,["encrypt"]).then(e=>(e=>window.crypto.subtle.generateKey(n,!0,["encrypt","decrypt"]).then(t=>{let r=(new TextEncoder).encode(e),s=window.crypto.subtle.encrypt(n,t,r),o=window.crypto.subtle.exportKey("jwk",t);return Promise.all([s,o])}).then(e=>{let[t,r]=e;return{aesCtrKeyData:r,encryptedPm:t}}))(t).then(t=>{let{aesCtrKeyData:r,encryptedPm:n}=t,o=(new TextEncoder).encode(JSON.stringify(r));return window.crypto.subtle.encrypt(s,e,o).then(e=>({encryptedAesKey:e,encryptedPm:n}))})),encryptMessageB64:(e,t)=>{let r=a(e);return c.encryptMessage(r,t).then(e=>{let{encryptedAesKey:t,encryptedPm:r}=e;return o(t)+":"+o(r)})},decryptMessage:(e,t)=>{let{encryptedAesKey:r,encryptedPm:o}=t;return crypto.subtle.importKey("pkcs8",e,s,!0,["decrypt"]).then(t=>crypto.subtle.decrypt(s,t,r).catch(t=>{let n="Failed to decrypt AES part of the message using private key - "+t;return console.error(n,{privateKey:e,encryptedAesKey:r},t),Promise.reject(new Error(n))})).then(e=>{let t=JSON.parse((new TextDecoder).decode(e));return crypto.subtle.importKey("jwk",t,n,!0,["encrypt","decrypt"]).then(e=>crypto.subtle.decrypt(n,e,o))}).then(e=>(new TextDecoder).decode(e))},decryptMessageB64:(e,t)=>{let r=a(e),[n,s]=t.split(":"),o=a(n),i=a(s);return c.decryptMessage(r,{encryptedAesKey:o,encryptedPm:i})}};t.a=c},522:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),o=r(10),a=r.n(o),c=r(7),i=r(47),l=(r(44),r(58),r(17)),u=r.n(l),p=r(4);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach(function(t){u()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}const d={dialogs:[],currentDialog:null,currentDialogMessages:null,loggedIn:!1,user:null,myMessages:[],messages:[],keysChecking:!1,publicKey:null,privateKey:null};const h=Object(i.b)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.r:return y({},e,{loggedIn:t.loggedIn,session:t.session,user:t.user});case p.j:case p.k:return y({},e,{loggedIn:t.loggedIn,user:t.user});case p.m:return y({},e,{currentDialog:t.currentDialog});case p.n:return y({},e,{currentDialogPublicKey:t.string});case p.h:return y({},e,{dialogs:t.dialogs});case p.i:return y({},e,{messages:t.messages});case p.g:return y({},e,{myMessages:y({},e.myMessages,{[t.id]:[]})});case p.q:return y({},e,{myMessages:t.myMessages});case p.a:return y({},e,{myMessages:y({},e.myMessages,{[t.id]:[t.msgObj,...e.myMessages[t.id]]})});case p.c:return y({},e,{keysChecking:t.keysChecking});case p.p:return y({},e,{publicKey:t.publicKey,privateKey:t.privateKey});default:return y({},e)}});h.subscribe(()=>{console.log(h.getState())});var m=r(60),f=r(305);var b=class extends n.Component{render(){return s.a.createElement(c.a,{store:h},s.a.createElement(m.a,{body:s.a.createElement(f.a,null)}))}};a.a.render(s.a.createElement(b,null),document.getElementById("pm-main"))},60:function(e,t,r){"use strict";(function(e){var n=r(0),s=r(61),o=r(77),a=r(7),c=r(4);t.a=Object(a.b)(e=>({loggedIn:e.loggedIn,user:e.user}))(class extends n.Component{constructor(e){super(e)}componentDidMount(){let e;const t=this.props.dispatch;gapi.load("auth2",function(){e=gapi.auth2.init({client_id:"521166378127-vhkak167b5ghngfkk5r6ukrq059njoo8.apps.googleusercontent.com"}).then(e=>e.isSignedIn.get()?(window.auth2=e,t(Object(c.E)({session:e,user:e.currentUser.get()}))):t(Object(c.y)()))})}getContext(){return this.props.loggedIn?this.props.body:this.props.user?e.createElement(s.a,null):e.createElement("div",{className:"loader"},e.createElement(o.BarLoader,{color:"#26A69A",width:200,height:5}))}render(){return this.getContext()}})}).call(this,r(0))},61:function(e,t,r){"use strict";(function(e){var n=r(17),s=r.n(n),o=r(0),a=r(7),c=r(4),i=r(11);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}t.a=Object(a.b)(e=>({loggedIn:e.loggedIn,user:e.user}))(class extends o.Component{constructor(e){super(e)}onSignIn(e){return function(t){const r=gapi.auth2.getAuthInstance();window.auth2=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach(function(t){s()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},r),e(Object(c.E)({session:r,user:t})),Object(i.a)({func:"login"})}}componentDidMount(){const e=this.onSignIn(this.props.dispatch);gapi.signin2.render("google-signin",{scope:"profile email",width:240,height:50,longtitle:!0,theme:"dark",onsuccess:e})}render(){return e.createElement("div",{id:"login-panel"},e.createElement("div",{className:"login-wrapper"},e.createElement("div",{className:"login-title"},e.createElement("h1",null,"Choose login form")),e.createElement("div",{className:"login-body"},e.createElement("div",{id:"google-signin"}))))}})}).call(this,r(0))}});