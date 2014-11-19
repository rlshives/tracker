import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		//var id = params.question_id < 52 ? params.question_id : 1;
		return this.store.find('question', params.question_id);
	},
	setupController: function (controller, question) {
		controller.set('model', question);
	}
});
