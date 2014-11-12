// tracker/app/controllers/application.js

import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		clearAll: function () {
			console.log('Clearing all fields.');
		}
	}
});