const initialState = {
  currentWeather: {}
}

const currentWeatherReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_CURRENT_WEATHER":
      return {...state, currentWeather: action.payload.currentWeather}
    default:
      return state;
  }
}


export default currentWeatherReducer
