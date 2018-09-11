import React, { Component } from 'react';
import logo from './logo.svg';
import snow from './img/snow.mp4'
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src={snow} type="video/mp4" />
              Your browser is not supported!
            </video>
          </div>
      </div>
    );
  }
}

export default App;
