const initialState = {
    hours: null,
    internId: null
  }
  
  export default (state = initialState, action) => {
    switch(action.type)  {
      case 'UPDATE_HOURS':
      
        return {...state, hours: [action.payload.hours], internId: [action.payload.internId]}
        
  
      case 'RESET_HOURS_FORM':
        return initialState;
  
        default:
          return state;
    }
  }