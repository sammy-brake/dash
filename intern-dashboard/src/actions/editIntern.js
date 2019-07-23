export const editIntern = (internData) => dispatch => {
    fetch(`http://localhost:3001/api/interns/${id}`, {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        }
        body: JSON.stringify(internData)
    })
    .then(res => res.json())
    .then(data => dispatch({ type: 'EDIT_INTERNS', payload: data }) )
}

