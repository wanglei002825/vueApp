(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/toub/index"],{"66ea":function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={components:{},props:["uploadfileUrl","limitsize","formData"],data:function(){return{showfile:!1,filename:"xxx",fileinfo:{},filepaths:[]}},computed:{size:function(){return this.limitsize/1024}},mounted:function(){var e=this,n=document.createElement("input");n.type="file",n.style.display="none",n.id="file",n.onchange=function(n){e.fileinfo=n.target.files[0],e.upload()},this.$refs.input.$el.appendChild(n)},methods:{openPopup:function(){this.$refs.popup.open()},closePopup:function(){this.$refs.popup.close()},uploadBtn:function(){return document.getElementById("file").click()},upload:function(){var n=this;console.info(e("此文件信息",n.fileinfo," at pages\\toub\\index.vue:65"));var t=n.fileinfo.size;if(t>n.filesize)n.openPopup(),document.getElementById("file").value="";else if(n.showfile=!0,n.filename=n.fileinfo.name,n.uploadfileUrl){var i=new FileReader;i.readAsDataURL(n.fileinfo),i.onload=function(e){n.uploadAPI(e.target.result)}}else console.info(e("无路径"," at pages\\toub\\index.vue:85"))},uploadAPI:function(n){this.filepaths.push(n),t.uploadFile({url:this.uploadfileUrl,filePath:this.filepaths[0],name:"file",formData:this.formData,success:function(n){console.log(e(n," at pages\\toub\\index.vue:101"))},fail:function(n){console.log(e(n," at pages\\toub\\index.vue:104"))}})},delfile:function(){document.getElementById("file").value="",this.showfile=!1,this.filename=""}}};n.default=i}).call(this,t("0de9")["default"],t("6e42")["default"])},"7dff":function(e,n,t){"use strict";(function(e){t("fd2f"),t("921b");i(t("66fd"));var n=i(t("ea7f"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},a087:function(e,n,t){"use strict";t.r(n);var i=t("66ea"),o=t.n(i);for(var f in i)"default"!==f&&function(e){t.d(n,e,function(){return i[e]})}(f);n["default"]=o.a},af0c:function(e,n,t){},c76e:function(e,n,t){"use strict";var i,o=function(){var e=this,n=e.$createElement;e._self._c},f=[];t.d(n,"b",function(){return o}),t.d(n,"c",function(){return f}),t.d(n,"a",function(){return i})},c90e:function(e,n,t){"use strict";var i=t("af0c"),o=t.n(i);o.a},ea7f:function(e,n,t){"use strict";t.r(n);var i=t("c76e"),o=t("a087");for(var f in o)"default"!==f&&function(e){t.d(n,e,function(){return o[e]})}(f);t("c90e");var u,l=t("f0c5"),a=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=a.exports}},[["7dff","common/runtime","common/vendor"]]]);