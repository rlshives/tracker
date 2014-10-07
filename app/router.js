// tracker/router.js

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('questions', function () {
  	this.route('question', {path: ':question_id'});
  });
});

export default Router;
