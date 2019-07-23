const initialState = {
    hours: null,
    internId: null, 
    interns: []
  }

  export default (state = initialState, action) => {
    switch(action.type)  {
      case 'PATCH_HOURS':
        return action.payload.interns.map((intern)=>{
          if(intern.id != action.payload.internId){ 
              return intern 
          } else {
              return {
                ...intern,
                 hours_worked: parseInt(action.payload.hours, 10)
               }

              }
             }
          

           ) 

      case 'RESET_HOURS_FORM':
        return initialState;
  
        default:
          return state;
    }
  }

