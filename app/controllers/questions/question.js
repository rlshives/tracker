// tracker/app/controllers/questions/question.js

import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		next: function () {
			var curId = this.get('model.id');
			//var query = this.get(parseInt(curId) + 1);
			console.log('Next ID: ' + (parseInt(curId) + 1));
			this.transitionToRoute('questions.question', (parseInt(curId) + 1));
		}
	}
});
