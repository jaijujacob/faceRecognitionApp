(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[0],{118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},264:function(e,a,t){},266:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(37),s=t.n(r),i=(t(81),t(69)),c=t(70),o=t(75),m=t(74),u=t(38),d=t.n(u),p=function(e){var a=e.onRouteChange;return e.isSignedIn?l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{onClick:function(){return a("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{onClick:function(){return a("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),l.a.createElement("p",{onClick:function(){return a("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},g=function(e){var a=e.onRouteChange;return l.a.createElement("article",{className:"br3 ba light-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},l.a.createElement("main",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure center"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),l.a.createElement("div",{className:""},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:function(){return a("home")}})),l.a.createElement("div",{className:"lh-copy mt3"},l.a.createElement("p",{href:"#0",onClick:function(){return a("register")},className:"f6 link dim black db pointer"},"Register")))))},b=function(e){var a=e.onRouteChange;return l.a.createElement("article",{className:"br3 ba light-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},l.a.createElement("main",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure center"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),l.a.createElement("div",{className:""},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register",onClick:function(){return a("Home")}})))))},h=(t(118),function(e){var a=e.onInputChange,t=e.onButtonSubmit;return l.a.createElement("div",null,l.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures. Give it a try"),l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"form pa4 br3 shadow-5 center"},l.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:a}),l.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:t},"Detect"))))}),f=(t(119),function(e){var a=e.imageUrl,t=e.box;return l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"absolute mt2"},l.a.createElement("img",{id:"inputimage",src:a,alt:"Recognized face",width:"500px",height:"auto"}),l.a.createElement("div",{className:"bounding-box",style:{top:t.topRow,right:t.rightCol,bottom:t.bottomRow,left:t.leftCol}})))}),v=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"white f3"},"Hello your current rank is..."),l.a.createElement("div",{className:"white f1"},"#5"))},E=t(71),w=t.n(E),N=(t(120),t(72)),x=t.n(N),C=function(){return l.a.createElement("div",{className:"ma4 mt0"},l.a.createElement(w.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},l.a.createElement("div",{className:"Tilt-inner"},l.a.createElement("img",{style:{paddingTop:"35px"},alt:"Logo",src:x.a}))))},k=t(73),A=t.n(k),S=(t(264),{particles:{number:{value:30,density:{enable:!0,value_area:800}}}}),y=new d.a.App({apiKey:"1c9d7eaac28b4edf9ca21d40f67e712d"}),F=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).calculateFaceLocation=function(e){var a=e.outputs[0].data.regions[0].region_info.bounding_box,t=document.getElementById("inputimage"),n=Number(t.width),l=Number(t.height);return console.log(n,l),{leftCol:a.left_col*n,topRow:a.top_row*l,rightCol:n-a.right_col*n,bottomRow:l-a.bottom_row*l}},e.displayFaceBox=function(a){console.log("display FaceBox function",a),e.setState({box:a})},e.onRouteChange=function(a){"signout"===a?e.setState({isSignedIn:!1}):"home"===a&&e.setState({isSignedIn:!0}),e.setState({route:a})},e.onInputChange=function(a){e.setState({input:a.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),y.models.predict(d.a.FACE_DETECT_MODEL,e.state.input).then((function(a){return e.displayFaceBox(e.calculateFaceLocation(a)).catch((function(e){return console.log(e)}))}))},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.state,a=e.isSignedIn,t=e.imageUrl,n=e.route,r=e.box;return l.a.createElement("div",{className:"App"},l.a.createElement(A.a,{className:"particles",params:S}),l.a.createElement(p,{isSignedIn:a,onRouteChange:this.onRouteChange}),"home"===this.state.route?l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(v,null),l.a.createElement(h,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),l.a.createElement(f,{box:r,imageUrl:t})):"signin"===n?l.a.createElement(g,{onRouteChange:this.onRouteChange}):l.a.createElement(b,{onRouteChange:this.onRouteChange}))}}]),t}(n.Component);t(265),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,a){e.exports="data:image/png;base64,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"},76:function(e,a,t){e.exports=t(266)},81:function(e,a,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.983896af.chunk.js.map