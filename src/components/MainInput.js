import React from 'react'
import {connect} from 'react-redux'
import { addZip } from '../actions'

class MainInput extends React.Component{
  constructor(props){
    super(props)
  }

  zipChange = (event) =>{
    this.props.addZip(event.target.value)
  }

  render(){
    return(
      <div className="MainInput">
        <form className="MainInput__form">
          <h2 className="MainInput__form__h2">To Get Started, Enter a Zipcode</h2>
          <div className="MainInput__form__group">
            <input type="text" id="zipinput" className="MainInput__form__group-input" placeholder="Enter Zip Code" pattern="[0-9]{5}" required onChange={this.zipChange} />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addZip: (zip) => {
      dispatch(addZip(zip))
    }
  }
}

export default connect(null, mapDispatchToProps)(MainInput)
