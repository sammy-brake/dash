const initialState = {
    hours: 0,
    internId: 0
  }
  
  export default (state = initialState, action) => {
    switch(action.type)  {
      case 'UPDATE_HOURS':
      debugger
        return state = action.payload
  
      case 'RESET_HOURS_FORM':
        return initialState;
  
        default:
          return state;
    }
  }