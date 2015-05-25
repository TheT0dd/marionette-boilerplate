define(["app","backbone.picky"],function(e){e.module("Entities",function(e,i,n,t,r,a){e.SidebarItem=n.Model.extend({}),a.extend(e.SidebarItem.prototype,{initialize:function(e,i){var t=new n.Picky.Selectable(this);a.extend(this,t)}}),e.SidebarCollection=n.Collection.extend({model:e.SidebarItem,initialize:function(e,i){var t=new n.Picky.SingleSelect(this);a.extend(this,t)}});var o={admin:function(){e.adminSidebarItems=new e.SidebarCollection([{name:"Sidebar El 1",iconClass:"glyphicon glyphicon-stats",navigation:{trigger:"some:trigger"}},{name:"Sidebar El 2",iconClass:"glyphicon glyphicon-stats",navigation:{trigger:"some:other:trigger"}},{name:"Sidebar El 3",iconClass:"icomoon icomoon-quill4",navigation:{trigger:"yet:another:trigger"}}])},user:function(){e.userSidebarItems=new e.SidebarCollection([{name:"Sidebar El 1",iconClass:"glyphicon glyphicon-stats",navigation:{trigger:"some:trigger"}},{name:"Sidebar El 2",iconClass:"glyphicon glyphicon-stats",navigation:{trigger:"some:other:trigger"}},{name:"Sidebar El 3",iconClass:"icomoon icomoon-quill4",navigation:{trigger:"yet:another:trigger"}}])}},s={getAdminSidebarElements:function(){return void 0===e.adminSidebarItems&&o.admin(),e.adminSidebarItems},getUserSidebarElements:function(){return void 0===e.userSidebarItems&&o.client(),e.userSidebarItems}};i.reqres.setHandler("sidebar:entities",function(e){return"admin"===e?s.getAdminSidebarElements():"user"===e?s.getUserSidebarElements():void 0})})});