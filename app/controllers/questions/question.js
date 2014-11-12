// tracker/app/controllers/questions/question.js

import Ember from 'ember';

export default Ember.ObjectController.extend({
	question1: false,

	actions: {
		next: function (question) {
			var curId = this.get('model.id');
			console.log('Next ID: ' + (parseInt(curId) + 1));
			this.transitionToRoute('questions.question', (parseInt(curId) + 1));
		}
	}
});
