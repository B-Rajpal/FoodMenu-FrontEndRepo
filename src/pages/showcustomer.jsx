
import axios from "axios";
import React, { Component } from "react";
import "./show.css";
class ShowCustomer extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/showCustomer')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
          <th>city</th>
          <th>Phone</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.city}</td>
            <td>{user.phone}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default ShowCustomer;