(function(e){function t(t){for(var r,a,l=t[0],u=t[1],i=t[2],c=0,v=[];c<l.length;c++)a=l[c],o[a]&&v.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(v.length)v.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"2fc9":function(e,t,n){"use strict";var r=n("50a9"),o=n.n(r);o.a},4805:function(e,t,n){"use strict";var r=n("897e"),o=n.n(r);o.a},"50a9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("CommentCounter")],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],u={name:"HelloWorld",props:{msg:String}},i=u,p=(n("4805"),n("2877")),c=Object(p["a"])(i,a,l,!1,null,"b9167eee",null);c.options.__file="HelloWorld.vue";var v=c.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comment-counter"},[n("el-container",[n("el-main",[n("h1",[e._v("HAILKIRA")]),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-input",{attrs:{placeholder:"youtube video Id",type:"text"},model:{value:e.vidId,callback:function(t){e.vidId=t},expression:"vidId"}},[n("template",{slot:"prepend"},[e._v("Video Id")])],2)],1),n("el-col",{attrs:{span:6}},[n("el-input",{attrs:{placeholder:"bonus text",type:"text"},model:{value:e.bonusText,callback:function(t){e.bonusText=t},expression:"bonusText"}},[n("template",{slot:"prepend"},[e._v("Bonus Text")])],2)],1),n("el-col",{attrs:{span:6}},[n("el-input",{attrs:{placeholder:"bonus amount",type:"number"},model:{value:e.bonusAmount,callback:function(t){e.bonusAmount=t},expression:"bonusAmount"}},[n("template",{slot:"prepend"},[e._v("Bonus Amount")])],2)],1)],1),n("br"),n("br"),n("el-button",{on:{click:e.scoreComments}},[e._v("Score Comments")]),n("br"),n("el-table",{attrs:{data:e.resultArray}},[n("el-table-column",{attrs:{prop:"displayName",label:"Display Name"}}),n("el-table-column",{attrs:{prop:"points",label:"Points"}}),n("el-table-column",{attrs:{prop:"comments",label:"Comments",formatter:e.formatComments}}),n("el-table-column",{attrs:{prop:"videoId",label:"Video Id"}})],1)],1)],1)],1)},d=[],f=(n("ac6a"),n("456d"),{name:"CommentCounter",props:{},data:function(){return{vidId:"IFCSBwv7M_E",base:"https://www.googleapis.com/youtube/v3/commentThreads?",key:"key=AIzaSyAnOLXNO4MiB1H9yu8AVkHTnPdkhjY7Epc",options:"&textFormat=plainText&part=snippet&maxResults=2",vid:"&videoId=",results:{},resultArray:[],bonusText:"",bonusAmount:10,loading:!1}},methods:{formatComments:function(e,t,n){return n.join(" | ")},buildResultArray:function(){var e=this;this.resultArray=Object.keys(this.results).map(function(t){return e.results[t]}),this.loading=!1},scoreComments:function(){if(!this.vidId)return alert("Video id required"),!1;this.getComments(this.base+this.key+this.options+this.vid+this.vidId)},getComments:function(e){var t=this,n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);if(!e.items)return alert("err, try again or contact support"),!1;t.results=e.items.reduce(function(e,n){var r=n.snippet.topLevelComment.snippet.authorChannelId.value+"_vid_"+t.vidId;return e[r]||(e[r]={displayName:n.snippet.topLevelComment.snippet.authorDisplayName,comments:[],videoId:t.vidId,points:100}),t.checkForBonus(e[r],n.snippet.topLevelComment.snippet.textDisplay),-1===e[r].comments.indexOf(n.snippet.topLevelComment.snippet.textDisplay)&&e[r].comments.push(n.snippet.topLevelComment.snippet.textDisplay),e},t.results),e.nextPageToken?t.getComments(t.base+t.key+t.options+t.vid+t.vidId+"&pageToken="+e.nextPageToken):t.buildResultArray()}},n.open("GET",e,!0),n.send()},checkForBonus:function(e,t){this.bonusText&&this.bonusAmount>0&&!e.bonus&&t.toLowerCase().indexOf(this.bonusText.toLowerCase())>=0&&(e.bonus=!0,e.points+=parseFloat(this.bonusAmount))}}}),h=f,b=(n("2fc9"),Object(p["a"])(h,m,d,!1,null,"5bc2b442",null));b.options.__file="CommentCounter.vue";var _=b.exports,g={name:"app",components:{HelloWorld:v,CommentCounter:_}},y=g,k=(n("034f"),Object(p["a"])(y,o,s,!1,null,null,null));k.options.__file="App.vue";var x=k.exports,C=n("5c96"),j=n.n(C),w=(n("0fae"),n("b2d6")),I=n.n(w);r["default"].use(j.a,{locale:I.a}),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(x)}}).$mount("#app")},"64a9":function(e,t,n){},"897e":function(e,t,n){}});
//# sourceMappingURL=app.ad578751.js.map