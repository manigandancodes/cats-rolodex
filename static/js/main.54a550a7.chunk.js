(this["webpackJsonpcats-rolodex"]=this["webpackJsonpcats-rolodex"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a.n(r),s=(a(14),a(3)),i=a(4),l=a(7),h=a(5),u=a(8),d=a(6),m=a.n(d),f=(a(18),function(e){return c.a.createElement("div",{className:"card-container"},c.a.createElement("img",{src:"https://robohash.org/".concat(e.cat.id,"?set=set4"),alt:"cats",width:"150",height:"150"}),c.a.createElement("h2",null,e.cat.name))}),p=(a(19),function(e){return c.a.createElement("div",{className:"card-list"},e.cats.map((function(e){return c.a.createElement(f,{key:e.id,cat:e})})))}),v=(a(20),function(e){var t=e.placeholder,a=e.handleChange;return c.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:a})}),g=(a(21),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.makeCats=function(){for(var t=[],a=0;a<=30;a++)t.push({name:m.a.random(),id:a+1});e.setState({cats:t})},e.state={cats:[],searchField:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.makeCats()}},{key:"render",value:function(){var e=this.state,t=e.cats,a=e.searchField,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Cats Rolodex"),c.a.createElement(v,{placeholder:"Search Monsters",handleChange:this.handleChange}),c.a.createElement(p,{cats:n}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.54a550a7.chunk.js.map