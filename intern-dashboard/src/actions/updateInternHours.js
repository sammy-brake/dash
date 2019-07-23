

export function updateInternHours(internData) {
    return (dispatch) => {
        return dispatch({ type: 'UPDATE_HOURS', payload: internData })
    }
}