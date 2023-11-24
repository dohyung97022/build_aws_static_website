"use strict";(self["webpackChunktemplate"]=self["webpackChunktemplate"]||[]).push([[756],{1142:function(t,e,o){o.d(e,{Z:function(){return r}});var a=o(3396),i=o(9242);const n=t=>((0,a.dD)("data-v-05bea559"),t=t(),(0,a.Cn)(),t),s={class:"input-group"},l=n((()=>(0,a._)("span",{class:"input-group-text"},":",-1)));function c(t,e,o,n,c,u){return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.wy)((0,a._)("input",{type:"number",min:"0",max:"23",placeholder:"00",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>this.hour=t),onChange:e[1]||(e[1]=(...t)=>this.setHourMinutesToUnixTime&&this.setHourMinutesToUnixTime(...t))},null,544),[[i.nr,this.hour]]),l,(0,a.wy)((0,a._)("input",{type:"number",min:"0",max:"59",placeholder:"00",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>this.minute=t),onChange:e[3]||(e[3]=(...t)=>this.setHourMinutesToUnixTime&&this.setHourMinutesToUnixTime(...t))},null,544),[[i.nr,this.minute]])])}var u=(0,a.aZ)({name:"DeltaTimeInput",props:{modelValue:Number},data(){return{unixTime:0,hour:0,minute:0}},async created(){this.startAssignUnixTime(),this.setUnixTimeToHourMinutes()},watch:{unixTime(t){this.$emit("update:modelValue",t)}},methods:{startAssignUnixTime(){void 0!==this.modelValue?this.unixTime=this.modelValue:this.unixTime=0},setUnixTimeToHourMinutes(){let t=new Date(1e3*this.unixTime);if(t.getTime()>864e5)throw"DeltaTimeInput 안에 주입된 v-model 의 값이 24시간을 초과합니다. time:"+this.unixTime;this.hour=t.getUTCHours(),this.minute=t.getUTCMinutes()},setHourMinutesToUnixTime(){let t=new Date(0);t.setUTCHours(this.hour),t.setUTCMinutes(this.minute),this.unixTime=t.getTime()/1e3}}}),m=o(89);const d=(0,m.Z)(u,[["render",c],["__scopeId","data-v-05bea559"]]);var r=d},5756:function(t,e,o){o.r(e),o.d(e,{default:function(){return tt}});var a=o(3396);const i={class:"container-xxxl"},n={class:"row row-cols-2 justify-content-between"},s={class:"col-12 col-auto"};function l(t,e,o,l,c,u){const m=(0,a.up)("ViewTitle"),d=(0,a.up)("AutomationMachineActionList");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(m,{title:"머신(서버) 행동절차","sub-title":"머신의 행동절차를 구성합니다."}),(0,a._)("div",n,[(0,a._)("div",s,[(0,a.Wm)(d)])])])}var c=o(3283),u=o(9242),m=o(7139);const d=t=>((0,a.dD)("data-v-6899df8a"),t=t(),(0,a.Cn)(),t),r={class:"col"},p={class:"row text-center mb-1"},h=d((()=>(0,a._)("h4",{class:"col-11 text-start"},"행동 리스트",-1))),v={class:"col-1"},_={class:"btn btn-primary",disabled:""},b={class:"row text-center"},g=(0,a.uE)('<div class="col-2 m-auto" data-v-6899df8a>name</div><div class="col-1 m-auto" data-v-6899df8a>run</div><div class="col-1 m-auto" data-v-6899df8a>loop</div><div class="col-1 m-auto" data-v-6899df8a>stop</div><div class="col-1 m-auto" data-v-6899df8a>edit</div><div class="col-2 m-auto" data-v-6899df8a>proxyType</div><div class="col-1 m-auto" data-v-6899df8a>isGlobal</div><div class="col-2 m-auto" data-v-6899df8a>waitTime</div>',8),x={class:"col-1"},T={class:"btn btn-primary",disabled:""},y=d((()=>(0,a._)("hr",null,null,-1))),w={class:"row text-center mb-3"},f={class:"col-2"},U=["onUpdate:modelValue"],V={class:"dropdown col-1"},k=["onClick"],M={class:"dropdown col-1"},A=["onClick"],C={class:"col-1"},D={class:"col-1"},W={class:"btn btn-light",disabled:""},H={class:"col-2"},Z=["onUpdate:modelValue"],P=["value"],q={class:"col-1"},I=["onUpdate:modelValue"],E={class:"col-2"},L={class:"col-1"},S={class:"btn btn-light",disabled:""},z=d((()=>(0,a._)("hr",{class:"m-0"},null,-1)));function $(t,e,o,i,n,s){const l=(0,a.up)("font-awesome-icon"),c=(0,a.up)("delta-time-input"),d=(0,a.up)("draggable");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",p,[h,(0,a._)("div",v,[(0,a._)("button",_,[(0,a.Wm)(l,{icon:"floppy-disk"})])])]),(0,a._)("div",b,[g,(0,a._)("div",x,[(0,a._)("button",T,[(0,a.Wm)(l,{icon:"plus"})])])]),y,(0,a.Wm)(d,{list:t.actions,"item-key":"id"},{item:(0,a.w5)((({element:o})=>[(0,a._)("div",w,[(0,a._)("div",f,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t=>o.name=t},null,8,U),[[u.nr,o.name]])]),(0,a._)("div",V,[(0,a._)("button",{class:"btn btn-light",onClick:e=>t.run_action(o)},[(0,a.Wm)(l,{icon:"play"})],8,k)]),(0,a._)("div",M,[(0,a._)("button",{class:"btn btn-light",onClick:e=>t.loop_action(o)},[(0,a.Wm)(l,{icon:"repeat"})],8,A)]),(0,a._)("div",C,[(0,a._)("button",{onClick:e[0]||(e[0]=e=>t.stop_action()),class:"btn btn-light"},[(0,a.Wm)(l,{icon:"stop"})])]),(0,a._)("div",D,[(0,a._)("button",W,[(0,a.Wm)(l,{icon:"pen-to-square"})])]),(0,a._)("div",H,[(0,a.wy)((0,a._)("select",{class:"form-select","onUpdate:modelValue":t=>o.proxy_type=t},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.proxyEnums["proxyType"],(t=>((0,a.wg)(),(0,a.iD)("option",{key:t.key,value:t.value},(0,m.zw)(t.key),9,P)))),128))],8,Z),[[u.bM,o.proxy_type]])]),(0,a._)("div",q,[(0,a.wy)((0,a._)("input",{class:"form-check-input btn-common-size checkbox-secondary",type:"checkbox","onUpdate:modelValue":t=>o.is_global=t},null,8,I),[[u.e8,o.is_global]])]),(0,a._)("div",E,[(0,a.Wm)(c,{modelValue:o.wait_time,"onUpdate:modelValue":t=>o.wait_time=t},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("div",L,[(0,a._)("button",S,[(0,a.Wm)(l,{icon:"minus"})])])])])),_:1},8,["list"]),z])}var j=o(6265),G=o.n(j),K=o(6983),N=o.n(K),Y=o(1142),B=o(3807),F=(0,a.aZ)({name:"AutomationPhoneActionList",components:{draggable:N(),deltaTimeInput:Y.Z},data(){return{udid:this.$route.query.udid,actions:[],proxyEnums:{},runMachineActionParameters:{actionSeq:null},stopPhoneActionParameters:{}}},async created(){this.get_machine_actions(),this.get_proxy_enums()},methods:{get_machine_actions(){G().get("http://127.0.0.1:8082/api/automation/machine/actions").then((t=>{this.actions=t.data.map((t=>new B.Z(t)))})).catch((t=>{console.log(t)}))},run_action(t){this.runMachineActionParameters.actionSeq=t.action_seq,G().get("http://127.0.0.1:8082/api/automation/machine/action/appium/run",{params:this.runMachineActionParameters}).then((t=>{console.log(t)})).catch((t=>console.log(t)))},loop_action(t){this.runMachineActionParameters.actionSeq=t.action_seq,G().get("http://127.0.0.1:8082/api/automation/machine/action/appium/loop",{params:this.runMachineActionParameters}).then((t=>{console.log(t)})).catch((t=>console.log(t)))},stop_action(){G().get("http://127.0.0.1:8082/api/automation/machine/action/appium/stop").then((t=>{console.log(t)})).catch((t=>console.log(t)))},get_proxy_enums(){G().get("http://127.0.0.1:8082/api/utils/enum/proxy").then((t=>{this.proxyEnums=t.data})).catch((t=>console.log(t)))}}}),J=o(89);const O=(0,J.Z)(F,[["render",$],["__scopeId","data-v-6899df8a"]]);var Q=O,R=(0,a.aZ)({name:"AutomationPhoneActionView",components:{AutomationMachineActionList:Q,ViewTitle:c.Z}});const X=(0,J.Z)(R,[["render",l]]);var tt=X}}]);
//# sourceMappingURL=756.bcdae19c.js.map