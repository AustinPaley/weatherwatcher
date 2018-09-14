import React, { Component } from "react";
import {connect} from 'react-redux';
const key = process.env.REACT_APP_DARK_SKY_API_KEY;

class Test extends Component {
  state = {
    fetching: false
  }

  // componentDidMount() {
  //   fetch(`http://localhost:8080/https://api.darksky.net/forecast/${key}/42.3601,-71.0589`)
  //     .then(response => response.json())
  //     .then(console.log);

  //   this.weatherFetch
  // }

  weatherFetch = () => {
    if (this.props.zip.length === 5) {
      let zipObj = this.props.zips.locations.find(zip=>zip['ZIP'] === this.props.zip)
      if (zipObj) {
        // this.setState({fetching:true})
        fetch(`http://localhost:9000/https://api.darksky.net/forecast/${key}/${zipObj['LAT']},${zipObj['LNG']}`)
          .then(response => response.json())
          .then(data=> {
            console.log(data)
            // this.setState({fetching:false})
          });
      } else {
        console.log('zip code could not be found')
      }
    }
  }

  render() {
    this.weatherFetch()
    return (
      <div>
        testing
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    zip: state.zip.zip
  }
}

export default connect(mapStateToProps, null)(Test);