

const internsReducer = (state = {interns: [], intern: []}, action) => {
    switch(action.type) {
        // case 'START_GET_INTERNS_REQUEST':
        // return {'Loading...'}

        case 'FETCH_INTERNS':
        return {interns: action.payload}

        case 'FETCH_INTERN':
        return {intern: action.payload}
        
        default:
        return state
    }

}

export default internsReducer;

