

const internsReducer = (state = {interns: []}, action) => {
    switch(action.type) {
        case 'FETCH_INTERNS':
        return {interns: action.payload}

        case 'EDIT_INTERNS':

        return {interns: action.payload}

        default:
        return state
    }

}

export default internsReducer;

