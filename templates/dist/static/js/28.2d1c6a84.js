"use strict";(self["webpackChunktemplate"]=self["webpackChunktemplate"]||[]).push([[28],{28:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var o=n(3396);const a={class:"container-xxxl"};function s(e,t,n,s,i,r){const c=(0,o.up)("ViewTitle"),u=(0,o.up)("AutomationAgentJobRequestScreenForm");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(c,{title:"요원 작업 요청","sub-title":"수동 작업이 필요한 경우 요원에게 작업을 요청합니다."}),(0,o.Wm)(u)])}var i=n(3283),r=n(9242);const c={class:"input-group w-25"},u=["src"];function g(e,t,n,a,s,i){return(0,o.wg)(),(0,o.iD)("div",c,[null!=e.phone_screen?((0,o.wg)(),(0,o.iD)("img",{key:0,src:e.phone_screen.img,onClick:t[0]||(t[0]=t=>e.phone_touch(t)),class:"img-thumbnail"},null,8,u)):(0,o.kq)("",!0),(0,o.wy)((0,o._)("input",{placeholder:"요원 이메일",type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=t=>e.assignJobToAgentParameters.agent_email=t)},null,512),[[r.nr,e.assignJobToAgentParameters.agent_email]]),(0,o._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:t[2]||(t[2]=(...t)=>e.assign_job_to_agent&&e.assign_job_to_agent(...t))},"작업 요청")])}var l=n(6265),h=n.n(l),m=n(2218),_=(0,o.aZ)({name:"AutomationAgentJobRequestScreenForm",data(){return{udid:"",phone_screen:null,assignJobToAgentParameters:{job:"BING_CAPTCHA",agent_email:""}}},methods:{assign_job_to_agent(){h().get("http://127.0.0.1:8082/api/automation/agentJob/udid",{params:this.assignJobToAgentParameters}).then((e=>{e.data.toString()=={}.toString()&&alert("할당 가능한 작업이 없습니다."),this.udid=e.data})).catch((e=>console.log(e))),(0,m.$)(),this.phone_connect(),this.phone_screens_connect()},phone_connect(){m.W.emit("join_room",this.assignJobToAgentParameters.agent_email)},phone_screens_connect(){m.W.on("phone_screens_connect",(e=>{this.phone_screen=e,this.udid=e.udid}))},phone_touch(e){""!=this.phone_screen?.img&&e.target instanceof HTMLImageElement&&m.W.emit("phone_touch",{udid:this.udid,touch_x:e.offsetX,touch_y:e.offsetY,touch_w:e.target.naturalWidth,touch_h:e.target.naturalHeight})}}}),p=n(89);const d=(0,p.Z)(_,[["render",g]]);var b=d,A={name:"AutomationAgentJobView.vue",components:{AutomationAgentJobRequestScreenForm:b,ViewTitle:i.Z}};const f=(0,p.Z)(A,[["render",s]]);var w=f}}]);
//# sourceMappingURL=28.2d1c6a84.js.map