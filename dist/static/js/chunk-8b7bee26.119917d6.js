(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b7bee26"],{"29f4":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"edit_container"},[i("el-button",{on:{click:function(t){e.dialogVisible=!0}}},[e._v("点击打开 Dialog")]),i("el-dialog",{staticClass:"editor_dialog",attrs:{title:e.dialogTitle,"append-to-body":!0,visible:e.dialogVisible,width:"70%"},on:{"update:visible":function(t){e.dialogVisible=t},closed:e.editorDialogClose}},[i("tinymce-editor",{ref:"myTinymce",attrs:{tinymceHtml:e.content}}),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.saveArticle}},[e._v("确 定")])],1)],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tinymce-container"},[i("editor",{attrs:{id:"tinymce",init:e.init},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},l=[],s=(i("a9e3"),i("e562")),c=i.n(s),r=i("ca72"),u=(i("030f"),i("4ea8"),i("4237"),i("64d8"),i("07d1"),i("84ec8"),i("9434"),{name:"MyTinymce",props:{tinymceHtml:"",tinymceHeight:{type:Number,default:500}},components:{Editor:r["a"]},data:function(){return{value:this.tinymceHtml,init:{selector:"#tinymce",language_url:"/tinymce/zh_CN.js",language:"zh_CN",skin_url:"/tinymce/skins/ui/oxide",height:this.tinymceHeight,plugins:"image link code table lists wordcount",toolbar:"fontselect fontsizeselect link lineheight forecolor backcolor bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | image quicklink h2 h3 blockquote table numlist bullist preview fullscreen",browser_spellcheck:!0,branding:!1,elementpath:!1,statusbar:!1,paste_data_images:!0,menubar:!1,file_picker_types:"image",images_upload_credentials:!0,fontsize_formats:"14px 16px 18px 20px 24px 26px 28px 30px 32px 36px",font_formats:"微软雅黑=Microsoft YaHei,Helvetica Neue;PingFang SC;sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun;serifsans-serif;Terminal=terminal;monaco;Times New Roman=times new roman;times",images_upload_handler:function(e,t,i){var n=new FormData;n.append("image",e.blob()),uploadImg(n).then((function(e){console.log(e),t("https://qnsjk.huabeisky.com/"+e.data)})).catch((function(e){i("error")}))}}}},watch:{tinymceHtml:function(e,t){this.value=e}},computed:{},created:function(){},mounted:function(){c.a.init({})},methods:{}}),d=u,m=i("2877"),f=Object(m["a"])(d,o,l,!1,null,"61ee17f8",null),g=f.exports,p={components:{TinymceEditor:g},data:function(){return{content:"",dialogTitle:"富文本",dialogVisible:!1}},methods:{handleClose:function(e){this.dialogVisible=!1},saveArticle:function(){},editorDialogClose:function(){this.dialogVisible=!1}}},b=p,h=(i("2da2"),Object(m["a"])(b,n,a,!1,null,null,null));t["default"]=h.exports},"2da2":function(e,t,i){"use strict";i("4f8b")},"4f8b":function(e,t,i){}}]);