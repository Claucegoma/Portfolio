var ye=Object.defineProperty;var $e=(n,e,t)=>e in n?ye(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var g=(n,e,t)=>($e(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,F=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),J=new WeakMap;let re=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(F&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=J.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&J.set(t,e))}return e}toString(){return this.cssText}};const we=n=>new re(typeof n=="string"?n:n+"",void 0,Y),m=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new re(t,n,Y)},ke=(n,e)=>{if(F)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=j.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}},W=F?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return we(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_e,defineProperty:Ae,getOwnPropertyDescriptor:Ee,getOwnPropertyNames:Ce,getOwnPropertySymbols:Se,getPrototypeOf:ze}=Object,y=globalThis,K=y.trustedTypes,Me=K?K.emptyScript:"",O=y.reactiveElementPolyfillSupport,M=(n,e)=>n,q={toAttribute(n,e){switch(e){case Boolean:n=n?Me:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},oe=(n,e)=>!_e(n,e),Q={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:oe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Q){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Ae(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=Ee(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const c=s==null?void 0:s.call(this);r.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Q}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const e=ze(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const t=this.properties,i=[...Ce(t),...Se(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(W(s))}else e!==void 0&&t.push(W(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ke(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var r;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:q).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var r;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:q;this._$Em=s,this[s]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i,s=!1,r){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??oe)(s?r:this[e],t))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.C(r,this[r],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$E_)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(t)):this._$ET()}catch(s){throw e=!1,this._$ET(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[M("elementProperties")]=new Map,A[M("finalized")]=new Map,O==null||O({ReactiveElement:A}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,N=P.trustedTypes,Z=N?N.createPolicy("lit-html",{createHTML:n=>n}):void 0,ae="$lit$",v=`lit$${(Math.random()+"").slice(9)}$`,le="?"+v,Pe=`<${le}>`,_=document,L=()=>_.createComment(""),R=n=>n===null||typeof n!="object"&&typeof n!="function",ce=Array.isArray,Le=n=>ce(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",I=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,ee=/>/g,w=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),te=/'/g,ie=/"/g,de=/^(?:script|style|textarea|title)$/i,Re=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),$=Re(1),C=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),se=new WeakMap,k=_.createTreeWalker(_,129);function he(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(e):e}const Te=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=z;for(let c=0;c<t;c++){const a=n[c];let d,p,l=-1,b=0;for(;b<a.length&&(o.lastIndex=b,p=o.exec(a),p!==null);)b=o.lastIndex,o===z?p[1]==="!--"?o=X:p[1]!==void 0?o=ee:p[2]!==void 0?(de.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=w):p[3]!==void 0&&(o=w):o===w?p[0]===">"?(o=s??z,l=-1):p[1]===void 0?l=-2:(l=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?w:p[3]==='"'?ie:te):o===ie||o===te?o=w:o===X||o===ee?o=z:(o=w,s=void 0);const x=o===w&&n[c+1].startsWith("/>")?" ":"";r+=o===z?a+Pe:l>=0?(i.push(d),a.slice(0,l)+ae+a.slice(l)+v+x):a+v+(l===-2?c:x)}return[he(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};class T{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const c=e.length-1,a=this.parts,[d,p]=Te(e,t);if(this.el=T.createElement(d,i),k.currentNode=this.el.content,t===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=k.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(ae)){const b=p[o++],x=s.getAttribute(l).split(v),U=/([.?@])?(.*)/.exec(b);a.push({type:1,index:r,name:U[2],strings:x,ctor:U[1]==="."?Ue:U[1]==="?"?je:U[1]==="@"?Ne:V}),s.removeAttribute(l)}else l.startsWith(v)&&(a.push({type:6,index:r}),s.removeAttribute(l));if(de.test(s.tagName)){const l=s.textContent.split(v),b=l.length-1;if(b>0){s.textContent=N?N.emptyScript:"";for(let x=0;x<b;x++)s.append(l[x],L()),k.nextNode(),a.push({type:2,index:++r});s.append(l[b],L())}}}else if(s.nodeType===8)if(s.data===le)a.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(v,l+1))!==-1;)a.push({type:7,index:r}),l+=v.length-1}r++}}static createElement(e,t){const i=_.createElement("template");return i.innerHTML=e,i}}function S(n,e,t=n,i){var o,c;if(e===C)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const r=R(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=S(n,s._$AS(n,e.values),s,i)),e}class He{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??_).importNode(t,!0);k.currentNode=s;let r=k.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new H(r,r.nextSibling,this,e):a.type===1?d=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(d=new Ve(r,this,e)),this._$AV.push(d),a=i[++c]}o!==(a==null?void 0:a.index)&&(r=k.nextNode(),o++)}return k.currentNode=_,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class H{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),R(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Le(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==h&&R(this._$AH)?this._$AA.nextSibling.data=e:this.$(_.createTextNode(e)),this._$AH=e}g(e){var r;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=T.createElement(he(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(t);else{const o=new He(s,this),c=o.u(this.options);o.p(t),this.$(c),this._$AH=o}}_$AC(e){let t=se.get(e.strings);return t===void 0&&se.set(e.strings,t=new T(e)),t}T(e){ce(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new H(this.k(L()),this.k(L()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=S(this,e,t,0),o=!R(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{const c=e;let a,d;for(e=r[0],a=0;a<r.length-1;a++)d=S(this,c[i+a],t,a),d===C&&(d=this._$AH[a]),o||(o=!R(d)||d!==this._$AH[a]),d===h?e=h:e!==h&&(e+=(d??"")+r[a+1]),this._$AH[a]=d}o&&!s&&this.O(e)}O(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ue extends V{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===h?void 0:e}}class je extends V{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class Ne extends V{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??h)===C)return;const i=this._$AH,s=e===h&&i!==h||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==h&&(i===h||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ve{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const B=P.litHtmlPolyfillSupport;B==null||B(T,H),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.1.0");const Oe=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new H(e.insertBefore(L(),r),r,void 0,t??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return C}}var ne;u._$litElement$=!0,u.finalized=!0,(ne=globalThis.litElementHydrateSupport)==null||ne.call(globalThis,{LitElement:u});const D=globalThis.litElementPolyfillSupport;D==null||D({LitElement:u});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");class pe extends u{render(){return $`
       <div class="container"><i><h1>Cecilia González Mariblanca</h1></i></div>
       <div class ="content">
        <p>Over the years, i have learned to reinvent myself in different ways, surpassing my own limits, thus
            embracing fear as a preamble to success.<br>
            Thanks to technology, i have found the opportunity to have constant
            professional growth, and to be a lifelong learner in a world where everything evolves very quickly.
            <br>

            Perseverance lives with me day by day. When something
            motivates and excites me, i put my mind and heart into it, and that has
            always been my formula for success.
        </p>
        <img src= "/assets/yo-removebg-preview.png" alt ="" />
        
        </div>

       
        `}}g(pe,"styles",[m`
           :host {
                 display: grid;
                 gap: 20px;
                 padding: 10px;
                 justify-content: center;
                 box-sizing: border-box;
                }

                .container {
                    grid-column: span 1;
                    text-align: center;
                }

                h1 {
                    color: #D4AF37;
                    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.1);
                    transition: color 0.3s;
                    font-size: 3.5rem;
                }

                h1:hover {
                    color: #ab8712;
                  
                  
                }

                img {
                    width: 40%;
                    height: auto;
                    margin: auto;
                    border-radius:15px;
                }

                .content {
                    display: grid;
                    gap: 20px;
                    text-align: center;
                    justify-content: center;
                }

                p {
                    font-size: 1.5rem;
                
                }
                @media screen and (min-width: 300px) {
                 .content {
                    grid-template-columns: repeat(1, 1fr); 
                        }
                }

                @media screen and (min-width: 700px) {
                 .content {
                    grid-template-columns: repeat(2, 1fr); 
                        }
                }            

        `]);customElements.define("about-me",pe);class G extends u{constructor(){super(),this.darkMode=!1}render(){return $`<button @click=${this.toggleDarkMode}>
      ${this.darkMode?"🌛":"🌞"}
    </button>`}toggleDarkMode(){this.darkMode=!this.darkMode,document.body.classList.toggle("dark-mode",this.darkMode),this.requestUpdate()}}g(G,"styles",m`
    button {
      background-color: #104e62;
      color: #fff;
      padding: 8px 16px;
      cursor: pointer;
      border-radius: 50px;
      border: 0;
      margin: 20px;
      align-self: center;
    }

    button:hover {
      transform: translateY(-3px);
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    }

    @media screen and (min-width: 500px) {
      button {
        margin-left: 70px;
      }
    }

    @media screen and (min-width: 650px) {
      button {
        margin-left: 200px;
      }
    }

    @media screen and (min-width: 790px) {
      button {
        margin-left: 300px;
      }
    }

    @media screen and (min-width: 900px) {
      button {
        margin-left: 400px;
      }
    }
    @media screen and (min-width: 1000px) {
      button {
        margin-left: 500px;
      }
    }
    @media screen and (min-width: 1100px) {
      button {
        margin-left: 800px;
      }
    }
  `),g(G,"properties",{darkMode:{type:Boolean}});customElements.define("dark-mode-button",G);class ge extends u{render(){return $`
      <i><h2>Skills</h2></i>
      <div class="card-section">
        <div class="card">
          <div class="card-inner">
            <div class="card-face">
              Tech skills
              <img class="image" src="/assets/tech-skills.png" alt="" />
            </div>
            <div class="card-face-back">
              <ul>
                <li>JavaScript</li>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>Node JS</li>
                <li>TypeScript</li>
                <li>Jest</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-face">
              Soft skills
              <img class="image" src="/assets/team-work.png" alt="" />
            </div>
            <div class="card-face-back">
              <ul>
                <li>Resilience</li>
                <li>Tenacity</li>
                <li>Creativity</li>
                <li>Perseverance</li>
                <li>Responsibility</li>
                <li>Punctuality</li>
                <li>Self-Learning</li>
                <li>Effective communication</li>
                <li>Ethic</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-face">
              Frameworks
              <img class="image" src="/assets/frameworks.png" alt="" />
            </div>
            <div class="card-face-back">
              <ul>
                <li>Lit</li>
                <li>React JS</li>
                <li>React-Bootstrap</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-face">
              Tools
              <img class="image" src="/assets/tools.png" alt="" />
            </div>
            <div class="card-face-back">
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>Firebase</li>
                <li>NPM/YARN</li>
                <li>Vite</li>
                <li>Trello</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `}}g(ge,"styles",m`
    h2 {
      color: #d4af37;
      margin-top: 50px;
      font-size: 2.5rem;
      margin-left: 70px;
    }
    h2:hover {
      color: #ab8712;
    }

    .card-section {
      display: grid;
      gap: 20px;
      text-align: center;
      justify-content: center;
    }

    @media (min-width: 550px) {
      .card-section {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 900px) {
      .card-section {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (min-width: 1100px) {
      .card-section {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .card {
      position: relative;
      width: 250px;
      height: 330px;
      margin: 10px;
      perspective: 1000px;
    }

    .card-inner {
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.5s;
    }

    .card:hover .card-inner {
      transform: rotateY(180deg);
    }

    .card-face,
    .card-face-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      font-size: 1.5rem;
      border-radius: 20px;
      border: 7px solid transparent; 
      border-image: linear-gradient(115deg, #075a76, #ab8712, #a767e5, #00a9e1);
      border-image-slice: 1;
      animation: border-animation 5s linear infinite;
    }

    @keyframes border-animation {
      0% {
        border-image-source: linear-gradient(
          115deg,
          #075a76,
          #ab8712,
          #a767e5,
          #00a9e1
        );
      }
      25% {
        border-image-source: linear-gradient(
          115deg,
          #00a9e1,
          #d4af37,
          #075a76,
          #ab8712,
          #a767e5
        );
      }
      50% {
        border-image-source: linear-gradient(
          115deg,
          #a767e5,
          #00a9e1,
          #d4af37,
          #075a76,
          #ab8712
        );
      }
      75% {
        border-image-source: linear-gradient(
          115deg,
          #ab8712,
          #a767e5,
          #00a9e1,
          #d4af37,
          #075a76
        );
      }
      100% {
        border-image-source: linear-gradient(
          115deg,
          #075a76,
          #ab8712,
          #a767e5,
          #00a9e1,
          #d4af37
        );
      }
    }

    .card-face-back {
      transform: rotateY(180deg);
    }
    ul {
      list-style-type: none;
      padding: 1px;
      margin: 1px;
    }

    li {
      margin-bottom: 6px; 
    }
    .image {
      height: 170px;
      width: 200px;
    }
  `);customElements.define("rotating-cards-section",ge);const E=class E extends u{constructor(){super(...arguments);g(this,"cerrarVentanaSiEsExterior",t=>{this.shadowRoot.contains(t.target)||this.remove()})}cerrarVentana(){this.remove()}connectedCallback(){super.connectedCallback(),document.body.addEventListener("click",this.cerrarVentanaSiEsExterior,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("click",this.cerrarVentanaSiEsExterior)}render(){return $`
      <div class="content">
        <button class="button" @click=${this.cerrarVentana}>X</button>
        <i><h2>${this.title}</h2></i>
        <img src="${this.content.image}" alt="" />
        <div class="links-container">
          <button class="bcolor1">
            <a class="link" href="${this.content.link1}" target="_blank">
              ${this.content.label1}
            </a>
          </button>
          <button class="bcolor1">
            <a class="link" href="${this.content.link2}" target="_blank">
              ${this.content.label2}
            </a>
          </button>
        </div>
        <div class="icons-logo">
          ${this.content.icons.map(t=>$`<img class="logo" src="${t}" alt="" />`)}
        </div>
      </div>
    `}};g(E,"sharedStyles",m`
    :host {
      display: grid;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(
        160deg,
        rgba(47, 93, 197, 0.9) 0%,
        rgba(0, 0, 0, 0.9)
      );
      border-radius: 20px;
      padding: 15px;
      box-sizing: border-box;
      z-index: 1;
      place-items: center;
      height: 600px;
      width: 700px;
    }
    h2 {
      color: white;
      font-size: 1.7em;
    }

    .button {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 20px;
      color: white;
    }

    .button:hover {
      background-color: rgba(3, 169, 244, 0.9);
    }

    .button:active {
      background-color: #065174;
    }

    .content {
      display: grid;
      grid-template-rows: auto 1fr auto;
      gap: 30px;
      align-items: center;
      justify-items: center;
    }

    img {
      height: 300px;
      width: 550px;
      border-radius: 5px;
    }

    .links-container {
      display: flex;
      gap: 120px;
    }

    .bcolor1 {
      background: linear-gradient(90deg, #03a9f4, #f441a5, #03a9f4);
      border: none;
      background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
      background-size: 300%;
      border-radius: 30px;
      z-index: 1;
      width: 9.7em;
      height: 2.7em;
      font-size: 1.2rem;
      position: relative;
      cursor: pointer;
    }

    .bcolor1:before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      z-index: -1;
      background: linear-gradient(90deg, #03a9f4, #f441a5, #03a9f4);
      background-size: 400%;
      border-radius: 35px;
      transition: 1s;
    }

    .bcolor1:hover::before {
      filter: blur(20px);
    }
    .link {
      color: white;
      text-decoration: none;
    }
    .logo {
      width: 50px;
      height: 50px;
      display: flex;
    }
    .icons-logo {
      display: flex;
    }
    @media screen and (max-width: 700px) {
      :host {
        width: 500px;
        height: 550px;
      }
      img {
        height: 200px;
        width: 90%;
      }
      .bcolor1 {
        width: 9em;
        height: 2em;
        font-size: 1rem;
      }
    }
    @media screen and (max-width: 510px) {
      :host {
        width: 390px;
        height: 500px;
      }
      img {
        height: 150px;
        width: 80%;
      }
      .links-container {
        gap: 50px;
      }
      .logo {
        width: 40px;
        height: 40px;
      }
    }
    @media screen and (max-width: 400px) {
      :host {
        width: 290px;
        height: 400px;
      }
      img {
        height: 110px;
        width: 80%;
      }
      .links-container {
        flex-wrap: wrap;
      }
      .logo {
        width: 30px;
        height: 30px;
      }
      .bcolor1 {
        width: 5.5em;
        height: 2em;
      }
    }
  `),g(E,"styles",[E.sharedStyles]),g(E,"properties",{content:{type:Object},title:{type:String}});let f=E;customElements.define("popup-window",f);class ue extends f{constructor(){super(),this.title="Burger queen Api client",this.content={image:"/assets/bqac.png",link1:"https://github.com/Claucegoma/DEV009-burger-queen-api-client/compare/main...AKMoralesRamos:DEV009-burger-queen-api-client:main",label1:"GitHub repository",link2:"https://dev-009-burger-queen-api-client-indol.vercel.app/",label2:"App Link",icons:["/assets/icons-bootstrap.png","/assets/icon-javascript.png","/assets/icon-react-native.png","/assets/icons8-html-48.png","/assets/icons8-css-48.png","/assets/icon-vite.png","/assets/icons-node-js.png","/assets/icons-jest.png"]}}}g(ue,"styles",[...f.styles,m``]);customElements.define("burger-queen-popup",ue);class me extends f{constructor(){super(),this.title="Markdown links library",this.content={image:"/assets/mdlinks.png",link1:"https://github.com/Claucegoma/DEV008-md-links",label1:"GitHub repository",link2:"https://www.npmjs.com/package/cecy-md-links?activeTab=readme",label2:"App Link",icons:["/assets/icon-javascript.png","/assets/icons-node-js.png","/assets/axios.png","/assets/icons-jest.png","/assets/yargs.png"]}}}g(me,"styles",[...f.styles,m``]);customElements.define("md-links-popup",me);class be extends f{constructor(){super(),this.title="Social network / CatsSociety",this.content={image:"/assets/catsSociety.png",link1:"https://github.com/Claucegoma/DEV008-social-network",label1:"GitHub repository",link2:"https://dev-008-social-network-nqirb9y8e-claucegoma.vercel.app/",label2:"App Link",icons:["/assets/icon-javascript.png","/assets/icons8-html-48.png","/assets/icons8-css-48.png","/assets/icon-vite.png","/assets/icons-node-js.png","/assets/icons-jest.png","/assets/icons8-firebase-48.png","/assets/icon-babel.png"]}}}g(be,"styles",[...f.styles,m``]);customElements.define("social-network-popup",be);class fe extends u{mostrarVentanaEmergente(e){let t;switch(e){case"Burger Queen":t=document.createElement("burger-queen-popup");break;case"MDLinks":t=document.createElement("md-links-popup");break;case"Social Network":t=document.createElement("social-network-popup");break;default:t=document.createElement("popup-window");break}document.body.appendChild(t)}render(){return $`
      <i><h2>My projects</h2></i>
      <div class="projects-section">
        <button @click=${()=>this.mostrarVentanaEmergente("Burger Queen")}>
          Burger Queen
        </button>
        <button @click=${()=>this.mostrarVentanaEmergente("MDLinks")}>
          MD Links
        </button>
        <button @click=${()=>this.mostrarVentanaEmergente("Social Network")}>
          Social Network
        </button>
      </div>
    `}}g(fe,"styles",[m`
      h2 {
        color: #d4af37;
        margin-top: 50px;
        font-size: 2.5rem;
        margin-left: 70px;
      }
      h2:hover {
        color: #ab8712;
      }
      .projects-section {
        display: grid;
        gap: 20px;
        text-align: center;
        justify-content: center;
        padding: 40px;
      }

      @media (min-width: 450px) {
        .projects-section {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (min-width: 700px) {
        .projects-section {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (min-width: 900px) {
        .projects-section {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      button {
        text-decoration: none;
        position: relative;
        border: none;
        font-size: 1.2rem;
        font-family: inherit;
        color: #fff;
        width: 180px;
        height: 40px;
        line-height: 2em;
        text-align: center;
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 300%;
        border-radius: 30px;
        z-index: 1;
        cursor: pointer;
      }

      button:hover {
        animation: ani 8s linear infinite;
        border: none;
      }

      @keyframes ani {
        0% {
          background-position: 0%;
        }

        100% {
          background-position: 400%;
        }
      }

      button:before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        z-index: -1;
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 400%;
        border-radius: 35px;
        transition: 1s;
      }

      button:hover::before {
        filter: blur(20px);
      }

      button:active {
        background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
      }
    `]);customElements.define("my-projects",fe);class xe extends u{constructor(){super(...arguments);g(this,"cerrarVentanaSiEsExterior",t=>{const i=this.shadowRoot.querySelector(".info-container"),s=this.shadowRoot.querySelector(".info-button");!i.contains(t.target)&&!s.contains(t.target)&&i.classList.remove("show-info")})}redirectToLinkedIn(){window.location.href="https://www.linkedin.com/in/ceciliagonzalezmariblanca777/"}redirectToGithub(){window.location.href="https://github.com/Claucegoma"}downloadCV(){const t="/assets/cv-dec-english.pdf",i=document.createElement("a");i.href=t,i.download="cv.pdf",i.click()}openMail(){const t="arzagitana@ciencias.unam.mx",i="¡Hello!",s="I have reviewed your portfolio and would like to get in touch with you",r=`mailto:${t}?subject=${encodeURIComponent(i)}&body=${encodeURIComponent(s)}`;window.location.href=r}mostrarInfo(){this.shadowRoot.querySelector(".info-container").classList.toggle("show-info")}connectedCallback(){super.connectedCallback(),document.body.addEventListener("click",this.cerrarVentanaSiEsExterior,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("click",this.cerrarVentanaSiEsExterior)}render(){return $`
      <i><h2>Social media</h2></i>
      <div class="media-section">
        <button
          class="button-linkedin"
          @click="${()=>this.redirectToLinkedIn()}"
        >
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#ffffff"
                d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
              ></path>
            </g>
          </svg>
          LinkedIn
        </button>

        <button class="button-github" @click="${()=>this.redirectToGithub()}">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
              fill="white"
            ></path>
          </svg>
          <p class="text">Github</p>
        </button>

        <button class="botao" @click="${()=>this.downloadCV()}">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mysvg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Interface / Download">
                <path
                  id="Vector"
                  d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                  stroke="#f1f1f1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </g>
          </svg>
          <span class="texto">Download my CV</span>
        </button>
        <div>
          <button class="button" @click=${this.openMail}>
            <div class="display">
              <div id="msg">
                <svg class="svgIcon" viewBox="0 0 512 512" height="1.2em">
                  <path
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                  ></path>
                </svg>
                Send me an email
              </div>
            </div>
          </button>
          <button class="info-button" @click=${this.mostrarInfo}>?</button>

          <div class="info-container">
            <p>
              If clicking the button doesn't open your email client, please
              follow these steps:
            </p>
            <ol>
              <li>Open your email client.</li>
              <li>
                Copy and paste the email address:<br />
                <br />
                <strong>${"arzagitana@ciencias.unam.mx"}</strong>
              </li>
            </ol>
          </div>
        </div>
      </div>
    `}}g(xe,"styles",[m`
      h2 {
        color: #d4af37;
        margin-top: 50px;
        font-size: 2.5rem;
        margin-left: 70px;
      }
      h2:hover {
        color: #ab8712;
      }
      .media-section {
        display: grid;
        gap: 20px;
        text-align: center;
        justify-content: center;
        padding: 40px;
      }

      @media (min-width: 450px) {
        .media-section {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (min-width: 700px) {
        .media-section {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (min-width: 900px) {
        .media-section {
          grid-template-columns: repeat(4, 1fr);
        }
      }

      .button-linkedin {
        display: flex;
        background-color: #0a66c2;
        color: #ffffff;
        width: 180px;
        height: 50px;
        border-radius: 30px;
        line-height: 1.25rem;
        text-align: center;
        text-align: center;
        justify-content: center;
        font-size: 1rem;
        align-items: center;
        gap: 0.75rem;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
        transition: 0.6s ease;
      }

      .button-linkedin svg {
        height: 30px;
      }

      .button-linkedin:hover {
        background-image: linear-gradient(
          70deg,
          #1192dc,
          #03a9f4,
          #0a66c2,
          #a160e2,
          #79099be1
        );
        background-size: 200% 200%;
        animation: gradientChange 1.5s ease infinite;
        transform: translateY(-15px);
      }

      @keyframes gradientChange {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      .button-github {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 15px;
        gap: 15px;
        background-color: #181717;
        outline: 3px #181717 solid;
        outline-offset: -3px;
        width: 180px;
        height: 50px;
        border-radius: 30px;
        cursor: pointer;
        transition: 400ms;
      }

      .button-github .text {
        color: white;
        font-weight: 700;
        font-size: 1em;
        transition: 400ms;
      }

      .button-github svg path {
        transition: 400ms;
      }

      .button-github:hover {
        background-color: transparent;
      }

      .button-github:hover .text {
        color: #181717;
      }

      .button-github:hover svg path {
        fill: #181717;
      }
      .botao {
        width: 125px;
        height: 45px;
        width: 180px;
        font-size: 1rem;
        border-radius: 30px;
        height: 50px;
        border: none;
        padding: 5px 10px;
        background: rgb(47, 93, 197);
        background: linear-gradient(
          160deg,
          rgba(47, 93, 197, 1) 0%,
          rgba(46, 86, 194, 1) 5%,
          rgba(47, 93, 197, 1) 11%,
          rgba(59, 190, 230, 1) 57%,
          rgba(0, 212, 255, 1) 71%
        );
        color: #fff;
        line-height: 1;
        cursor: pointer;
        filter: drop-shadow(0 0 10px rgba(59, 190, 230, 0.568));
        transition: 0.5s linear;
      }

      .botao .mysvg {
        display: none;
      }

      .botao:hover {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: 0.5s linear;
      }

      .botao:hover .texto {
        display: none;
      }

      .botao:hover .mysvg {
        display: inline;
      }

      .botao:hover::before {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        width: 100%;
        height: 100%;
        border: 3.5px solid transparent;
        border-top: 3.5px solid #fff;
        border-right: 3.5px solid #fff;
        border-radius: 50%;
        animation: animateC 2s linear infinite;
      }

      @keyframes animateC {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      .button {
        height: 50px;
        width: 180px;
        background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
        border-radius: 25px;
        animation: animate 1.5s linear infinite;
        border: none;
        cursor: pointer;
      }

      .button,
      .display,
      #msg {
        transition: 0.3s;
      }

      .button:active .display {
        background: rgba(255, 255, 255, 0.5);
      }

      .button:active .display #msg {
        -webkit-text-fill-color: #1b1b1b;
      }

      .button:hover {
        scale: 1.15;
        animation: animate 0.7s linear infinite;
        transform: translateY(-15px);
      }

      .button .display,
      .button span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .button .display {
        z-index: 1;
        background-color: #1b1b1b;
        height: 42.5px;
        width: 172.5px;
        border-radius: 20px;
        text-align: center;
      }

      .button .display #msg {
        line-height: 42.5px;

        background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      @keyframes animate {
        100% {
          filter: hue-rotate(360deg);
        }
      }

      .button span {
        height: 100%;
        width: 100%;
        background: inherit;
        border-radius: 25px;
      }

      .button span:first-child {
        filter: blur(15px);
      }

      .button span:last-child {
        filter: blur(15px);
        transition: 0.3s;
      }

      .button:hover span:last-child {
        width: 110%;
        height: 120%;
      }
      .svgIcon path {
        fill: white;
      }

      .info-button {
        color: #dbac13;
        padding: 5px;
        cursor: pointer;
        outline: none;
        font-size: 12.5px;
        border: 2px solid transparent;
        border-radius: 50%;
        background: none;
        border-image: linear-gradient(
            115deg,
            #075a76,
            #ab8712,
            #a767e5,
            #00a9e1
          )
          1;
        border-image-slice: 1;
        transition: border-image 0.3s ease;
        animation: border-animation 5s linear infinite;
      }

      @keyframes border-animation {
        0% {
          border-image-source: linear-gradient(
            115deg,
            #075a76,
            #ab8712,
            #a767e5,
            #00a9e1
          );
        }
        25% {
          border-image-source: linear-gradient(
            115deg,
            #00a9e1,
            #d4af37,
            #075a76,
            #ab8712,
            #a767e5
          );
        }
        50% {
          border-image-source: linear-gradient(
            115deg,
            #a767e5,
            #00a9e1,
            #d4af37,
            #075a76,
            #ab8712
          );
        }
        75% {
          border-image-source: linear-gradient(
            115deg,
            #ab8712,
            #a767e5,
            #00a9e1,
            #d4af37,
            #075a76
          );
        }
        100% {
          border-image-source: linear-gradient(
            115deg,
            #075a76,
            #ab8712,
            #a767e5,
            #00a9e1,
            #d4af37
          );
        }
      }
      .info-button:hover {
        transform: translateY(-3px);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
      }

      .info-container {
        display: none;

        border-width: 2px;
        border-style: solid;
        border-image: linear-gradient(
            115deg,
            #075a76,
            #ab8712,
            #a767e5,
            #00a9e1
          )
          1;
        border-image-slice: 1;
        transition: border-image 0.3s ease;
        animation: border-animation 5s linear infinite;
        padding: 10px; /* Ajusta el relleno según tus necesidades */
      }

      @keyframes border-animation {
        0% {
          border-image-source: linear-gradient(
            115deg,
            #075a76,
            #ab8712,
            #a767e5,
            #00a9e1
          );
        }
        25% {
          border-image-source: linear-gradient(
            115deg,
            #00a9e1,
            #d4af37,
            #075a76,
            #ab8712,
            #a767e5
          );
        }
        50% {
          border-image-source: linear-gradient(
            115deg,
            #a767e5,
            #00a9e1,
            #d4af37,
            #075a76,
            #ab8712
          );
        }
        75% {
          border-image-source: linear-gradient(
            115deg,
            #ab8712,
            #a767e5,
            #00a9e1,
            #d4af37,
            #075a76
          );
        }
        100% {
          border-image-source: linear-gradient(
            115deg,
            #075a76,
            #ab8712,
            #a767e5,
            #00a9e1,
            #d4af37
          );
        }
      }

      .show-info {
        display: block;
      }
    `]);customElements.define("social-media",xe);class ve extends u{render(){return $`
      <i><h2>Curiosities</h2></i>
      <div class="card-section">
        <div class="card">
          <img src="/assets/meow.png" alt="" />
          <p>
            As you can imagine, I am a true cat lover.
            <br />
            <br />
            Having cats makes your life happier and more fun.
          </p>
        </div>

        <div class="card">
          <p>
            I love to understand different languages.
            <br />
            <br />
            By now i could use at least three.
          </p>
          <ul>
            <img class="icon" src="/assets/icon-spain.png" alt="" />
            <li>Spanish-native</li>
            <img class="icon" src="/assets/icon-uk.png" alt="" />
            <li>English-intermediate</li>
            <img class="icon" src="/assets/icon-italy.png" alt="" />
            <li>Italian-basic</li>
          </ul>
        </div>

        <div class="card">
          <div class="ali-certi">
            <p>Courses and certifications</p>
            <img class="certi" src="/assets/labo.png" alt="" />
            <img class="certi" src="/assets/certiprof.png" alt="" />
          </div>
          <ul>
            <li>Front-End developer-Laboratoria</li>
            <li>Scrum Foundation-CertiProf</li>
            <li>Lit Element-Net4Skills</li>
          </ul>
        </div>
        <div class="card">
          <p>
            I also love to dance; <br />I see dance as speaking a different
            languages too <br />
            💃🎵
          </p>
          <ul>
            <li>Flamenco</li>
            <li>Tango</li>
            <li>Bachata</li>
            <li>Salsa</li>
            <li>Arabic dance</li>
            <li>etc.</li>
          </ul>
        </div>
      </div>
    `}}g(ve,"styles",[m`
      h2 {
        color: #d4af37;
        margin-top: 50px;
        font-size: 2.5rem;
        margin-left: 70px;
      }
      h2:hover {
        color: #ab8712;
      }
      img {
        height: 200px;
        width: auto;
      }

      .card {
        position: relative;
        width: 300px;
        height: 200px;
        margin: 10px;
        perspective: 1000px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        font-size: 1.5rem;
        border-radius: 20px;
        border: 7px solid transparent;
        border-image: linear-gradient(
          115deg,
          #075a76,
          #ab8712,
          #a767e5,
          #00a9e1
        );
        border-image-slice: 1;
        animation: border-animation 5s linear infinite;
      }

      @keyframes border-animation {
        0% {
          border-image-source: linear-gradient(
            115deg,
            #075a76,
            #ab8712,
            #a767e5,
            #00a9e1
          );
        }
        25% {
          border-image-source: linear-gradient(
            115deg,
            #00a9e1,
            #d4af37,
            #075a76,
            #ab8712,
            #a767e5
          );
        }
        50% {
          border-image-source: linear-gradient(
            115deg,
            #a767e5,
            #00a9e1,
            #d4af37,
            #075a76,
            #ab8712
          );
        }
        75% {
          border-image-source: linear-gradient(
            115deg,
            #ab8712,
            #a767e5,
            #00a9e1,
            #d4af37,
            #075a76
          );
        }
        100% {
          border-image-source: linear-gradient(
            115deg,
            #075a76,
            #ab8712,
            #a767e5,
            #00a9e1,
            #d4af37
          );
        }
      }

      p {
        font-size: 1.2rem;
      }
      li {
        font-size: 1.2rem;
      }

      .icon {
        height: 20px;
        width: 20px;
      }
      .certi {
        height: 50px;
        width: 80px;
      }

      .card-section {
        display: grid;
        gap: 20px;
        text-align: center;
        justify-content: center;
      }

      .ali-certi {
        flex-direction: column;
        flex-wrap: wrap;
      }

      @media (min-width: 660px) {
        .card-section {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (min-width: 1000px) {
        .card-section {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (min-width: 1100px) {
        .card-section {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    `]);customElements.define("my-curiosities",ve);
