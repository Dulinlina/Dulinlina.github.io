(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71bacded"],{6259:function(t,e,c){"use strict";c.r(e);var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"concern_container"},[c("div",{staticClass:"concern_header"},[c("div",[t._v("我的关注")]),c("div",{staticClass:"position",on:{click:t.goBack}},[c("van-icon",{attrs:{name:"arrow-left"}})],1)]),c("div",{staticClass:"concern-box"},[t.TeacherList.length<=0?c("div",{staticClass:"empty-container"},[c("van-empty",{staticClass:"empty",attrs:{image:"https://wap.365msmk.com/img/empty.0d284c2e.png",description:"暂无关注"}})],1):t._l(t.TeacherList,(function(e,n){return c("div",{key:n,staticClass:"concern-list"},[c("img",{attrs:{src:e.avatar,alt:""}}),c("div",[c("p",[c("span",[t._v(t._s(e.teacher_name))]),c("span",[t._v(t._s(e.level_name))])]),c("p",[t._v(t._s(e.introduction))])]),c("p",{on:{click:function(e){return t.guanzhuClick(n)}}},[t._v("已关注")])])})),t.TeacherList.length>0?c("div",{staticClass:"concern-footer"},[t._v(" 没有更多了 ")]):t._e()],2)])},a=[],i=(c("fe59"),c("ea69"),c("08ba"),{data:function(){return{TeacherList:[],flag:"",collect_id:0}},mounted:function(){var t=this;console.log(1),this.http.get("/api/app/collect?page=1&limit=10&type=2&").then((function(e){t.TeacherList=e.data.data.list}))},methods:{goBack:function(){this.$router.push("home/person")},guanzhuClick:function(t){var e=this;this.TeacherList.length>0&&(this.TeacherList.forEach((function(c,n){n==t&&(e.collect_id=c.collect_id)})),this.http.put("/api/app/collect/cancel/".concat(this.collect_id,"/2")).then((function(c){console.log(c),e.TeacherList.splice(t,1),e.$toast.success("已取消关注")})))}}}),s=i,o=(c("f3c3"),c("9ca4")),r=Object(o["a"])(s,n,a,!1,null,"3f644880",null);e["default"]=r.exports},"6c06":function(t,e,c){},ea69:function(t,e,c){"use strict";var n=c("1c8b"),a=c("e1d6"),i=c("3da3"),s=c("d88d"),o=c("3553"),r=c("1ca1"),l=c("1bbd"),h=c("1ea7"),d=c("ff9c"),p=h("splice"),u=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,v=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p||!u},{splice:function(t,e){var c,n,h,d,p,u,_=o(this),C=s(_.length),k=a(t,C),w=arguments.length;if(0===w?c=n=0:1===w?(c=0,n=C-k):(c=w-2,n=v(f(i(e),0),C-k)),C+c-n>g)throw TypeError(m);for(h=r(_,n),d=0;d<n;d++)p=k+d,p in _&&l(h,d,_[p]);if(h.length=n,c<n){for(d=k;d<C-n;d++)p=d+n,u=d+c,p in _?_[u]=_[p]:delete _[u];for(d=C;d>C-n+c;d--)delete _[d-1]}else if(c>n)for(d=C-n;d>k;d--)p=d+n-1,u=d+c-1,p in _?_[u]=_[p]:delete _[u];for(d=0;d<c;d++)_[d+k]=arguments[d+2];return _.length=C-n+c,h}})},f3c3:function(t,e,c){"use strict";var n=c("6c06"),a=c.n(n);a.a}}]);
//# sourceMappingURL=chunk-71bacded.e8661c9e.js.map