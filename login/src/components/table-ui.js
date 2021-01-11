import axios from "axios";
import React, { Component } from "react";

class TableComponent extends Component {
  constructor() {
    super();
    this.state = {

      userlist: "",
      
    };
  }

  componentDidMount() {
    let formData = new FormData();
    formData.append("username", this.props.getUsername);
    axios
      .post("http://localhost:80/bizlogic/index.php", formData)
      .then((res) => {
        this.setState({
          userlist: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  data = {}

  render() {
    return (
      <div>
        <table>
          <thead>

            <th>ID</th>
            <th>User-Name</th>
            <th>Password</th>
            <th>Email</th>

          </thead>
          <tbody>
            {[...this.state.userlist].map((user,index)=>{

              return <tr key={index}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>

              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;
