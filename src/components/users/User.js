import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: ""

      }
    }
    // console.log(this.state);
  }

  componentWillMount() {
    // console.log("Into WillmOunt");
  }

  componentDidMount() {
    const { id } = this.props.match.params
    // const {
    //     match: {
    //         params: {
    //             idd = null
    //         } = {}
    //     } = {}
    // } = this.props;
    this.loadUser(id);
  }

  loadUser = async (id) => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    // console.log({res: res.data});
    // console.log(res.data);
    this.setState({
      users: res.data
    });
    //  console.log(this.state);
  };
  render() {
    const {
      users: {
        id = null,
        name = null,
        username = null,
        email = null,
        phone = null,
        website = null,

      } = {}
    } = this.state;
    // console.log(this.users);
    return (
      <div className="container py-4">
        <Link className="btn btn-primary" to="/">
          back to Home
            </Link>
        <h1 className="display-4">User Id: {id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item active ">name: {name}</li>
          <li className="list-group-item">user name: {username}</li>
          <li className="list-group-item">email: {email}</li>
          <li className="list-group-item">phone: {phone}</li>
          <li className="list-group-item">website: {website}</li>
        </ul>
      </div>

    )

  }
}




export default User;
