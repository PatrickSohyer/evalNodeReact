import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import { Navbar } from './components/Navbar';
import { Home } from './routes';
import './App.css';

var socket = openSocket("http://localhost:5000");

class App extends Component {
  constructor() {
    super();
    this.state = {
      formation_data: []
    };
  }

  getData = formation => {    this.setState({ formation_data: formation });
  };

  componentDidMount() {
    socket.emit('request_formations');
    socket.on("response_formations", this.getData);
  }

  getFormationData() {
    return this.state.formation_data.map((formation, index) => {
      console.log(formation.formation[index]);
      return (
        <p key={index}>blabla</p>
      )
    })
  }
  
//   constructor() {
//     super();
//     this.state = {
//         formation: [],
//         listFormations: [],
//         titre: '',
//         famille: ''
//       };
// }

// componentDidMount() {
//     socket.emit("request_formations");
//     socket.on('response_formations', data => {
//       this.setState({ 
//         formation: data,
//           titre: data[0].formation[0].titre,
//           famille : data[0].formation[0].famille,
//           ssfamille : data[0].formation[0].ssfamille,
//           duree: data[0].formation[0].duree,
//           prix: data[0].formation[0].prix,
//           nom: data[0].formation[0].nom
//         });
//     });
//   }  

  render() {
    return (
      <div className="App">
        <Navbar />
        <Home 
        {...this.state}
        />
        <div>
          {this.getFormationData()}
        </div>
      </div>
    );
  }
}

export default App;
