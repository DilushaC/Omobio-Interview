import React, { Component } from "react";

class LoginComponent extends Component {

  render() {
      
    return (
      <div className="login">
        <form onSubmit={this.props.onSubmit}>
          <label>User Name : </label>
          <input name="username" type="text" onChange={this.props.handleChange('username')}/>
          <br />

          <label>Password : </label>
          <input name="password" type="password" onChange={this.props.handleChange('password')}/>
          <br/>

          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
