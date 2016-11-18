import {hashHistory} from 'react-router';
import Backbone from 'backbone';
import $ from 'jquery';

export default Backbone.Model.extend({


  idAttribute: 'id',
    defaults: {
    artist: ''

  },

});
