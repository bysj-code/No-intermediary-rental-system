(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fangdong/add-or-update"],{"251c":function(n,e,t){"use strict";var r;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return r}));var a=function(){var n=this,e=n.$createElement;n._self._c},i=[]},"34af":function(n,e,t){"use strict";t.r(e);var r=t("cd03"),a=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=a.a},"6b0a":function(n,e,t){"use strict";t.r(e);var r=t("251c"),a=t("34af");for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);t("a8c5");var u,o=t("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"37b54525",null,!1,r["a"],u);e["default"]=c.exports},a8c5:function(n,e,t){"use strict";var r=t("d614"),a=t.n(r);a.a},cd03:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function i(n,e,t,r,a,i,u){try{var o=n[i](u),c=o.value}catch(s){return void t(s)}o.done?e(c):Promise.resolve(c).then(r,a)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var u=n.apply(e,t);function o(n){i(u,r,a,o,c,"next",n)}function c(n){i(u,r,a,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("6d24"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{fangdongzhanghao:"",mima:"",fangdongxingming:"",xingbie:"",touxiang:"",shenfenzheng:"",lianxishouji:"",nianling:"",sfsh:"",shhf:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{fangdongzhanghao:!1,mima:!1,fangdongxingming:!1,xingbie:!1,touxiang:!1,shenfenzheng:!1,lianxishouji:!1,nianling:!1,sfsh:!1,shhf:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var t=this;return u(r.default.mark((function a(){var i,u,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=n.getStorageSync("nowTable"),a.next=3,t.$api.session(i);case 3:if(u=a.sent,t.user=u.data,t.xingbieOptions="男,女".split(","),t.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(t.ruleForm.refid=e.refid,t.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){a.next=14;break}return t.ruleForm.id=e.id,a.next=12,t.$api.info("fangdong",t.ruleForm.id);case 12:u=a.sent,t.ruleForm=u.data;case 14:if(!e.cross){a.next=53;break}o=n.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 17:if((a.t1=a.t0()).done){a.next=53;break}if(c=a.t1.value,"fangdongzhanghao"!=c){a.next=23;break}return t.ruleForm.fangdongzhanghao=o[c],t.ro.fangdongzhanghao=!0,a.abrupt("continue",17);case 23:if("mima"!=c){a.next=27;break}return t.ruleForm.mima=o[c],t.ro.mima=!0,a.abrupt("continue",17);case 27:if("fangdongxingming"!=c){a.next=31;break}return t.ruleForm.fangdongxingming=o[c],t.ro.fangdongxingming=!0,a.abrupt("continue",17);case 31:if("xingbie"!=c){a.next=35;break}return t.ruleForm.xingbie=o[c],t.ro.xingbie=!0,a.abrupt("continue",17);case 35:if("touxiang"!=c){a.next=39;break}return t.ruleForm.touxiang=o[c],t.ro.touxiang=!0,a.abrupt("continue",17);case 39:if("shenfenzheng"!=c){a.next=43;break}return t.ruleForm.shenfenzheng=o[c],t.ro.shenfenzheng=!0,a.abrupt("continue",17);case 43:if("lianxishouji"!=c){a.next=47;break}return t.ruleForm.lianxishouji=o[c],t.ro.lianxishouji=!0,a.abrupt("continue",17);case 47:if("nianling"!=c){a.next=51;break}return t.ruleForm.nianling=o[c],t.ro.nianling=!0,a.abrupt("continue",17);case 51:a.next=17;break;case 53:t.styleChange();case 54:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(n){this.xingbieIndex=n.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.touxiang=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.fangdongzhanghao){e.next=3;break}return n.$utils.msg("房东账号不能为空"),e.abrupt("return");case 3:if(n.ruleForm.mima){e.next=6;break}return n.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(!n.ruleForm.shenfenzheng||n.$validate.checkIdCard(n.ruleForm.shenfenzheng)){e.next=9;break}return n.$utils.msg("身份证应输入身份证格式"),e.abrupt("return");case 9:if(!n.ruleForm.lianxishouji||n.$validate.isMobile(n.ruleForm.lianxishouji)){e.next=12;break}return n.$utils.msg("联系手机应输入手机格式"),e.abrupt("return");case 12:if(!n.ruleForm.id){e.next=17;break}return e.next=15,n.$api.update("fangdong",n.ruleForm);case 15:e.next=19;break;case 17:return e.next=19,n.$api.add("fangdong",n.ruleForm);case 19:n.$utils.msgBack("提交成功");case 20:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,a=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,t("543d")["default"])},d5dd:function(n,e,t){"use strict";(function(n){t("d135");r(t("66fd"));var e=r(t("6b0a"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},d614:function(n,e,t){}},[["d5dd","common/runtime","common/vendor"]]]);