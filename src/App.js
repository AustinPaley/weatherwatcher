import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import snow from './img/snow.mp4';
import partlycloudyday from './img/partlycloudyday.jpg';
import './css/style.css';
import * as Zipcodes from './zipcodes/zip.json';
import FetchAdapters from './adapters/FetchAdapters.js';
import MainInput from './components/MainInput.js';
import Test from './components/Test.js';
import JSXAdapter from './adapters/JSXAdapter.js'

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
              {this.props.currentWeather.currently !== undefined ?
                <source src={JSXAdapter.weatherImageChanger(this.props.currentWeather.currently.icon)} type="video/mp4" />
                :
                <source src={snow} type="video/mp4" />
              }
              Your browser is not supported
            </video>
          </div>
        {this.props.zip.length < 5 ?
          <MainInput/>
        :
          null
        }
        <Test zips={this.state.zips}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    zip: state.zip.zip,
    currentWeather: state.currentWeather.currentWeather,
  }
}

export default connect(mapStateToProps, null)(App);
