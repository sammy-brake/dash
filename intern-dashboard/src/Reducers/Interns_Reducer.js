

const internsReducer = (state = {interns: []}, action) => {
    switch(action.type) {
        case 'FETCH_INTERNS':
        return {interns: action.payload}

        case 'EDIT_INTERNS':
        debugger 
        return state.interns.map((intern)=>{
            if(intern.id != action.payload.id){ 
                return intern 
            } else {
                return {
                  ...intern,
                   hours_worked: parseInt(action.payload.hours_worked, 10)
                 }

                }
               }
        )

        default:
        return state
    }

}

export default internsReducer;

