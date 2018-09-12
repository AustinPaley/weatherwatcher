import React, { Component } from 'react';
import logo from './logo.svg';
import snow from './img/snow.mp4'
import './css/style.css';
import * as Zipcodes from './zipcodes/zip.json';
import FetchAdapters from './adapters/FetchAdapters.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      zips: {}
    }
  }

  componentDidMount(){
    this.setState({
      zips: Zipcodes
    })
  }

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
