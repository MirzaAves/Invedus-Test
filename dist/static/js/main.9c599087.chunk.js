(this.webpackJsonptest02=this.webpackJsonptest02||[]).push([[0],{40:function(e,t,a){e.exports=a(57)},45:function(e,t,a){},53:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(35),r=a.n(l),s=(a(45),a(2)),o=a(3),i=a(9),m=a(10),u=a(5),p=a(16),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.createElement("div",null,n.createElement("nav",{className:"navbar is-light"},n.createElement("div",{className:"navbar-brand"}),n.createElement("div",{id:"navbarExampleTransparentExample",className:"navbar-menu"},n.createElement("div",{className:"navbar-end"},n.createElement(p.b,{to:"/contact",className:"navbar-item"}," Contacts"),n.createElement("div",{className:"navbar-item"})))))}}]),a}(n.Component),h=a(1),v=a(8),f=a(11),b=a(37),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.createElement("button",{className:this.props.isSaving?"button is-success is-loading":"button is-success",onClick:this.props.triggerParent},"Submit")}}]),a}(n.Component),g=a(38),O=a(24),N=Object(g.a)({apiKey:"AIzaSyCqInA3rpAknJT8bXOEyRWkVCnpMVajM-E",authDomain:"inved-test.firebaseapp.com",projectId:"inved-test",storageBucket:"inved-test.appspot.com",messagingSenderId:"911022250220",appId:"1:911022250220:web:3db80501becf3617b6adc9",measurementId:"G-0L83H8CE2K"}),y=Object(O.b)(N),j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state=void 0,n.submit=function(){n.setState({isSaving:!0});var e=n.state.contact.contactId;if(""!==e){var t=localStorage.getItem("contacts");if(t){var a,c=JSON.parse(t),l=Object(f.a)(c);try{for(l.s();!(a=l.n()).done;){var r,s,o,i,m=a.value;if(m.contactId===e)m.firstname=n.state.contact.firstname,m.phone=null===(r=n.state.contact)||void 0===r?void 0:r.phone,m.iswhatsapp=null===(s=n.state.contact)||void 0===s?void 0:s.iswhatsapp,m.type=null===(o=n.state.contact)||void 0===o?void 0:o.type,m.profile_pic=null===(i=n.state.contact)||void 0===i?void 0:i.profile_pic}}catch(d){l.e(d)}finally{l.f()}localStorage.setItem("contacts",JSON.stringify(c))}n.cancelIsSavingState(),n.props.history.push("/contact")}else{var u=localStorage.getItem("contacts");if(n.state.contact.contactId=Object(b.uuid)(),u){var p=JSON.parse(u);p.push(Object(v.a)({},n.state.contact)),localStorage.setItem("contacts",JSON.stringify(p))}else localStorage.setItem("contacts",JSON.stringify([Object(v.a)({},n.state.contact)]));n.cancelIsSavingState(),n.props.history.push("/contact")}},n.handleInputChanges=function(e){"iswhatsapp"!==e.currentTarget.name?n.setState(Object(v.a)(Object(v.a)({},n.state),{},{contact:Object(v.a)(Object(v.a)({},n.state.contact),{},Object(h.a)({},e.currentTarget.name,e.currentTarget.value))})):n.setState(Object(v.a)(Object(v.a)({},n.state),{},{contact:Object(v.a)(Object(v.a)({},n.state.contact),{},Object(h.a)({},e.currentTarget.name,e.currentTarget.checked))}))},n.state={contact:{contactId:"",firstname:"",phone:"",type:"",iswhatsapp:!1,profile_pic:""},isSaving:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getContactById(this.props.match.params.contactId)}},{key:"cancelIsSavingState",value:function(){this.setState({isSaving:!1})}},{key:"getContactById",value:function(e){if(e){var t=localStorage.getItem("contacts");if(t){var a=JSON.parse(t).find((function(t){return t.contactId===e}));a&&this.setState({contact:a})}}}},{key:"uploadPic",value:function(e){var t=this;console.log(e.target.files[0]),e.target.files[0]||alert("Please upload an image first!");var a=Object(O.c)(y,"/files/".concat(e.target.files[0].name)),n=Object(O.d)(a,e.target.files[0]);n.on("state_changed",(function(e){}),(function(e){return console.log(e)}),(function(){Object(O.a)(n.snapshot.ref).then((function(e){console.log(e),t.setState(Object(v.a)(Object(v.a)({},t.state),{},{contact:Object(v.a)(Object(v.a)({},t.state.contact),{},Object(h.a)({},"profile_pic",e))}))}))}))}},{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement("h3",{className:"title is-3"},""!==this.state.contact.contactId?"Edit":"Create"," Contact"),n.createElement("div",{className:"columns"},n.createElement("div",{className:"column"},n.createElement("div",{className:"field"},n.createElement("label",{className:"label"},"Name"),n.createElement("div",{className:"control"},n.createElement("input",{name:"firstname",value:this.state.contact.firstname||"",onChange:function(t){return e.handleInputChanges(t)},type:"text",className:"input",required:!0}))),n.createElement("div",{className:"field"},n.createElement("label",{className:"label"},"Phone"),n.createElement("div",{className:"control"},n.createElement("input",{name:"phone",value:this.state.contact.phone||"",onChange:function(t){return e.handleInputChanges(t)},type:"text",className:"input",required:!0}))),n.createElement("div",{className:"field"},n.createElement("label",{className:"label"},"Type"),n.createElement("div",{className:"control"},n.createElement("select",{className:"input",name:"type",required:!0,value:this.state.contact.type||"",onChange:function(t){return e.handleInputChanges(t)}},n.createElement("option",{value:"Office"},"Office"),n.createElement("option",{value:"Personal"},"Personal")))),n.createElement("div",{className:"field"},n.createElement("div",{className:"control"},n.createElement("label",{className:"label"},"is What's App"),n.createElement("input",{type:"checkbox",required:!0,name:"iswhatsapp",checked:this.state.contact.iswhatsapp,onChange:function(t){return e.handleInputChanges(t)}}))),n.createElement("div",{className:"field"},n.createElement("label",{className:"label"},"Profile Pic"),n.createElement("div",{className:"control"},n.createElement("input",{type:"file",required:!0,name:"profile_pic",onChange:function(t){return e.uploadPic(t)}})))),n.createElement("div",{className:"column"})),n.createElement("div",{className:"level"},n.createElement("div",{className:"level-left"},n.createElement(E,{isSaving:this.state.isSaving,triggerParent:this.submit}),"\xa0",n.createElement(p.b,{to:"/contact",className:"button"},"Go back")),n.createElement("div",{className:"level-right"})))}}]),a}(n.Component),S=(a(53),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={contact:[],show:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getContacts()}},{key:"getContacts",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contact:JSON.parse(e)})}},{key:"deleteContact",value:function(e){if(e){var t=localStorage.getItem("contacts");if(t){for(var a=JSON.parse(t),n=0;n<a.length;n++)a[n].contactId===e&&a.splice(n,1);localStorage.setItem("contacts",JSON.stringify(a)),this.getContacts()}}}},{key:"handleModal",value:function(e){window.confirm("Are you sure you want to delete?")&&this.deleteContact(e)}},{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement("h3",{className:"title is-3"},"Contacts"),n.createElement(p.b,{to:"/contact/create",className:"button is-link"},"Create new"),n.createElement("hr",null),n.createElement("table",{className:"table is-bordered is-striped is-narrow is-hoverable is-fullwidth"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Contact ID"),n.createElement("th",null,"Name"),n.createElement("th",null,"Phone"),n.createElement("th",null,"Type"),n.createElement("th",null,"What's App"),n.createElement("th",null,"Profile Pic"),n.createElement("th",null))),n.createElement("tbody",null,this.state.contact.map((function(t,a){return n.createElement("tr",{key:a},n.createElement("td",null,t.contactId),n.createElement("td",null,t.firstname),n.createElement("td",null,t.phone),n.createElement("td",null,t.type),n.createElement("td",null,t.iswhatsapp?"True":"False"),n.createElement("td",null,n.createElement("img",{src:t.profile_pic,height:100,width:100})),n.createElement("td",null,n.createElement(p.b,{to:"/contact/edit/".concat(t.contactId),className:"button is-warning"},"Edit"),"\xa0",n.createElement("button",{className:"button is-danger",onClick:function(){return e.handleModal(t.contactId)}},"Delete")))})))))}}]),a}(n.Component)),I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement("br",null),c.a.createElement("div",{className:"container"},c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",exact:!0,component:S}),c.a.createElement(u.a,{path:"/contact",exact:!0,component:S}),c.a.createElement(u.a,{path:"/contact/create",exact:!0,component:j}),c.a.createElement(u.a,{path:"/contact/edit/:contactId",exact:!0,component:j}))))}}]),a}(c.a.Component),C=Object(u.f)(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(54),a(55);r.a.render(n.createElement(p.a,null,n.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.9c599087.chunk.js.map