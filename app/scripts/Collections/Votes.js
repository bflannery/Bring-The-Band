import Backbone from 'backbone';
import $ from 'jquery';
import vote from '../Models/vote';
import config from '../config';


export default Backbone.Collection.extend ({
model: vote,
url: 'https://api.backendless.com/v1/data/artists',
parse(data) {
  return data.data
},
  });
