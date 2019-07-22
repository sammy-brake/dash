

const internsReducer = (state = {interns: [], intern: []}, action) => {
    switch(action.type) {
        case 'FETCH_INTERNS':
        return {interns: action.payload}

        default:
        return state
    }

}

export default internsReducer;

