import React, { Component } from 'react';
import logo from './logo.svg';
import snow from './img/snow.mp4'
import './css/style.css';
import * as Zipcodes from './zipcodes/zip.json';
import FetchAdapters from './adapters/FetchAdapters.js';
import MainInput from './components/MainInput.js';

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
        <MainInput/>
      </div>
    );
  }
}

export default App;
