// tracker/app/controllers/questions/question.js

import Ember from 'ember';

export default Ember.ObjectController.extend({
	question1: function () {
    if (parseInt(this.get('model.id')) === 1) {
      console.log('question1: true');
      return true;
    }
    else {
      console.log('question1: false');
      return false;
    }
  },
  actions: {
		next: function (question) {
      var nextId = parseInt(this.get('model.id')) + 1;
      if (nextId >= 52)
      {
        nextId = 1;
      }
			console.log('Next ID: ' + nextId);
			this.transitionToRoute('questions.question', nextId);
		}
	}
});
