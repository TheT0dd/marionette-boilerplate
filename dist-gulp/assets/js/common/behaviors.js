define(["marionette"],function(e){var i={};return i.Confirmable=e.Behavior.extend({defaults:{message:"Are you sure?"},events:{"click .js-confirm":"confirm"},confirm:function(e){e.preventDefault(),e.stopPropagation();var i=this.options.message;"function"==typeof this.options.message&&(i=this.options.message(this.view)),confirm(i)&&this.view.trigger(this.options.event,this.view.model)}}),i});