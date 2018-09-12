import React from 'react';

export default class MainInput extends React.Component{
  constructor(){
    super()
    this.state={
      value: ""
    }
  }

  render(){
    return(
      <div className="MainInput">
        <form className="MainInput__form">
          <h2 className="MainInput__form__h2">To Get Started, Enter a Zipcode</h2>
          <div className="MainInput__form__group">
            <input type="text" id="zipinput" className="MainInput__form__group-input" placeholder="Enter Zip Code" pattern="[0-9]{5}" required />
          </div>
        </form>
      </div>
    )
  }
}
