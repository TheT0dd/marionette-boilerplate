define(["marionette","bootstrap"],function(e){return e.Region.Overlay=e.Region.extend({animateDuration:500,animateFrom:{left:"-100%"},animateTo:{left:"0"},_addOverlayMarkup:function(e){var i=e.$el,t=e.getOption("overlayTitle")||"";if(i.wrap('<div class="overlay"></div>'),e.getOption("overlayDisableHeader")!==!0){var a=[];a.push('<div class="overlay-header">','<button type="button" class="close" data-dismiss="overlay">','<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>',"</button>",'<h4 class="overlay-title">',t,"</h4>","</div>"),i.before(a.join(""))}},_gracefullyShow:function(){$("body").css("overflow","hidden"),this.$el.css(_.extend(this.animateFrom,{display:"block"})).animate(this.animateTo,this.animateDuration)},_gracefullyHide:function(){this.$el.animate(this.animateFrom,this.animateDuration,function(){this.empty(),this.$el.hide().empty(),$("body").css("overflow","auto")}.bind(this))},initOverlay:function(e){this._addOverlayMarkup(e),this.$el.find(".close").click(function(){this.$el.empty()}.bind(this))},onShow:function(e){this.initOverlay(e),this._gracefullyShow()},onEmpty:function(){this.$el.empty()},closeOverlay:function(){this.currentView&&this._gracefullyHide()}}),e.Region.Overlay});