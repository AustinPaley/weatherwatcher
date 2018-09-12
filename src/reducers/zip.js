const initialState = {
  zip: ""
}

const zipReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_ZIP":
      return {...state, zip: action.payload.zip}
    case "DELETE_ZIP":
      return {...state, zip: action.payload.zip}
    default:
      return state;
  }
}


export default zipReducer
