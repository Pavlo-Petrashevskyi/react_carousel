(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(7),i=n.n(a),r=n(2),l=n(3),s=n(5),o=n(4),c=n(1),u=n.n(c),m=(n(12),n(13),n(0)),p=function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(t=e.call.apply(e,[this].concat(i))).calculateButtonSteps=function(e){var n=t.props,a=n.images,i=n.frameSize,r=n.step,l=n.itemWidth,s=n.infinite,o=document.querySelector(".Carousel__list");if(null!=o){var c=l*i-a.length*l,u=getComputedStyle(o),m=new WebKitCSSMatrix(u.transform),p=Math.ceil(m.m41/l)*l;if("prevButton"===e&&p>=c){var f;if(null===(f=document.querySelector(".button--next"))||void 0===f||f.removeAttribute("disabled"),p>=-l*r){var d;if(o.style.transform="translateX(0px)",!s)null===(d=document.querySelector(".button--prev"))||void 0===d||d.setAttribute("disabled","true");return void(s&&0===p&&(o.style.transform="translateX(".concat(c,"px)")))}o.style.transform="translateX(".concat(p+l*r,"px)")}if("nextButton"===e&&c<=p){var b;if(null===(b=document.querySelector(".button--prev"))||void 0===b||b.removeAttribute("disabled"),p<=c+l*r){var h;if(o.style.transform="translateX(".concat(c,"px)"),!s)null===(h=document.querySelector(".button--next"))||void 0===h||h.setAttribute("disabled","true");return void(s&&c===p&&(o.style.transform="translateX(0px)"))}o.style.transform="translateX(".concat(p-l*r,"px)")}}},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(){var t=this.props,e=t.images,n=t.itemWidth,a=t.frameSize,i=t.animationDuration,r=document.querySelector(".Carousel__list"),l=document.querySelector(".Carousel__list--container");e.map((function(t){var a=Array.from(document.querySelectorAll("img"))[e.indexOf(t)];return a.style.height="".concat(n,"px"),a.style.width="".concat(n,"px"),null})),r.style.transition="all ".concat(i,"ms"),l.style.width="".concat(n*a,"px")}},{key:"render",value:function(){var t=this,e=this.props.images;return Object(m.jsxs)("div",{className:"Carousel",children:[Object(m.jsx)("div",{className:"Carousel__list--container",children:Object(m.jsx)("ul",{className:"Carousel__list",children:e.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsx)("img",{src:t,alt:"".concat(e.indexOf(t))})},e.indexOf(t))}))})}),Object(m.jsx)("button",{type:"button",className:"button button--prev",onClick:function(){t.calculateButtonSteps("prevButton")},children:"Prev"}),Object(m.jsx)("button",{type:"button",className:"button button--next","data-cy":"next",onClick:function(){t.calculateButtonSteps("nextButton")},children:"Next"})]})}}]),n}(c.PureComponent),f=p,d=function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,a=e.step,i=e.frameSize,r=e.itemWidth,l=e.animationDuration,s=e.infinite;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{"data-cy":"title",className:"App__title",children:"Carousel with ".concat(n.length," images")}),Object(m.jsx)(f,{images:n,step:a,frameSize:i,itemWidth:r,animationDuration:l,infinite:s}),Object(m.jsxs)("form",{className:"App__form",method:"get",children:[Object(m.jsxs)("label",{htmlFor:"itemWidth",className:"App__form-label",children:["Item width:",Object(m.jsx)("input",{type:"number",id:"itemWidth",name:"itemWidth",className:"App__form-item-input input",defaultValue:"130",min:"0",onChange:function(e){t.setState({itemWidth:+e.target.value})}})]}),Object(m.jsxs)("label",{htmlFor:"frameSize",className:"App__form-label",children:["Frame Size:",Object(m.jsx)("input",{type:"number",id:"frameSize",name:"frameSize",className:"App__form-frame-input input",defaultValue:"3",min:"1",max:"10",onChange:function(e){t.setState({frameSize:+e.target.value})}})]}),Object(m.jsxs)("label",{htmlFor:"step",className:"App__form-label",children:["Step:",Object(m.jsx)("input",{type:"number",id:"step",name:"step",className:"App__form-step-input input",defaultValue:"3",min:"1",max:"7",onChange:function(e){t.setState({step:+e.target.value})}})]}),Object(m.jsxs)("label",{htmlFor:"animationDuration",className:"App__form-label",children:["Animation duration:",Object(m.jsx)("input",{type:"number",id:"animationDuration",name:"animationDuration",className:"App__form-animation-input input",defaultValue:"1000",onChange:function(e){t.setState({animationDuration:+e.target.value})}})]}),Object(m.jsxs)("label",{htmlFor:"infinite",className:"App__form-label",children:["infinite:",Object(m.jsx)("input",{type:"checkbox",id:"infinite",name:"infinite",className:"App__form-infinite-input input",defaultValue:"false",onChange:function(){return s?t.setState({infinite:!1}):t.setState({infinite:!0})}})]})]})]})}}]),n}(u.a.Component),b=d;i.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5611406c.chunk.js.map