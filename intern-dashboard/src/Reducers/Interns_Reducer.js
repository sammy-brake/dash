

const internsReducer = (state = {interns: []}, action) => {
    switch(action.type) {
        case 'FETCH_INTERNS':
        return {interns: action.payload}

        case 'EDIT_INTERNS':
        debugger 
        // return state.interns.map((intern) => {
        //     let counter = 0;
        //     if(intern.hours_worked != action.payload[counter].hours_worked) {
        //         counter ++;
        //         return action.payload[counter-1]
        //     } else {
        //         counter ++
        //         return intern 
        //     }
        // })
        // below works when api renders one intern


        // return state.interns.map((intern)=>{
        //     if(intern.id != action.payload.id){ 
        //         return intern 
        //     } else {
        //         return {
        //           ...intern,
        //            hours_worked: parseInt(action.payload.hours_worked, 10)
        //          }

        //         }
        //        }
        // )

        return {interns: action.payload}

        default:
        return state
    }

}

export default internsReducer;

