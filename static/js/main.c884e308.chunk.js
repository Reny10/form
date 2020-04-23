(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{37:function(e,a,r){e.exports=r(80)},42:function(e,a,r){},69:function(e,a,r){},80:function(e,a,r){"use strict";r.r(a);var t=r(0),s=r.n(t),n=r(28),l=r.n(n),o=(r(42),r(43),r(14)),m=r(15),i=r(18),c=r(17),d=r(11),u=r(12),h=(r(44),r(29)),p=r.n(h),E=r(10),F=r(20),f=r(21),w=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),g=function(e){Object(i.a)(r,e);var a=Object(c.a)(r);function r(){var e;return Object(o.a)(this,r),(e=a.call(this)).handleChange=function(a){var r=a.target,t=r.name,s=Object(F.a)({},e.state.formErrors),n="checkbox"===r.type?r.checked:r.value;switch(t){case"username":s.username=n.length<3?"Min 3 char. required":"";break;case"email":s.email=w.test(n)?"":"Invalid email address";break;case"password":s.password=n.length<6?"Min 6 char. required":"";break;case"confirmPassword":s.confirmPassword=n.length<6?"Min 6 char. required":""}e.setState(Object(E.a)({formErrors:s},t,n),(function(){return console.log(e.state)}))},e.handleSubmit=function(a){var r=e.state;r.password!==r.confirmPassword?alert("Passwords don't match"):!function(e){var a=e.formErrors,r=Object(f.a)(e,["formErrors"]),t=!0;return Object.values(a).forEach((function(e){e.length>0&&(t=!1)})),Object.values(r).forEach((function(e){null===e.length&&(t=!1)})),t}(e.state)?console.error("Invalid Form"):console.info("Valid Form")},e.state={username:null,email:null,password:null,confirmPassword:null,hasAgreed:!1,formErrors:{username:"",email:"",password:"",confirmPassword:""}},e}return Object(m.a)(r,[{key:"render",value:function(){var e=this.state.formErrors;return s.a.createElement("div",{className:"FormCenter"},s.a.createElement("form",{onSubmit:this.handleSubmit,className:"FormFields"},s.a.createElement("div",{className:"FormField"},s.a.createElement("label",{className:"FormField__Label",htmlFor:"name"},"Username"),s.a.createElement("input",{type:"text",id:"name",className:"FormField__Input",placeholder:"Enter your username",name:"username",value:this.state.username,onChange:this.handleChange,required:!0}),e.username.length>0&&s.a.createElement("span",{className:"errorMessage"},e.username)),s.a.createElement("div",{className:"FormField"},s.a.createElement("label",{className:"FormField__Label",htmlFor:"email"},"E-Mail Address"),s.a.createElement("input",{type:"email",id:"email",className:"FormField__Input",placeholder:"Enter your email",name:"email",value:this.state.email,onChange:this.handleChange,required:!0}),e.email.length>0&&s.a.createElement("span",{className:"errorMessage"},e.email)),s.a.createElement("div",{className:"FormField"},s.a.createElement("label",{className:"FormField__Label",htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",id:"password",className:"FormField__Input",placeholder:"Enter your password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0}),e.password.length>0&&s.a.createElement("span",{className:"errorMessage"},e.password)),s.a.createElement("div",{className:"FormField"},s.a.createElement("label",{className:"FormField__Label",htmlFor:"password"},"Confirm Password"),s.a.createElement("input",{type:"password",id:"password",className:"FormField__Input",placeholder:"Enter your password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.handleChange,required:!0}),e.confirmPassword.length>0&&s.a.createElement("span",{className:"errorMessage"},e.confirmPassword)),s.a.createElement("div",{className:"FormField"},s.a.createElement("label",{className:"FormField__CheckboxLabel"},s.a.createElement("input",{className:"FormField__Checkbox",type:"checkbox",name:"hasAgreed",value:this.state.hasAgreed,onChange:this.handleChange,required:!0})," I agree all statements in ",s.a.createElement("a",{href:"",className:"FormField__TermsLink"},"terms of service"))),s.a.createElement("div",{className:"FormField"},s.a.createElement("button",{className:"FormField__Button mr-20"},"Sign Up")," ",s.a.createElement(d.b,{to:"/sign-in",className:"FormField__Link"},"I'm already member"))))}}]),r}(t.Component),b=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),v=function(e){Object(i.a)(r,e);var a=Object(c.a)(r);function r(){var e;return Object(o.a)(this,r),(e=a.call(this)).handleChange=function(a){a.preventDefault();var r=a.target,t=r.name,s=r.value,n=Object(F.a)({},e.state.formErrors);switch(t){case"email":n.email=b.test(s)?"":"Invalid email address";break;case"password":n.password=s.length<6?"Min 6 char. required":"";break;case"confirmPassword":n.confirmPassword=s.length<6?"Min 6 char. required":""}e.setState(Object(E.a)({formErrors:n},t,s),(function(){return console.log(e.state)}))},e.handleSubmit=function(a){var r=e.state;r.password!==r.confirmPassword?alert("Passwords don't match"):!function(e){var a=e.formErrors,r=Object(f.a)(e,["formErrors"]),t=!0;return Object.values(a).forEach((function(e){e.length>0&&(t=!1)})),Object.values(r).forEach((function(e){null===e.length&&(t=!1)})),t}(e.state)?console.error("Invalid Form"):console.info("Valid Form")},e.state={email:null,password:null,confirmPassword:null,formErrors:{email:"",password:"",confirmPassword:""}},e}return Object(m.a)(r,[{key:"render",value:function(){var e,a=this.state.formErrors;return s.a.createElement("div",{className:"FormCenter"},s.a.createElement("form",(e={onSubmit:this.handleSubmit,className:"FormFields"},Object(E.a)(e,"onSubmit",this.handleSubmit),Object(E.a)(e,"required",!0),e),s.a.createElement("div",{className:"FormField"},s.a.createElement("label",{className:"FormField__Label",htmlFor:"email"},"E-Mail Address"),s.a.createElement("input",{type:"email",id:"email",className:"FormField__Input",placeholder:"Enter your email",name:"email",value:this.state.email,onChange:this.handleChange,required:!0}),a.email.length>0&&s.a.createElement("span",{className:"errorMessage"},a.email)),s.a.createElement("div",{className:"FormField"},s.a.createElement("label",{className:"FormField__Label",htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",id:"password",className:"FormField__Input",placeholder:"Enter your password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0}),a.password.length>0&&s.a.createElement("span",{className:"errorMessage"},a.password)),s.a.createElement("div",{className:"FormField"},s.a.createElement("label",{className:"FormField__Label",htmlFor:"password"}," Confirm Password"),s.a.createElement("input",{type:"password",id:"password",className:"FormField__Input",placeholder:"Enter your password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.handleChange}),a.confirmPassword.length>0&&s.a.createElement("span",{className:"errorMessage"},a.confirmPassword)),s.a.createElement("div",{className:"FormField"},s.a.createElement("button",{className:"FormField__Button mr-20"},"Sign In")," ",s.a.createElement(d.b,{to:"/",className:"FormField__Link"},"Create an account"))))}}]),r}(t.Component),_=(r(69),function(e){Object(i.a)(r,e);var a=Object(c.a)(r);function r(){return Object(o.a)(this,r),a.apply(this,arguments)}return Object(m.a)(r,[{key:"render",value:function(){return s.a.createElement(d.a,{basename:"/react-auth-ui/"},s.a.createElement(p.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App__Aside"},s.a.createElement("a",{href:"https://www.animatedimages.org/cat-monkeys-180.htm"},s.a.createElement("img",{src:"https://www.animatedimages.org/data/media/180/animated-monkey-image-0033.gif",alt:"animated-monkey-image-0033"})),s.a.createElement("div",{className:"FormField"},s.a.createElement("label",{className:"FormField__Label",htmlFor:"name"},"First name"),s.a.createElement("input",{type:"text",id:"fname",className:"FormField__Input",placeholder:"Enter your first name",name:"fname",required:!0})),s.a.createElement("div",{className:"FormField"},s.a.createElement("label",{className:"FormField__Label",htmlFor:"name"},"Last name"),s.a.createElement("input",{type:"text",id:"lname",className:"FormField__Input",placeholder:"Enter your last name",name:"lname",required:!0}))),s.a.createElement("div",{className:"App__Form"},s.a.createElement("div",{className:"PageSwitcher"},s.a.createElement(d.c,{to:"/sign-in",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item"},"Sign In"),s.a.createElement(d.c,{exact:!0,to:"/",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item"},"Sign Up")),s.a.createElement(u.a,{exact:!0,path:"/",component:g}),s.a.createElement(u.a,{path:"/sign-in",component:v}))))}}]),r}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=r(36),y=r(25),P=r(35);y.a.use(P.a).init({resources:{en:{translations:{USERNAME:"Enter username","E-MAIL ADDRESS":"Enter your email",PASSWORD:"Enter your password","CONFIRM PASSWORD":"Enter your password","FIRST NAME":"Enter your first name","LAST NAME":"Enter your last name","I agree in terms of service":""}},hr:{translations:{}}},fallbackLng:"en",debug:!0,ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});var S=y.a;l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(N.a,{i18n:S},s.a.createElement(_,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.c884e308.chunk.js.map