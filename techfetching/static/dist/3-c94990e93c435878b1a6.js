webpackJsonp([3],{1084:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case E:return(0,g.default)({},e,{loading:!0});case v:return(0,g.default)({},e,{loading:!1,loaded:!0,data:t.result,error:null});case h:return(0,g.default)({},e,{loading:!1,loaded:!1,data:null,error:"string"==typeof t.error?t.error:"Error"});case b:return(0,g.default)({},e,{editing:(0,g.default)({},e.editing,(0,m.default)({},t.id,!0))});case w:return(0,g.default)({},e,{editing:(0,g.default)({},e.editing,(0,m.default)({},t.id,!1))});case y:return e;case C:var a=[].concat((0,c.default)(e.data));return a[t.result.id-1]=t.result,(0,g.default)({},e,{data:a,editing:(0,g.default)({},e.editing,(0,m.default)({},t.id,!1)),saveError:(0,g.default)({},e.saveError,(0,m.default)({},t.id,null))});case _:return"string"==typeof t.error?(0,g.default)({},e,{saveError:(0,g.default)({},e.saveError,(0,m.default)({},t.id,t.error))}):e;default:return e}}function n(e){return e.widgets&&e.widgets.loaded}function d(){return{types:[E,v,h],promise:function(e){return e.client.get("/widget/load/param1/param2")}}}function u(e){return{types:[y,C,_],id:e.id,promise:function(t){return t.client.post("/widget/update",e)}}}function o(e){return{type:b,id:e}}function i(e){return{type:w,id:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(247),c=r(s),f=a(246),m=r(f),p=a(2),g=r(p);t.default=l,t.isLoaded=n,t.load=d,t.save=u,t.editStart=o,t.editStop=i;var E="redux-example/widgets/LOAD",v="redux-example/widgets/LOAD_SUCCESS",h="redux-example/widgets/LOAD_FAIL",b="redux-example/widgets/EDIT_START",w="redux-example/widgets/EDIT_STOP",y="redux-example/widgets/SAVE",C="redux-example/widgets/SAVE_SUCCESS",_="redux-example/widgets/SAVE_FAIL",N={loaded:!1,editing:{},saveError:{}}},1085:function(e,t){e.exports={widgets:"_2Ob1oKk9VDybCCT9vePgw",refreshBtn:"_2dLMa5jmSZF10mlU7WRDeh",idCol:"_26SCl6RXT6BEiwoG0ot-D_",colorCol:"_3g0i5LfzP62sWwM0aSZ78k",sprocketsCol:"_2ymmxdYbcbV67bkd9vxX9o",ownerCol:"Mc4GrDZmGUfpCjdkJseLT",buttonCol:"_3afTKiWltR0AdHAmVeQGRO",saving:"_3Mz7T1mnCgbrpFaCURy6fQ"}},1167:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,n,d,u,o,i=a(120),s=r(i),c=a(165),f=r(c),m=a(30),p=r(m),g=a(3),E=r(g),v=a(31),h=r(v),b=a(4),w=r(b),y=a(5),C=r(y),_=a(2),N=r(_),S=a(0),k=r(S),x=a(1),O=r(x),R=a(20),T=a(71),j=a(1084),q=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(j),M=a(1168),P=r(M),A=function(e){var t=e.input,a=e.className,r=e.meta,l=r.touched,n=r.error;return k.default.createElement("div",null,k.default.createElement("input",(0,N.default)({type:"text",className:a},t)),n&&l&&k.default.createElement("div",{className:"text-danger"},n))};A.propTypes=T.fieldPropTypes;var F=function(e){var t=e.options,a=e.input,r=e.className,l=e.meta,n=l.touched,d=l.error;return k.default.createElement("div",null,k.default.createElement("select",(0,N.default)({className:r},a),t.map(function(e){return k.default.createElement("option",{value:e,key:e},e)})),d&&n&&k.default.createElement("div",{className:"text-danger"},d))};F.propTypes=T.fieldPropTypes;var L=(l=(0,T.reduxForm)({form:"widget",validate:P.default}),n=(0,R.connect)(function(e,t){return{saveError:e.widgets.saveError,values:(0,T.getFormValues)(t.form)(e)}},(0,N.default)({},q)),l(d=n((o=u=function(e){function t(){return(0,E.default)(this,t),(0,w.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,C.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){var e=this.props,t=e.editStop,r=e.form,l=e.handleSubmit,n=e.invalid,d=e.pristine,u=e.save,o=e.submitting,i=e.saveError[r],c=e.values,m=a(1085);return k.default.createElement("tr",{className:o?m.saving:""},k.default.createElement("td",{className:m.idCol},c.id,k.default.createElement(T.Field,{name:"id",type:"hidden",component:"input"})),k.default.createElement("td",{className:m.colorCol},k.default.createElement(T.Field,{name:"color",className:"form-control",component:F,options:M.colors})),k.default.createElement("td",{className:m.sprocketsCol},k.default.createElement(T.Field,{name:"sprocketCount",className:"form-control",component:A})),k.default.createElement("td",{className:m.ownerCol},k.default.createElement(T.Field,{name:"owner",className:"form-control",component:A})),k.default.createElement("td",{className:m.buttonCol},k.default.createElement("button",{className:"btn btn-default",onClick:function(){return t(r)},disabled:o},k.default.createElement("i",{className:"fa fa-ban"})," Cancel"),k.default.createElement("button",{className:"btn btn-success",onClick:l(function(){return u(c).catch(function(e){if("object"===(void 0===e?"undefined":(0,f.default)(e)))throw new T.SubmissionError(e);return s.default.reject(e)})}),disabled:d||n||o},k.default.createElement("i",{className:"fa "+(o?"fa-cog fa-spin":"fa-cloud")})," Save"),i&&k.default.createElement("div",{className:"text-danger"},i)))}}]),t}(S.Component),u.propTypes={editStop:O.default.func.isRequired,handleSubmit:O.default.func.isRequired,invalid:O.default.bool.isRequired,pristine:O.default.bool.isRequired,save:O.default.func.isRequired,submitting:O.default.bool.isRequired,saveError:O.default.objectOf(O.default.any).isRequired,form:O.default.string.isRequired,values:O.default.objectOf(O.default.any).isRequired},d=o))||d)||d);t.default=L,e.exports=t.default},1168:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.colors=void 0;var r=a(245),l=t.colors=["Blue","Fuchsia","Green","Orange","Red","Taupe"],n=(0,r.createValidator)({color:[r.required,(0,r.oneOf)(l)],sprocketCount:[r.required,r.integer],owner:[r.required,(0,r.maxLength)(30)]});t.default=n},423:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,n,d,u,o,i=a(30),s=r(i),c=a(3),f=r(c),m=a(31),p=r(m),g=a(4),E=r(g),v=a(5),h=r(v),b=a(0),w=r(b),y=a(1),C=r(y),_=a(72),N=r(_),S=a(242),k=a(20),x=a(1084),O=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(x),R=a(1167),T=r(R),j=O.isLoaded,q=O.load,M=(l=(0,S.provideHooks)({defer:function(e){var t=e.store,a=t.dispatch,r=t.getState;if((0,t.inject)({widgets:O.default}),!j(r()))return a(q()).catch(function(){return null})}}),n=(0,k.connect)(function(e){return{widgets:e.widgets.data,editing:e.widgets.editing,error:e.widgets.error,loading:e.widgets.loading}},O),l(d=n((o=u=function(e){function t(){return(0,f.default)(this,t),(0,E.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this,t=function(t){var a=e.props.editStart;return function(){return a(String(t.id))}},r=this.props,l=r.widgets,n=r.error,d=r.editing,u=r.loading,o=r.load,i=a(1085);return w.default.createElement("div",{className:i.widgets+" container"},w.default.createElement("h1",null,"Widgets",w.default.createElement("button",{className:i.refreshBtn+" btn btn-success",onClick:o},w.default.createElement("i",{className:"fa fa-refresh "+(u?" fa-spin":"")})," Reload Widgets")),w.default.createElement(N.default,{title:"Widgets"}),w.default.createElement("p",null,"If you hit 'Refresh' on your browser, the data loading will take place on the browser after the page is returned. If you navigated here from another page, the data was fetched from the client after the route transition. This uses the decorator method ",w.default.createElement("code",null,"@provideHooks")," with the ",w.default.createElement("code",null,"defer")," key. To block a route transition until some data is loaded, use the ",w.default.createElement("code",null,"fetch")," key. To always render before loading data, even on the server, use ",w.default.createElement("code",null,"componentWillMount"),"."),w.default.createElement("p",null,"This widgets are stored in your session, so feel free to edit it and refresh."),n&&w.default.createElement("div",{className:"alert alert-danger",role:"alert"},w.default.createElement("span",{className:"glyphicon glyphicon-exclamation-sign","aria-hidden":"true"})," ",n),l&&l.length&&w.default.createElement("table",{className:"table table-striped"},w.default.createElement("thead",null,w.default.createElement("tr",null,w.default.createElement("th",{className:i.idCol},"ID"),w.default.createElement("th",{className:i.colorCol},"Color"),w.default.createElement("th",{className:i.sprocketsCol},"Sprockets"),w.default.createElement("th",{className:i.ownerCol},"Owner"),w.default.createElement("th",{className:i.buttonCol}))),w.default.createElement("tbody",null,l.map(function(e){return d[e.id]?w.default.createElement(T.default,{form:String(e.id),key:String(e.id),initialValues:e}):w.default.createElement("tr",{key:e.id},w.default.createElement("td",{className:i.idCol},e.id),w.default.createElement("td",{className:i.colorCol},e.color),w.default.createElement("td",{className:i.sprocketsCol},e.sprocketCount),w.default.createElement("td",{className:i.ownerCol},e.owner),w.default.createElement("td",{className:i.buttonCol},w.default.createElement("button",{className:"btn btn-primary",onClick:t(e)},w.default.createElement("i",{className:"fa fa-pencil"})," Edit")))}))))}}]),t}(b.Component),u.propTypes={widgets:C.default.arrayOf(C.default.object),error:C.default.string,loading:C.default.bool,editing:C.default.objectOf(C.default.bool).isRequired,load:C.default.func.isRequired,editStart:C.default.func.isRequired},u.defaultProps={widgets:null,error:null,loading:!1},d=o))||d)||d);t.default=M,e.exports=t.default}});