webpackJsonp([3],{"3Dg0":function(t,e){},"4JK8":function(t,e){},G5Zm:function(t,e){},LuTz:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},o=n("VU/8")({name:"app"},s,!1,function(t){n("T+Rn")},null,null).exports,r=n("/ocq"),d=n("Dd8w"),i=n.n(d),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"el-container"},[this._m(0),e("div",{staticClass:"el-main"},[this._t("main")],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"el-header"},[e("div",{staticClass:"el-header-logo"},[this._v("ふうふの地雷探索機")])])}]},u=n("VU/8")({name:"Default",data:function(){return{}}},c,!1,function(t){n("3Dg0")},"data-v-59de58f4",null).exports,l={name:"wordCheckbox",data:function(){return{answer:!1}},props:{data:void 0,id:void 0},methods:{updateAnswer:function(){this.$store.commit("updateAnswer",{id:this.id,value:this.answer})}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"word-checkbox"},[n("el-checkbox",{attrs:{label:t.data.text,border:"border"},on:{change:function(e){t.updateAnswer()}},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}})],1)},staticRenderFns:[]},m=n("VU/8")(l,p,!1,function(t){n("ePK3")},"data-v-b67c2c2e",null).exports,f=n("NYxO"),h={name:"wordTab",computed:i()({},Object(f.b)({datas:"datas"})),components:{wordCheckbox:m}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"word-lists"},this._l(this.datas,function(t){return e("div",{staticClass:"word-list"},[e("wordCheckbox",{attrs:{data:t,id:t.id}})],1)}))},staticRenderFns:[]},v=n("VU/8")(h,w,!1,function(t){n("4JK8")},"data-v-9ad70c14",null).exports,C={name:"wordSelect",methods:{sendAnswer:function(){this.$store.dispatch("sendAnswer")}},computed:i()({},Object(f.b)({datas:"datas"})),components:{wordTab:v}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"word-select"},[n("div",{staticClass:"word-wraps"},[n("wordTab",{attrs:{datas:t.datas}}),t.datas?n("div",{staticClass:"word-button"},[n("el-button",{attrs:{type:"primary",round:"round"},on:{click:function(e){t.sendAnswer()}}},[t._v("決定する！")])],1):t._e()],1)])},staticRenderFns:[]},_=n("VU/8")(C,g,!1,function(t){n("LuTz")},"data-v-b6e22c3a",null).exports,R={name:"wordNone",components:{},props:{data:F}},b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"word-none"},[e("p",[this._v("ワードはありません！！ ^ ^")])])}]},A=n("VU/8")(R,b,!1,null,null,null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("div",{staticClass:"el-loading-spinner"},[e("i",{staticClass:"el-icon-loading"}),e("p",{staticClass:"el-loading-text"},[this._v("Loading... ")])])])}]},T=n("VU/8")({name:"loading"},y,!1,function(t){n("G5Zm")},"data-v-0988d217",null).exports,x=n("mtWM"),D=n.n(x).a.create({baseURL:"https://forever-hackchu.mybluemix.net/word",headers:{ContentType:"application/json","X-Requested-With":"XMLHttpRequest"},responseType:"json"});a.default.use(f.a);var k=new f.a.Store({state:{datas:[],dataRemainder:[],wordAnswers:[],wordComps:["loading","wordSelect","wordNone"],wordComp:"loading",compTypes:["ok","ng"],compType:"ng"},getters:{datas:function(t){return t.datas},dataRemainder:function(t){return t.dataRemainder},dataRemainderById:function(t){return function(e){return t.dataRemainder.find(function(t){return t.id===e})}},wordAnswers:function(t){return t.wordAnswers},wordTrueAnswers:function(t){return t.wordAnswers.filter(function(t){return!0===t.value})},wordComp:function(t){return t.wordComp},alreadyWord:function(t,e){return function(t){return e.datas.find(function(e){return e.text===t})}},compType:function(t){return t.compType}},mutations:{setData:function(t){t.datas=[]},setAnswer:function(t){t.wordAnwers=[]},deleteRemainderData:function(t,e){var n=t.dataRemainder.find(function(t,n){if(t.id===e)return n});t.dataRemainder.splice(n,1)},addData:function(t,e){t.datas.push(e)},addDataRemainder:function(t,e){t.dataRemainder.push(e)},setWordComp:function(t,e){t.wordComp=t.wordComps[e]},addAnswer:function(t,e){t.wordAnswers.push(e)},updateAnswer:function(t,e){console.log(e);t.wordAnswers.find(function(t){return t.id==e.id}).value=e.value},setCompType:function(t,e){t.compType=t.compTypes[e]}},actions:{getAPI:function(t){var e=t.commit,n=t.getters;D.get("/"+n.compType+"/maybe").then(function(t){var a=t.data?1:2;if(e("setWordComp",a),t.data){e("setData");var s=0;t.data.forEach(function(t,a){t.text&&t.text.length>2&&!n.alreadyWord(t.text)&&(s<20?(console.log("get"),console.log(t),e("addData",t),e("addAnswer",{id:t.id,text:t.text,value:!1})):e("addDataRemainder",t),s++)})}}).catch(function(t){})},setDataFromRemainder:function(t){var e=t.commit,n=t.getters,a=(t.dispatch,0);console.log(n.dataRemainder),n.dataRemainder.forEach(function(t){a<20&&(e("addData",t),e("deleteRemainderData",t),e("addAnswer",{id:t.id,text:t.text,value:!1}),a++)})},sendAnswer:function(t){t.commit;var e=t.getters,n=t.dispatch,a=e.wordTrueAnswers.map(function(t){return t.id});console.log(a),a.forEach(function(t){D.post("/"+e.compType,{params:{id:t}}).then(function(t){console.log("postできました"),n("sendAfter",!0)}).catch(function(){console.log("postできませんでした"),n("sendAfter",!1)})}),0==a.length&&n("sendAfter",!0)},setCompType:function(t,e){var n=t.commit,a=(t.getters,t.dispatch);n("setCompType",e),n("setData"),n("setAnswer"),a("getAPI")},sendAfter:function(t,e){var n=t.commit,a=t.getters,s=t.dispatch;n("setWordComp",0),n("setData",""),a.dataRemainder.length>0?(s("setDataFromRemainder"),n("setWordComp",1)):n("setWordComp",2)}},modules:{}}),$={name:"wordCheck",data:function(){return{}},computed:i()({},Object(f.b)({wordComp:"wordComp",datas:"datas",compType:"compType"})),mounted:function(){this.$store.dispatch("getAPI")},methods:{changeCompType:function(t){this.$store.dispatch("setCompType",t)}},components:{Layout:u,wordSelect:_,wordNone:A,loading:T}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",[n("div",{staticClass:"word",attrs:{slot:"main"},slot:"main"},[n("div",{staticClass:"word-header"},[n("div",{staticClass:"word-header-tab ng",on:{click:function(e){t.changeCompType(1)}}},[t._v("おこ")]),n("div",{staticClass:"word-header-tab ok",on:{click:function(e){t.changeCompType(0)}}},[t._v("にこ")])]),n("div",{staticClass:"word-header-line",class:t.compType}),n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[n(t.wordComp,{tag:"component",attrs:{datas:t.datas}})],1)],1)])},staticRenderFns:[]},F=n("VU/8")($,E,!1,function(t){n("s+Y2")},"data-v-2e3c976a",null).exports;a.default.use(r.a);var W=new r.a({routes:[{path:"/",name:"wordCheck",component:F}]}),U=n("zL8q"),V=n.n(U);n("tvR6");n.e(1).then(n.bind(null,"hv/O")),n.e(0).then(n.bind(null,"H/op")),a.default.config.productionTip=!1,a.default.use(V.a),new a.default({el:"#app",router:W,template:"<App/>",components:{App:o},store:k})},"T+Rn":function(t,e){},ePK3:function(t,e){},"s+Y2":function(t,e){},tvR6:function(t,e){}},["NHnr"]);