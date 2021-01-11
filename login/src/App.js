import React, { Component } from "react";
import LoginComponent from "./components/login-ui";
import TableComponent from "./components/table-ui";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {

      loggedIn: false,
      username: "",
      password: "",
      userList: [],

    };
  }

  handleChange = (input) => (e) => {

    this.setState({
      [input]: e.target.value,

    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.username === "" || this.state.password === "") {

      window.alert("Please fill the fields !!!");

    } else {
      let formData = new FormData();
      formData.append("username", this.state.username);
      axios

        .post("http://localhost:80/bizlogic/login.php", formData)
        .then((res) => {

          if (res.data[0].password != this.state.password) {

            window.alert("Username or password is wrong !");

          } else {
            this.setState({
              loggedIn: true,
              password: res.data[0].password
            })
          }
        })
        .catch((err) => console.log(err));
    }
    
  };

  getUsername() {
    return this.state.username;
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? (

          <TableComponent getUsername={this.state.username}/>

        ) : (

          <LoginComponent
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
            
          />
        )}
      </div>
    );
  }
}

export default App;
