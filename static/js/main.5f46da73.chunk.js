(this["webpackJsonpgkfitz-employeedirectory"]=this["webpackJsonpgkfitz-employeedirectory"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),a=n(16),s=n.n(a),c=(n(22),n.p,n(23),n(3)),o=n(4),l=n(6),u=n(5),h=n(17),j=n.n(h),d="https://randomuser.me/api/?results=".concat(500),m=function(){return j.a.get(d)},f=n(0),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Employee Directory"}),Object(f.jsx)("p",{children:"Type in your employee's first name to find them in the directory. If you want to look at all employees in descending order, click the first name title!!!"})]})}}]),n}(r.Component);function b(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsx)("img",{src:e.picture,alt:"employee images"})}),Object(f.jsx)("td",{children:e.firstName}),Object(f.jsx)("td",{children:e.lastName}),Object(f.jsx)("td",{children:e.email})]})}var O=function(e){return Object(f.jsx)("input",{type:"text",class:"searchBar",value:e.nameState,onChange:e.handleInputChange,placeholder:"Search.."})},y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(e){return Object(f.jsx)("div",{id:"everything",children:this.props.children})}}]),n}(r.Component),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={employees:[],name:"",sortingMethod:"default",sortBy:""},e.handleInputChange=function(t){e.setState({name:t.target.value,sortingMethod:"filter"})},e.nameFilter=function(){return e.state.employees.filter((function(t){return t.name.first.toLowerCase().includes(e.state.name.toLowerCase())}))},e.sortByFirstName=function(){return e.state.employees.sort((function(e,t){return e.name.first<t.name.first?-1:1}))},e.changeSortFName=function(){e.setState({sortBy:"firstName",sortingMethod:"sort"})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;m().then((function(t){return e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.employees;return"filter"===this.state.sortingMethod?e=this.nameFilter():"sort"===this.state.sortingMethod&&"firstName"===this.state.sortBy&&(e=this.sortByFirstName()),Object(f.jsx)("div",{children:Object(f.jsxs)(y,{children:[Object(f.jsx)(p,{}),Object(f.jsx)(O,{nameState:this.state.name,handleInputChange:this.handleInputChange}),Object(f.jsxs)("table",{children:[Object(f.jsxs)("tr",{class:"top",children:[Object(f.jsx)("th",{children:"Picture"}),Object(f.jsx)("th",{onClick:this.changeSortFName,children:"First Name"}),Object(f.jsx)("th",{children:"Last Name"}),Object(f.jsx)("th",{children:"Email"})]}),e.map((function(e){return Object(f.jsx)(b,{picture:e.picture.thumbnail,firstName:e.name.first,lastName:e.name.last,email:e.email})}))]})]})})}}]),n}(r.Component);var x=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(g,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),v()}},[[43,1,2]]]);
//# sourceMappingURL=main.5f46da73.chunk.js.map