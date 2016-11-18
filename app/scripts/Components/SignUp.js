import React from 'react';
import {Link} from 'react-router';
import store from '../store';

export default React.createClass({
  getInitialState(){
    return {
      session: store.session.toJSON()
    }
  },
  componentWillMount(){
      store.session.on('change', ( )=> {
      this.setState({session: store.session.toJSON()})
    });
  },
  render(){
    console.log(this.props);
    return (
      <div>
        <form className="signup-form">
          <input className="userName" type="text" placeholder="Username"/>
          <input className="email" type="email" placeholder="Email"/>
          <input className="password" type="password" placeholder="Password"/>
          <input className="confirmPassword" type="password" placeholder="Confrim Password"/>
          <input onClick={this.handleSubmit} type="submit" value="submit"/>
        </form>
        Already a Member? <Link to="/">Login Here!</Link>
      </div>
    );
  },

  handleSubmit(e){
    e.preventDefault();
        const userName=document.querySelector('.userName').value;
        const email=document.querySelector('.email').value;
        const password=document.querySelector('.password').value;
        const confirmPassword=document.querySelector('.confirmPassword').value;

        if(store.session.validatePassword(password,confirmPassword)){
          store.session.register(userName,email,password);
        }else{
          console.log('Passwords Do Not Match');
        }
}
});
