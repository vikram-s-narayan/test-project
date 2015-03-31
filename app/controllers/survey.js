import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    addName: function(newName){
     var name = this.store.createRecord('survey',{
       name: newName
     });
     this.set('newName', '');
     name.save();

    }
  }
});
