import {hashHistory} from 'react-router';
import Backbone from 'backbone';
import $ from 'jquery';
import config from '../config';

export default Backbone.Model.extend({

  initialize() {
         if (window.localStorage.getItem('user-token')) {
             this.set('user-token', window.localStorage.getItem('user-token'));
         }
},
  idAttribute: 'objectId',
  defaults: {
    userName:'',
    email:'',
    'user-token' : ''

  },

  validatePassword(password,confirmPassword){
    if(password === confirmPassword)return true;
    return false;
  },


  register(userName, email, password){
    $.ajax({
      type: 'POST',
      headers: {
        'application-id': config.appId,
        'secret-key': config.secretKey,
        'application-type': 'REST'
      },
      url: 'https://api.backendless.com/v1/users/register',
      contentType: 'application/json',
      data: JSON.stringify({userName, email, password}),
      success: () => {
        this.login(userName, password);
      }
    });
  },


  login(userName, password){
    $.ajax({
      type:'POST',
      headers: {
        'application-id': config.appId,
        'secret-key': config.secretKey,
        'application-type': 'REST'
      },
      url:'https://api.backendless.com/v1/users/login',
      contentType:'application/json',
      data:JSON.stringify({login: userName , password}),
      success:(response)=>{
        this.set(response);
        window.localStorage.setItem('user-token',response['user-token']);
        window.localStorage.setItem('userName',response['userName']);
        hashHistory.push('/search');
      }
    });
  },

  logout(){
    $.ajax({
      headers: {
        'application-id': config.appId,
        'secret-key': config.secretKey,
        'application-type': 'REST'
      },
      contentType:'application/json',
      url:'https://api.backendless.com/v1/users/logout',
      success:()=>{
        this.clear();
        window.localStorage.clear();
        hashHistory.push('/');
      }
    })
  }
});
