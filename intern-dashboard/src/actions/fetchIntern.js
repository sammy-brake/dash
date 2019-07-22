export function fetchIntern(internId) {
    return (dispatch) => {
        return fetch(`http://localhost:3001/api/interns/${internId}`)
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'FETCH_INTERN', payload: data})});
    };
}

