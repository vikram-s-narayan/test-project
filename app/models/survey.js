import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  placeholder: DS.attr(),
  action: DS.attr(),
  cols: DS.attr(),
  rows: DS.attr(),
  optionsArray: DS.attr()

}).reopenClass({
  FIXTURES: [
  /*  {
      id: 1,
      name: 'ram'
    },
    {
      id: 2,
      name: 'rahim'
    },
    {
      id: 3,
      name: '<input type="text" placeholder="Name" value=newName action="addName">'
    },
*/
    {
      id: 4, type: 'text-input', name: 'dinki', placeholder: 'your name', value: 'newName', action: 'addName' },
    {
      id: 5, type: 'radio-question',
      optionsArray: [{
          name: 'gender',
          value: 'female',
          htmlText: 'female'
        },
          {
          name: 'gender',
          value: 'male',
          htmlText: 'male'
        }

      ]
      },
    {
      id: 6, type: 'textarea-question', placeholder: 'your name', value: 'newName', action: 'addName',
      cols: "80",
      rows: "16"
      }

    ]
  });
