(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/toub/declaration_fileUpload"],{"087f":function(e,t,n){},"12a5":function(e,t,n){"use strict";var i,l=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return l}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i})},2108:function(e,t,n){"use strict";n.r(t);var i=n("da0e"),l=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=l.a},"4dcc":function(e,t,n){"use strict";var i=n("087f"),l=n.n(i);l.a},b71c:function(e,t,n){"use strict";n.r(t);var i=n("12a5"),l=n("2108");for(var o in l)"default"!==o&&function(e){n.d(t,e,function(){return l[e]})}(o);n("4dcc");var a,f=n("f0c5"),u=Object(f["a"])(l["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);t["default"]=u.exports},da0e:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={components:{},props:["uploadfileUrl","limitsize","formData"],data:function(){return{showfile:!1,filename:"xxx",fileinfo:{},filepaths:[]}},computed:{size:function(){return this.limitsize/1024}},mounted:function(){var e=this,t=document.createElement("input");t.type="file",t.style.display="none",t.id="file",t.onchange=function(t){e.fileinfo=t.target.files[0],e.upload()},this.$refs.input.$el.appendChild(t)},methods:{openPopup:function(){this.$refs.popup.open()},closePopup:function(){this.$refs.popup.close()},uploadBtn:function(){return document.getElementById("file").click()},upload:function(){var t=this;console.info(e("此文件信息",t.fileinfo," at pages\\toub\\declaration_fileUpload.vue:65"));var n=t.fileinfo.size;if(n>t.filesize)t.openPopup(),document.getElementById("file").value="";else if(t.showfile=!0,t.filename=t.fileinfo.name,t.uploadfileUrl){var i=new FileReader;i.readAsDataURL(t.fileinfo),i.onload=function(e){t.uploadAPI(e.target.result)}}else console.info(e("无路径"," at pages\\toub\\declaration_fileUpload.vue:85"))},uploadAPI:function(t){this.filepaths.push(t),n.uploadFile({url:this.uploadfileUrl,filePath:this.filepaths[0],name:"file",formData:this.formData,success:function(t){console.log(e(t," at pages\\toub\\declaration_fileUpload.vue:101"))},fail:function(t){console.log(e(t," at pages\\toub\\declaration_fileUpload.vue:104"))}})},delfile:function(){document.getElementById("file").value="",this.showfile=!1,this.filename=""}}};t.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/toub/declaration_fileUpload-create-component',
    {
        'pages/toub/declaration_fileUpload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("b71c"))
        })
    },
    [['pages/toub/declaration_fileUpload-create-component']]
]);
