import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'ram'
    },
    {
      id: 2,
      name: 'rahim'
    }
    ]
    });
