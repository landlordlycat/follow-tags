module.exports=function(t){var o={};function n(s){if(o[s])return o[s].exports;var r=o[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=o,n.d=function(t,o,s){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)n.d(s,r,function(o){return t[o]}.bind(null,r));return s},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=20)}([function(t,o){t.exports=flarum.core.compat.extend},function(t,o,n){"use strict";var s;o.a=function(t){return s||(s=["none","tags"].reduce((function(o,n){return o[n]=app.translator.trans("fof-follow-tags."+t+".following_"+n+"_label"),o}),{}))}},function(t,o){t.exports=flarum.core.compat["components/Notification"]},function(t,o,n){"use strict";n.d(o,"a",(function(){return s}));var s={followingPageOptions:n(1).a}},function(t,o){t.exports=flarum.core.compat["helpers/icon"]},function(t,o){t.exports=flarum.core.compat["components/IndexPage"]},function(t,o){t.exports=flarum.core.compat["components/Dropdown"]},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat.Component},,function(t,o){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,o){t.exports=flarum.core.compat.Model},function(t,o){t.exports=flarum.core.compat["utils/extractText"]},function(t,o){t.exports=flarum.core.compat["utils/Stream"]},function(t,o){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,o){t.exports=flarum.core.compat["models/Discussion"]},function(t,o){t.exports=flarum.core.compat["components/Badge"]},function(t,o){t.exports=flarum.core.compat["components/SettingsPage"]},function(t,o){t.exports=flarum.core.compat["components/FieldSet"]},function(t,o){t.exports=flarum.core.compat["components/Select"]},function(t,o,n){"use strict";n.r(o),n.d(o,"components",(function(){return Z})),n.d(o,"utils",(function(){return ot}));var s=n(0),r=n(10),e=n.n(r),a=n(11),i=n.n(a),l=n(5),u=n.n(l);function c(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}var f=n(6),p=n.n(f),g=n(7),d=n.n(g),b=n(4),w=n.n(b),h=n(12),_=n.n(h),y=n(13),v=n.n(y);function x(){return(x=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}var T,S,N=n(8),j=n.n(N),D=function(t){function o(){return t.apply(this,arguments)||this}return c(o,t),o.prototype.view=function(){var t={onclick:this.attrs.onclick,disabled:this.attrs.disabled};return m("button",x({className:"SubscriptionMenuItem hasIcon "+(this.attrs.disabled&&"disabled")},t),this.attrs.active?w()("fas fa-check",{className:"Button-icon"}):"",m("span",{className:"SubscriptionMenuItem-label"},w()(this.attrs.icon,{className:"Button-icon"}),m("strong",null,this.attrs.label),m("span",{className:"SubscriptionMenuItem-description"},this.attrs.description)))},o}(j.a),P=((T={})[!1]="fas fa-star",T.follow="fas fa-star",T.lurk="fas fa-comments",T.ignore="fas fa-bell-slash",T.hide="fas fa-eye-slash",T),O=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var n=o.prototype;return n.oninit=function(o){t.prototype.oninit.call(this,o),this.loading=v()(!1),this.options=[{subscription:!1,icon:P[!1],label:app.translator.trans("fof-follow-tags.forum.sub_controls.not_following_button"),description:app.translator.trans("fof-follow-tags.forum.sub_controls.not_following_text")},{subscription:"follow",icon:P.follow,label:app.translator.trans("fof-follow-tags.forum.sub_controls.following_button"),description:app.translator.trans("fof-follow-tags.forum.sub_controls.following_text")},{subscription:"lurk",icon:P.lurk,label:app.translator.trans("fof-follow-tags.forum.sub_controls.lurking_button"),description:app.translator.trans("fof-follow-tags.forum.sub_controls.lurking_text")},{subscription:"ignore",icon:P.ignore,label:app.translator.trans("fof-follow-tags.forum.sub_controls.ignoring_button"),description:app.translator.trans("fof-follow-tags.forum.sub_controls.ignoring_text")},{subscription:"hide",icon:P.hide,label:app.translator.trans("fof-follow-tags.forum.sub_controls.hiding_button"),description:app.translator.trans("fof-follow-tags.forum.sub_controls.hiding_text")}]},n.view=function(){var t=this,o=this.attrs.model,n=o.subscription()||!1,s=app.translator.trans("fof-follow-tags.forum.sub_controls.follow_button"),r=P[n]||"far fa-star",e="SubscriptionMenu-button--"+n;if(["follow","lurk","ignore","hide"].includes(n)){var a=["ignore","hide"].includes(n)?n.slice(0,n.length-1):n;s=app.translator.trans("fof-follow-tags.forum.sub_controls."+a+"ing_button")}var i=app.session.user.preferences(),l=i.notify_newPostInTag_email,u=i.notify_newPostInTag_alert,c=_()(app.translator.trans(l?"fof-follow-tags.forum.sub_controls.notify_email_tooltip":"fof-follow-tags.forum.sub_controls.notify_alert_tooltip")),f={className:"Button SubscriptionMenu-button "+e,icon:r,onclick:this.saveSubscription.bind(this,o,!["follow","lurk","ignore","hide"].includes(n)&&"follow"),title:c,loading:this.loading()};return(l||u)&&!1===n?f.oncreate=function(t){return $(t.dom).tooltip({container:".SubscriptionMenu",placement:"bottom",delay:250,title:c})}:delete f.title,f.onupdate=f.oncreate,m("div",{className:"Dropdown ButtonGroup SubscriptionMenu App-primaryControl"},d.a.component(f,s),m("button",{className:"Dropdown-toggle Button Button--icon "+e,"data-toggle":"dropdown"},w()("fas fa-caret-down",{className:"Button-icon"})),m("ul",{className:"Dropdown-menu dropdown-menu Dropdown-menu--right"},this.options.map((function(s){return s.onclick=t.saveSubscription.bind(t,o,s.subscription),s.active=n===s.subscription,s.disabled="hide"===s.subscription&&o.isHidden(),m("li",null,D.component(s))}))))},n.saveSubscription=function(t,o){var n=this;this.loading(!0),app.request({url:app.forum.attribute("apiUrl")+"/tags/"+t.id()+"/subscription",method:"POST",body:{data:{subscription:o}}}).then((function(t){return app.store.pushPayload(t)})).then((function(){n.loading(!1),m.redraw()})),this.$(".SubscriptionMenu-button").tooltip("hide")},o}(p.a),k=n(14),I=n.n(k),M=function(){return m.route.get().includes(app.route("following"))},B=n(1),F=function(){return S||(S=Object(B.a)("forum.index.following")),S},C=function(){F();var t=app.data["fof-follow-tags.following_page_default"];if(S[t]||(t=null),app.session.user){var o=app.session.user.preferences().followTagsPageDefault;S[o]&&(t=o)}return t||"none"},q=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var n=o.prototype;return n.view=function(){var t=app.discussions.followTags,o=this.options();return p.a.component({buttonClassName:"Button",label:o[t]||getDefaultFollowingFiltering()},Object.keys(o).map((function(n){var s=n===t;return d.a.component({active:s,icon:!s||"fas fa-check",onclick:function(){app.discussions.followTags=n,app.discussions.refresh()}},o[n])})))},n.options=function(){return F()},o}(j.a),U=n(2),z=n.n(U),A=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var n=o.prototype;return n.icon=function(){return"fas fa-user-tag"},n.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t)},n.content=function(){return app.translator.trans("fof-follow-tags.forum.notifications.new_discussion_text",{user:this.attrs.notification.fromUser(),title:this.attrs.notification.subject().title()})},o}(z.a),G=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var n=o.prototype;return n.icon=function(){return P.lurk},n.href=function(){var t=this.attrs.notification,o=t.subject(),n=t.content()||{};return app.route.discussion(o,n.postNumber)},n.content=function(){return app.translator.trans("fof-follow-tags.forum.notifications.new_post_text",{user:this.attrs.notification.fromUser()})},o}(z.a),H=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var n=o.prototype;return n.icon=function(){return"fas fa-user-tag"},n.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t)},n.content=function(){return app.translator.trans("fof-follow-tags.forum.notifications.new_discussion_tag_text",{user:this.attrs.notification.fromUser(),title:this.attrs.notification.subject().title()})},o}(z.a),L=n(15),E=n.n(L),J=n(16),K=n.n(J);var Q=n(17),R=n.n(Q),V=n(18),W=n.n(V),X=n(19),Y=n.n(X),Z={FollowingPageFilterDropdown:q,NewDiscussionNotification:A,NewDiscussionTagNotification:H,NewPostNotification:G,SubscriptionMenu:O,SubscriptionMenuItem:D},tt=n(3),ot=x({options:S,getOptions:F,getDefaultFollowingFiltering:C,isFollowingPage:M},tt.a);app.initializers.add("fof/follow-tags",(function(){app.initializers.has("flarum-tags")?(app.store.models.tags.prototype.subscription=i.a.attribute("subscription"),Object(s.extend)(u.a.prototype,"sidebarItems",(function(t){if(this.currentTag()&&app.session.user){var o=this.currentTag();t.replace("newDiscussion",t.get("newDiscussion"),10),t.add("subscription",O.component({model:o,itemClassName:"App-primaryControl"}),5)}})),app.initializers.has("subscriptions")&&(Object(s.extend)(E.a.prototype,"badges",(function(t){if(M()){var o=this.tags().map((function(t){return t.subscription()})).filter((function(t){return["lurk","follow"].includes(t)})),n=o.includes("lurk")?"lurking":"following";o.length&&t.add("followTags",K.a.component({label:app.translator.trans("fof-follow-tags.forum.badge."+n+"_tag_tooltip"),icon:"fas fa-user-tag",type:n+"-tag"}))}})),Object(s.extend)(I.a.prototype,"requestParams",(function(t){if(M()&&app.session.user){this.followTags||(this.followTags=C());var o=t.filter.q||"",n=this.followTags;"following"===app.current.get("routeName")&&["tags","all"].includes(n)&&("tags"!==n&&"all"!==n||(o+=" is:following-tag"),"tags"===n&&(o=o.replace(" is:following","")),t.filter.q=o)}})),Object(s.extend)(u.a.prototype,"viewItems",(function(t){M()&&app.session.user&&t.add("follow-tags",m(q,null))})),Object(s.extend)(R.a.prototype,"settingsItems",(function(t){var o=this;t.add("fof-follow-tags",W.a.component({label:app.translator.trans("fof-follow-tags.forum.user.settings.heading"),className:"Settings-follow-tags"},[m("div",{className:"Form-group"},m("p",null,app.translator.trans("fof-follow-tags.forum.user.settings.filter_label")),Y.a.component({options:F(),value:this.user.preferences().followTagsPageDefault||C(),onchange:function(t){return o.preferenceSaver("followTagsPageDefault")(t)}}))]))}))),app.notificationComponents.newPostInTag=G,app.notificationComponents.newDiscussionInTag=A,app.notificationComponents.newDiscussionTag=H,Object(s.extend)(e.a.prototype,"notificationTypes",(function(t){t.add("newDiscussionInTag",{name:"newDiscussionInTag",icon:"fas fa-user-tag",label:app.translator.trans("fof-follow-tags.forum.settings.notify_new_discussion_label")}),t.add("newPostInTag",{name:"newPostInTag",icon:"fas fa-user-tag",label:app.translator.trans("fof-follow-tags.forum.settings.notify_new_post_label")}),t.add("newDiscussionTag",{name:"newDiscussionTag",icon:"fas fa-user-tag",label:app.translator.trans("fof-follow-tags.forum.settings.notify_new_discussion_tag_label")})}))):console.error("[fof/follow-tags] flarum/tags is not enabled")}),-1)}]);
//# sourceMappingURL=forum.js.map