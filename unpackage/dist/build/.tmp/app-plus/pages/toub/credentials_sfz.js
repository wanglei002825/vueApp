(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/toub/credentials_sfz"],{"532b":function(t,e,n){},8996:function(t,e,n){"use strict";n.r(e);var a=n("cccc"),i=n("a86c");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("d29c");var u,d=n("f0c5"),o=Object(d["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=o.exports},9290:function(t,e,n){"use strict";(function(t,n){var a;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{idCard1:"../../static/imgs/idcard1.png",idCard2:"../../static/imgs/idcard2.png"}},onLoad:function(){a=this},methods:{selectImg1:function(){t.chooseImage({count:1,success:function(t){a.idCard1=t.tempFilePaths[0]}})},selectImg2:function(){t.chooseImage({count:1,success:function(t){a.idCard2=t.tempFilePaths[0]}})},previewImg1:function(){t.previewImage({urls:[a.idCard1]})},previewImg2:function(){t.previewImage({urls:[a.idCard2]})},uploadCards:function(){if("../../static/imgs/idcard1.png"!=this.idCard1&&"../../static/imgs/idcard2.png"!=this.idCard2){t.showLoading({title:"上传中"});t.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:a.idCard1,fileType:"image",name:"data",success:function(e){console.log(n(e.data," at pages\\toub\\credentials_sfz.vue:92"));t.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:a.idCard2,fileType:"image",name:"data",success:function(e){console.log(n(e.data," at pages\\toub\\credentials_sfz.vue:101")),t.hideLoading()}})}})}else t.showToast({title:"请选择身份证照片",icon:"none"})}}};e.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},a86c:function(t,e,n){"use strict";n.r(e);var a=n("9290"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a},a9ae:function(t,e,n){"use strict";(function(t){n("fd2f"),n("921b");a(n("66fd"));var e=a(n("8996"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},cccc:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return a})},d29c:function(t,e,n){"use strict";var a=n("532b"),i=n.n(a);i.a}},[["a9ae","common/runtime","common/vendor"]]]);