"use strict";(self["webpackChunktemplate"]=self["webpackChunktemplate"]||[]).push([[917],{1218:function(t,o,n){n.d(o,{Z:function(){return r}});var i=n(3396),e=n(7139);const s=["src"];function a(t,o,n,a,c,l){return null!=t.phone_screen?((0,i.wg)(),(0,i.iD)("img",{key:0,src:t.phone_screen.img,onClick:o[0]||(o[0]=o=>t.phone_touch(o)),class:"img-thumbnail",style:(0,e.j5)({width:this.$props.width,height:this.$props.height})},null,12,s)):(0,i.kq)("",!0)}var c=n(2218),l=(0,i.aZ)({name:"MonitorPhoneScreen",props:{width:String,height:String,udid:String},data(){return{phone_screen:null}},async created(){(0,c.$)(),this.phone_connect(),this.phone_screens_connect()},methods:{phone_connect(){c.W.emit("join_room","phone_screens")},phone_screens_connect(){c.W.on("phone_screens_connect",(t=>{t.udid===this.udid&&(this.phone_screen=t)}))},phone_touch(t){t.target instanceof HTMLImageElement&&c.W.emit("phone_touch",{udid:this.udid,touch_x:t.offsetX,touch_y:t.offsetY,touch_w:t.target.naturalWidth,touch_h:t.target.naturalHeight})}}}),h=n(89);const u=(0,h.Z)(l,[["render",a]]);var r=u},1142:function(t,o,n){n.d(o,{Z:function(){return d}});var i=n(3396),e=n(9242);const s=t=>((0,i.dD)("data-v-05bea559"),t=t(),(0,i.Cn)(),t),a={class:"input-group"},c=s((()=>(0,i._)("span",{class:"input-group-text"},":",-1)));function l(t,o,n,s,l,h){return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.wy)((0,i._)("input",{type:"number",min:"0",max:"23",placeholder:"00",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=t=>this.hour=t),onChange:o[1]||(o[1]=(...t)=>this.setHourMinutesToUnixTime&&this.setHourMinutesToUnixTime(...t))},null,544),[[e.nr,this.hour]]),c,(0,i.wy)((0,i._)("input",{type:"number",min:"0",max:"59",placeholder:"00",class:"form-control","onUpdate:modelValue":o[2]||(o[2]=t=>this.minute=t),onChange:o[3]||(o[3]=(...t)=>this.setHourMinutesToUnixTime&&this.setHourMinutesToUnixTime(...t))},null,544),[[e.nr,this.minute]])])}var h=(0,i.aZ)({name:"DeltaTimeInput",props:{modelValue:Number},data(){return{unixTime:0,hour:0,minute:0}},async created(){this.startAssignUnixTime(),this.setUnixTimeToHourMinutes()},watch:{unixTime(t){this.$emit("update:modelValue",t)}},methods:{startAssignUnixTime(){void 0!==this.modelValue?this.unixTime=this.modelValue:this.unixTime=0},setUnixTimeToHourMinutes(){let t=new Date(1e3*this.unixTime);if(t.getTime()>864e5)throw"DeltaTimeInput 안에 주입된 v-model 의 값이 24시간을 초과합니다. time:"+this.unixTime;this.hour=t.getUTCHours(),this.minute=t.getUTCMinutes()},setHourMinutesToUnixTime(){let t=new Date(0);t.setUTCHours(this.hour),t.setUTCMinutes(this.minute),this.unixTime=t.getTime()/1e3}}}),u=n(89);const r=(0,u.Z)(h,[["render",l],["__scopeId","data-v-05bea559"]]);var d=r},9917:function(t,o,n){n.r(o),n.d(o,{default:function(){return st}});var i=n(3396);const e={class:"container-xxxl"},s={class:"row row-cols-2 justify-content-between"},a={class:"col-4 col-auto"},c={class:"col-8"};function l(t,o,n,l,h,u){const r=(0,i.up)("ViewTitle"),d=(0,i.up)("MonitorPhoneScreen"),p=(0,i.up)("AutomationPhoneActionList");return(0,i.wg)(),(0,i.iD)("div",e,[(0,i.Wm)(r,{title:"핸드폰 행동절차","sub-title":"핸드폰의 행동절차를 구성합니다."}),(0,i._)("div",s,[(0,i._)("div",a,[(0,i.Wm)(d,{width:"300px",height:"500px",udid:this.udid},null,8,["udid"])]),(0,i._)("div",c,[(0,i.Wm)(p)])])])}var h=n(3283),u=n(1218),r=n(9242),d=n(7139);const p=t=>((0,i.dD)("data-v-42e59a76"),t=t(),(0,i.Cn)(),t),m={class:"col"},_={class:"row text-center mb-1"},v=p((()=>(0,i._)("h4",{class:"col-11 text-start"},"행동 리스트",-1))),A={class:"col-1"},g={class:"row text-center"},w=(0,i.uE)('<div class="col-2 m-auto" data-v-42e59a76>name</div><div class="col-1 m-auto" data-v-42e59a76>run</div><div class="col-1 m-auto" data-v-42e59a76>loop</div><div class="col-1 m-auto" data-v-42e59a76>stop</div><div class="col-1 m-auto" data-v-42e59a76>edit</div><div class="col-2 m-auto" data-v-42e59a76>proxyType</div><div class="col-1 m-auto" data-v-42e59a76>isGlobal</div><div class="col-2 m-auto" data-v-42e59a76>waitTime</div>',8),x={class:"col-1"},b=p((()=>(0,i._)("hr",null,null,-1))),y={class:"row text-center mb-3"},P={class:"col-2"},T=["onUpdate:modelValue"],f={class:"dropdown col-1"},k=["onClick"],Z={class:"dropdown col-1"},U=["onClick"],C={class:"col-1"},q={class:"col-1"},V=["onClick"],W={class:"col-2"},M=["onUpdate:modelValue"],D=["value"],H={class:"col-1"},L=["onUpdate:modelValue"],S={class:"col-2"},$={class:"col-1"},I=["onClick"],R=p((()=>(0,i._)("hr",{class:"m-0"},null,-1)));function E(t,o,n,e,s,a){const c=(0,i.up)("font-awesome-icon"),l=(0,i.up)("delta-time-input"),h=(0,i.up)("draggable");return(0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("div",_,[v,(0,i._)("div",A,[(0,i._)("button",{class:"btn btn-primary",onClick:o[0]||(o[0]=(...o)=>t.save_phone_actions&&t.save_phone_actions(...o))},[(0,i.Wm)(c,{icon:"floppy-disk"})])])]),(0,i._)("div",g,[w,(0,i._)("div",x,[(0,i._)("button",{class:"btn btn-primary",onClick:o[1]||(o[1]=(...o)=>t.add_phone_action_row&&t.add_phone_action_row(...o))},[(0,i.Wm)(c,{icon:"plus"})])])]),b,(0,i.Wm)(h,{list:t.phoneActionRowList,"item-key":"id"},{item:(0,i.w5)((({element:n,index:e})=>[(0,i._)("div",y,[(0,i._)("div",P,[(0,i.wy)((0,i._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t=>n.phoneActionAssociation.action.name=t},null,8,T),[[r.nr,n.phoneActionAssociation.action.name]])]),(0,i._)("div",f,[(0,i._)("button",{class:"btn btn-light",onClick:o=>t.run_action(n)},[(0,i.Wm)(c,{icon:"play"})],8,k)]),(0,i._)("div",Z,[(0,i._)("button",{class:"btn btn-light",onClick:o=>t.loop_action(n)},[(0,i.Wm)(c,{icon:"repeat"})],8,U)]),(0,i._)("div",C,[(0,i._)("button",{onClick:o[2]||(o[2]=o=>t.stop_action()),class:"btn btn-light"},[(0,i.Wm)(c,{icon:"stop"})])]),(0,i._)("div",q,[(0,i._)("button",{onClick:o=>t.edit_action(n),class:"btn btn-light"},[(0,i.Wm)(c,{icon:"pen-to-square"})],8,V)]),(0,i._)("div",W,[(0,i.wy)((0,i._)("select",{class:"form-select","onUpdate:modelValue":t=>n.phoneActionAssociation.action.proxy_type=t},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.proxyEnums["proxyType"],(t=>((0,i.wg)(),(0,i.iD)("option",{key:t.key,value:t.value},(0,d.zw)(t.key),9,D)))),128))],8,M),[[r.bM,n.phoneActionAssociation.action.proxy_type]])]),(0,i._)("div",H,[(0,i.wy)((0,i._)("input",{class:"form-check-input btn-common-size checkbox-secondary",type:"checkbox","onUpdate:modelValue":t=>n.phoneActionAssociation.action.is_global=t},null,8,L),[[r.e8,n.phoneActionAssociation.action.is_global]])]),(0,i._)("div",S,[(0,i.Wm)(l,{modelValue:n.phoneActionAssociation.action.wait_time,"onUpdate:modelValue":t=>n.phoneActionAssociation.action.wait_time=t},null,8,["modelValue","onUpdate:modelValue"])]),(0,i._)("div",$,[(0,i._)("button",{class:"btn btn-light",onClick:o=>t.remove_phone_action_row(e)},[(0,i.Wm)(c,{icon:"minus"})],8,I)])])])),_:1},8,["list"]),R])}var j=n(6265),z=n.n(j),Y=n(6983),G=n.n(Y),K=n(1142),N=n(2482);class X{constructor(t){(0,N.Z)(this,"name",void 0),(0,N.Z)(this,"phoneActionAssociation",void 0),this.phoneActionAssociation=t,this.name=t.action.name}}var B=X;class F{constructor(t={}){(0,N.Z)(this,"udid",void 0),(0,N.Z)(this,"model",void 0),(0,N.Z)(this,"action_associations",void 0),this.udid=t.udid??"",this.model=t.model??"",this.action_associations=t.action_associations??[]}}var J=n(3807);class O{constructor(t={}){(0,N.Z)(this,"phone_action_association_seq",void 0),(0,N.Z)(this,"udid",void 0),(0,N.Z)(this,"action_seq",void 0),(0,N.Z)(this,"phone",void 0),(0,N.Z)(this,"action",void 0),this.phone_action_association_seq=t.phone_action_association_seq??null,this.udid=t.udid??null,this.action_seq=t.phone_action_association_seq??null,this.phone=t.phone??new F,this.action=t.action??new J.Z}}var Q=(0,i.aZ)({name:"AutomationPhoneActionList",components:{draggable:G(),deltaTimeInput:K.Z},data(){return{udid:this.$route.query.udid,phoneActionRowList:[],proxyEnums:{},getPhoneActionsParameters:{udid:""},savePhoneActionsParameters:{udid:"",phoneActionAssociation:[]},runPhoneActionParameters:{udid:"",actionSeq:null},stopPhoneActionParameters:{udid:""}}},async created(){this.get_phone_actions(),this.get_proxy_enums()},methods:{get_phone_actions(){this.getPhoneActionsParameters.udid=this.udid,z().get("http://127.0.0.1:8082/api/automation/phone/actions",{params:this.getPhoneActionsParameters}).then((t=>{this.phoneActionRowList=new F(t.data).action_associations.map((t=>new B(t)))})).catch((t=>{console.log(t)}))},save_phone_actions(){this.savePhoneActionsParameters.udid=this.udid,this.savePhoneActionsParameters.phoneActionAssociation=this.phoneActionRowList.map((t=>t.phoneActionAssociation)),z().post("http://127.0.0.1:8082/api/automation/phone/actions",this.savePhoneActionsParameters).then((t=>{this.get_phone_actions(),alert("저장되었습니다."),console.log(t)})).catch((t=>console.log(t)))},add_phone_action_row(){const t=new O;t.action.is_root=!0,this.phoneActionRowList.push(new B(t))},remove_phone_action_row(t){this.phoneActionRowList.splice(t,1)},edit_action(t){null!==t.phoneActionAssociation.action_seq?this.$router.push("/automation/action?actionSeq="+t.phoneActionAssociation.action_seq+"&udid="+this.udid):alert("저장 이후에 편집이 가능합니다.")},run_action(t){null!==t.phoneActionAssociation.action_seq?(this.runPhoneActionParameters.actionSeq=t.phoneActionAssociation.action_seq,this.runPhoneActionParameters.udid=this.udid,z().get("http://127.0.0.1:8082/api/automation/phone/action/appium/run",{params:this.runPhoneActionParameters}).then((t=>{console.log(t)})).catch((t=>console.log(t)))):alert("저장 이후에 실행이 가능합니다.")},loop_action(t){null!==t.phoneActionAssociation.action_seq?(this.runPhoneActionParameters.actionSeq=t.phoneActionAssociation.action_seq,this.runPhoneActionParameters.udid=this.udid,z().get("http://127.0.0.1:8082/api/automation/phone/action/appium/loop",{params:this.runPhoneActionParameters}).then((t=>{console.log(t)})).catch((t=>console.log(t)))):alert("저장 이후에 실행이 가능합니다.")},stop_action(){this.stopPhoneActionParameters.udid=this.udid,z().get("http://127.0.0.1:8082/api/automation/phone/action/appium/stop",{params:this.stopPhoneActionParameters}).then((t=>{console.log(t)})).catch((t=>console.log(t)))},get_proxy_enums(){z().get("http://127.0.0.1:8082/api/utils/enum/proxy").then((t=>{this.proxyEnums=t.data})).catch((t=>console.log(t)))}}}),tt=n(89);const ot=(0,tt.Z)(Q,[["render",E],["__scopeId","data-v-42e59a76"]]);var nt=ot,it=(0,i.aZ)({name:"AutomationPhoneActionView",components:{AutomationPhoneActionList:nt,MonitorPhoneScreen:u.Z,ViewTitle:h.Z},data(){return{udid:this.$route.query.udid}}});const et=(0,tt.Z)(it,[["render",l]]);var st=et}}]);
//# sourceMappingURL=917.97b35e23.js.map