"use strict";(self.webpackChunkgoit_react_hw_04_movies=self.webpackChunkgoit_react_hw_04_movies||[]).push([[347],{5986:function(e,t,n){n.d(t,{al:function(){return h},Hg:function(){return v},TP:function(){return d},IQ:function(){return f},Jh:function(){return m},qF:function(){return x}});var r=n(8683),a=n(5861),s=n(7757),c=n.n(s),i=n(4569),o=n.n(i),u="https://api.themoviedb.org/3",l="df60f1682cfdb2a273d4df0e1e89ea6f",p={params:{api_key:l}},h=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"/configuration"),p);case 2:return t=e.sent,e.abrupt("return",t.data.images);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"/trending/movie/week"),p);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"/movie/").concat(t),p);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"/movie/").concat(t,"/credits"),p);case 2:return n=e.sent,e.abrupt("return",n.data.cast.map((function(e){return(0,r.Z)({},{original_name:e.original_name,character:e.character,popularity:e.popularity,profile_path:e.profile_path})})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"/movie/").concat(t,"/reviews"),p);case 2:return n=e.sent,e.abrupt("return",n.data.results.map((function(e){return(0,r.Z)({},{author:e.author,content:e.content})})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"/search/movie"),{params:{api_key:l,query:t}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2450:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(5861),a=n(5671),s=n(3144),c=n(136),i=n(5716),o=n(7757),u=n.n(o),l=n(2791),p=n(5986),h=n(1523),v=n(9271),d=n(184),f=function(e){(0,c.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={casts:[]},e}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t1="",e.next=3,(0,p.al)();case 3:return e.t2=e.sent.base_url,e.t0=e.t1.concat.call(e.t1,e.t2),e.next=7,(0,p.al)();case 7:return e.t3=e.sent.profile_sizes.find((function(e){return"w185"===e})),t=e.t0.concat.call(e.t0,e.t3),e.next=11,(0,p.IQ)(this.props.match.params.movieId);case 11:(n=e.sent).map((function(e){return e.profile_path="".concat(t).concat(e.profile_path)})),this.setState({casts:n.filter((function(e){return e.popularity>7}))});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{children:"Cast"}),(0,d.jsx)("ul",{className:"castList",children:this.state.casts.map((function(e,t){return(0,d.jsx)("li",{className:"castItem",children:(0,d.jsxs)("div",{className:"castBox",children:[(0,d.jsx)("img",{src:e.profile_path,alt:"".concat(e.original_name)}),(0,d.jsxs)("h4",{children:["Name: ",e.original_name]}),(0,d.jsxs)("p",{children:["Character: ",e.character]})]})},t)}))})]})}}]),n}(l.Component),m=f,x=function(e){(0,c.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={reviews:[]},e}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.Jh)(this.props.match.params.movieId);case 2:t=e.sent,this.setState({reviews:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return(0,d.jsxs)("div",{className:"reviewBlock",children:[(0,d.jsx)("h2",{children:"Reviews"}),this.state.reviews.length>0?(0,d.jsx)("ul",{className:"reviewList",children:this.state.reviews.map((function(e,t){return(0,d.jsx)("li",{className:"reviewItem",children:(0,d.jsxs)("div",{className:"reviewInfo",children:[(0,d.jsxs)("h4",{children:["Author: ",e.author]}),(0,d.jsxs)("p",{className:"reviewText",children:["Review: ",e.content]})]})},t)}))}):(0,d.jsx)("p",{children:"There is no reviews yet."})]})}}]),n}(l.Component),w=x,j=function(e){(0,c.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={title:"",poster_path:"",release_date:"",genres:[],overview:""},e.componentDidMount=(0,r.Z)(u().mark((function t(){var n,r,a,s,c,i,o,l;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.al)();case 2:return n=t.sent,r="".concat(n.base_url).concat(n.poster_sizes.find((function(e){return"w342"===e}))),t.next=6,(0,p.TP)(e.props.match.params.movieId);case 6:a=t.sent,s=a.title,c=a.poster_path,i=a.release_date,o=a.genres,l=a.overview,e.setState({title:s,poster_path:"".concat(r).concat(c),release_date:i,genres:o,overview:l});case 13:case"end":return t.stop()}}),t)}))),e.goBachHandler=function(){var t,n=e.props,r=n.history,a=n.location;r.push((null===a||void 0===a||null===(t=a.state)||void 0===t?void 0:t.from)||"/")},e}return(0,s.Z)(n,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.poster_path,r=e.release_date,a=e.genres,s=e.overview,c=this.props,i=c.match,o=c.location;return(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("button",{type:"button",onClick:this.goBachHandler,children:"\u21da Go back"}),(0,d.jsx)("h1",{className:"movieTitle",children:t}),(0,d.jsxs)("div",{className:"movieThumb",children:[(0,d.jsx)("img",{className:"movieImage",src:n,alt:"Poster: ".concat(t)}),(0,d.jsxs)("div",{className:"movieDescription",children:[(0,d.jsxs)("p",{children:["Release date: ",r]}),(0,d.jsx)("h3",{children:"Genres:"}),(0,d.jsx)("ul",{children:a.map((function(e){var t=e.id,n=e.name;return(0,d.jsx)("li",{children:n},t)}))}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{className:"movieOverview",children:s}),(0,d.jsx)("h3",{children:"Additional info"}),(0,d.jsxs)("ul",{className:"movieAdditionalList",children:[(0,d.jsx)("li",{children:(0,d.jsx)(h.OL,{to:{pathname:"".concat(i.url,"/cast"),state:{from:o.state.from}},className:"movieAdditional",activeClassName:"movieAdditionalActive",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(h.OL,{to:{pathname:"".concat(i.url,"/reviews"),state:{from:o.state.from}},className:"movieAdditional",activeClassName:"movieAdditionalActive",children:"Reviews"})})]})]})]}),(0,d.jsxs)("div",{className:"castAndReviews",children:[(0,d.jsx)(v.AW,{path:"".concat(i.path,"/cast"),component:m}),(0,d.jsx)(v.AW,{path:"".concat(i.path,"/reviews"),component:w})]})]})}}]),n}(l.Component),g=j}}]);
//# sourceMappingURL=movie-details-page.b3352dc7.chunk.js.map