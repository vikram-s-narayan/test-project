import Ember from 'ember';
//var Handlebars = Ember.Handlebars;

export default Ember.Route.extend({
  model: function(){

    return this.store.find('survey');
  }

}
);
