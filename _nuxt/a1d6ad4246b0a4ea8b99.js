(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{554:function(t,e,i){var a=i(556);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(11).default)("cc3b8174",a,!0,{})},555:function(t,e,i){"use strict";var a=i(554);i.n(a).a},556:function(t,e,i){(t.exports=i(10)(!1)).push([t.i,".image-link[data-v-1dc17904]{position:relative}.image[data-v-1dc17904],.image-link[data-v-1dc17904]{display:block;width:100%}.title[data-v-1dc17904]{position:absolute;top:0;left:0;right:0;bottom:0;text-align:center;display:flex;align-items:center;justify-content:center;color:hsla(0,0%,100%,0);background:transparent;padding:1rem}.image-link:hover .title[data-v-1dc17904]{color:#fff;background:rgba(0,0,0,.5)}",""])},558:function(t,e,i){var a=i(563);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(11).default)("defaaafa",a,!0,{})},559:function(t,e,i){"use strict";var a={props:{src:{required:!0,type:String},to:{required:!1,type:String,default:""},alt:{required:!1,type:String,default:""},title:{required:!1,type:String,default:""},target:{required:!1,type:String,default:""},fillParent:{required:!1,type:Boolean,default:!1}}},r=(i(555),i(8)),n=Object(r.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nuxt-link",{staticClass:"image-link",style:{height:t.fillParent?"100%":"initial"},attrs:{to:t.to||t.src,target:t.target}},[t.title?i("div",{staticClass:"title"},[i("span",[t._v(t._s(t.title))])]):t._e(),t._v(" "),i("img",{staticClass:"image",style:{height:t.fillParent?"100%":"initial",objectFit:t.fillParent?"cover":"initial"},attrs:{src:t.src||"https://via.placeholder.com/512",alt:t.alt||t.title}})])},[],!1,null,"1dc17904",null);n.options.__file="MyImage.vue";e.a=n.exports},562:function(t,e,i){"use strict";var a=i(558);i.n(a).a},563:function(t,e,i){(t.exports=i(10)(!1)).push([t.i,".subheader[data-v-f2021298]{margin-top:0}.grid[data-v-f2021298]{display:block;grid-gap:1rem}.grid .grid-item[data-v-f2021298]:not(:last-of-type){margin-bottom:1rem}@media (min-width:900px){.grid[data-v-f2021298]{display:grid;grid-gap:1rem}.grid .grid-item[data-v-f2021298]:not(:last-of-type){margin-bottom:0}}",""])},565:function(t,e,i){"use strict";i.r(e);var a={components:{MyImage:i(559).a},data:function(){return{grid:this.$store.getters["projects/grid"](this.$i18n.locale)}},head:function(){return{title:"".concat(this.$t("portfolio")," | ").concat(this.$t("katya lebedeva")),meta:[{hid:"description",name:"description",content:this.$t("website description")},{hid:"og:title",name:"og:title",content:this.$t("katya lebedeva")+": "+this.$t("portfolio")},{hid:"og:description",name:"og:description",content:this.$t("website description")}]}}},r=(i(562),i(8)),n=Object(r.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"grid",style:{gridTemplateColumns:"repeat("+(t.grid.width||3)+", 1fr)"}},t._l(t.grid.blocks,function(e){return i("div",{key:e.slug,staticClass:"grid-item"},[i("MyImage",{attrs:{fillParent:"",src:e.project.cover||"",title:e.project.title,to:t.localePath({name:"projects-slug",params:{slug:e.slug}})}})],1)}),0)])},[],!1,null,"f2021298",null);n.options.__file="index.vue";e.default=n.exports}}]);