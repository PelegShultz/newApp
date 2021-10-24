(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{114:function(e,t,r){},148:function(e,t,r){},158:function(e,t,r){"use strict";r.r(t);var a=r(0),s=r.n(a),n=r(27),i=r.n(n),l=(r(148),r(18)),c=r(31),o=r(32),d=r(48),h=r(46),u=(r(91),r(94)),j=r(36),m=r(77),b=r(76),f=r(2),p=[{field:"image",headerName:"Image",width:150,headerAlign:"center",headerClassName:"header",renderCell:function(e){return Object(f.jsx)("img",{src:e.row.image.thumbnail,height:"50",width:"50",alt:"user"})}},{field:"fullName",headerName:"Full Name",flex:1,minWidth:150,headerAlign:"center",headerClassName:"header",sortComparator:function(e,t,r,a){return(e.first+e.last).localeCompare(t.first+t.last)},renderCell:function(e){var t=e.row.fullName.first.charAt(0)+". "+e.row.fullName.last;return Object(f.jsx)(m.b,{to:"/userDeatils/"+e.row.fullName.first+e.row.fullName.last,children:t})}},{field:"email",headerName:"Email",flex:1,minWidth:150,headerAlign:"center",headerClassName:"header",renderCell:function(e){return Object(f.jsx)("a",{href:"mailto:"+e.row.email,children:e.row.email})}},{field:"gender",headerName:"Gender",width:150,headerAlign:"center",headerClassName:"header"},{field:"age",headerName:"Age",width:150,headerAlign:"center",headerClassName:"header"}],g=Object(j.a)({root:{"& .header":{background:"linear-gradient(#ffea31, #ffbe31)",color:"black"},"& .rows":{background:"linear-gradient(white, gray)",color:"black"}}}),x=function(e){var t=g();return Object(f.jsxs)("div",{style:{width:"100%"},className:t.root,children:[Object(f.jsx)(b.a,{bodyAttributes:{style:"background-color :  #002142"},children:Object(f.jsx)("title",{children:"All Users"})}),Object(f.jsx)("h1",{children:"All Users"}),Object(f.jsx)("div",{style:{display:"flex",height:"100%"},children:Object(f.jsx)("div",{style:{flexGrow:1},children:Object(f.jsx)(u.a,{autoHeight:!0,rows:e.rows,columns:p,pageSize:10,rowsPerPageOptions:[10],getRowClassName:function(){return"rows"},loading:!0})})})]})},O=r(123),N=(r(114),r(121)),v=r(122),w=r.n(v),y=function(e){var t=e.text;return Object(f.jsxs)("div",{className:"pin",children:[Object(f.jsx)(N.a,{icon:w.a,className:"pin-icon"}),Object(f.jsx)("p",{className:"pin-text",children:t})]})},A=function(e){var t=e.location,r=e.zoomLevel;return console.log(t),Object(f.jsx)("div",{className:"map",children:Object(f.jsx)("div",{className:"google-map",children:Object(f.jsx)(O.a,{bootstrapURLKeys:{key:"AIzaSyDmS5HUHriuqEssaDNUXxwDoQE5kiXeNaE"},defaultCenter:t.coordinates,center:t.coordinates,defaultZoom:r,yesIWantToUseGoogleMapApiInternals:!0,children:Object(f.jsx)(y,{lat:t.coordinates.lat,lng:t.coordinates.lng,text:t.address})})})})},C=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(c.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).styles={height:"80%",width:"30%",background:"radial-gradient(circle,white, grey)",margin:"4% auto",padding:20,borderRaduis:10,boxShadow:"0px 0px 20px #3198ff",position:"fixed",left:"33%"},e}return Object(o.a)(r,[{key:"render",value:function(){var e={address:this.props.address.street.number+" "+this.props.address.street.name+" "+this.props.address.city+" "+this.props.address.state+" "+this.props.address.country,coordinates:{lat:parseFloat(this.props.address.coordinates.latitude),lng:parseFloat(this.props.address.coordinates.longitude)}};return Object(f.jsxs)("nav",{children:[Object(f.jsx)(b.a,{bodyAttributes:{style:"background-color :  #002142"},children:Object(f.jsx)("title",{children:"User Details"})}),Object(f.jsxs)("div",{style:this.styles,children:[Object(f.jsx)("img",{id:"userImg",src:this.props.image.large,height:"100",width:"100",alt:"user"}),Object(f.jsxs)("div",{className:"text",children:["Name: ",this.props.fullName.first+" "+this.props.fullName.last]}),Object(f.jsxs)("div",{className:"text",children:["Email: ",this.props.email]}),Object(f.jsxs)("div",{className:"text",children:["Gender: ",this.props.gender]}),Object(f.jsxs)("div",{className:"text",children:["Age: ",this.props.age]}),Object(f.jsxs)("div",{className:"text",children:["Address: ",e.address,Object(f.jsx)(A,{location:e,zoomLevel:13})]})]})]})}}]),r}(a.Component),k=C,D=r(19),F=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(c.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={rows:[]},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=200&seed=abc").then((function(e){return e.json()})).then((function(t){return e.setState({rows:t.results.map((function(e){return{id:e.login.uuid,email:e.email,gender:e.gender,fullName:{first:e.name.first,last:e.name.last},image:{thumbnail:e.picture.thumbnail,large:e.picture.large},address:e.location,age:e.dob.age}}))})}))}},{key:"render",value:function(){var e=this;return Object(f.jsx)(s.a.Fragment,{children:Object(f.jsx)(m.a,{children:Object(f.jsx)("main",{className:"container",children:Object(f.jsxs)(D.c,{children:[Object(f.jsx)(D.a,{exact:!0,path:"/",render:function(t){return Object(f.jsx)(x,{rows:e.state.rows})}}),Object(f.jsx)(D.a,{exact:!0,path:"/userDeatils/:fullName",render:function(t){var r=t.match.params.fullName,a=e.state.rows.find((function(e){return e.fullName.first+e.fullName.last===r}));if(a)return Object(f.jsx)(k,Object(l.a)(Object(l.a)({},t),a))}})]})})})})}}]),r}(a.Component),I=F,S=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,232)).then((function(t){var r=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root")),S()},91:function(e,t,r){}},[[158,1,2]]]);
//# sourceMappingURL=main.2ee21f00.chunk.js.map