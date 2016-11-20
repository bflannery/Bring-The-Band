import Backbone from 'backbone';
import config from '../config';

export default Backbone.Model.extend({

  idAttribute: 'id',
  defaults: {
    name: '',
    photo: '',
    votes: '',
  },
});
