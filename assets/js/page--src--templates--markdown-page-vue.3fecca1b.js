(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4Brf":function(t,e,r){"use strict";var n=r("I+eb"),i=r("g6v/"),o=r("2oRo"),s=r("UTVS"),a=r("hh1v"),c=r("m/L8").f,u=r("6JNq"),l=o.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(p,l);var h=p.prototype=l.prototype;h.constructor=p;var d=h.toString,g="Symbol(test)"==String(l("test")),m=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=d.call(t);if(s(f,t))return"";var r=g?e.slice(7,-1):e.replace(m,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:p})}},"5Tg+":function(t,e,r){var n=r("tiKp");e.f=n},"BX/b":function(t,e,r){var n=r("/GqU"),i=r("JBy8").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return s.slice()}}(t):i(n(t))}},HrJL:function(t,e,r){},Rm1S:function(t,e,r){"use strict";var n=r("14Sl"),i=r("glrk"),o=r("UMSQ"),s=r("HYAF"),a=r("iqWW"),c=r("FMNM");n("match",1,(function(t,e,r){return[function(e){var r=s(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var s=i(t),u=String(this);if(!s.global)return c(s,u);var l=s.unicode;s.lastIndex=0;for(var f,p=[],h=0;null!==(f=c(s,u));){var d=String(f[0]);p[h]=d,""===d&&(s.lastIndex=a(u,o(s.lastIndex),l)),h++}return 0===h?null:p}]}))},TeQF:function(t,e,r){"use strict";var n=r("I+eb"),i=r("tycR").filter,o=r("Hd5f"),s=r("rkAj"),a=o("filter"),c=s("filter");n({target:"Array",proto:!0,forced:!a||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"Y/xb":function(t,e,r){"use strict";r("cC0R")},cC0R:function(t,e,r){},cZNn:function(t,e,r){"use strict";r("HrJL")},"dG/n":function(t,e,r){var n=r("Qo9l"),i=r("UTVS"),o=r("5Tg+"),s=r("m/L8").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},lzmI:function(t,e,r){"use strict";r("oVOe")},oVOe:function(t,e,r){},pNMO:function(t,e,r){"use strict";var n=r("I+eb"),i=r("2oRo"),o=r("0GbY"),s=r("xDBR"),a=r("g6v/"),c=r("STAE"),u=r("/b8u"),l=r("0Dky"),f=r("UTVS"),p=r("6LWA"),h=r("hh1v"),d=r("glrk"),g=r("ewvW"),m=r("/GqU"),v=r("wE6v"),b=r("XGwC"),y=r("fHMY"),w=r("33Wh"),x=r("JBy8"),O=r("BX/b"),S=r("dBg+"),k=r("Bs8V"),P=r("m/L8"),C=r("0eef"),_=r("kRJp"),j=r("busE"),E=r("VpIT"),A=r("93I0"),$=r("0BK2"),T=r("kOOl"),I=r("tiKp"),R=r("5Tg+"),L=r("dG/n"),N=r("1E5z"),G=r("afO8"),B=r("tycR").forEach,J=A("hidden"),M=I("toPrimitive"),H=G.set,V=G.getterFor("Symbol"),W=Object.prototype,z=i.Symbol,F=o("JSON","stringify"),U=k.f,q=P.f,Q=O.f,Y=C.f,D=E("symbols"),K=E("op-symbols"),X=E("string-to-symbol-registry"),Z=E("symbol-to-string-registry"),tt=E("wks"),et=i.QObject,rt=!et||!et.prototype||!et.prototype.findChild,nt=a&&l((function(){return 7!=y(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=U(W,e);n&&delete W[e],q(t,e,r),n&&t!==W&&q(W,e,n)}:q,it=function(t,e){var r=D[t]=y(z.prototype);return H(r,{type:"Symbol",tag:t,description:e}),a||(r.description=e),r},ot=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},st=function(t,e,r){t===W&&st(K,e,r),d(t);var n=v(e,!0);return d(r),f(D,n)?(r.enumerable?(f(t,J)&&t[J][n]&&(t[J][n]=!1),r=y(r,{enumerable:b(0,!1)})):(f(t,J)||q(t,J,b(1,{})),t[J][n]=!0),nt(t,n,r)):q(t,n,r)},at=function(t,e){d(t);var r=m(e),n=w(r).concat(ft(r));return B(n,(function(e){a&&!ct.call(r,e)||st(t,e,r[e])})),t},ct=function(t){var e=v(t,!0),r=Y.call(this,e);return!(this===W&&f(D,e)&&!f(K,e))&&(!(r||!f(this,e)||!f(D,e)||f(this,J)&&this[J][e])||r)},ut=function(t,e){var r=m(t),n=v(e,!0);if(r!==W||!f(D,n)||f(K,n)){var i=U(r,n);return!i||!f(D,n)||f(r,J)&&r[J][n]||(i.enumerable=!0),i}},lt=function(t){var e=Q(m(t)),r=[];return B(e,(function(t){f(D,t)||f($,t)||r.push(t)})),r},ft=function(t){var e=t===W,r=Q(e?K:m(t)),n=[];return B(r,(function(t){!f(D,t)||e&&!f(W,t)||n.push(D[t])})),n};(c||(j((z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),r=function(t){this===W&&r.call(K,t),f(this,J)&&f(this[J],e)&&(this[J][e]=!1),nt(this,e,b(1,t))};return a&&rt&&nt(W,e,{configurable:!0,set:r}),it(e,t)}).prototype,"toString",(function(){return V(this).tag})),j(z,"withoutSetter",(function(t){return it(T(t),t)})),C.f=ct,P.f=st,k.f=ut,x.f=O.f=lt,S.f=ft,R.f=function(t){return it(I(t),t)},a&&(q(z.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),s||j(W,"propertyIsEnumerable",ct,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:z}),B(w(tt),(function(t){L(t)})),n({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(X,e))return X[e];var r=z(e);return X[e]=r,Z[r]=e,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f(Z,t))return Z[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,e){return void 0===e?y(t):at(y(t),e)},defineProperty:st,defineProperties:at,getOwnPropertyDescriptor:ut}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:ft}),n({target:"Object",stat:!0,forced:l((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(g(t))}}),F)&&n({target:"JSON",stat:!0,forced:!c||l((function(){var t=z();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))}))},{stringify:function(t,e,r){for(var n,i=[t],o=1;arguments.length>o;)i.push(arguments[o++]);if(n=e,(h(e)||void 0!==t)&&!ot(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ot(e))return e}),i[1]=e,F.apply(null,i)}});z.prototype[M]||_(z.prototype,M,z.prototype.valueOf),N(z,"Symbol"),$[J]=!0},zwLt:function(t,e,r){"use strict";r.r(e);r("pNMO"),r("4Brf"),r("TeQF");var n={data:function(){return{activeAnchor:"",observer:null}},computed:{page:function(){return this.$page.markdownPage},headings:function(){return this.page.headings.filter((function(t){return t.depth>1}))}},watch:{$route:function(){window.location.hash&&(this.activeAnchor=window.location.hash),this.observer.disconnect(),this.$nextTick(this.initObserver)}},methods:{observerCallback:function(t,e){if(!(t.length>1)){var r=t[0].target.id;r&&(this.activeAnchor="#"+r,history.replaceState&&history.replaceState(null,null,"#"+r))}},initObserver:function(){this.observer=new IntersectionObserver(this.observerCallback,{rootMargin:"0px 0px 99999px",threshold:1});for(var t=document.querySelectorAll(".content h2, .content h3, .content h4, .content h5, .content h6"),e=0;e<t.length;e++)this.observer.observe(t[e])}},mounted:function(){window.location.hash&&(this.activeAnchor=window.location.hash),this.$nextTick(this.initObserver)}},i=(r("Y/xb"),r("KHd+")),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-8 sm:pl-4 md:pl-6 md:pt-12 lg:pl-8 sm:pb-16 sm:border-l border-ui-border md:mt-0",attrs:{id:"OnThisPage"}},[r("h3",{staticClass:"pt-0 mt-0 text-sm tracking-wide uppercase border-none"},[t._v("On this page")]),r("div",[r("ul",t._l(t.headings,(function(e,n){var i;return r("li",{key:""+t.page.path+e.anchor,class:(i={"border-t border-dashed border-ui-border pt-2 mt-2":n>0&&2===e.depth,"font-semibold":2===e.depth},i["depth-"+e.depth]=!0,i)},[r("g-link",{staticClass:"relative flex items-center py-1 text-sm transition transform",class:{"pl-2":3===e.depth,"pl-3":4===e.depth,"pl-4":5===e.depth,"pl-5":6===e.depth,"font-bold text-ui-primary":t.activeAnchor===e.anchor},attrs:{to:""+t.page.path+e.anchor}},[r("span",{staticClass:"absolute w-2 h-2 -ml-3 rounded-full opacity-0 bg-ui-primary transition transform scale-0 origin-center",class:{"opacity-100 scale-100":t.activeAnchor===e.anchor}}),t._v("\n\t\t\t\t\t"+t._s(e.value)+"\n\t\t\t\t")])],1)})),0)])])}),[],!1,null,null,null).exports,s=(r("fbCW"),r("2B1R"),r("CjXH")),a={components:{ArrowLeftIcon:s.a,ArrowRightIcon:s.b},computed:{page:function(){return this.$page.markdownPage},pages:function(){return this.$page.allMarkdownPage.edges.map((function(t){return t.node}))},next:function(){var t=this;return!(this.pages&&!this.page.next)&&this.pages.find((function(e){return e.path===t.page.next}))},prev:function(){var t=this;return!(this.pages&&!this.page.prev)&&this.pages.find((function(e){return e.path===t.page.prev}))}}},c=Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"flex flex-col sm:flex-row justify-between items-center"},[t.prev?r("g-link",{staticClass:"mb-4 sm:mb-0 flex items-center mr-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors",attrs:{to:t.prev.path}},[r("ArrowLeftIcon",{staticClass:"mr-2",attrs:{size:"1x"}}),t._v("\n\t\t\t"+t._s(t.prev.title)+"\n\t\t")],1):t._e(),t.next?r("g-link",{staticClass:"flex items-center ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors",attrs:{to:t.next.path}},[t._v("\n\t\t\t"+t._s(t.next.title)+"\n\t\t\t"),r("ArrowRightIcon",{staticClass:"ml-2",attrs:{size:"1x"}})],1):t._e()],1)])}),[],!1,null,null,null).exports,u=(r("TWNs"),r("rB9j"),r("JfAA"),r("Rm1S"),r("+m+H")),l={components:{GithubLogo:r.n(u).a},computed:{currentPath:function(){return this.$route.matched[0].path},editLink:function(){var t=this.currentPath;return 1==(t.match(new RegExp("/","g"))||[]).length&&(t+="/README"),"https://github.com/xhenos/website/blob/gridsome/content".concat(t,".md")}}},f=(r("lzmI"),{components:{OnThisPage:o,NextPrevLinks:c,EditOnGithub:Object(i.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"EditOnGithub"}},[e("a",{staticClass:"hover:text-ui-primary",attrs:{href:this.editLink,target:"_blank"}},[e("GithubLogo"),e("span",[this._v("Edit this page on GitHub")])],1)])}),[],!1,null,null,null).exports},metaInfo:function(){var t=this.$page.markdownPage.title,e=this.$page.markdownPage.description||this.$page.markdownPage.excerpt;return{title:t,meta:[{name:"description",content:e},{key:"og:title",name:"og:title",content:t},{key:"twitter:title",name:"twitter:title",content:t},{key:"og:description",name:"og:description",content:e},{key:"twitter:description",name:"twitter:description",content:e}]}}}),p=(r("cZNn"),null),h=Object(i.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"flex flex-wrap items-start justify-start"},[e("div",{staticClass:"order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky",staticStyle:{top:"4rem"}},[e("OnThisPage")],1),e("div",{staticClass:"order-1 w-full md:w-2/3"},[e("VueRemarkContent",{attrs:{id:"Markdown"}}),1==this.$page.markdownPage.editOnGithub?e("div",{staticClass:"mt-2 pt-4"},[e("EditOnGithub")],1):this._e(),""!==this.$page.markdownPage.prev||""!==this.$page.markdownPage.next?e("div",{staticClass:"mt-6 pt-8 border-t border-ui-border"},[e("NextPrevLinks")],1):this._e()],1)])])}),[],!1,null,null,null);"function"==typeof p&&p(h);e.default=h.exports}}]);