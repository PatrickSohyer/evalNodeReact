import React, { Component } from "react";
import openSocket from "socket.io-client";
import { Navbar } from "./components/Navbar";
import { Home } from "./routes";
import "./App.css";

var socket = openSocket("http://localhost:5000");

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          formation: [],
          listFormations: [],
          titre: '',
          famille: ''
        };
  }

  componentDidMount() {
      socket.emit("requestFormations");
      socket.on('responseFormations', data => {
        this.setState({
            formation: data
          });
      });
    }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Home {...this.state} />
      </div>
    );
  }
}

export default App;
