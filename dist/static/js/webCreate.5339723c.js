(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["webCreate"],{"4d0a":function(e,a,t){},"995c":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-container",{staticClass:"web-create-container"},[t("el-main",[t("div",{staticClass:"btn-box"},[t("el-button",{attrs:{type:"primary"}},[e._v("保存")]),t("el-button",[e._v("取消")])],1),t("el-form",{ref:"dynamicValidateForm",attrs:{model:e.dynamicValidateForm,size:"small","label-width":"100px"}},[t("div",{staticClass:"monitor-task-list"},e._l(e.dynamicValidateForm.task,(function(a,l){return t("div",{key:l,staticClass:"monitor-task-box"},[t("div",{staticClass:"monitor-task-item"},[t("el-form-item",{attrs:{label:"任务名称"}},[t("el-input",{model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"task.name"}})],1),t("el-form-item",{attrs:{label:"操作系统"}},[t("el-radio-group",{model:{value:a.radio,callback:function(t){e.$set(a,"radio",t)},expression:"task.radio"}},[t("el-radio",{attrs:{label:1}},[e._v("HTTP/HTTPS")]),t("el-radio",{attrs:{label:2}},[e._v("Ping")]),t("el-radio",{attrs:{label:3}},[e._v("FTP")]),t("el-radio",{attrs:{label:4}},[e._v("TCP")]),t("el-radio",{attrs:{label:5}},[e._v("UDP")]),t("el-radio",{attrs:{label:6}},[e._v("DNS")])],1)],1),t("div",{staticClass:"flex-item"},[t("el-form-item",{attrs:{label:"主机域名或IP"}},[t("el-input",{model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"task.name"}})],1),t("el-form-item",{attrs:{label:"代理端口"}},[t("el-input",{model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"task.name"}})],1)],1),t("div",{staticClass:"flex-item"},[t("el-form-item",{attrs:{label:"监控组"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"task.value"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"告警组"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"task.value"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),t("el-form-item",{attrs:{label:"描述"}},[t("el-input",{attrs:{type:"textarea"},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"task.name"}})],1)],1),t("div",{staticClass:"monitor-task-control"},[t("span",{staticClass:"task-icon"},[t("i",{staticClass:"el-icon-minus",on:{click:function(a){return e.handleDelete(l)}}})]),t("span",{staticClass:"task-icon"},[t("i",{staticClass:"el-icon-plus",on:{click:e.handleAdd}})])])])})),0)])],1)],1)},i=[],s=(t("a434"),{data:function(){return{dynamicValidateForm:{task:[{value:""}]},options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}]}},methods:{handleDelete:function(e){this.dynamicValidateForm.task.splice(e,1)},handleAdd:function(){this.dynamicValidateForm.task.push({value:""})}}}),n=s,o=(t("ff95"),t("2877")),r=Object(o["a"])(n,l,i,!1,null,"695aaecb",null);a["default"]=r.exports},a434:function(e,a,t){"use strict";var l=t("23e7"),i=t("23cb"),s=t("a691"),n=t("50c4"),o=t("7b0b"),r=t("65f0"),c=t("8418"),u=t("1dde"),d=t("ae40"),m=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,b=Math.min,p=9007199254740991,k="Maximum allowed length exceeded";l({target:"Array",proto:!0,forced:!m||!f},{splice:function(e,a){var t,l,u,d,m,f,h=o(this),x=n(h.length),C=i(e,x),y=arguments.length;if(0===y?t=l=0:1===y?(t=0,l=x-C):(t=y-2,l=b(v(s(a),0),x-C)),x+t-l>p)throw TypeError(k);for(u=r(h,l),d=0;d<l;d++)m=C+d,m in h&&c(u,d,h[m]);if(u.length=l,t<l){for(d=C;d<x-l;d++)m=d+l,f=d+t,m in h?h[f]=h[m]:delete h[f];for(d=x;d>x-l+t;d--)delete h[d-1]}else if(t>l)for(d=x-l;d>C;d--)m=d+l-1,f=d+t-1,m in h?h[f]=h[m]:delete h[f];for(d=0;d<t;d++)h[d+C]=arguments[d+2];return h.length=x-l+t,u}})},ff95:function(e,a,t){"use strict";var l=t("4d0a"),i=t.n(l);i.a}}]);
//# sourceMappingURL=webCreate.5339723c.js.map