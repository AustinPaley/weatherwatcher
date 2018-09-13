export function addZip(zip){
  return {
    type: 'ADD_ZIP',
    payload: {zip: zip}
  }
}

export function deleteZip(){
  return {
    type: 'DELETE_ZIP',
    payload: {zip: ""}
  }
}

export function addCurrentWeather(weather){
  return {
    type: 'ADD_CURRENT_WEATHER',
    payload: {currentWeather: weather}
  }
}
