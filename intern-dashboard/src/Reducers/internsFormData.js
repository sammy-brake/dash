const initialState = {
    hours: null,
    internId: null, 
    interns: []
  }
  
  export default (state = initialState, action) => {
    switch(action.type)  {
      case 'UPDATE_HOURS':
      debugger
        return {...state, hours: [action.payload.hours], internId: [action.payload.internId]}
        // i need to map over my state, find the intern I'm updating, and then use spread operator
        // to update the hours
        // state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
  
      case 'RESET_HOURS_FORM':
        return initialState;
  
        default:
          return state;
    }
  }