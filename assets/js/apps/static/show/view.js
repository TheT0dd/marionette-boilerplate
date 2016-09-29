var Marionette = require('backbone.marionette');
var aboutTpl = require('apps/static/show/templates/about');
var faqTpl = require('apps/static/show/templates/faq');
var termsTpl = require('apps/static/show/templates/terms');


var View = {};

View.StaticView = Marionette.View.extend({
	className: 'container-fluid max-width-xs static-section',
	tagName: 'section',

	getTemplate: function() {
		var view = this.getOption('view');
		switch (view) {
			case 'about' : return aboutTpl;
			case 'faq'   : return faqTpl;
			case 'terms' : return termsTpl;
			default: break;
		}
	},

	ui: {
		internalLink: '[data-target]'
	},

	events: {
		'click @ui.internalLink': 'scrollToTarget'
	},

	scrollToTarget: function(e) {
		var selector = $(e.currentTarget).attr('data-target');
		$('html, body').animate({
			scrollTop: $(selector).offset().top - $('#header-section .navbar').outerHeight() - 10
		}, 500);
	}
});


module.exports = View;
