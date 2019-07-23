// const initialState = {
//     hours: null,
//     internId: null, 
//     interns: []
//   }
//   // return {...state, hours: [action.payload.hours], internId: [action.payload.internId]}
//         // i need to map over my state, find the intern I'm updating, and then use spread operator
//         // to update the hours
//   export default (state = initialState, action) => {
//     switch(action.type)  {
//       case 'UPDATE_HOURS':
//         return action.payload.interns.map((intern)=>{
//           if(intern.id == action.payload.internId){ 
//               return {
//                 ...intern,
//                  hours_worked: parseInt(action.payload.hours, 10)
//                }
//               }
//              }
          

//            )

//       case 'RESET_HOURS_FORM':
//         return initialState;
  
//         default:
//           return state;
//     }

    
    const initialState = {
      hours: null,
      internId: null, 
      interns: []
    }

    export default (state = initialState, action) => {
      switch(action.type)  {
        case 'UPDATE_HOURS':
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



  // const initialState = {
  //   hours: null,
  //   internId: null, 
  //   interns: []
  // }
  // // return {...state, hours: [action.payload.hours], internId: [action.payload.internId]}
  //       // i need to map over my state, find the intern I'm updating, and then use spread operator
  //       // to update the hours
  // export default (state = initialState, action) => {
  //   switch(action.type)  {
  //     case 'UPDATE_HOURS':
  //     debugger 
  //       return action.payload.interns.map((intern)=>{
  //         if(intern.id == action.payload.internId){ 
  //             return {...state.interns, interns: {
  //               ...intern, hours_worked: parseInt(action.payload.hours, 10)
  //              }
  //             }
  //            }
  //       })

  //     case 'RESET_HOURS_FORM':
  //       return initialState;
  
  //       default:
  //         return state;
  //   }
  // }