import Mn from 'backbone.marionette';
import jqueryUi from 'jquery-ui-core'; // should include widgets/sortable.js

export default Mn.Behavior.extend({

	defaults: {
		placeholder: 'sortable-placeholder',
		axis: 'y'
	},

	events: {
		'sortupdate': 'onSortUpdate'
	},

	onSortUpdate: function(e, ui) {
		var $childElement = ui.item;
		var newIndex = $childElement.parent().children().index($childElement);
		var collection = this.view.collection;
		var model = collection.get($childElement.attr('data-model-cid'));
		// do not use silent to notify other obversers.
		collection.remove(model);
		collection.add(model, {at: newIndex});
	},

	onRender: function() {
		var options = _.clone(this.options);
		delete options.behaviorClass;
		delete options.html5sortable;
		console.log(options);
		this.getChildViewContainer().sortable(options); // options are passed to the sortable
	},

	onAddChild: function(view) {
		view.$el.attr('data-model-cid', view.model.cid);
		if (this.options.html5sortable) {
			this.getChildViewContainer().sortable('reload');
		}
	},

	getChildViewContainer: function() {
		if (typeof this.view.getChildViewContainer === 'function') {
			// CompositeView
			return this.view.getChildViewContainer(this.view);
		} else if (typeof this.view.getItemViewContainer === 'function') {
			// CompositeView for Mn 1.x
			return this.view.getItemViewContainer(this.view);
		} else {
			// CollectionView
			return this.$el;
		}
	}

});
