(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8968fb4"],{"0e96":function(t,n,o){"use strict";o("75ac")},"75ac":function(t,n,o){},ca1d:function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"container"},[o("div",{staticClass:"container"},[o("VueSignaturePad",{ref:"signaturePad",attrs:{id:"signature",width:"100%",height:"500px",options:t.options}})],1),o("div",{staticClass:"buttons"},[o("button",{on:{click:t.undo}},[t._v("重置")]),o("button",{on:{click:t.save}},[t._v("保存")]),o("button",{on:{click:t.change}},[t._v("改变颜色")]),o("button",{on:{click:t.resume}},[t._v("重置颜色")])])])},s=[],i={components:{},data:function(){return{options:{penColor:"#c0f"}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{undo:function(){this.$refs.signaturePad.undoSignature()},save:function(){var t=this.$refs.signaturePad.saveSignature(),n=t.isEmpty,o=t.data;alert("Open DevTools see the save data."),console.log(n),console.log(o)},change:function(){this.options={penColor:"#00f"}},resume:function(){this.options={penColor:"#c0f"}}}},a=i,c=(o("0e96"),o("2877")),u=Object(c["a"])(a,e,s,!1,null,"120fa928",null);n["default"]=u.exports}}]);