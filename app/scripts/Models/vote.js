import Backbone from 'backbone';
import config from '../config';

export default Backbone.Model.extend({
rootUrl: 'https://api.backendless.com/v1/data/artists',
  idAttribute: 'objectId',
    votes: 0

});
