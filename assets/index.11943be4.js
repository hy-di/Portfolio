import{o as e,c as t,r as s,m as o,w as r,a,p as i,b as n,d as c,e as l,T as d,t as p,F as u,f as m,g,h as f}from"./vendor.45ef8f4c.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const o=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,a)=>{const i=new URL(e,o);if(self[t].moduleMap[i])return s(self[t].moduleMap[i]);const n=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){a(new Error(`Failed to import: ${e}`)),r(c)},onload(){s(self[t].moduleMap[i]),r(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/Portfolio/assets/");const h={name:"Button",inheritAttrs:!1,props:{alt:{type:String,default:void 0},variant:{type:String,default:""}}},v=r("data-v-178dacaf")(((r,a,i,n,c,l)=>(e(),t("button",o(r.$attrs,{class:i.variant,"aria-label":i.alt}),[s(r.$slots,"default")],16,["aria-label"]))));h.render=v,h.__scopeId="data-v-178dacaf";const b={width:"30",height:"24",viewBox:"0 0 30 24",fill:"white",xmlns:"http://www.w3.org/2000/svg"},w=a("path",{d:"M0 2C0 0.89543 0.89543 0 2 0H28C29.1046 0 30 0.89543 30 2C30 3.10457 29.1046 4 28 4H2C0.89543 4 0 3.10457 0 2ZM0 11.7436C0 10.639 0.89543 9.74359 2 9.74359H28C29.1046 9.74359 30 10.639 30 11.7436C30 12.8482 29.1046 13.7436 28 13.7436H2C0.89543 13.7436 0 12.8482 0 11.7436ZM0 22C0 20.8954 0.89543 20 2 20H28C29.1046 20 30 20.8954 30 22C30 23.1046 29.1046 24 28 24H2C0.89543 24 0 23.1046 0 22Z"},null,-1);const j={name:"NavBar",components:{Button:h,HamburgerIcon:function(s,o){return e(),t("svg",b,[w])}},props:{menuOpen:{type:Boolean,required:!0}},emits:["update:menuOpen"]},k=r("data-v-33bee6e4");i("data-v-33bee6e4");const P={class:"nav-bar"};n();const I=k(((s,o,r,i,n,l)=>{const d=c("HamburgerIcon"),p=c("Button");return e(),t("div",P,[a(p,{variant:"icon",class:"hamburger-button",alt:"open menu",onClick:o[1]||(o[1]=e=>s.$emit("update:menuOpen",!0))},{default:k((()=>[a(d)])),_:1})])}));j.render=I,j.__scopeId="data-v-33bee6e4";const y={width:"30",height:"24",viewBox:"0 0 30 24",fill:"white",xmlns:"http://www.w3.org/2000/svg"},z=a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.414852 0.780556C1.08832 -0.0949525 2.34401 -0.258738 3.21952 0.41473L15.0001 9.47671L26.7807 0.41473C27.6562 -0.258738 28.9119 -0.0949525 29.5853 0.780556C30.2588 1.65606 30.095 2.91176 29.2195 3.58523L18.2803 12L29.2195 20.4147C30.095 21.0882 30.2588 22.3439 29.5853 23.2194C28.9119 24.0949 27.6562 24.2587 26.7807 23.5852L15.0001 14.5232L3.21952 23.5852C2.34401 24.2587 1.08832 24.0949 0.414852 23.2194C-0.258616 22.3439 -0.0948304 21.0882 0.780678 20.4147L11.7199 12L0.780678 3.58523C-0.0948304 2.91176 -0.258616 1.65606 0.414852 0.780556Z"},null,-1);function C(s,o){return e(),t("svg",y,[z])}const M={name:"Overlay",props:{variant:{type:String,default:"dark"}}},O=r("data-v-3f5eb698")(((r,a,i,n,c,l)=>(e(),t("div",o({class:["overlay",i.variant]},r.$attrs),[s(r.$slots,"default")],16))));M.render=O,M.__scopeId="data-v-3f5eb698";var _="/Portfolio/assets/tz.74a401cf.png",A="/Portfolio/assets/placeholder.03fa2ca3.jpg",x={intro:{title:"About Me",headline:"Hello,<br>I am Heidi Meyer",text:["and I am a product design student at the HdM Stuttgart."]},projects:{title:"Projects",projects:[{id:"radio",title:"Radiowecker",description:["Einzelarbeit","Unity, Fusion360, Werkstatt & Adobe Creative Cloud","3. Semester"],imageRows:[[{src:"/Portfolio/assets/skizzenideen.934694f6.png",description:["Radiowecker Entwürfe"]},{src:"/Portfolio/assets/skizzenradio.52264180.png",description:["Radiowecker gewinner Entwurf 2"]}],[{src:"/Portfolio/assets/prototyp3.97f11c67.jpg",description:["Mockup Draufsicht"]},{src:"/Portfolio/assets/prototyp1.31d486ca.jpg",description:["Mockup Frontsicht"]},{src:"/Portfolio/assets/prototyp2.282164f1.jpg",description:["Mockup schräge Ansicht"]}],[{src:"/Portfolio/assets/skizzenbedienung.e66c4f5f.png",description:["Bedienungsentwürfe"]},{src:"/Portfolio/assets/skizzendrehregler.834c5651.png",description:["Drehregler Entwürfe"]}],[{src:_,description:["Modelbauzeichnung"]}],[{src:_,description:["Unity Build Mockup"]}],[{src:"/Portfolio/assets/werkstatt1.c3ee241d.jpg",description:["Modelbau Fräsen"]},{src:"/Portfolio/assets/werkstatt2.04481f8d.jpg",description:["Modelbau Zwischenstand"]}],[{src:"/Portfolio/assets/werkstatt3.157bdfb4.jpg",description:["Modelbau Feilen"]},{src:"/Portfolio/assets/werkstatt4.32446c30.jpg",description:["Modelbau Spachteln"]},{src:"/Portfolio/assets/werkstatt5.9f384ff2.jpg",description:["Modelbau Zwischenstand"]}],[{src:"/Portfolio/assets/radiomodel1.e0689078.jpg",description:["Fotomodel"]},{src:"/Portfolio/assets/radiomodel2.7b2ad27b.jpg",description:["Fotomodel"]}],[{src:"/Portfolio/assets/radiomodel3.1ced8984.jpg",description:["Fotomodel Unterseite"]},{src:"/Portfolio/assets/radiomodel4.2f9014f0.jpg",description:["Fotomodel"]},{src:"/Portfolio/assets/radiomodel5.44303e1a.jpg",description:["Fotomodel Front"]},{src:"/Portfolio/assets/radiomodel6.bb418a36.jpg",description:["Fotomodel Oberseite"]}]]},{id:"emit",title:"Emit",description:["3er-Gruppenarbeit","Fusion360, Rhino6, Blender und Adobe Creative Cloud","3. Semester"],imageRows:[[{src:"/Portfolio/assets/knetei1.c4d1baa9.jpg",description:["Orb Mockup"]},{src:"/Portfolio/assets/knetei2.8d09524f.jpg",description:["Orb Mockup"]}],[{src:"/Portfolio/assets/einweghandschuhe.0fbfcf7a.jpg",description:["Handschuh Studie"]}],[{src:"/Portfolio/assets/uveiversion1-1.2ab1b310.jpg",description:["Orb Version 1"]},{src:"/Portfolio/assets/uveiversion1-2.f446cfc8.jpg",description:["Orb Version 1"]},{src:"/Portfolio/assets/uveiversion2-1.e2471c7a.jpg",description:["Orb Version 2"]},{src:"/Portfolio/assets/uveiversion2-2.0909f694.jpg",description:["Orb Version 2"]}],[{src:"/Portfolio/assets/uvboxversion1.4c0cc2dc.jpg",description:["Case Version 1"]},{src:"/Portfolio/assets/uvboxversion2-1.9a46723d.jpg",description:["Case Version 2"]},{src:"/Portfolio/assets/uvboxversion2-2.2852758a.jpg",description:["Case Version 2"]},{src:"/Portfolio/assets/uvboxversion2-3.180a4389.jpg",description:["Case Version 2"]}],[{src:"/Portfolio/assets/emitposter1.3566cd5f.jpg",description:["Produkt Poster"]},{src:"/Portfolio/assets/emitposter2.f8e3821a.jpg",description:["Orb Informationsposter"]}],[{src:"/Portfolio/assets/emitposter3.c8e83a82.jpg",description:["Glove Informationsposter"]},{src:"/Portfolio/assets/emitposter4.ca2fba6b.jpg",description:["Case Informationsposter"]}]]},{id:"ergo",title:"Ergonomische Untersuchungen",description:["Einzelarbeit","Rhino6 & Adobe Creative Cloud","3. Semester"],imageRows:[[{src:"/Portfolio/assets/fahrradablauf.f9199e93.jpg",description:["Fahrrad Haltungsanalysa"]}],[{src:"/Portfolio/assets/fahrradbewegung.ce60e72e.jpg",description:["Fahrrad Bewegungsanalyse"]},{src:"/Portfolio/assets/fahrrad.22b5106b.jpg",description:["personalisiertes Fahrrad"]}],[{src:"/Portfolio/assets/diagramm1.b25c196e.png",description:["Zähneputzen Ablauf"]},{src:"/Portfolio/assets/diagramm2.ebaabc24.png",description:["Zähneputzen Zeit-/ Bewegungsablaug"]}],[{src:"/Portfolio/assets/zaehneputzenlinks.42c0f2c7.png",description:["Zähne putzen Haltungsanalyse"]},{src:"/Portfolio/assets/zaehneputzenvorne.a9909957.png",description:["Zähne putzen Haltungsanalyse"]},{src:"/Portfolio/assets/zaehneputzenrechts.220a6dd3.png",description:["Zähne putzen Haltungsanalyse"]}]]},{id:"water",title:"Amaturgestaltung",description:["Einzelarbeit","Fusion360, Modellbau & Adobe Creative Cloud","2. Semester"],imageRows:[[{src:"/Portfolio/assets/sinkskizze1.9b56b4bd.jpg",description:["Wasserhahn Skizze"]},{src:"/Portfolio/assets/showerskizze1.76dd7885.jpg",description:["Duschamatur Skizze"]}],[{src:"/Portfolio/assets/sinkskizze2.c5b72961.png",description:["Wasserhahn Skizze"]},{src:"/Portfolio/assets/showerskizze2.9a6432b1.png",description:["Duschamatur Skizze"]}],[{src:"/Portfolio/assets/tapmodel1.261b4b3c.jpg",description:["Wasserhahn Knetmodel"]},{src:"/Portfolio/assets/tapmodel2.cc2db4b6.jpg",description:["Wasserhahn Knetmodel"]},{src:"/Portfolio/assets/tapmodel3.d8ac3e14.jpg",description:["Wasserhahn Knetmodel"]}],[{src:"/Portfolio/assets/showerheadmodel1.21d98f68.jpg",description:["Duschkopf Knetmodel"]},{src:"/Portfolio/assets/showerheadmodel2.8746b530.jpg",description:["Duschkopf Knetmodel"]},{src:"/Portfolio/assets/showerheadmodel3.ac1a2391.jpg",description:["Duschkopf Knetmodel"]}],[{src:"/Portfolio/assets/sinkskizze3.6813a6ef.jpg",description:["Waschbecken Skizze"]},{src:"/Portfolio/assets/showerskizze3.38e4cbe5.jpg",description:["Duschraum Skizze"]}],[{src:"/Portfolio/assets/sinkconzept.4120a87a.jpg",description:["Waschbecken Ideeskizze"]},{src:"/Portfolio/assets/sinkroom.3d880c06.jpg",description:["Waschbecken CAD Visualisierung"]}],[{src:"/Portfolio/assets/showerconzept.c31d9313.jpg",description:["Duschraum Ideeskizze"]},{src:"/Portfolio/assets/showerroom.85d24857.jpg",description:["Duschraum CAD Visualisierung"]}]]},{id:"dummy-project",title:"Dummy Project",description:["Einzelarbeit, cooles Projekt, etc."],imageRows:[[{src:A,description:["Platzhalterbild"]},{src:"/Portfolio/assets/placeholder2.2636697d.jpg",description:["Platzhalterbild 2"]}],[{src:A,description:["Platzhalterbild","Zweiter Absatz"]},{src:A,description:["Platzhalterbild"]},{src:"/Portfolio/assets/placeholder2.2636697d.jpg",description:["Platzhalterbild 2"]},{src:A,description:["Platzhalterbild"]}]]},{id:"dummy-project-2",title:"Another Project",description:["Noch ein Projekt.","Noch ein Absatz."],imageRows:[[{src:A,description:["Platzhalterbild"]}]]}]}};const R={name:"NavMenu",components:{Overlay:M,Button:h,MenuCloseIcon:C},props:{open:{type:Boolean,required:!0}},emits:["update:open"],data:()=>({content:x}),methods:{close(){this.$emit("update:open",!1)}}},B=r("data-v-6b92aeac");i("data-v-6b92aeac");const F={key:0,class:"nav-menu"},L={class:"top-row"},S=a("div",null,"DE / EN",-1);n();const $=B(((s,o,r,i,n,g)=>{const f=c("Overlay"),h=c("MenuCloseIcon"),v=c("Button");return e(),t(u,null,[a(d,{name:"fade"},{default:B((()=>[r.open?(e(),t(f,{key:0,variant:"light",onClick:g.close},null,8,["onClick"])):l("",!0)])),_:1}),a(d,{name:"shift-in-left"},{default:B((()=>[r.open?(e(),t("div",F,[a("div",L,[S,a(v,{variant:"icon",alt:"close menu",class:"close-button",onClick:g.close},{default:B((()=>[a(h)])),_:1},8,["onClick"])]),a("nav",null,[a("ul",null,[a("li",null,[a("a",{href:"#intro",onClick:o[1]||(o[1]=(...e)=>g.close&&g.close(...e))},p(n.content.intro.title),1)]),a("li",null,[a("a",{href:`#project-${n.content.projects.projects[0].id}`,onClick:o[2]||(o[2]=(...e)=>g.close&&g.close(...e))},p(n.content.projects.title),9,["href"])]),a("ul",null,[(e(!0),t(u,null,m(n.content.projects.projects,(s=>(e(),t("li",{key:s.id},[a("a",{href:`#project-${s.id}`,onClick:o[3]||(o[3]=(...e)=>g.close&&g.close(...e))},p(s.title),9,["href"])])))),128))])])])])):l("",!0)])),_:1})],64)}));R.render=$,R.__scopeId="data-v-6b92aeac";const H={name:"Intro",props:{headline:{type:String,required:!0},text:{type:Array,required:!0}}},E=r("data-v-71e734f7");i("data-v-71e734f7");const D={id:"intro"},Z=a("div",{class:"top-leaves"},null,-1);n();const U=E(((o,r,i,n,c,l)=>(e(),t("section",D,[a("h1",{innerHTML:i.headline},null,8,["innerHTML"]),(e(!0),t(u,null,m(i.text,((s,o)=>(e(),t("p",{key:o,class:"description"},p(s),1)))),128)),s(o.$slots,"default"),Z]))));H.render=U,H.__scopeId="data-v-71e734f7";const V={name:"Project",props:{isFirstProject:{type:Boolean,default:!1},id:{type:String,required:!0},title:{type:String,required:!0},description:{type:Array,required:!0}}},K=r("data-v-67afa244");i("data-v-67afa244");const N={key:0};n();const W=K(((o,r,i,n,c,d)=>(e(),t("section",{id:`project-${i.id}`},[i.isFirstProject?(e(),t("h1",N," Projects ")):l("",!0),a("h2",null,p(i.title),1),(e(!0),t(u,null,m(i.description,((s,o)=>(e(),t("p",{key:o,class:"description"},p(s),1)))),128)),s(o.$slots,"default")],8,["id"]))));V.render=W,V.__scopeId="data-v-67afa244";const q={name:"ImageRow",components:{Button:h},props:{images:{type:Array,required:!0}},emits:["image-click"]},T=r("data-v-c42d5552");i("data-v-c42d5552");const G={class:"row"},X={class:"hover-caption"};n();const J=T(((s,o,r,i,n,l)=>{const d=c("Button");return e(),t("div",G,[(e(!0),t(u,null,m(r.images,((o,r)=>(e(),t(d,{key:r,class:"image",onClick:e=>s.$emit("image-click",o)},{default:T((()=>[a("img",{src:o.src},null,8,["src"]),a("div",X,[(e(!0),t(u,null,m(o.description,((s,o)=>(e(),t("p",{key:o},p(s),1)))),128))])])),_:2},1032,["onClick"])))),128))])}));q.render=J,q.__scopeId="data-v-c42d5552";const Q={width:"44",height:"78",viewBox:"0 0 44 78",fill:"white",xmlns:"http://www.w3.org/2000/svg"},Y=a("path",{d:"M0 39V72.9289C0 77.3834 5.38571 79.6143 8.53553 76.4645L42.4645 42.5355C44.4171 40.5829 44.4171 37.4171 42.4645 35.4645L8.53553 1.53553C5.38571 -1.6143 0 0.616534 0 5.07106V39Z"},null,-1);const ee={name:"ImageOverlay",components:{Overlay:M,Button:h,MenuCloseIcon:C,ArrowRightIcon:function(s,o){return e(),t("svg",Q,[Y])}},props:{currentImage:{type:Object,default:void 0},images:{type:Array,default:void 0}},emits:["change-image","close"],computed:{prevImage(){return this.getImageAtOffset(-1)},nextImage(){return this.getImageAtOffset(1)}},mounted(){document.addEventListener("keydown",this.onKeydown)},unmounted(){document.removeEventListener("keydown",this.onKeydown)},methods:{getImageAtOffset(e){const t=this.images.findIndex((e=>e===this.currentImage))+e;return t<0||t>this.images.length?null:this.images[t]},onKeydown({key:e}){"Escape"===e?this.close():"ArrowLeft"===e&&this.prevImage?this.gotoImage(this.prevImage):"ArrowRight"===e&&this.nextImage&&this.gotoImage(this.nextImage)},close(){this.$emit("close")},gotoImage(e){this.$emit("change-image",e)}}},te=r("data-v-31c6a2af");i("data-v-31c6a2af");const se={key:0},oe={class:"container"},re={class:"row row-titlebar"},ae={class:"content"},ie={class:"row row-image"},ne={class:"img-wrapper"},ce={class:"row row-caption"},le={class:"caption"};n();const de=te(((s,o,r,i,n,d)=>{const f=c("MenuCloseIcon"),h=c("Button"),v=c("ArrowRightIcon"),b=c("Overlay");return r.currentImage?(e(),t("div",se,[a(b,{onClick:o[3]||(o[3]=g((e=>s.$emit("close")),["self"]))},{default:te((()=>[a("div",oe,[a("div",re,[a(h,{variant:"icon",alt:"close overlay",class:"close-button",onClick:d.close},{default:te((()=>[a(f)])),_:1},8,["onClick"])]),a("div",ae,[a("div",ie,[a(h,{variant:"icon",alt:"view previous image",disabled:!d.prevImage,class:"prev-button",onClick:o[1]||(o[1]=e=>d.gotoImage(d.prevImage))},{default:te((()=>[a(v,{style:{transform:"scaleX(-1)"}})])),_:1},8,["disabled"]),a("div",ne,[a("img",{src:r.currentImage.src},null,8,["src"])]),a(h,{variant:"icon",alt:"view next image",disabled:!d.nextImage,class:"next-button",onClick:o[2]||(o[2]=e=>d.gotoImage(d.nextImage))},{default:te((()=>[a(v)])),_:1},8,["disabled"])]),a("div",ce,[a("div",le,[(e(!0),t(u,null,m(r.currentImage.description,((s,o)=>(e(),t("p",{key:o},p(s),1)))),128))])])])])])),_:1})])):l("",!0)}));ee.render=de,ee.__scopeId="data-v-31c6a2af";const pe=x.projects.projects.map((e=>e.imageRows.map((e=>e)))).flat(2),ue={name:"Index",components:{Intro:H,Project:V,ImageRow:q,ImageOverlay:ee},data:()=>({content:x,allImages:pe,overlayImage:null}),methods:{openImageOverlay(e){this.overlayImage=e},closeImageOverlay(){this.overlayImage=null}}},me=r("data-v-08e169ce");i("data-v-08e169ce");const ge={class:"container"},fe={class:"projects"};n();const he=me(((s,r,i,n,l,d)=>{const p=c("Intro"),g=c("ImageRow"),f=c("Project"),h=c("ImageOverlay");return e(),t(u,null,[a("div",ge,[a(p,l.content.intro,null,16),a("div",fe,[(e(!0),t(u,null,m(l.content.projects.projects,((s,a)=>(e(),t(f,o({key:s.id},s,{"is-first-project":0==a,class:"project"}),{default:me((()=>[(e(!0),t(u,null,m(s.imageRows,((s,o)=>(e(),t(g,{key:o,images:s,onImageClick:r[1]||(r[1]=e=>d.openImageOverlay(e))},null,8,["images"])))),128))])),_:2},1040,["is-first-project"])))),128))])]),a(h,{"current-image":l.overlayImage,images:l.allImages,onChangeImage:r[2]||(r[2]=e=>l.overlayImage=e),onClose:r[3]||(r[3]=e=>d.closeImageOverlay())},null,8,["current-image","images"])],64)}));ue.render=he,ue.__scopeId="data-v-08e169ce";const ve={name:"App",components:{NavBar:j,NavMenu:R,Index:ue},data:()=>({menuOpen:!1})},be=r("data-v-18f64b17")(((s,o,r,i,n,l)=>{const d=c("NavBar"),p=c("NavMenu"),m=c("Index");return e(),t(u,null,[a(d,{"menu-open":n.menuOpen,"onUpdate:menu-open":o[1]||(o[1]=e=>n.menuOpen=e)},null,8,["menu-open"]),a(p,{open:n.menuOpen,"onUpdate:open":o[2]||(o[2]=e=>n.menuOpen=e)},null,8,["open"]),a("main",null,[a(m)])],64)}));ve.render=be,ve.__scopeId="data-v-18f64b17";f(ve).mount("#app");