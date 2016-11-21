import React from 'react';
import {Link} from 'react-router';
import store from '../store';


export default React.createClass({

  render(){

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="signup-form">
          <input className="userName" ref="userName" type="text" placeholder="Username"/>
          <input className="email" ref="email" type="email" placeholder="Email"/>
          <input className="password" ref="password" type="password" placeholder="Password"/>
          <input className="confirmPassword"  ref="confirmPassword" type="password" placeholder="Confrim Password"/>
          <input  type="submit" value="submit"/>
        </form>
        Already a Member? <Link to="/">Login Here!</Link>
      </div>
    );
  },

  handleSubmit(e){
    e.preventDefault();
        const userName= this.refs.userName.value;
        const email= this.refs.email.value;
        const password= this.refs.password.value;
        const confirmPassword= this.refs.confirmPassword.value;

        if(store.session.validatePassword(password,confirmPassword)){
          store.session.register(userName,email,password);
        }else{
          console.log('Passwords Do Not Match');
        }
}
});
