import App from 'app';
import Backbone from 'backbone';
import HeaderApp from 'apps/header/header_app';
import SplashApp from 'apps/splash/splash_app';
import TestApp from 'apps/test/test_app';
import UsersApp from 'apps/users/users_app';
import StaticApp from 'apps/static/static_app';
import LoaderApp from 'apps/loader/loader_app';
import Notify from 'common/notify';
import Media from 'common/media';
import User from 'data/user';
import AjaxUtility from 'common/ajax.utility';
import Environment from 'common/environment';
import Settings from 'settings';
import nls from 'nls/nls';
import attachFastClick from 'fastclick';

import 'rAF-polyfill';
import 'date-polyfill';
import 'storage-polyfill';
import 'trim-polyfill';
import 'JSON2';
import 'bootstrap';

import Radio from 'backbone.radio';
const GC = Radio.channel('global');


// Attach fast click (removes 300ms delay between touchend and mouse click events)
attachFastClick.attach(document.body);

// Before start tasks
App.on('before:start', options => {
	// Enable CORS for xhr requests
	if (Settings.EnableCORS) {
		AjaxUtility.enableCORS();
	}
	// Set app locale
	GC.request('nls:set:locale');
	console.info('App: pre-start tasks complete.');
});

// Core init routine -> will result in the triggering of a route
App.on('start', options => {
	if (!Backbone.history) {
		return;
	}

	GC.request('loggedUser:entity').done(user => {
		// User was found
		if (user) {
			App.initForMember(user);
		}
		// User is a guest
		else {
			App.initForGuest();
		}
	}).fail(() => {
		App.initForGuest();
	}).always(() => {
		// Manually start header app
		GC.trigger('header:render');
		console.info('App: post-start tasks complete.');
	});
});

// Don't start app if running as mobile app (i.e. over cordova)
if (!Environment.isMobileApp()) {
	App.start();
	console.info('App Started.');
}
