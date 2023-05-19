var miro=(()=>{var ne=Object.defineProperty;var Oe=t=>ne(t,"__esModule",{value:!0}),s=(t,e)=>ne(t,"name",{value:e,configurable:!0});var Ge=(t,e)=>{Oe(t);for(var r in e)ne(t,r,{get:e[r],enumerable:!0})};var et={};Ge(et,{board:()=>Re,clientVersion:()=>Me});var he="sdkv2-plugin-message";function Fe(t){return t.data?.commandId===he}s(Fe,"isPluginMessageEvent");function Se(t){return t!==null&&"window"in t}s(Se,"isWindow");var V=class{constructor(e){this.destroyed=!1;this.destroy=s(()=>{this.clients.forEach(e=>{e.waiting.clear()}),this.clients.clear(),this.hostWindow.removeEventListener("message",this.handlePostMessage),this.destroyed=!0},"destroy");this.createBus=s((e,r)=>{if(this.destroyed)throw new Error("SdkCommunicationBus: createBus is called on a destroyed instance");this.clients.set(e.container,{handler:r,target:e,waiting:new Map});let n=this.dispatch,{destroyBus:o}=this;return{target:e,dispatch(a,l){return n(e.container,a,l)},destroy(){return o(e.container)}}},"createBus");this.destroyBus=s(e=>{let r=this.clients.get(e);r&&(r.waiting.clear(),this.clients.delete(e))},"destroyBus");this.hostWindow=e,this.clients=new Map,this.handlePostMessage=this.handlePostMessage.bind(this),this.dispatch=this.dispatch.bind(this),this.destroyBus=this.destroyBus.bind(this),this.hostWindow.addEventListener("message",this.handlePostMessage)}getId(){return Math.random().toString(36).slice(-10)}handlePostMessage(e){if(!Fe(e)||!Se(e.source))return;let r=this.clients.get(e.source);if(!r||r.target.origin!=="*"&&e.origin!==r.target.origin)return;let{data:n}=e,o=r.waiting.get(n.msgId);if(o)r.waiting.delete(n.msgId),o.resolve(n.payload);else{let a=s(l=>{l&&this.dispatch(r.target.container,l,n.msgId)},"after");r.handler(n.payload).then(a).catch(a)}}dispatch(e,r,n){return new Promise((o,a)=>{let l=!n,f=this.clients.get(e);if(!f)return;let W;l?(W=this.getId(),f.waiting.set(W,{resolve:o,reject:a})):W=n;let Be={commandId:he,payload:r,msgId:W};f.target.container.postMessage(Be,f.target.origin),!l&&n&&(f.waiting.delete(n),o(null))})}};s(V,"SdkCommunicationBus");function fe(t){return Object.keys(t)}s(fe,"keys");function ve(){return Math.random().toString(36).slice(-10)}s(ve,"getId");function oe(t){return t!=null&&typeof t=="object"&&!Array.isArray(t)}s(oe,"isObject");function m(t,...e){if(!e.length)return t;let r=e.shift();return oe(t)&&oe(r)&&Object.keys(r).forEach(n=>{oe(r[n])?(t[n]||Object.assign(t,{[n]:{}}),m(t[n],r[n])):Object.assign(t,{[n]:r[n]})}),m(t,...e)}s(m,"mergeDeep");function B(t){let e={};return Object.keys(t).forEach(r=>{let n=t[r];typeof n!="function"&&(e[r]=n)}),e}s(B,"asProps");var Y;(function(r){r.Success="S",r.Fail="F"})(Y||(Y={}));var X=class{constructor({clientWindow:e=window}){let r=new V(e);this.waitingResponse=new Map,this.handlers=new Map,this.responseHandler=this.responseHandler.bind(this),this.handle=this.handle.bind(this),this.busDispatcher=r.createBus({container:e.parent,origin:"*"},this.handle)}push(e,r){let n=ve(),a=[{name:e,payload:r,id:n}];return new Promise((l,f)=>{this.waitingResponse.set(n,{resolve:l,reject:f}),this.busDispatcher.dispatch(a).then(this.responseHandler)})}responseHandler(e){let r=e;for(let n=0;n<r.length;n++){let o=r[n];if(!o)continue;let a=this.waitingResponse.get(o.id);a&&(o.status===Y.Success?a.resolve(o.payload):o.status===Y.Fail&&a.reject(new Error(String(o.payload))),this.waitingResponse.delete(o.id))}return Promise.resolve([])}handle(e){let r=e,n=[];for(let o=0;o<r.length;o++){let a=r[o];if(a.status){this.responseHandler([a]);continue}let l=this.handlers.get(a.id);l&&l.forEach(f=>{n.push(f(a))})}return Promise.all(n)}subscribe(e,r){let n=this.handlers.get(e)||[];this.handlers.set(e,[...n,r])}unsubscribe(e,r){r||this.handlers.delete(e);let n=(this.handlers.get(e)||[]).filter(o=>o!==r);this.handlers.set(e,n)}};s(X,"IframeCommander");var Ue=s(()=>{throw new Error("board not initialized")},"boardNotInitialised"),we,y=s(()=>we??Ue(),"board"),Ne=s(()=>{throw new Error("commander not initialized")},"commanderNotInitialised"),Ee,P=s(()=>Ee??Ne(),"commander"),be=s(t=>{we=t.board,Ee=t.commander},"register");async function i(t,e){return e===void 0?P().push(t):P().push(t,e)}s(i,"runCommand");var c=class{async sync(){return y().sync(this)}async getMetadata(e){return y().getMetadata(this,e)}async setMetadata(e,r){return y().setMetadata(this,e,r)}};s(c,"BaseItem");var x=class extends c{constructor(e){super();this.type="text";this.content="";this.style={fillColor:"transparent",fillOpacity:1,fontFamily:"arial",fontSize:14,textAlign:"left",color:"#1a1a1a"};m(this,e)}};s(x,"Text");var O=class extends c{constructor(e){super();this.type="text";this.childrenIds=[];this.content="";this.style={fillColor:"transparent",fillOpacity:1,fontFamily:"arial",fontSize:14,textAlign:"left",color:"#1a1a1a"};m(this,e)}async add(e){throw new Error("Updating mindmap nodes is not supported at the moment")}async remove(e){throw new Error("Updating mindmap nodes is not supported at the moment")}async sync(){return y().experimental.sync(this)}async getChildren(){let e=this.childrenIds;return e.length===0?[]:y().experimental.get({id:e})}};s(O,"TextExperimental");var Pe;(function(p){p.Rectangle="rectangle",p.Circle="circle",p.Triangle="triangle",p.WedgeRoundRectangleCallout="wedge_round_rectangle_callout",p.RoundRectangle="round_rectangle",p.Rhombus="rhombus",p.Parallelogram="parallelogram",p.Star="star",p.RightArrow="right_arrow",p.LeftArrow="left_arrow",p.Pentagon="pentagon",p.Hexagon="hexagon",p.Octagon="octagon",p.Trapezoid="trapezoid",p.FlowChartPredefinedProcess="flow_chart_predefined_process",p.LeftRightArrow="left_right_arrow",p.Cloud="cloud",p.LeftBrace="left_brace",p.RightBrace="right_brace",p.Cross="cross",p.Can="can"})(Pe||(Pe={}));var q;(function(d){d.Gray="gray",d.LightYellow="light_yellow",d.Yellow="yellow",d.Orange="orange",d.LightGreen="light_green",d.Green="green",d.DarkGreen="dark_green",d.Cyan="cyan",d.LightPink="light_pink",d.Pink="pink",d.Violet="violet",d.Red="red",d.LightBlue="light_blue",d.Blue="blue",d.DarkBlue="dark_blue",d.Black="black"})(q||(q={}));var j;(function(u){u.Red="red",u.Magenta="magenta",u.Violet="violet",u.LightGreen="light_green",u.Green="green",u.DarkGreen="dark_green",u.Cyan="cyan",u.Blue="blue",u.DarkBlue="dark_blue",u.Yellow="yellow",u.Gray="gray",u.Black="black"})(j||(j={}));var I=class extends c{constructor(e){super();this.type="sticky_note";this.shape="square";this.content="";this.style={fillColor:q.LightYellow,textAlign:"center",textAlignVertical:"middle"};this.tagIds=[];m(this,e)}};s(I,"StickyNote");var T=class extends c{constructor(e){super();this.type="shape";this.content="";this.shape="rectangle";this.style={fillColor:"transparent",fontFamily:"arial",fontSize:14,textAlign:"center",textAlignVertical:"middle",borderStyle:"normal",borderOpacity:1,borderColor:"#1a1a1a",borderWidth:2,fillOpacity:1,color:"#1a1a1a"};m(this,e)}};s(T,"Shape");var D=class extends c{constructor(e){super();this.type="image";this.title="";m(this,e)}};s(D,"Image");var C=class extends c{constructor(e){super();this.type="card";this.title="";this.description="";this.style={};this.dueDate=void 0;this.assignee=void 0;this.taskStatus="none";this.tagIds=[];this.fields=[];m(this,e)}};s(C,"Card");var _=class extends c{constructor(e){super();this.type="app_card";this.owned=!1;this.title="";this.description="";this.style={};this.tagIds=[];this.status="disconnected";this.fields=[];m(this,e)}};s(_,"AppCard");var L=class extends c{constructor(e){super();this.type="frame";this.title="";this.childrenIds=[];this.style={fillColor:"transparent"};m(this,e)}async add(e){return this.childrenIds.push(e.id),await this.sync(),await e.sync(),e}async remove(e){let r=e.id;if(!r)throw new Error("trying to remove a non-existent item from a frame");let n=this.childrenIds.findIndex(o=>o===r);if(n===-1)throw new Error(`Can't remove item ${r} from frame ${this.id}. The item is not a current child`);this.childrenIds.splice(n,1),await this.sync(),await e.sync()}async getChildren(){let e=this.childrenIds;return e.length===0?[]:y().get({id:e})}};s(L,"Frame");var G=class extends c{constructor(e){super();this.type="unsupported";m(this,e)}};s(G,"Unsupported");var A=class extends c{constructor(e){super();this.type="preview";m(this,e)}};s(A,"Preview");var M=class extends c{constructor(e){super();this.type="embed";this.previewUrl="";this.mode="inline";m(this,e)}};s(M,"Embed");var k=class{constructor(e){this.type="connector";this.shape="curved";this.start=void 0;this.end=void 0;this.style={};this.captions=[];m(this,e)}async sync(){return y().sync(this)}async getMetadata(e){return y().getMetadata(this,e)}async setMetadata(e,r){return y().setMetadata(this,e,r)}};s(k,"Connector");var F=class extends c{constructor(e){super();this.type="mindmap";this.rootView={type:"text",content:""};this.childrenIds=[];m(this,e)}async sync(){throw new Error("Updating mindmaps is not supported at the moment")}async add(e){throw new Error("Updating mindmaps is not supported at the moment")}async remove(e){throw new Error("Updating mindmaps is not supported at the moment")}async getChildren(){let e=this.childrenIds;return e.length===0?[]:y().experimental.get({id:e})}};s(F,"Mindmap");var R=class{constructor(e){this.type="tag";this.title="";this.color=j.Red;m(this,e)}async sync(){return y().sync(this)}};s(R,"TagEntity");function g(t){switch(t.type){case"text":return new x(t);case"sticky_note":return new I(t);case"shape":return new T(t);case"image":return new D(t);case"frame":return new L(t);case"preview":return new A(t);case"card":return new C(t);case"app_card":return new _(t);case"embed":return new M(t);case"connector":return new k(t);case"tag":return new R(t);case"document":case"mockup":case"curve":case"webscreen":case"usm":case"mindmap":case"kanban":case"table":case"svg":case"emoji":default:return new G(t)}}s(g,"convertToSdkFormat");function S(t){switch(t.type){case"text":return new O(t);case"mindmap":return new F(t);default:return g(t)}}s(S,"convertToSdkFormatExperimental");var He=["drag","drop","dragend","dragstart"],We={"pointer-events":"none","user-select":"none","-webkit-user-select":"none","-webkit-touch-callout":"none"},$=class{constructor(){this.listeners=[];this.originalBodyStyle={};this.dragStartPosition={x:-1/0,y:-1/0}}setDragStartPosition(e,r){this.dragStartPosition={x:e,y:r}}shouldDispatchDrag(e,r){return Math.abs(e-this.dragStartPosition.x)>$.DRAG_THRESHOLD||Math.abs(r-this.dragStartPosition.y)>$.DRAG_THRESHOLD}addListener(e,r,n){this.listeners.push({type:e,selector:r,handler:n})}removeListener(e,r,n){this.listeners=this.listeners.filter(o=>o.type!==e||r!=null&&o.selector!==r||n!=null&&o.handler!==n)}isDraggableElement(e){return!(e instanceof HTMLElement)&&!(e instanceof SVGElement)?!1:this.listeners.some(({selector:r})=>!!e.closest(r))}disableClickEvents(){Object.entries(We).forEach(([e,r])=>{this.originalBodyStyle[e]=document.body.style.getPropertyValue(e),document.body.style.setProperty(e,r)})}restoreClickEvents(){Object.entries(this.originalBodyStyle).forEach(([e,r])=>{document.body.style.setProperty(e,r)}),this.originalBodyStyle={}}dragEnd(e){this.dispatch("dragend",{target:e,clientX:NaN,clientY:NaN,screenX:NaN,screenY:NaN})}dispatch(e,r){this.listeners.forEach(({selector:n,handler:o,type:a})=>{if(e!==a)return;let l=r.target.closest(n);if(!l)return;let f=new CustomEvent(e,{detail:{...r,target:l,type:e}});o(f)})}},U=$;s(U,"BaseDragSensor"),U.DRAG_THRESHOLD=8;var ie=class extends U{constructor(){super();this.isDragging=!1;this.onMouseDown=s(e=>{let r=e.target;!this.isDraggableElement(r)||(this.target=r,this.setDragStartPosition(e.clientX,e.clientY),window.addEventListener("mouseup",this.onMouseUp),document.addEventListener("mousemove",this.onMouseMove,{passive:!0}))},"onMouseDown");this.onMouseMove=s(e=>{if(!this.target)return;let{clientX:r,clientY:n,screenX:o,screenY:a}=e;if(!this.isDragging&&!this.shouldDispatchDrag(r,n))return;let l=this.isDragging?"drag":"dragstart";this.isDragging||this.disableClickEvents(),this.isDragging=!0,this.dispatch(l,{target:this.target,clientX:r,clientY:n,screenX:o,screenY:a})},"onMouseMove");this.onMouseUp=s(e=>{if(this.isDragging&&this.target){let{clientX:r,clientY:n,screenX:o,screenY:a}=e;this.dispatch("drop",{target:this.target,clientX:r,clientY:n,screenX:o,screenY:a})}this.resetDragging()},"onMouseUp");this.resetDragging=s(()=>{window.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("mousemove",this.onMouseMove),this.isDragging&&this.target&&this.dragEnd(this.target),this.target&&this.restoreClickEvents(),this.isDragging=!1,this.target=void 0},"resetDragging");document.addEventListener("mousedown",this.onMouseDown),window.addEventListener("blur",this.resetDragging)}};s(ie,"MouseDragSensor");var Ve=100,N=!1;window.addEventListener("touchmove",t=>{!N||t.preventDefault()},{passive:!1});var ae=class extends U{constructor(){super();this.onTouchStart=s(e=>{let{target:r}=e;if(!this.isDraggableElement(r))return;let{clientX:n,clientY:o,screenX:a,screenY:l}=e.touches[0];this.setDragStartPosition(n,o),this.target=r,this.tapTimeout=window.setTimeout(()=>{this.startDragging({target:r,clientX:n,clientY:o,screenX:a,screenY:l})},Ve),window.addEventListener("touchend",this.onTouchEnd),window.addEventListener("touchcancel",this.resetDragging),window.addEventListener("touchmove",this.resetDragging)},"onTouchStart");this.onTouchMove=s(e=>{if(!this.target)return;let{clientX:r,clientY:n,screenX:o,screenY:a}=e.touches[0];this.dispatch("drag",{target:this.target,clientX:r,clientY:n,screenX:o,screenY:a})},"onTouchMove");this.onTouchEnd=s(e=>{if(N&&this.target){let{clientX:n,clientY:o,screenX:a,screenY:l}=e.changedTouches[0];this.dispatch("drop",{target:this.target,clientX:n,clientY:o,screenX:a,screenY:l})}this.resetDragging()},"onTouchEnd");this.startDragging=s(e=>{!this.shouldDispatchDrag(e.clientX,e.clientY)||(window.removeEventListener("touchmove",this.resetDragging),window.addEventListener("touchmove",this.onTouchMove,{passive:!0}),N=!0,this.disableClickEvents(),this.dispatch("dragstart",e))},"startDragging");this.resetDragging=s(()=>{window.removeEventListener("touchend",this.onTouchEnd),window.removeEventListener("touchcancel",this.resetDragging),window.removeEventListener("touchmove",this.resetDragging),window.removeEventListener("touchmove",this.onTouchMove),N&&this.target&&(this.restoreClickEvents(),this.dragEnd(this.target)),this.target=void 0,N=!1,this.tapTimeout!==void 0&&(clearTimeout(this.tapTimeout),this.tapTimeout=void 0)},"resetDragging");window.addEventListener("touchstart",this.onTouchStart),window.addEventListener("blur",this.resetDragging)}};s(ae,"TouchDragSensor");var z=class{constructor(e){this.touchSensor=new ae,this.mouseSensor=new ie,Object.assign(this,e)}addListener(e,r){this.mouseSensor.addListener(e,this.selector,r),this.touchSensor.addListener(e,this.selector,r)}removeListener(e,r){this.mouseSensor.removeListener(e,void 0,r),this.touchSensor.removeListener(e,void 0,r)}reset(){He.forEach(e=>{this.mouseSensor.removeListener(e),this.touchSensor.removeListener(e)})}};s(z,"DragSensor");var E,xe=s(()=>{E?.reset(),E=new z({selector:".miro-draggable"})},"initDragSensor");function Ye(){return async t=>{let{clientX:e,clientY:r}=t.detail;await i("UI_DRAG_START",{clientX:e,clientY:r,dragImage:void 0})}}s(Ye,"onDragStart");function Xe(){let t;return e=>{if(t)return;t=requestAnimationFrame(()=>{t=void 0});let{clientX:r,clientY:n}=e.detail;i("UI_DRAG_MOVE",{clientX:r,clientY:n})}}s(Xe,"onDrag");function qe(t){return async e=>{let{target:r,clientX:n,clientY:o}=e.detail,a=await i("UI_DRAG_DROP",{clientX:n,clientY:o});if(a==null)return;let{x:l,y:f}=a;t({x:l,y:f,target:r})}}s(qe,"onDrop");function je(){return async()=>{await i("UI_DRAG_END")}}s(je,"onDragEnd");async function ze(t){await P().push("UI_REGISTER_EVENT",{name:t})}s(ze,"registerEventListener");async function $e(t){await P().push("UI_UNREGISTER_EVENT",{name:t})}s($e,"unregisterEventListener");var pe="icon:click",me="app_card:open",de="app_card:connect",ce="selection:update",le="online_users:update",Z="items:create",K="items:delete",J="experimental:items:update",Ze="custom:",Ie=s(t=>t.startsWith(Ze),"isCustomEvent"),ue=class{constructor(){this.listeners={[pe]:[],[me]:[],[de]:[],[ce]:[],[le]:[],[Z]:[],[J]:[],[K]:[]}}async addListener(e,r){this.listeners[e]||(this.listeners[e]=[]);let n=this.listeners[e];if(n.push(r),n.length===1)return ze(e)}async removeListener(e,r){if(this.listeners[e]=this.listeners[e].filter(n=>n!==r),this.listeners[e].length===0)return $e(e)}listen(){fe(this.listeners).forEach(e=>{P().unsubscribe(e),P().subscribe(e,async r=>{this.listeners[e].forEach(n=>n(r))})})}};s(ue,"AppManager");var h={drop:new Map,"app_card:connect":new Map,"app_card:open":new Map,"icon:click":new Map,"selection:update":new Map,"online_users:update":new Map,[Z]:new Map,[J]:new Map,[K]:new Map};function b(t,e,r){return h[t]||(h[t]=new Map),h[t].set(e,r),r}s(b,"linkEventHandlerToListener");function ye(t,e){let r=h[t],n=r.get(e);return r.delete(e),n}s(ye,"getListenerByEventHandler");var v=new ue;function Ke(t){h.drop.size===0&&(h.dragstart=Ye(),h.drag=Xe(),h.dragend=je(),E.addListener("dragstart",h.dragstart),E.addListener("drag",h.drag),E.addListener("dragend",h.dragend)),E.addListener("drop",b("drop",t,qe(t)))}s(Ke,"attachDragAndDropListeners");function Je(t){E.removeListener("drop",ye("drop",t)),h.drop.size===0&&(E.removeListener("dragstart",h.dragstart),E.removeListener("drag",h.drag),E.removeListener("dragend",h.dragend))}s(Je,"detachDragAndDropListeners");function Te(t,e){switch(t){case"drop":return Ke(e),Promise.resolve();case pe:return v.addListener(t,b(t,e,async()=>e()));case me:return v.addListener(t,b(t,e,async r=>{let{appCard:n}=r.payload,o={appCard:g(n)};e(o)}));case de:return v.addListener(t,b(t,e,async r=>{let{appCard:n}=r.payload,o={appCard:g(n)};e(o)}));case ce:return v.addListener(t,b(t,e,async r=>{let{items:n}=r.payload,o={items:n.map(a=>g(a))};e(o)}));case le:return v.addListener(t,b(t,e,async r=>{let n=r.payload;e(n)}));case Z:return v.addListener(t,b(t,e,async r=>{let{items:n}=r.payload,o={items:n.map(a=>g(a))};e(o)}));case J:return v.addListener(t,b(t,e,async r=>{let{items:n}=r.payload,o={items:n.map(a=>g(a))};e(o)}));case K:return v.addListener(t,b(t,e,async r=>{let{items:n}=r.payload,o={items:n.map(a=>g(a))};e(o)}));default:if(Ie(t)){let r=s(async n=>{let{items:o}=n.payload,a={items:o.map(l=>g(l))};e(a)},"internalHandler");return P().subscribe(t,r),b(t,e,r),v.addListener(t,r)}throw new Error(`unknown event: ${t}`)}}s(Te,"on");function De(t,e){switch(t){case"drop":return Je(e),Promise.resolve();case pe:case me:case de:case ce:case le:case Z:case J:case K:return v.removeListener(t,ye(t,e));default:if(Ie(t)){let r=ye(t,e);return P().unsubscribe(t,r),v.removeListener(t,r)}throw new Error(`unknown event: ${t}`)}}s(De,"off");var Q=class{constructor(){this.on=Te;this.off=De}async openPanel(e){await i("UI_OPEN_PANEL",e)}async closePanel(){await i("UI_CLOSE_PANEL")}async openModal(e){await i("UI_OPEN_MODAL",e)}async closeModal(){await i("UI_CLOSE_MODAL")}};s(Q,"BoardUI");var Ce;(function(t){t.Red="red",t.Magenta="magenta",t.Violet="violet",t.LightGreen="light_green",t.Green="green",t.DarkGreen="dark_green",t.Cyan="cyan",t.Blue="blue",t.DarkBlue="dark_blue",t.Yellow="yellow",t.Gray="gray",t.Black="black"})(Ce||(Ce={}));var _e;(function(t){t.Gray="gray",t.LightYellow="light_yellow",t.Yellow="yellow",t.Orange="orange",t.LightGreen="light_green",t.Green="green",t.DarkGreen="dark_green",t.Cyan="cyan",t.LightPink="light_pink",t.Pink="pink",t.Violet="violet",t.Red="red",t.LightBlue="light_blue",t.Blue="blue",t.DarkBlue="dark_blue",t.Black="black"})(_e||(_e={}));var Le;(function(t){t.Rectangle="rectangle",t.Circle="circle",t.Triangle="triangle",t.WedgeRoundRectangleCallout="wedge_round_rectangle_callout",t.RoundRectangle="round_rectangle",t.Rhombus="rhombus",t.Parallelogram="parallelogram",t.Star="star",t.RightArrow="right_arrow",t.LeftArrow="left_arrow",t.Pentagon="pentagon",t.Hexagon="hexagon",t.Octagon="octagon",t.Trapezoid="trapezoid",t.FlowChartPredefinedProcess="flow_chart_predefined_process",t.LeftRightArrow="left_right_arrow",t.Cloud="cloud",t.LeftBrace="left_brace",t.RightBrace="right_brace",t.Cross="cross",t.Can="can"})(Le||(Le={}));var H;(function(t){t.Error="error",t.Info="info"})(H||(H={}));var ge="SHOW_NOTIFICATION",ee=class{async showInfo(e){let r={message:e,type:H.Info};await i(ge,r)}async showError(e){let r={message:e,type:H.Error};await i(ge,r)}async show(e){await i(ge,e)}};s(ee,"Notifications");var te=class{constructor(){}async get(){return await i("VIEWPORT_GET")}async set(e){return await i("VIEWPORT_SET",e)}async zoomTo(e){return Array.isArray(e)?i("VIEWPORT_ZOOM_TO",{items:e.map(r=>r.id)}):this.zoomTo([e])}async getZoom(){return await i("VIEWPORT_GET_ZOOM")}async setZoom(e){return await i("VIEWPORT_SET_ZOOM",{zoomLevel:e})}};s(te,"Viewport");async function Qe(t,e){return m(e,t),e}s(Qe,"mergeResponse");var re=class{async get(e){let r=await i("EXPERIMENTAL_WIDGET_GET",e);if(!Array.isArray(r))throw new Error("Error retrieving items");return r.map(S)}async select(e){return(await i("EXPERIMENTAL_SELECT_WIDGETS",e)).map(S)}async deselect(e){return(await i("EXPERIMENTAL_DESELECT_WIDGETS",e)).map(S)}async getSelection(){return(await i("EXPERIMENTAL_GET_SELECTION")).map(S)}async sync(e){let r=B(e);return i("EXPERIMENTAL_WIDGET_UPDATE",r).then(n=>{Qe(n,e)})}};s(re,"Experimental");async function Ae(t,e){return m(e,t),e}s(Ae,"mergeResponse");async function w(t){let e=B(t);return i("WIDGET_CREATE",e).then(r=>Ae(r,t))}s(w,"add");var se=class{constructor(){this.ui=new Q;this.notifications=new ee;this.viewport=new te;this.experimental=new re}async createCard(e){return w(new C(e))}async createAppCard(e){return w(new _(e))}async createFrame(e){return w(new L(e))}async createImage(e){return w(new D(e))}async createPreview(e){return w(new A(e))}async createShape(e){return w(new T(e))}async createStickyNote(e){return w(new I(e))}async createText(e){return w(new x(e))}async createEmbed(e){return w(new M(e))}async createConnector(e){return w(new k(e))}async createTag(e){return w(new R(e))}async sync(e){let r=B(e);return i("WIDGET_UPDATE",r).then(n=>{Ae(n,e)})}async remove(e){let{id:r,type:n}=e;await i("WIDGET_REMOVE",{id:r,type:n})}bringToFront(e){return Array.isArray(e)?i("BRING_TO_FRONT",{items:e.map(r=>r.id)}):this.bringToFront([e])}sendToBack(e){return Array.isArray(e)?i("SEND_TO_BACK",{items:e.map(r=>r.id)}):this.sendToBack([e])}async getById(e){let r=await this.get({id:e});if(Array.isArray(r)&&r.length)return g(r[0]);throw new Error(`Can not retrieve item with id ${e}`)}async get(e){let r=await i("WIDGET_GET",e);if(!Array.isArray(r))throw new Error("Error retrieving items");return r.map(g)}async getInfo(){return i("GET_BOARD_INFO")}async getUserInfo(){return i("GET_USER_INFO")}async getSelection(){return(await i("GET_SELECTION")).map(g)}async getOnlineUsers(){return await i("GET_ONLINE_USERS")}async select(e){return(await i("SELECT_WIDGETS",e)).map(g)}async deselect(e){return(await i("DESELECT_WIDGETS",e)).map(g)}async getAppData(e){return await i("GET_BOARD_APP_DATA",{key:e})}async setAppData(e,r){return await i("SET_BOARD_APP_DATA",{key:e,value:r})}async setMetadata(e,r,n){let o=e.id;return await i("WIDGET_SET_METADATA",{itemId:o,key:r,value:n})}async getMetadata(e,r){let n=e.id;return await i("WIDGET_GET_METADATA",{itemId:n,key:r})}async getIdToken(){return await i("GET_ID_TOKEN")}};s(se,"Board");var Me="1.45727.0",ke=new X({clientWindow:window}),Re=new se;be({commander:ke,board:Re});ke.push("handshake",{clientVersion:Me});xe();v.listen();new URLSearchParams(location.search).has("autotest")&&console.log("SDKv2 loaded for client version: 1.45727.0 and git commit: 939c0b09b3dd652f5ffb2a124a937775182ff61b");return et;})();