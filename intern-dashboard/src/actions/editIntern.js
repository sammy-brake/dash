
export function editIntern(internData) {
    debugger
    return (dispatch) => {
        return fetch(`http://localhost:3001/api/interns/${internData.internId}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(internData)
        })
        .then(res => res.json())
        .then(data => dispatch({ type: 'EDIT_INTERNS', payload: data }) )

    }
}
