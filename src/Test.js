import React, { Component } from "react";
const key = process.env.REACT_APP_DARK_SKY_API_KEY;

export default class Test extends Component {
  componentDidMount() {
    fetch(`https://api.darksky.net/forecast/${key}/42.3601,-71.0589`)
      .then(response => response.json())
      .then(console.log);
  }

  render() {
    return <div />;
  }
}
