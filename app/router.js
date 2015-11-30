import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('toggl-summary');
  this.route('settings');
  this.route('home', { path: '/' });
});

export default Router;