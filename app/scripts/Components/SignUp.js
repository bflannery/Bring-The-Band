import React from 'react';
import {Link} from 'react-router';
import store from '../store';


export default React.createClass({

  render(){

    return (
      <div className="register-page">
        <form onSubmit={this.handleSubmit} className="signup-form-container">
          <input className="signup-container" ref="userName" type="text" placeholder="Username"/>
          <input className="signup-container" ref="email" type="email" placeholder="Email"/>
          <input className="signup-container" ref="password" type="password" placeholder="Password"/>
          <input className="signup-container"  ref="confirmPassword" type="password" placeholder="Confrim Password"/>
          <input  type="submit" value="submit"/>
          <span className="login-link">Already a Member? <Link to="/">Login Here!</Link></span>
        </form>

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
