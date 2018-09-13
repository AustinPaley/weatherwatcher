import React, { Component } from "react";
import {connect} from 'react-redux';
import { addCurrentWeather } from '../actions';
const key = process.env.REACT_APP_DARK_SKY_API_KEY;

class Test extends Component {
  state = {
    fetching: false
  }

  componentDidMount() {
    fetch(`http://localhost:9000/https://api.darksky.net/forecast/${key}/42.3601,-71.0589`)
      .then(response => response.json())
      .then(data => this.props.addCurrentWeather(data));

    this.weatherFetch
  }

  weatherFetch = () => {
    if (this.props.zip.length === 5) {
      let zipObj = this.props.zips.locations.find(zip=>zip['ZIP'] === this.props.zip)
      if (zipObj) {
        fetch(`http://localhost:9000/https://api.darksky.net/forecast/${key}/${zipObj['LAT']},${zipObj['LNG']}`)
          .then(response => response.json())
          .then(data=> {
            this.props.addCurrentWeather(data)
          });
      } else {
        console.log('zip code could not be found')
      }
    }
  }

  render() {
    this.weatherFetch()
    console.log("Current Weather Object", this.props)
    return (
      <div>
        Test Component
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    zip: state.zip.zip,
    currentWeather: state.currentWeather
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addCurrentWeather: (currentWeather) => {
      dispatch(addCurrentWeather(currentWeather))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
