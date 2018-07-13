import React, { Component } from "react";
import {client} from "../utils/axiosconfig";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, username:""};
    this.onChange = this.onChange.bind(this);
    this.login= this.login.bind(this);
  }

  onChange(e){
    this.setState({username: e.target.value})
  }

  login(e){
    client.get("/login/" + this.state.username)
      .then(console.log);
  }

  signup(e){
    client.get("/signup/" + this.state.username)
      .then(console.log);
  }

  render() {
    return <div>
      enter your username:
      <input type="text" value={this.state.username} onChange={this.onChange}/>
      <button onClick={this.login}>login</button>
      <button onClick={this.signup}>signup</button>
    </div> 
  }
}

export default Login;
